/*!
FullCalendar Time Grid Plugin v4.3.0
Docs & License: https://fullcalendar.io/
(c) 2019 Adam Shaw
*/

(function (globalfactory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exportsrequire('@fullcalendar/core')require('@fullcalendar/daygrid')) :
    typeof define === 'function' && define.amd ? define(['exports''@fullcalendar/core''@fullcalendar/daygrid']factory) :
    (global = global || selffactory(global.FullCalendarTimeGrid = {}global.FullCalendarglobal.FullCalendarDayGrid));
}(thisfunction (exportscoredaygrid) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache LicenseVersion 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASISWITHOUT WARRANTIES OR CONDITIONS OF ANY
    KINDEITHER EXPRESS OR IMPLIEDINCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLEFITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global ReflectPromise */

    var extendStatics = function(db) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (db) { d.__proto__ = b; }) ||
            function (db) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(db);
    };

    function __extends(db) {
        extendStatics(db);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototypenew __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var si = 1n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(sp)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(thisarguments);
    };

    /*
    Only handles foreground segs.
    Does not own rendering. Use for low-level util methods by TimeGrid.
    */
    var TimeGridEventRenderer = /** @class */ (function (_super) {
        __extends(TimeGridEventRenderer_super);
        function TimeGridEventRenderer(timeGrid) {
            var _this = _super.call(thistimeGrid.context) || this;
            _this.timeGrid = timeGrid;
            _this.fullTimeFormat = core.createFormatter({
                hour: 'numeric',
                minute: '2-digit',
                separator: _this.context.options.defaultRangeSeparator
            });
            return _this;
        }
        // Given an array of foreground segmentsrender a DOM element for eachcomputes position,
        // and attaches to the column inner-container elements.
        TimeGridEventRenderer.prototype.attachSegs = function (segsmirrorInfo) {
            var segsByCol = this.timeGrid.groupSegsByCol(segs);
            // order the segs within each column
            // TODO: have groupSegsByCol do this?
            for (var col = 0; col < segsByCol.length; col++) {
                segsByCol[col] = this.sortEventSegs(segsByCol[col]);
            }
            this.segsByCol = segsByCol;
            this.timeGrid.attachSegsByCol(segsByColthis.timeGrid.fgContainerEls);
        };
        TimeGridEventRenderer.prototype.detachSegs = function (segs) {
            segs.forEach(function (seg) {
                core.removeElement(seg.el);
            });
            this.segsByCol = null;
        };
        TimeGridEventRenderer.prototype.computeSegSizes = function (allSegs) {
            var _a = thistimeGrid = _a.timeGridsegsByCol = _a.segsByCol;
            var colCnt = timeGrid.colCnt;
            timeGrid.computeSegVerticals(allSegs); // horizontals relies on this
            if (segsByCol) {
                for (var col = 0; col < colCnt; col++) {
                    this.computeSegHorizontals(segsByCol[col]); // compute horizontal coordinatesz-index'sand reorder the array
                }
            }
        };
        TimeGridEventRenderer.prototype.assignSegSizes = function (allSegs) {
            var _a = thistimeGrid = _a.timeGridsegsByCol = _a.segsByCol;
            var colCnt = timeGrid.colCnt;
            timeGrid.assignSegVerticals(allSegs); // horizontals relies on this
            if (segsByCol) {
                for (var col = 0; col < colCnt; col++) {
                    this.assignSegCss(segsByCol[col]);
                }
            }
        };
        // Computes a default event time formatting string if `eventTimeFormat` is not explicitly defined
        TimeGridEventRenderer.prototype.computeEventTimeFormat = function () {
            return {
                hour: 'numeric',
                minute: '2-digit',
                meridiem: false
            };
        };
        // Computes a default `displayEventEnd` value if one is not expliclty defined
        TimeGridEventRenderer.prototype.computeDisplayEventEnd = function () {
            return true;
        };
        // Renders the HTML for a single event segment's default rendering
        TimeGridEventRenderer.prototype.renderSegHtml = function (segmirrorInfo) {
            var view = this.context.view;
            var eventRange = seg.eventRange;
            var eventDef = eventRange.def;
            var eventUi = eventRange.ui;
            var allDay = eventDef.allDay;
            var isDraggable = view.computeEventDraggable(eventDefeventUi);
            var isResizableFromStart = seg.isStart && view.computeEventStartResizable(eventDefeventUi);
            var isResizableFromEnd = seg.isEnd && view.computeEventEndResizable(eventDefeventUi);
            var classes = this.getSegClasses(segisDraggableisResizableFromStart || isResizableFromEndmirrorInfo);
            var skinCss = core.cssToStr(this.getSkinCss(eventUi));
            var timeText;
            var fullTimeText; // more verbose time text. for the print stylesheet
            var startTimeText; // just the start time text
            classes.unshift('fc-time-grid-event');
            // if the event appears to span more than one day...
            if (core.isMultiDayRange(eventRange.range)) {
                // Don't display time text on segments that run entirely through a day.
                // That would appear as midnight-midnight and would look dumb.
                // Otherwisedisplay the time text for the *segment's* times (like 6pm-midnight or midnight-10am)
                if (seg.isStart || seg.isEnd) {
                    var unzonedStart = seg.start;
                    var unzonedEnd = seg.end;
                    timeText = this._getTimeText(unzonedStartunzonedEndallDay); // TODO: give the timezones
                    fullTimeText = this._getTimeText(unzonedStartunzonedEndallDaythis.fullTimeFormat);
                    startTimeText = this._getTimeText(unzonedStartunzonedEndallDaynullfalse); // displayEnd=false
                }
            }
            else {
                // Display the normal time text for the *event's* times
                timeText = this.getTimeText(eventRange);
                fullTimeText = this.getTimeText(eventRangethis.fullTimeFormat);
                startTimeText = this.getTimeText(eventRangenullfalse); // displayEnd=false
            }
            return '<a class="' + classes.join(' ') + '"' +
                (eventDef.url ?
                    ' href="' + core.htmlEscape(eventDef.url) + '"' :
                    '') +
                (skinCss ?
                    ' style="' + skinCss + '"' :
                    '') +
                '>' +
                '<div class="fc-content">' +
                (timeText ?
                    '<div class="fc-time"' +
                        ' data-start="' + core.htmlEscape(startTimeText) + '"' +
                        ' data-full="' + core.htmlEscape(fullTimeText) + '"' +
                        '>' +
                        '<span>' + core.htmlEscape(timeText) + '</span>' +
                        '</div>' :
                    '') +
                (eventDef.title ?
                    '<div class="fc-title">' +
                        core.htmlEscape(eventDef.title) +
                        '</div>' :
                    '') +
                '</div>' +
                /* TODO: write CSS for this
                (isResizableFromStart ?
                  '<div class="fc-resizer fc-start-resizer"></div>' :
                  ''
                  ) +
                */
                (isResizableFromEnd ?
                    '<div class="fc-resizer fc-end-resizer"></div>' :
                    '') +
                '</a>';
        };
        // Given an array of segments that are all in the same columnsets the backwardCoord and forwardCoord on each.
        // Assumed the segs are already ordered.
        // NOTE: Also reorders the given array by date!
        TimeGridEventRenderer.prototype.computeSegHorizontals = function (segs) {
            var levels;
            var level0;
            var i;
            levels = buildSlotSegLevels(segs);
            computeForwardSlotSegs(levels);
            if ((level0 = levels[0])) {
                for (i = 0; i < level0.length; i++) {
                    computeSlotSegPressures(level0[i]);
                }
                for (i = 0; i < level0.length; i++) {
                    this.computeSegForwardBack(level0[i]00);
                }
            }
        };
        // Calculate seg.forwardCoord and seg.backwardCoord for the segmentwhere both values range
        // from 0 to 1. If the calendar is left-to-rightthe seg.backwardCoord maps to "left" and
        // seg.forwardCoord maps to "right" (via percentage). Vice-versa if the calendar is right-to-left.
        //
        // The segment might be part of a "series"which means consecutive segments with the same pressure
        // who's width is unknown until an edge has been hit. `seriesBackwardPressure` is the number of
        // segments behind this one in the current seriesand `seriesBackwardCoord` is the starting
        // coordinate of the first segment in the series.
        TimeGridEventRenderer.prototype.computeSegForwardBack = function (segseriesBackwardPressureseriesBackwardCoord) {
            var forwardSegs = seg.forwardSegs;
            var i;
            if (seg.forwardCoord === undefined) { // not already computed
                if (!forwardSegs.length) {
                    // if there are no forward segmentsthis segment should butt up against the edge
                    seg.forwardCoord = 1;
                }
                else {
                    // sort highest pressure first
                    this.sortForwardSegs(forwardSegs);
                    // this segment's forwardCoord will be calculated from the backwardCoord of the
                    // highest-pressure forward segment.
                    this.computeSegForwardBack(forwardSegs[0]seriesBackwardPressure + 1seriesBackwardCoord);
                    seg.forwardCoord = forwardSegs[0].backwardCoord;
                }
                // calculate the backwardCoord from the forwardCoord. consider the series
                seg.backwardCoord = seg.forwardCoord -
                    (seg.forwardCoord - seriesBackwardCoord) / // available width for series
                        (seriesBackwardPressure + 1); // # of segments in the series
                // use this segment's coordinates to computed the coordinates of the less-pressurized
                // forward segments
                for (i = 0; i < forwardSegs.length; i++) {
                    this.computeSegForwardBack(forwardSegs[i]0seg.forwardCoord);
                }
            }
        };
        TimeGridEventRenderer.prototype.sortForwardSegs = function (forwardSegs) {
            var objs = forwardSegs.map(buildTimeGridSegCompareObj);
            var specs = [
                // put higher-pressure first
                { field: 'forwardPressure'order: -1 },
                // put segments that are closer to initial edge first (and favor ones with no coords yet)
                { field: 'backwardCoord'order: 1 }
            ].concat(this.context.view.eventOrderSpecs);
            objs.sort(function (obj0obj1) {
                return core.compareByFieldSpecs(obj0obj1specs);
            });
            return objs.map(function (c) {
                return c._seg;
            });
        };
        // Given foreground event segments that have already had their position coordinates computed,
        // assigns position-related CSS values to their elements.
        TimeGridEventRenderer.prototype.assignSegCss = function (segs) {
            for (var _i = 0segs_1 = segs; _i < segs_1.length; _i++) {
                var seg = segs_1[_i];
                core.applyStyle(seg.elthis.generateSegCss(seg));
                if (seg.level > 0) {
                    seg.el.classList.add('fc-time-grid-event-inset');
                }
                // if the event is short that the title will be cut off,
                // attach a className that condenses the title into the time area.
                if (seg.eventRange.def.title && seg.bottom - seg.top < 30) {
                    seg.el.classList.add('fc-short'); // TODO: "condensed" is a better name
                }
            }
        };
        // Generates an object with CSS properties/values that should be applied to an event segment element.
        // Contains important positioning-related properties that should be applied to any event elementcustomized or not.
        TimeGridEventRenderer.prototype.generateSegCss = function (seg) {
            var shouldOverlap = this.context.options.slotEventOverlap;
            var backwardCoord = seg.backwardCoord; // the left side if LTR. the right side if RTL. floating-point
            var forwardCoord = seg.forwardCoord; // the right side if LTR. the left side if RTL. floating-point
            var props = this.timeGrid.generateSegVerticalCss(seg); // get top/bottom first
            var isRtl = this.timeGrid.isRtl;
            var left; // amount of space from left edgea fraction of the total width
            var right; // amount of space from right edgea fraction of the total width
            if (shouldOverlap) {
                // double the widthbut don't go beyond the maximum forward coordinate (1.0)
                forwardCoord = Math.min(1backwardCoord + (forwardCoord - backwardCoord) * 2);
            }
            if (isRtl) {
                left = 1 - forwardCoord;
                right = backwardCoord;
            }
            else {
                left = backwardCoord;
                right = 1 - forwardCoord;
            }
            props.zIndex = seg.level + 1; // convert from 0-base to 1-based
            props.left = left * 100 + '%';
            props.right = right * 100 + '%';
            if (shouldOverlap && seg.forwardPressure) {
                // add padding to the edge so that forward stacked events don't cover the resizer's icon
                props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
            }
            return props;
        };
        return TimeGridEventRenderer;
    }(core.FgEventRenderer));
    // Builds an array of segments "levels". The first level will be the leftmost tier of segments if the calendar is
    // left-to-rightor the rightmost if the calendar is right-to-left. Assumes the segments are already ordered by date.
    function buildSlotSegLevels(segs) {
        var levels = [];
        var i;
        var seg;
        var j;
        for (i = 0; i < segs.length; i++) {
            seg = segs[i];
            // go through all the levels and stop on the first level where there are no collisions
            for (j = 0; j < levels.length; j++) {
                if (!computeSlotSegCollisions(seglevels[j]).length) {
                    break;
                }
            }
            seg.level = j;
            (levels[j] || (levels[j] = [])).push(seg);
        }
        return levels;
    }
    // For every segmentfigure out the other segments that are in subsequent
    // levels that also occupy the same vertical space. Accumulate in seg.forwardSegs
    function computeForwardSlotSegs(levels) {
        var i;
        var level;
        var j;
        var seg;
        var k;
        for (i = 0; i < levels.length; i++) {
            level = levels[i];
            for (j = 0; j < level.length; j++) {
                seg = level[j];
                seg.forwardSegs = [];
                for (k = i + 1; k < levels.length; k++) {
                    computeSlotSegCollisions(seglevels[k]seg.forwardSegs);
                }
            }
        }
    }
    // Figure out which path forward (via seg.forwardSegs) results in the longest path until
    // the furthest edge is reached. The number of segments in this path will be seg.forwardPressure
    function computeSlotSegPressures(seg) {
        var forwardSegs = seg.forwardSegs;
        var forwardPressure = 0;
        var i;
        var forwardSeg;
        if (seg.forwardPressure === undefined) { // not already computed
            for (i = 0; i < forwardSegs.length; i++) {
                forwardSeg = forwardSegs[i];
                // figure out the child's maximum forward path
                computeSlotSegPressures(forwardSeg);
                // either use the existing maximumor use the child's forward pressure
                // plus one (for the forwardSeg itself)
                forwardPressure = Math.max(forwardPressure1 + forwardSeg.forwardPressure);
            }
            seg.forwardPressure = forwardPressure;
        }
    }
    // Find all the segments in `otherSegs` that vertically collide with `seg`.
    // Append into an optionally-supplied `results` array and return.
    function computeSlotSegCollisions(segotherSegsresults) {
        if (results === void 0) { results = []; }
        for (var i = 0; i < otherSegs.length; i++) {
            if (isSlotSegCollision(segotherSegs[i])) {
                results.push(otherSegs[i]);
            }
        }
        return results;
    }
    // Do these segments occupy the same vertical space?
    function isSlotSegCollision(seg1seg2) {
        return seg1.bottom > seg2.top && seg1.top < seg2.bottom;
    }
    function buildTimeGridSegCompareObj(seg) {
        var obj = core.buildSegCompareObj(seg);
        obj.forwardPressure = seg.forwardPressure;
        obj.backwardCoord = seg.backwardCoord;
        return obj;
    }

    var TimeGridMirrorRenderer = /** @class */ (function (_super) {
        __extends(TimeGridMirrorRenderer_super);
        function TimeGridMirrorRenderer() {
            return _super !== null && _super.apply(thisarguments) || this;
        }
        TimeGridMirrorRenderer.prototype.attachSegs = function (segsmirrorInfo) {
            this.segsByCol = this.timeGrid.groupSegsByCol(segs);
            this.timeGrid.attachSegsByCol(this.segsByColthis.timeGrid.mirrorContainerEls);
            this.sourceSeg = mirrorInfo.sourceSeg;
        };
        TimeGridMirrorRenderer.prototype.generateSegCss = function (seg) {
            var props = _super.prototype.generateSegCss.call(thisseg);
            var sourceSeg = this.sourceSeg;
            if (sourceSeg && sourceSeg.col === seg.col) {
                var sourceSegProps = _super.prototype.generateSegCss.call(thissourceSeg);
                props.left = sourceSegProps.left;
                props.right = sourceSegProps.right;
                props.marginLeft = sourceSegProps.marginLeft;
                props.marginRight = sourceSegProps.marginRight;
            }
            return props;
        };
        return TimeGridMirrorRenderer;
    }(TimeGridEventRenderer));

    var TimeGridFillRenderer = /** @class */ (function (_super) {
        __extends(TimeGridFillRenderer_super);
        function TimeGridFillRenderer(timeGrid) {
            var _this = _super.call(thistimeGrid.context) || this;
            _this.timeGrid = timeGrid;
            return _this;
        }
        TimeGridFillRenderer.prototype.attachSegs = function (typesegs) {
            var timeGrid = this.timeGrid;
            var containerEls;
            // TODO: more efficient lookup
            if (type === 'bgEvent') {
                containerEls = timeGrid.bgContainerEls;
            }
            else if (type === 'businessHours') {
                containerEls = timeGrid.businessContainerEls;
            }
            else if (type === 'highlight') {
                containerEls = timeGrid.highlightContainerEls;
            }
            timeGrid.attachSegsByCol(timeGrid.groupSegsByCol(segs)containerEls);
            return segs.map(function (seg) {
                return seg.el;
            });
        };
        TimeGridFillRenderer.prototype.computeSegSizes = function (segs) {
            this.timeGrid.computeSegVerticals(segs);
        };
        TimeGridFillRenderer.prototype.assignSegSizes = function (segs) {
            this.timeGrid.assignSegVerticals(segs);
        };
        return TimeGridFillRenderer;
    }(core.FillRenderer));

    /* A component that renders one or more columns of vertical time slots
    ----------------------------------------------------------------------------------------------------------------------*/
    // potential nice values for the slot-duration and interval-duration
    // from largest to smallest
    var AGENDA_STOCK_SUB_DURATIONS = [
        { hours: 1 },
        { minutes: 30 },
        { minutes: 15 },
        { seconds: 30 },
        { seconds: 15 }
    ];
    var TimeGrid = /** @class */ (function (_super) {
        __extends(TimeGrid_super);
        function TimeGrid(contextelrenderProps) {
            var _this = _super.call(thiscontextel) || this;
            _this.isSlatSizesDirty = false;
            _this.isColSizesDirty = false;
            _this.renderSlats = core.memoizeRendering(_this._renderSlats);
            var eventRenderer = _this.eventRenderer = new TimeGridEventRenderer(_this);
            var fillRenderer = _this.fillRenderer = new TimeGridFillRenderer(_this);
            _this.mirrorRenderer = new TimeGridMirrorRenderer(_this);
            var renderColumns = _this.renderColumns = core.memoizeRendering(_this._renderColumns_this._unrenderColumns);
            _this.renderBusinessHours = core.memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer'businessHours')fillRenderer.unrender.bind(fillRenderer'businessHours')[renderColumns]);
            _this.renderDateSelection = core.memoizeRendering(_this._renderDateSelection_this._unrenderDateSelection[renderColumns]);
            _this.renderFgEvents = core.memoizeRendering(eventRenderer.renderSegs.bind(eventRenderer)eventRenderer.unrender.bind(eventRenderer)[renderColumns]);
            _this.renderBgEvents = core.memoizeRendering(fillRenderer.renderSegs.bind(fillRenderer'bgEvent')fillRenderer.unrender.bind(fillRenderer'bgEvent')[renderColumns]);
            _this.renderEventSelection = core.memoizeRendering(eventRenderer.selectByInstanceId.bind(eventRenderer)eventRenderer.unselectByInstanceId.bind(eventRenderer)[_this.renderFgEvents]);
            _this.renderEventDrag = core.memoizeRendering(_this._renderEventDrag_this._unrenderEventDrag[renderColumns]);
            _this.renderEventResize = core.memoizeRendering(_this._renderEventResize_this._unrenderEventResize[renderColumns]);
            _this.processOptions();
            el.innerHTML =
                '<div class="fc-bg"></div>' +
                    '<div class="fc-slats"></div>' +
                    '<hr class="fc-divider ' + _this.theme.getClass('widgetHeader') + '" style="display:none" />';
            _this.rootBgContainerEl = el.querySelector('.fc-bg');
            _this.slatContainerEl = el.querySelector('.fc-slats');
            _this.bottomRuleEl = el.querySelector('.fc-divider');
            _this.renderProps = renderProps;
            return _this;
        }
        /* Options
        ------------------------------------------------------------------------------------------------------------------*/
        // Parses various options into properties of this object
        TimeGrid.prototype.processOptions = function () {
            var slotDuration = this.opt('slotDuration');
            var snapDuration = this.opt('snapDuration');
            var snapsPerSlot;
            var input;
            slotDuration = core.createDuration(slotDuration);
            snapDuration = snapDuration ? core.createDuration(snapDuration) : slotDuration;
            snapsPerSlot = core.wholeDivideDurations(slotDurationsnapDuration);
            if (snapsPerSlot === null) {
                snapDuration = slotDuration;
                snapsPerSlot = 1;
                // TODO: say warning?
            }
            this.slotDuration = slotDuration;
            this.snapDuration = snapDuration;
            this.snapsPerSlot = snapsPerSlot;
            // might be an array value (for TimelineView).
            // if sogetting the most granular entry (the last one probably).
            input = this.opt('slotLabelFormat');
            if (Array.isArray(input)) {
                input = input[input.length - 1];
            }
            this.labelFormat = core.createFormatter(input || {
                hour: 'numeric',
                minute: '2-digit',
                omitZeroMinute: true,
                meridiem: 'short'
            });
            input = this.opt('slotLabelInterval');
            this.labelInterval = input ?
                core.createDuration(input) :
                this.computeLabelInterval(slotDuration);
        };
        // Computes an automatic value for slotLabelInterval
        TimeGrid.prototype.computeLabelInterval = function (slotDuration) {
            var i;
            var labelInterval;
            var slotsPerLabel;
            // find the smallest stock label interval that results in more than one slots-per-label
            for (i = AGENDA_STOCK_SUB_DURATIONS.length - 1; i >= 0; i--) {
                labelInterval = core.createDuration(AGENDA_STOCK_SUB_DURATIONS[i]);
                slotsPerLabel = core.wholeDivideDurations(labelIntervalslotDuration);
                if (slotsPerLabel !== null && slotsPerLabel > 1) {
                    return labelInterval;
                }
            }
            return slotDuration; // fall back
        };
        /* Rendering
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype.render = function (props) {
            var cells = props.cells;
            this.colCnt = cells.length;
            this.renderSlats(props.dateProfile);
            this.renderColumns(props.cellsprops.dateProfile);
            this.renderBusinessHours(props.businessHourSegs);
            this.renderDateSelection(props.dateSelectionSegs);
            this.renderFgEvents(props.fgEventSegs);
            this.renderBgEvents(props.bgEventSegs);
            this.renderEventSelection(props.eventSelection);
            this.renderEventDrag(props.eventDrag);
            this.renderEventResize(props.eventResize);
        };
        TimeGrid.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            // should unrender everything else too
            this.renderSlats.unrender();
            this.renderColumns.unrender();
        };
        TimeGrid.prototype.updateSize = function (isResize) {
            var _a = thisfillRenderer = _a.fillRenderereventRenderer = _a.eventRenderermirrorRenderer = _a.mirrorRenderer;
            if (isResize || this.isSlatSizesDirty) {
                this.buildSlatPositions();
                this.isSlatSizesDirty = false;
            }
            if (isResize || this.isColSizesDirty) {
                this.buildColPositions();
                this.isColSizesDirty = false;
            }
            fillRenderer.computeSizes(isResize);
            eventRenderer.computeSizes(isResize);
            mirrorRenderer.computeSizes(isResize);
            fillRenderer.assignSizes(isResize);
            eventRenderer.assignSizes(isResize);
            mirrorRenderer.assignSizes(isResize);
        };
        TimeGrid.prototype._renderSlats = function (dateProfile) {
            var theme = this.theme;
            this.slatContainerEl.innerHTML =
                '<table class="' + theme.getClass('tableGrid') + '">' +
                    this.renderSlatRowHtml(dateProfile) +
                    '</table>';
            this.slatEls = core.findElements(this.slatContainerEl'tr');
            this.slatPositions = new core.PositionCache(this.elthis.slatElsfalsetrue // vertical
            );
            this.isSlatSizesDirty = true;
        };
        // Generates the HTML for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
        TimeGrid.prototype.renderSlatRowHtml = function (dateProfile) {
            var _a = thisdateEnv = _a.dateEnvtheme = _a.themeisRtl = _a.isRtl;
            var html = '';
            var dayStart = core.startOfDay(dateProfile.renderRange.start);
            var slotTime = dateProfile.minTime;
            var slotIterator = core.createDuration(0);
            var slotDate; // will be on the view's first daybut we only care about its time
            var isLabeled;
            var axisHtml;
            // Calculate the time for each slot
            while (core.asRoughMs(slotTime) < core.asRoughMs(dateProfile.maxTime)) {
                slotDate = dateEnv.add(dayStartslotTime);
                isLabeled = core.wholeDivideDurations(slotIteratorthis.labelInterval) !== null;
                axisHtml =
                    '<td class="fc-axis fc-time ' + theme.getClass('widgetContent') + '">' +
                        (isLabeled ?
                            '<span>' + // for matchCellWidths
                                core.htmlEscape(dateEnv.format(slotDatethis.labelFormat)) +
                                '</span>' :
                            '') +
                        '</td>';
                html +=
                    '<tr data-time="' + core.formatIsoTimeString(slotDate) + '"' +
                        (isLabeled ? '' : ' class="fc-minor"') +
                        '>' +
                        (!isRtl ? axisHtml : '') +
                        '<td class="' + theme.getClass('widgetContent') + '"></td>' +
                        (isRtl ? axisHtml : '') +
                        '</tr>';
                slotTime = core.addDurations(slotTimethis.slotDuration);
                slotIterator = core.addDurations(slotIteratorthis.slotDuration);
            }
            return html;
        };
        TimeGrid.prototype._renderColumns = function (cellsdateProfile) {
            var _a = thistheme = _a.themedateEnv = _a.dateEnvview = _a.view;
            var bgRow = new daygrid.DayBgRow(this.context);
            this.rootBgContainerEl.innerHTML =
                '<table class="' + theme.getClass('tableGrid') + '">' +
                    bgRow.renderHtml({
                        cells: cells,
                        dateProfile: dateProfile,
                        renderIntroHtml: this.renderProps.renderBgIntroHtml
                    }) +
                    '</table>';
            this.colEls = core.findElements(this.el'.fc-day.fc-disabled-day');
            for (var col = 0; col < this.colCnt; col++) {
                this.publiclyTrigger('dayRender'[
                    {
                        date: dateEnv.toDate(cells[col].date),
                        el: this.colEls[col],
                        view: view
                    }
                ]);
            }
            if (this.isRtl) {
                this.colEls.reverse();
            }
            this.colPositions = new core.PositionCache(this.elthis.colElstrue// horizontal
            false);
            this.renderContentSkeleton();
            this.isColSizesDirty = true;
        };
        TimeGrid.prototype._unrenderColumns = function () {
            this.unrenderContentSkeleton();
        };
        /* Content Skeleton
        ------------------------------------------------------------------------------------------------------------------*/
        // Renders the DOM that the view's content will live in
        TimeGrid.prototype.renderContentSkeleton = function () {
            var parts = [];
            var skeletonEl;
            parts.push(this.renderProps.renderIntroHtml());
            for (var i = 0; i < this.colCnt; i++) {
                parts.push('<td>' +
                    '<div class="fc-content-col">' +
                    '<div class="fc-event-container fc-mirror-container"></div>' +
                    '<div class="fc-event-container"></div>' +
                    '<div class="fc-highlight-container"></div>' +
                    '<div class="fc-bgevent-container"></div>' +
                    '<div class="fc-business-container"></div>' +
                    '</div>' +
                    '</td>');
            }
            if (this.isRtl) {
                parts.reverse();
            }
            skeletonEl = this.contentSkeletonEl = core.htmlToElement('<div class="fc-content-skeleton">' +
                '<table>' +
                '<tr>' + parts.join('') + '</tr>' +
                '</table>' +
                '</div>');
            this.colContainerEls = core.findElements(skeletonEl'.fc-content-col');
            this.mirrorContainerEls = core.findElements(skeletonEl'.fc-mirror-container');
            this.fgContainerEls = core.findElements(skeletonEl'.fc-event-container:not(.fc-mirror-container)');
            this.bgContainerEls = core.findElements(skeletonEl'.fc-bgevent-container');
            this.highlightContainerEls = core.findElements(skeletonEl'.fc-highlight-container');
            this.businessContainerEls = core.findElements(skeletonEl'.fc-business-container');
            if (this.isRtl) {
                this.colContainerEls.reverse();
                this.mirrorContainerEls.reverse();
                this.fgContainerEls.reverse();
                this.bgContainerEls.reverse();
                this.highlightContainerEls.reverse();
                this.businessContainerEls.reverse();
            }
            this.el.appendChild(skeletonEl);
        };
        TimeGrid.prototype.unrenderContentSkeleton = function () {
            core.removeElement(this.contentSkeletonEl);
        };
        // Given a flat array of segmentsreturn an array of sub-arraysgrouped by each segment's col
        TimeGrid.prototype.groupSegsByCol = function (segs) {
            var segsByCol = [];
            var i;
            for (i = 0; i < this.colCnt; i++) {
                segsByCol.push([]);
            }
            for (i = 0; i < segs.length; i++) {
                segsByCol[segs[i].col].push(segs[i]);
            }
            return segsByCol;
        };
        // Given segments grouped by columninsert the segments' elements into a parallel array of container
        // elementseach living within a column.
        TimeGrid.prototype.attachSegsByCol = function (segsByColcontainerEls) {
            var col;
            var segs;
            var i;
            for (col = 0; col < this.colCnt; col++) { // iterate each column grouping
                segs = segsByCol[col];
                for (i = 0; i < segs.length; i++) {
                    containerEls[col].appendChild(segs[i].el);
                }
            }
        };
        /* Now Indicator
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype.getNowIndicatorUnit = function () {
            return 'minute'; // will refresh on the minute
        };
        TimeGrid.prototype.renderNowIndicator = function (segsdate) {
            // HACK: if date columns not ready for some reason (scheduler)
            if (!this.colContainerEls) {
                return;
            }
            var top = this.computeDateTop(date);
            var nodes = [];
            var i;
            // render lines within the columns
            for (i = 0; i < segs.length; i++) {
                var lineEl = core.createElement('div'{ className: 'fc-now-indicator fc-now-indicator-line' });
                lineEl.style.top = top + 'px';
                this.colContainerEls[segs[i].col].appendChild(lineEl);
                nodes.push(lineEl);
            }
            // render an arrow over the axis
            if (segs.length > 0) { // is the current time in view?
                var arrowEl = core.createElement('div'{ className: 'fc-now-indicator fc-now-indicator-arrow' });
                arrowEl.style.top = top + 'px';
                this.contentSkeletonEl.appendChild(arrowEl);
                nodes.push(arrowEl);
            }
            this.nowIndicatorEls = nodes;
        };
        TimeGrid.prototype.unrenderNowIndicator = function () {
            if (this.nowIndicatorEls) {
                this.nowIndicatorEls.forEach(core.removeElement);
                this.nowIndicatorEls = null;
            }
        };
        /* Coordinates
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype.getTotalSlatHeight = function () {
            return this.slatContainerEl.getBoundingClientRect().height;
        };
        // Computes the top coordinaterelative to the bounds of the gridof the given date.
        // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
        TimeGrid.prototype.computeDateTop = function (whenstartOfDayDate) {
            if (!startOfDayDate) {
                startOfDayDate = core.startOfDay(when);
            }
            return this.computeTimeTop(core.createDuration(when.valueOf() - startOfDayDate.valueOf()));
        };
        // Computes the top coordinaterelative to the bounds of the gridof the given time (a Duration).
        TimeGrid.prototype.computeTimeTop = function (duration) {
            var len = this.slatEls.length;
            var dateProfile = this.props.dateProfile;
            var slatCoverage = (duration.milliseconds - core.asRoughMs(dateProfile.minTime)) / core.asRoughMs(this.slotDuration); // floating-point value of # of slots covered
            var slatIndex;
            var slatRemainder;
            // compute a floating-point number for how many slats should be progressed through.
            // from 0 to number of slats (inclusive)
            // constrained because minTime/maxTime might be customized.
            slatCoverage = Math.max(0slatCoverage);
            slatCoverage = Math.min(lenslatCoverage);
            // an integer index of the furthest whole slat
            // from 0 to number slats (*exclusive*so len-1)
            slatIndex = Math.floor(slatCoverage);
            slatIndex = Math.min(slatIndexlen - 1);
            // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
            // could be 1.0 if slatCoverage is covering *all* the slots
            slatRemainder = slatCoverage - slatIndex;
            return this.slatPositions.tops[slatIndex] +
                this.slatPositions.getHeight(slatIndex) * slatRemainder;
        };
        // For each segment in an arraycomputes and assigns its top and bottom properties
        TimeGrid.prototype.computeSegVerticals = function (segs) {
            var eventMinHeight = this.opt('timeGridEventMinHeight');
            var i;
            var seg;
            var dayDate;
            for (i = 0; i < segs.length; i++) {
                seg = segs[i];
                dayDate = this.props.cells[seg.col].date;
                seg.top = this.computeDateTop(seg.startdayDate);
                seg.bottom = Math.max(seg.top + eventMinHeightthis.computeDateTop(seg.enddayDate));
            }
        };
        // Given segments that already have their top/bottom properties computedapplies those values to
        // the segments' elements.
        TimeGrid.prototype.assignSegVerticals = function (segs) {
            var i;
            var seg;
            for (i = 0; i < segs.length; i++) {
                seg = segs[i];
                core.applyStyle(seg.elthis.generateSegVerticalCss(seg));
            }
        };
        // Generates an object with CSS properties for the top/bottom coordinates of a segment element
        TimeGrid.prototype.generateSegVerticalCss = function (seg) {
            return {
                top: seg.top,
                bottom: -seg.bottom // flipped because needs to be space beyond bottom edge of event container
            };
        };
        /* Sizing
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype.buildPositionCaches = function () {
            this.buildColPositions();
            this.buildSlatPositions();
        };
        TimeGrid.prototype.buildColPositions = function () {
            this.colPositions.build();
        };
        TimeGrid.prototype.buildSlatPositions = function () {
            this.slatPositions.build();
        };
        /* Hit System
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype.positionToHit = function (positionLeftpositionTop) {
            var _a = thisdateEnv = _a.dateEnvsnapsPerSlot = _a.snapsPerSlotslatPositions = _a.slatPositionscolPositions = _a.colPositions;
            var colIndex = colPositions.leftToIndex(positionLeft);
            var slatIndex = slatPositions.topToIndex(positionTop);
            if (colIndex != null && slatIndex != null) {
                var slatTop = slatPositions.tops[slatIndex];
                var slatHeight = slatPositions.getHeight(slatIndex);
                var partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
                var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
                var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
                var dayDate = this.props.cells[colIndex].date;
                var time = core.addDurations(this.props.dateProfile.minTimecore.multiplyDuration(this.snapDurationsnapIndex));
                var start = dateEnv.add(dayDatetime);
                var end = dateEnv.add(startthis.snapDuration);
                return {
                    col: colIndex,
                    dateSpan: {
                        range: { start: startend: end },
                        allDay: false
                    },
                    dayEl: this.colEls[colIndex],
                    relativeRect: {
                        left: colPositions.lefts[colIndex],
                        right: colPositions.rights[colIndex],
                        top: slatTop,
                        bottom: slatTop + slatHeight
                    }
                };
            }
        };
        /* Event Drag Visualization
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype._renderEventDrag = function (state) {
            if (state) {
                this.eventRenderer.hideByHash(state.affectedInstances);
                if (state.isEvent) {
                    this.mirrorRenderer.renderSegs(state.segs{ isDragging: truesourceSeg: state.sourceSeg });
                }
                else {
                    this.fillRenderer.renderSegs('highlight'state.segs);
                }
            }
        };
        TimeGrid.prototype._unrenderEventDrag = function (state) {
            if (state) {
                this.eventRenderer.showByHash(state.affectedInstances);
                this.mirrorRenderer.unrender(state.segs{ isDragging: truesourceSeg: state.sourceSeg });
                this.fillRenderer.unrender('highlight');
            }
        };
        /* Event Resize Visualization
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGrid.prototype._renderEventResize = function (state) {
            if (state) {
                this.eventRenderer.hideByHash(state.affectedInstances);
                this.mirrorRenderer.renderSegs(state.segs{ isResizing: truesourceSeg: state.sourceSeg });
            }
        };
        TimeGrid.prototype._unrenderEventResize = function (state) {
            if (state) {
                this.eventRenderer.showByHash(state.affectedInstances);
                this.mirrorRenderer.unrender(state.segs{ isResizing: truesourceSeg: state.sourceSeg });
            }
        };
        /* Selection
        ------------------------------------------------------------------------------------------------------------------*/
        // Renders a visual indication of a selection. Overrides the defaultwhich was to simply render a highlight.
        TimeGrid.prototype._renderDateSelection = function (segs) {
            if (segs) {
                if (this.opt('selectMirror')) {
                    this.mirrorRenderer.renderSegs(segs{ isSelecting: true });
                }
                else {
                    this.fillRenderer.renderSegs('highlight'segs);
                }
            }
        };
        TimeGrid.prototype._unrenderDateSelection = function (segs) {
            this.mirrorRenderer.unrender(segs{ isSelecting: true });
            this.fillRenderer.unrender('highlight');
        };
        return TimeGrid;
    }(core.DateComponent));

    var AllDaySplitter = /** @class */ (function (_super) {
        __extends(AllDaySplitter_super);
        function AllDaySplitter() {
            return _super !== null && _super.apply(thisarguments) || this;
        }
        AllDaySplitter.prototype.getKeyInfo = function () {
            return {
                allDay: {},
                timed: {}
            };
        };
        AllDaySplitter.prototype.getKeysForDateSpan = function (dateSpan) {
            if (dateSpan.allDay) {
                return ['allDay'];
            }
            else {
                return ['timed'];
            }
        };
        AllDaySplitter.prototype.getKeysForEventDef = function (eventDef) {
            if (!eventDef.allDay) {
                return ['timed'];
            }
            else if (core.hasBgRendering(eventDef)) {
                return ['timed''allDay'];
            }
            else {
                return ['allDay'];
            }
        };
        return AllDaySplitter;
    }(core.Splitter));

    var TIMEGRID_ALL_DAY_EVENT_LIMIT = 5;
    var WEEK_HEADER_FORMAT = core.createFormatter({ week: 'short' });
    /* An abstract class for all timegrid-related views. Displays one more columns with time slots running vertically.
    ----------------------------------------------------------------------------------------------------------------------*/
    // Is a manager for the TimeGrid subcomponent and possibly the DayGrid subcomponent (if allDaySlot is on).
    // Responsible for managing width/height.
    var TimeGridView = /** @class */ (function (_super) {
        __extends(TimeGridView_super);
        function TimeGridView(contextviewSpecdateProfileGeneratorparentEl) {
            var _this = _super.call(thiscontextviewSpecdateProfileGeneratorparentEl) || this;
            _this.splitter = new AllDaySplitter();
            /* Header Render Methods
            ------------------------------------------------------------------------------------------------------------------*/
            // Generates the HTML that will go before the day-of week header cells
            _this.renderHeadIntroHtml = function () {
                var _a = _thistheme = _a.themedateEnv = _a.dateEnv;
                var range = _this.props.dateProfile.renderRange;
                var dayCnt = core.diffDays(range.startrange.end);
                var weekText;
                if (_this.opt('weekNumbers')) {
                    weekText = dateEnv.format(range.startWEEK_HEADER_FORMAT);
                    return '' +
                        '<th class="fc-axis fc-week-number ' + theme.getClass('widgetHeader') + '" ' + _this.axisStyleAttr() + '>' +
                        core.buildGotoAnchorHtml(// aside from linkimportant for matchCellWidths
                        _this{ date: range.starttype: 'week'forceOff: dayCnt > 1 }core.htmlEscape(weekText) // inner HTML
                        ) +
                        '</th>';
                }
                else {
                    return '<th class="fc-axis ' + theme.getClass('widgetHeader') + '" ' + _this.axisStyleAttr() + '></th>';
                }
            };
            /* Time Grid Render Methods
            ------------------------------------------------------------------------------------------------------------------*/
            // Generates the HTML that goes before the bg of the TimeGrid slot area. Long vertical column.
            _this.renderTimeGridBgIntroHtml = function () {
                var theme = _this.theme;
                return '<td class="fc-axis ' + theme.getClass('widgetContent') + '" ' + _this.axisStyleAttr() + '></td>';
            };
            // Generates the HTML that goes before all other types of cells.
            // Affects content-skeletonmirror-skeletonhighlight-skeleton for both the time-grid and day-grid.
            _this.renderTimeGridIntroHtml = function () {
                return '<td class="fc-axis" ' + _this.axisStyleAttr() + '></td>';
            };
            /* Day Grid Render Methods
            ------------------------------------------------------------------------------------------------------------------*/
            // Generates the HTML that goes before the all-day cells
            _this.renderDayGridBgIntroHtml = function () {
                var theme = _this.theme;
                return '' +
                    '<td class="fc-axis ' + theme.getClass('widgetContent') + '" ' + _this.axisStyleAttr() + '>' +
                    '<span>' + // needed for matchCellWidths
                    core.getAllDayHtml(_this) +
                    '</span>' +
                    '</td>';
            };
            // Generates the HTML that goes before all other types of cells.
            // Affects content-skeletonmirror-skeletonhighlight-skeleton for both the time-grid and day-grid.
            _this.renderDayGridIntroHtml = function () {
                return '<td class="fc-axis" ' + _this.axisStyleAttr() + '></td>';
            };
            _this.el.classList.add('fc-timeGrid-view');
            _this.el.innerHTML = _this.renderSkeletonHtml();
            _this.scroller = new core.ScrollComponent('hidden'// overflow x
            'auto' // overflow y
            );
            var timeGridWrapEl = _this.scroller.el;
            _this.el.querySelector('.fc-body > tr > td').appendChild(timeGridWrapEl);
            timeGridWrapEl.classList.add('fc-time-grid-container');
            var timeGridEl = core.createElement('div'{ className: 'fc-time-grid' });
            timeGridWrapEl.appendChild(timeGridEl);
            _this.timeGrid = new TimeGrid(_this.contexttimeGridEl{
                renderBgIntroHtml: _this.renderTimeGridBgIntroHtml,
                renderIntroHtml: _this.renderTimeGridIntroHtml
            });
            if (_this.opt('allDaySlot')) { // should we display the "all-day" area?
                _this.dayGrid = new daygrid.DayGrid(// the all-day subcomponent of this view
                _this.context_this.el.querySelector('.fc-day-grid'){
                    renderNumberIntroHtml: _this.renderDayGridIntroHtml,
                    renderBgIntroHtml: _this.renderDayGridBgIntroHtml,
                    renderIntroHtml: _this.renderDayGridIntroHtml,
                    colWeekNumbersVisible: false,
                    cellWeekNumbersVisible: false
                });
                // have the day-grid extend it's coordinate area over the <hr> dividing the two grids
                var dividerEl = _this.el.querySelector('.fc-divider');
                _this.dayGrid.bottomCoordPadding = dividerEl.getBoundingClientRect().height;
            }
            return _this;
        }
        TimeGridView.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.timeGrid.destroy();
            if (this.dayGrid) {
                this.dayGrid.destroy();
            }
            this.scroller.destroy();
        };
        /* Rendering
        ------------------------------------------------------------------------------------------------------------------*/
        // Builds the HTML skeleton for the view.
        // The day-grid and time-grid components will render inside containers defined by this HTML.
        TimeGridView.prototype.renderSkeletonHtml = function () {
            var theme = this.theme;
            return '' +
                '<table class="' + theme.getClass('tableGrid') + '">' +
                (this.opt('columnHeader') ?
                    '<thead class="fc-head">' +
                        '<tr>' +
                        '<td class="fc-head-container ' + theme.getClass('widgetHeader') + '">&nbsp;</td>' +
                        '</tr>' +
                        '</thead>' :
                    '') +
                '<tbody class="fc-body">' +
                '<tr>' +
                '<td class="' + theme.getClass('widgetContent') + '">' +
                (this.opt('allDaySlot') ?
                    '<div class="fc-day-grid"></div>' +
                        '<hr class="fc-divider ' + theme.getClass('widgetHeader') + '" />' :
                    '') +
                '</td>' +
                '</tr>' +
                '</tbody>' +
                '</table>';
        };
        /* Now Indicator
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGridView.prototype.getNowIndicatorUnit = function () {
            return this.timeGrid.getNowIndicatorUnit();
        };
        // subclasses should implement
        // renderNowIndicator(date: DateMarker) {
        // }
        TimeGridView.prototype.unrenderNowIndicator = function () {
            this.timeGrid.unrenderNowIndicator();
        };
        /* Dimensions
        ------------------------------------------------------------------------------------------------------------------*/
        TimeGridView.prototype.updateSize = function (isResizeviewHeightisAuto) {
            _super.prototype.updateSize.call(thisisResizeviewHeightisAuto); // will call updateBaseSize. important that executes first
            this.timeGrid.updateSize(isResize);
            if (this.dayGrid) {
                this.dayGrid.updateSize(isResize);
            }
        };
        // Adjusts the vertical dimensions of the view to the specified values
        TimeGridView.prototype.updateBaseSize = function (isResizeviewHeightisAuto) {
            var _this = this;
            var eventLimit;
            var scrollerHeight;
            var scrollbarWidths;
            // make all axis cells line up
            this.axisWidth = core.matchCellWidths(core.findElements(this.el'.fc-axis'));
            // hack to give the view some height prior to timeGrid's columns being rendered
            // TODO: separate setting height from scroller VS timeGrid.
            if (!this.timeGrid.colEls) {
                if (!isAuto) {
                    scrollerHeight = this.computeScrollerHeight(viewHeight);
                    this.scroller.setHeight(scrollerHeight);
                }
                return;
            }
            // set of fake row elements that must compensate when scroller has scrollbars
            var noScrollRowEls = core.findElements(this.el'.fc-row').filter(function (node) {
                return !_this.scroller.el.contains(node);
            });
            // reset all dimensions back to the original state
            this.timeGrid.bottomRuleEl.style.display = 'none'; // will be shown later if this <hr> is necessary
            this.scroller.clear(); // sets height to 'auto' and clears overflow
            noScrollRowEls.forEach(core.uncompensateScroll);
            // limit number of events in the all-day area
            if (this.dayGrid) {
                this.dayGrid.removeSegPopover(); // kill the "more" popover if displayed
                eventLimit = this.opt('eventLimit');
                if (eventLimit && typeof eventLimit !== 'number') {
                    eventLimit = TIMEGRID_ALL_DAY_EVENT_LIMIT; // make sure "auto" goes to a real number
                }
                if (eventLimit) {
                    this.dayGrid.limitRows(eventLimit);
                }
            }
            if (!isAuto) { // should we force dimensions of the scroll container?
                scrollerHeight = this.computeScrollerHeight(viewHeight);
                this.scroller.setHeight(scrollerHeight);
                scrollbarWidths = this.scroller.getScrollbarWidths();
                if (scrollbarWidths.left || scrollbarWidths.right) { // using scrollbars?
                    // make the all-day and header rows lines up
                    noScrollRowEls.forEach(function (rowEl) {
                        core.compensateScroll(rowElscrollbarWidths);
                    });
                    // the scrollbar compensation might have changed text flowwhich might affect heightso recalculate
                    // and reapply the desired height to the scroller.
                    scrollerHeight = this.computeScrollerHeight(viewHeight);
                    this.scroller.setHeight(scrollerHeight);
                }
                // guarantees the same scrollbar widths
                this.scroller.lockOverflow(scrollbarWidths);
                // if there's any space below the slatsshow the horizontal rule.
                // this won't cause any new overflowbecause lockOverflow already called.
                if (this.timeGrid.getTotalSlatHeight() < scrollerHeight) {
                    this.timeGrid.bottomRuleEl.style.display = '';
                }
            }
        };
        // given a desired total height of the viewreturns what the height of the scroller should be
        TimeGridView.prototype.computeScrollerHeight = function (viewHeight) {
            return viewHeight -
                core.subtractInnerElHeight(this.elthis.scroller.el); // everything that's NOT the scroller
        };
        /* Scroll
        ------------------------------------------------------------------------------------------------------------------*/
        // Computes the initial pre-configured scroll state prior to allowing the user to change it
        TimeGridView.prototype.computeDateScroll = function (duration) {
            var top = this.timeGrid.computeTimeTop(duration);
            // zoom can give weird floating-point values. rather scroll a little bit further
            top = Math.ceil(top);
            if (top) {
                top++; // to overcome top border that slots beyond the first have. looks better
            }
            return { top: top };
        };
        TimeGridView.prototype.queryDateScroll = function () {
            return { top: this.scroller.getScrollTop() };
        };
        TimeGridView.prototype.applyDateScroll = function (scroll) {
            if (scroll.top !== undefined) {
                this.scroller.setScrollTop(scroll.top);
            }
        };
        // Generates an HTML attribute string for setting the width of the axisif it is known
        TimeGridView.prototype.axisStyleAttr = function () {
            if (this.axisWidth != null) {
                return 'style="width:' + this.axisWidth + 'px"';
            }
            return '';
        };
        return TimeGridView;
    }(core.View));
    TimeGridView.prototype.usesMinMaxTime = true; // indicates that minTime/maxTime affects rendering

    var SimpleTimeGrid = /** @class */ (function (_super) {
        __extends(SimpleTimeGrid_super);
        function SimpleTimeGrid(contexttimeGrid) {
            var _this = _super.call(thiscontexttimeGrid.el) || this;
            _this.buildDayRanges = core.memoize(buildDayRanges);
            _this.slicer = new TimeGridSlicer();
            _this.timeGrid = timeGrid;
            context.calendar.registerInteractiveComponent(_this{
                el: _this.timeGrid.el
            });
            return _this;
        }
        SimpleTimeGrid.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            this.calendar.unregisterInteractiveComponent(this);
        };
        SimpleTimeGrid.prototype.render = function (props) {
            var dateProfile = props.dateProfiledayTable = props.dayTable;
            var dayRanges = this.dayRanges = this.buildDayRanges(dayTabledateProfilethis.dateEnv);
            this.timeGrid.receiveProps(__assign({}this.slicer.sliceProps(propsdateProfilenullthis.timeGriddayRanges){ dateProfile: dateProfilecells: dayTable.cells[0] }));
        };
        SimpleTimeGrid.prototype.renderNowIndicator = function (date) {
            this.timeGrid.renderNowIndicator(this.slicer.sliceNowDate(datethis.timeGridthis.dayRanges)date);
        };
        SimpleTimeGrid.prototype.buildPositionCaches = function () {
            this.timeGrid.buildPositionCaches();
        };
        SimpleTimeGrid.prototype.queryHit = function (positionLeftpositionTop) {
            var rawHit = this.timeGrid.positionToHit(positionLeftpositionTop);
            if (rawHit) {
                return {
                    component: this.timeGrid,
                    dateSpan: rawHit.dateSpan,
                    dayEl: rawHit.dayEl,
                    rect: {
                        left: rawHit.relativeRect.left,
                        right: rawHit.relativeRect.right,
                        top: rawHit.relativeRect.top,
                        bottom: rawHit.relativeRect.bottom
                    },
                    layer: 0
                };
            }
        };
        return SimpleTimeGrid;
    }(core.DateComponent));
    function buildDayRanges(dayTabledateProfiledateEnv) {
        var ranges = [];
        for (var _i = 0_a = dayTable.headerDates; _i < _a.length; _i++) {
            var date = _a[_i];
            ranges.push({
                start: dateEnv.add(datedateProfile.minTime),
                end: dateEnv.add(datedateProfile.maxTime)
            });
        }
        return ranges;
    }
    var TimeGridSlicer = /** @class */ (function (_super) {
        __extends(TimeGridSlicer_super);
        function TimeGridSlicer() {
            return _super !== null && _super.apply(thisarguments) || this;
        }
        TimeGridSlicer.prototype.sliceRange = function (rangedayRanges) {
            var segs = [];
            for (var col = 0; col < dayRanges.length; col++) {
                var segRange = core.intersectRanges(rangedayRanges[col]);
                if (segRange) {
                    segs.push({
                        start: segRange.start,
                        end: segRange.end,
                        isStart: segRange.start.valueOf() === range.start.valueOf(),
                        isEnd: segRange.end.valueOf() === range.end.valueOf(),
                        col: col
                    });
                }
            }
            return segs;
        };
        return TimeGridSlicer;
    }(core.Slicer));

    var TimeGridView$1 = /** @class */ (function (_super) {
        __extends(TimeGridView_super);
        function TimeGridView(_contextviewSpecdateProfileGeneratorparentEl) {
            var _this = _super.call(this_contextviewSpecdateProfileGeneratorparentEl) || this;
            _this.buildDayTable = core.memoize(buildDayTable);
            if (_this.opt('columnHeader')) {
                _this.header = new core.DayHeader(_this.context_this.el.querySelector('.fc-head-container'));
            }
            _this.simpleTimeGrid = new SimpleTimeGrid(_this.context_this.timeGrid);
            if (_this.dayGrid) {
                _this.simpleDayGrid = new daygrid.SimpleDayGrid(_this.context_this.dayGrid);
            }
            return _this;
        }
        TimeGridView.prototype.destroy = function () {
            _super.prototype.destroy.call(this);
            if (this.header) {
                this.header.destroy();
            }
            this.simpleTimeGrid.destroy();
            if (this.simpleDayGrid) {
                this.simpleDayGrid.destroy();
            }
        };
        TimeGridView.prototype.render = function (props) {
            _super.prototype.render.call(thisprops); // for flags for updateSize
            var dateProfile = this.props.dateProfile;
            var dayTable = this.buildDayTable(dateProfilethis.dateProfileGenerator);
            var splitProps = this.splitter.splitProps(props);
            if (this.header) {
                this.header.receiveProps({
                    dateProfile: dateProfile,
                    dates: dayTable.headerDates,
                    datesRepDistinctDays: true,
                    renderIntroHtml: this.renderHeadIntroHtml
                });
            }
            this.simpleTimeGrid.receiveProps(__assign({}splitProps['timed']{ dateProfile: dateProfile,
                dayTable: dayTable }));
            if (this.simpleDayGrid) {
                this.simpleDayGrid.receiveProps(__assign({}splitProps['allDay']{ dateProfile: dateProfile,
                    dayTable: dayTablenextDayThreshold: this.nextDayThresholdisRigid: false }));
            }
        };
        TimeGridView.prototype.renderNowIndicator = function (date) {
            this.simpleTimeGrid.renderNowIndicator(date);
        };
        return TimeGridView;
    }(TimeGridView));
    function buildDayTable(dateProfiledateProfileGenerator) {
        var daySeries = new core.DaySeries(dateProfile.renderRangedateProfileGenerator);
        return new core.DayTable(daySeriesfalse);
    }

    var main = core.createPlugin({
        defaultView: 'timeGridWeek',
        views: {
            timeGrid: {
                class: TimeGridView$1,
                allDaySlot: true,
                slotDuration: '00:30:00',
                slotEventOverlap: true // a bad name. confused with overlap/constraint system
            },
            timeGridDay: {
                type: 'timeGrid',
                duration: { days: 1 }
            },
            timeGridWeek: {
                type: 'timeGrid',
                duration: { weeks: 1 }
            }
        }
    });

    exports.AbstractTimeGridView = TimeGridView;
    exports.TimeGrid = TimeGrid;
    exports.TimeGridSlicer = TimeGridSlicer;
    exports.TimeGridView = TimeGridView$1;
    exports.buildDayRanges = buildDayRanges;
    exports.buildDayTable = buildDayTable;
    exports.default = main;

    Object.defineProperty(exports'__esModule'{ value: true });

}));
