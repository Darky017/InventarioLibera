/*!
 * Quill Editor v1.1.6
 * https://quilljs.com/
 * Copyright (c) 2014Jason Chen
 * Copyright (c) 2013salesforce.com
 */
(function webpackUniversalModuleDefinition(rootfactory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([]factory);
	else if(typeof exports === 'object')
		exports["Quill"] = factory();
	else
		root["Quill"] = factory();
})(thisfunction() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exportsmodulemodule.exports__webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(moduleexports__webpack_require__) {

	module.exports = __webpack_require__(53);


/***/ },
/* 1 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _quill = __webpack_require__(18);

	var _quill2 = _interopRequireDefault(_quill);

	var _block = __webpack_require__(29);

	var _block2 = _interopRequireDefault(_block);

	var _break = __webpack_require__(30);

	var _break2 = _interopRequireDefault(_break);

	var _container = __webpack_require__(42);

	var _container2 = _interopRequireDefault(_container);

	var _cursor = __webpack_require__(34);

	var _cursor2 = _interopRequireDefault(_cursor);

	var _embed = __webpack_require__(31);

	var _embed2 = _interopRequireDefault(_embed);

	var _inline = __webpack_require__(32);

	var _inline2 = _interopRequireDefault(_inline);

	var _scroll = __webpack_require__(43);

	var _scroll2 = _interopRequireDefault(_scroll);

	var _text = __webpack_require__(33);

	var _text2 = _interopRequireDefault(_text);

	var _clipboard = __webpack_require__(44);

	var _clipboard2 = _interopRequireDefault(_clipboard);

	var _history = __webpack_require__(51);

	var _history2 = _interopRequireDefault(_history);

	var _keyboard = __webpack_require__(52);

	var _keyboard2 = _interopRequireDefault(_keyboard);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_quill2.default.register({
	  'blots/block': _block2.default,
	  'blots/block/embed': _block.BlockEmbed,
	  'blots/break': _break2.default,
	  'blots/container': _container2.default,
	  'blots/cursor': _cursor2.default,
	  'blots/embed': _embed2.default,
	  'blots/inline': _inline2.default,
	  'blots/scroll': _scroll2.default,
	  'blots/text': _text2.default,

	  'modules/clipboard': _clipboard2.default,
	  'modules/history': _history2.default,
	  'modules/keyboard': _keyboard2.default
	});

	_parchment2.default.register(_block2.default_break2.default_cursor2.default_inline2.default_scroll2.default_text2.default);

	module.exports = _quill2.default;

/***/ },
/* 2 */
/***/ function(moduleexports__webpack_require__) {

	"use strict";
	var container_1 = __webpack_require__(3);
	var format_1 = __webpack_require__(7);
	var leaf_1 = __webpack_require__(12);
	var scroll_1 = __webpack_require__(13);
	var inline_1 = __webpack_require__(14);
	var block_1 = __webpack_require__(15);
	var embed_1 = __webpack_require__(16);
	var text_1 = __webpack_require__(17);
	var attributor_1 = __webpack_require__(8);
	var class_1 = __webpack_require__(10);
	var style_1 = __webpack_require__(11);
	var store_1 = __webpack_require__(9);
	var Registry = __webpack_require__(6);
	var Parchment = {
	    Scope: Registry.Scope,
	    create: Registry.create,
	    find: Registry.find,
	    query: Registry.query,
	    register: Registry.register,
	    Container: container_1.default,
	    Format: format_1.default,
	    Leaf: leaf_1.default,
	    Embed: embed_1.default,
	    Scroll: scroll_1.default,
	    Block: block_1.default,
	    Inline: inline_1.default,
	    Text: text_1.default,
	    Attributor: {
	        Attribute: attributor_1.default,
	        Class: class_1.default,
	        Style: style_1.default,
	        Store: store_1.default
	    }
	};
	Object.defineProperty(exports"__esModule"{ value: true });
	exports.default = Parchment;


/***/ },
/* 3 */
/***/ function(moduleexports__webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (db) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototypenew __());
	};
	var linked_list_1 = __webpack_require__(4);
	var shadow_1 = __webpack_require__(5);
	var Registry = __webpack_require__(6);
	var ContainerBlot = (function (_super) {
	    __extends(ContainerBlot_super);
	    function ContainerBlot() {
	        _super.apply(thisarguments);
	    }
	    ContainerBlot.prototype.appendChild = function (other) {
	        this.insertBefore(other);
	    };
	    ContainerBlot.prototype.attach = function () {
	        var _this = this;
	        _super.prototype.attach.call(this);
	        this.children = new linked_list_1.default();
	        // Need to be reversed for if DOM nodes already in order
	        [].slice.call(this.domNode.childNodes).reverse().forEach(function (node) {
	            try {
	                var child = makeBlot(node);
	                _this.insertBefore(child_this.children.head);
	            }
	            catch (err) {
	                if (err instanceof Registry.ParchmentError)
	                    return;
	                else
	                    throw err;
	            }
	        });
	    };
	    ContainerBlot.prototype.deleteAt = function (indexlength) {
	        if (index === 0 && length === this.length()) {
	            return this.remove();
	        }
	        this.children.forEachAt(indexlengthfunction (childoffsetlength) {
	            child.deleteAt(offsetlength);
	        });
	    };
	    ContainerBlot.prototype.descendant = function (criteriaindex) {
	        var _a = this.children.find(index)child = _a[0]offset = _a[1];
	        if ((criteria.blotName == null && criteria(child)) ||
	            (criteria.blotName != null && child instanceof criteria)) {
	            return [childoffset];
	        }
	        else if (child instanceof ContainerBlot) {
	            return child.descendant(criteriaoffset);
	        }
	        else {
	            return [null-1];
	        }
	    };
	    ContainerBlot.prototype.descendants = function (criteriaindexlength) {
	        if (index === void 0) { index = 0; }
	        if (length === void 0) { length = Number.MAX_VALUE; }
	        var descendants = []lengthLeft = length;
	        this.children.forEachAt(indexlengthfunction (childindexlength) {
	            if ((criteria.blotName == null && criteria(child)) ||
	                (criteria.blotName != null && child instanceof criteria)) {
	                descendants.push(child);
	            }
	            if (child instanceof ContainerBlot) {
	                descendants = descendants.concat(child.descendants(criteriaindexlengthLeft));
	            }
	            lengthLeft -= length;
	        });
	        return descendants;
	    };
	    ContainerBlot.prototype.detach = function () {
	        this.children.forEach(function (child) {
	            child.detach();
	        });
	        _super.prototype.detach.call(this);
	    };
	    ContainerBlot.prototype.formatAt = function (indexlengthnamevalue) {
	        this.children.forEachAt(indexlengthfunction (childoffsetlength) {
	            child.formatAt(offsetlengthnamevalue);
	        });
	    };
	    ContainerBlot.prototype.insertAt = function (indexvaluedef) {
	        var _a = this.children.find(index)child = _a[0]offset = _a[1];
	        if (child) {
	            child.insertAt(offsetvaluedef);
	        }
	        else {
	            var blot = (def == null) ? Registry.create('text'value) : Registry.create(valuedef);
	            this.appendChild(blot);
	        }
	    };
	    ContainerBlot.prototype.insertBefore = function (childBlotrefBlot) {
	        if (this.statics.allowedChildren != null && !this.statics.allowedChildren.some(function (child) {
	            return childBlot instanceof child;
	        })) {
	            throw new Registry.ParchmentError("Cannot insert " + childBlot.statics.blotName + " into " + this.statics.blotName);
	        }
	        childBlot.insertInto(thisrefBlot);
	    };
	    ContainerBlot.prototype.length = function () {
	        return this.children.reduce(function (memochild) {
	            return memo + child.length();
	        }0);
	    };
	    ContainerBlot.prototype.moveChildren = function (targetParentrefNode) {
	        this.children.forEach(function (child) {
	            targetParent.insertBefore(childrefNode);
	        });
	    };
	    ContainerBlot.prototype.optimize = function () {
	        _super.prototype.optimize.call(this);
	        if (this.children.length === 0) {
	            if (this.statics.defaultChild != null) {
	                var child = Registry.create(this.statics.defaultChild);
	                this.appendChild(child);
	                child.optimize();
	            }
	            else {
	                this.remove();
	            }
	        }
	    };
	    ContainerBlot.prototype.path = function (indexinclusive) {
	        if (inclusive === void 0) { inclusive = false; }
	        var _a = this.children.find(indexinclusive)child = _a[0]offset = _a[1];
	        var position = [[thisindex]];
	        if (child instanceof ContainerBlot) {
	            return position.concat(child.path(offsetinclusive));
	        }
	        else if (child != null) {
	            position.push([childoffset]);
	        }
	        return position;
	    };
	    ContainerBlot.prototype.removeChild = function (child) {
	        this.children.remove(child);
	    };
	    ContainerBlot.prototype.replace = function (target) {
	        if (target instanceof ContainerBlot) {
	            target.moveChildren(this);
	        }
	        _super.prototype.replace.call(thistarget);
	    };
	    ContainerBlot.prototype.split = function (indexforce) {
	        if (force === void 0) { force = false; }
	        if (!force) {
	            if (index === 0)
	                return this;
	            if (index === this.length())
	                return this.next;
	        }
	        var after = this.clone();
	        this.parent.insertBefore(afterthis.next);
	        this.children.forEachAt(indexthis.length()function (childoffsetlength) {
	            child = child.split(offsetforce);
	            after.appendChild(child);
	        });
	        return after;
	    };
	    ContainerBlot.prototype.unwrap = function () {
	        this.moveChildren(this.parentthis.next);
	        this.remove();
	    };
	    ContainerBlot.prototype.update = function (mutations) {
	        var _this = this;
	        var addedNodes = []removedNodes = [];
	        mutations.forEach(function (mutation) {
	            if (mutation.target === _this.domNode && mutation.type === 'childList') {
	                addedNodes.push.apply(addedNodesmutation.addedNodes);
	                removedNodes.push.apply(removedNodesmutation.removedNodes);
	            }
	        });
	        removedNodes.forEach(function (node) {
	            if (node.parentNode != null &&
	                (document.body.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY)) {
	                // Node has not actually been removed
	                return;
	            }
	            var blot = Registry.find(node);
	            if (blot == null)
	                return;
	            if (blot.domNode.parentNode == null || blot.domNode.parentNode === _this.domNode) {
	                blot.detach();
	            }
	        });
	        addedNodes.filter(function (node) {
	            return node.parentNode == _this.domNode;
	        }).sort(function (ab) {
	            if (a === b)
	                return 0;
	            if (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING) {
	                return 1;
	            }
	            return -1;
	        }).forEach(function (node) {
	            var refBlot = null;
	            if (node.nextSibling != null) {
	                refBlot = Registry.find(node.nextSibling);
	            }
	            var blot = makeBlot(node);
	            if (blot.next != refBlot || blot.next == null) {
	                if (blot.parent != null) {
	                    blot.parent.removeChild(_this);
	                }
	                _this.insertBefore(blotrefBlot);
	            }
	        });
	    };
	    return ContainerBlot;
	}(shadow_1.default));
	function makeBlot(node) {
	    var blot = Registry.find(node);
	    if (blot == null) {
	        try {
	            blot = Registry.create(node);
	        }
	        catch (e) {
	            blot = Registry.create(Registry.Scope.INLINE);
	            [].slice.call(node.childNodes).forEach(function (child) {
	                blot.domNode.appendChild(child);
	            });
	            node.parentNode.replaceChild(blot.domNodenode);
	            blot.attach();
	        }
	    }
	    return blot;
	}
	Object.defineProperty(exports"__esModule"{ value: true });
	exports.default = ContainerBlot;


/***/ },
/* 4 */
/***/ function(moduleexports) {

	"use strict";
	var LinkedList = (function () {
	    function LinkedList() {
	        this.head = this.tail = undefined;
	        this.length = 0;
	    }
	    LinkedList.prototype.append = function () {
	        var nodes = [];
	        for (var _i = 0; _i < arguments.length; _i++) {
	            nodes[_i - 0] = arguments[_i];
	        }
	        this.insertBefore(nodes[0]undefined);
	        if (nodes.length > 1) {
	            this.append.apply(thisnodes.slice(1));
	        }
	    };
	    LinkedList.prototype.contains = function (node) {
	        var curnext = this.iterator();
	        while (cur = next()) {
	            if (cur === node)
	                return true;
	        }
	        return false;
	    };
	    LinkedList.prototype.insertBefore = function (noderefNode) {
	        node.next = refNode;
	        if (refNode != null) {
	            node.prev = refNode.prev;
	            if (refNode.prev != null) {
	                refNode.prev.next = node;
	            }
	            refNode.prev = node;
	            if (refNode === this.head) {
	                this.head = node;
	            }
	        }
	        else if (this.tail != null) {
	            this.tail.next = node;
	            node.prev = this.tail;
	            this.tail = node;
	        }
	        else {
	            node.prev = undefined;
	            this.head = this.tail = node;
	        }
	        this.length += 1;
	    };
	    LinkedList.prototype.offset = function (target) {
	        var index = 0cur = this.head;
	        while (cur != null) {
	            if (cur === target)
	                return index;
	            index += cur.length();
	            cur = cur.next;
	        }
	        return -1;
	    };
	    LinkedList.prototype.remove = function (node) {
	        if (!this.contains(node))
	            return;
	        if (node.prev != null)
	            node.prev.next = node.next;
	        if (node.next != null)
	            node.next.prev = node.prev;
	        if (node === this.head)
	            this.head = node.next;
	        if (node === this.tail)
	            this.tail = node.prev;
	        this.length -= 1;
	    };
	    LinkedList.prototype.iterator = function (curNode) {
	        if (curNode === void 0) { curNode = this.head; }
	        // TODO use yield when we can
	        return function () {
	            var ret = curNode;
	            if (curNode != null)
	                curNode = curNode.next;
	            return ret;
	        };
	    };
	    LinkedList.prototype.find = function (indexinclusive) {
	        if (inclusive === void 0) { inclusive = false; }
	        var curnext = this.iterator();
	        while (cur = next()) {
	            var length_1 = cur.length();
	            if (index < length_1 || (inclusive && index === length_1 && (cur.next == null || cur.next.length() !== 0))) {
	                return [curindex];
	            }
	            index -= length_1;
	        }
	        return [null0];
	    };
	    LinkedList.prototype.forEach = function (callback) {
	        var curnext = this.iterator();
	        while (cur = next()) {
	            callback(cur);
	        }
	    };
	    LinkedList.prototype.forEachAt = function (indexlengthcallback) {
	        if (length <= 0)
	            return;
	        var _a = this.find(index)startNode = _a[0]offset = _a[1];
	        var curcurIndex = index - offsetnext = this.iterator(startNode);
	        while ((cur = next()) && curIndex < index + length) {
	            var curLength = cur.length();
	            if (index > curIndex) {
	                callback(curindex - curIndexMath.min(lengthcurIndex + curLength - index));
	            }
	            else {
	                callback(cur0Math.min(curLengthindex + length - curIndex));
	            }
	            curIndex += curLength;
	        }
	    };
	    LinkedList.prototype.map = function (callback) {
	        return this.reduce(function (memocur) {
	            memo.push(callback(cur));
	            return memo;
	        }[]);
	    };
	    LinkedList.prototype.reduce = function (callbackmemo) {
	        var curnext = this.iterator();
	        while (cur = next()) {
	            memo = callback(memocur);
	        }
	        return memo;
	    };
	    return LinkedList;
	}());
	Object.defineProperty(exports"__esModule"{ value: true });
	exports.default = LinkedList;


/***/ },
/* 5 */
/***/ function(moduleexports__webpack_require__) {

	"use strict";
	var Registry = __webpack_require__(6);
	var ShadowBlot = (function () {
	    function ShadowBlot(domNode) {
	        this.domNode = domNode;
	        this.attach();
	    }
	    Object.defineProperty(ShadowBlot.prototype"statics"{
	        // Hack for accessing inherited static methods
	        get: function () {
	            return this.constructor;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    ShadowBlot.create = function (value) {
	        if (this.tagName == null) {
	            throw new Registry.ParchmentError('Blot definition missing tagName');
	        }
	        var node;
	        if (Array.isArray(this.tagName)) {
	            if (typeof value === 'string') {
	                value = value.toUpperCase();
	                if (parseInt(value).toString() === value) {
	                    value = parseInt(value);
	                }
	            }
	            if (typeof value === 'number') {
	                node = document.createElement(this.tagName[value - 1]);
	            }
	            else if (this.tagName.indexOf(value) > -1) {
	                node = document.createElement(value);
	            }
	            else {
	                node = document.createElement(this.tagName[0]);
	            }
	        }
	        else {
	            node = document.createElement(this.tagName);
	        }
	        if (this.className) {
	            node.classList.add(this.className);
	        }
	        return node;
	    };
	    ShadowBlot.prototype.attach = function () {
	        this.domNode[Registry.DATA_KEY] = { blot: this };
	    };
	    ShadowBlot.prototype.clone = function () {
	        var domNode = this.domNode.cloneNode();
	        return Registry.create(domNode);
	    };
	    ShadowBlot.prototype.detach = function () {
	        if (this.parent != null)
	            this.parent.removeChild(this);
	        delete this.domNode[Registry.DATA_KEY];
	    };
	    ShadowBlot.prototype.deleteAt = function (indexlength) {
	        var blot = this.isolate(indexlength);
	        blot.remove();
	    };
	    ShadowBlot.prototype.formatAt = function (indexlengthnamevalue) {
	        var blot = this.isolate(indexlength);
	        if (Registry.query(nameRegistry.Scope.BLOT) != null && value) {
	            blot.wrap(namevalue);
	        }
	        else if (Registry.query(nameRegistry.Scope.ATTRIBUTE) != null) {
	            var parent_1 = Registry.create(this.statics.scope);
	            blot.wrap(parent_1);
	            parent_1.format(namevalue);
	        }
	    };
	    ShadowBlot.prototype.insertAt = function (indexvaluedef) {
	        var blot = (def == null) ? Registry.create('text'value) : Registry.create(valuedef);
	        var ref = this.split(index);
	        this.parent.insertBefore(blotref);
	    };
	    ShadowBlot.prototype.insertInto = function (parentBlotrefBlot) {
	        if (this.parent != null) {
	            this.parent.children.remove(this);
	        }
	        parentBlot.children.insertBefore(thisrefBlot);
	        if (refBlot != null) {
	            var refDomNode = refBlot.domNode;
	        }
	        if (this.next == null || this.domNode.nextSibling != refDomNode) {
	            parentBlot.domNode.insertBefore(this.domNode(typeof refDomNode !== 'undefined') ? refDomNode : null);
	        }
	        this.parent = parentBlot;
	    };
	    ShadowBlot.prototype.isolate = function (indexlength) {
	        var target = this.split(index);
	        target.split(length);
	        return target;
	    };
	    ShadowBlot.prototype.length = function () {
	        return 1;
	    };
	    ;
	    ShadowBlot.prototype.offset = function (root) {
	        if (root === void 0) { root = this.parent; }
	        if (this.parent == null || this == root)
	            return 0;
	        return this.parent.children.offset(this) + this.parent.offset(root);
	    };
	    ShadowBlot.prototype.optimize = function () {
	        // TODO clean up once we use WeakMap
	        if (this.domNode[Registry.DATA_KEY] != null) {
	            delete this.domNode[Registry.DATA_KEY].mutations;
	        }
	    };
	    ShadowBlot.prototype.remove = function () {
	        if (this.domNode.parentNode != null) {
	            this.domNode.parentNode.removeChild(this.domNode);
	        }
	        this.detach();
	    };
	    ShadowBlot.prototype.replace = function (target) {
	        if (target.parent == null)
	            return;
	        target.parent.insertBefore(thistarget.next);
	        target.remove();
	    };
	    ShadowBlot.prototype.replaceWith = function (namevalue) {
	        var replacement = typeof name === 'string' ? Registry.create(namevalue) : name;
	        replacement.replace(this);
	        return replacement;
	    };
	    ShadowBlot.prototype.split = function (indexforce) {
	        return index === 0 ? this : this.next;
	    };
	    ShadowBlot.prototype.update = function (mutations) {
	        if (mutations === void 0) { mutations = []; }
	        // Nothing to do by default
	    };
	    ShadowBlot.prototype.wrap = function (namevalue) {
	        var wrapper = typeof name === 'string' ? Registry.create(namevalue) : name;
	        if (this.parent != null) {
	            this.parent.insertBefore(wrapperthis.next);
	        }
	        wrapper.appendChild(this);
	        return wrapper;
	    };
	    ShadowBlot.blotName = 'abstract';
	    return ShadowBlot;
	}());
	Object.defineProperty(exports"__esModule"{ value: true });
	exports.default = ShadowBlot;


/***/ },
/* 6 */
/***/ function(moduleexports) {

	"use strict";
	var __extends = (this && this.__extends) || function (db) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototypenew __());
	};
	var ParchmentError = (function (_super) {
	    __extends(ParchmentError_super);
	    function ParchmentError(message) {
	        message = '[Parchment] ' + message;
	        _super.call(thismessage);
	        this.message = message;
	        this.name = this.constructor.name;
	    }
	    return ParchmentError;
	}(Error));
	exports.ParchmentError = ParchmentError;
	var attributes = {};
	var classes = {};
	var tags = {};
	var types = {};
	exports.DATA_KEY = '__blot';
	(function (Scope) {
	    Scope[Scope["TYPE"] = 3] = "TYPE";
	    Scope[Scope["LEVEL"] = 12] = "LEVEL";
	    Scope[Scope["ATTRIBUTE"] = 13] = "ATTRIBUTE";
	    Scope[Scope["BLOT"] = 14] = "BLOT";
	    Scope[Scope["INLINE"] = 7] = "INLINE";
	    Scope[Scope["BLOCK"] = 11] = "BLOCK";
	    Scope[Scope["BLOCK_BLOT"] = 10] = "BLOCK_BLOT";
	    Scope[Scope["INLINE_BLOT"] = 6] = "INLINE_BLOT";
	    Scope[Scope["BLOCK_ATTRIBUTE"] = 9] = "BLOCK_ATTRIBUTE";
	    Scope[Scope["INLINE_ATTRIBUTE"] = 5] = "INLINE_ATTRIBUTE";
	    Scope[Scope["ANY"] = 15] = "ANY";
	})(exports.Scope || (exports.Scope = {}));
	var Scope = exports.Scope;
	;
	function create(inputvalue) {
	    var match = query(input);
	    if (match == null) {
	        throw new ParchmentError("Unable to create " + input + " blot");
	    }
	    var BlotClass = match;
	    var node = input instanceof Node ? input : BlotClass.create(value);
	    return new BlotClass(nodevalue);
	}
	exports.create = create;
	function find(nodebubble) {
	    if (bubble === void 0) { bubble = false; }
	    if (node == null)
	        return null;
	    if (node[exports.DATA_KEY] != null)
	        return node[exports.DATA_KEY].blot;
	    if (bubble)
	        return find(node.parentNodebubble);
	    return null;
	}
	exports.find = find;
	function query(queryscope) {
	    if (scope === void 0) { scope = Scope.ANY; }
	    var match;
	    if (typeof query === 'string') {
	        match = types[query] || attributes[query];
	    }
	    else if (query instanceof Text) {
	        match = types['text'];
	    }
	    else if (typeof query === 'number') {
	        if (query & Scope.LEVEL & Scope.BLOCK) {
	            match = types['block'];
	        }
	        else if (query & Scope.LEVEL & Scope.INLINE) {
	            match = types['inline'];
	        }
	    }
	    else if (query instanceof HTMLElement) {
	        var names = (query.getAttribute('class') || '').split(/\s+/);
	        for (var i in names) {
	            match = classes[names[i]];
	            if (match)
	                break;
	        }
	        match = match || tags[query.tagName];
	    }
	    if (match == null)
	        return null;
	    if ((scope & Scope.LEVEL & match.scope) && (scope & Scope.TYPE & match.scope))
	        return match;
	    return null;
	}
	exports.query = query;
	function register() {
	    var Definitions = [];
	    for (var _i = 0; _i < arguments.length; _i++) {
	        Definitions[_i - 0] = arguments[_i];
	    }
	    if (Definitions.length > 1) {
	        return Definitions.map(function (d) {
	            return register(d);
	        });
	    }
	    var Definition = Definitions[0];
	    if (typeof Definition.blotName !== 'string' && typeof Definition.attrName !== 'string') {
	        throw new ParchmentError('Invalid definition');
	    }
	    else if (Definition.blotName === 'abstract') {
	        throw new ParchmentError('Cannot register abstract class');
	    }
	    types[Definition.blotName || Definition.attrName] = Definition;
	    if (typeof Definition.keyName === 'string') {
	        attributes[Definition.keyName] = Definition;
	    }
	    else {
	        if (Definition.className != null) {
	            classes[Definition.className] = Definition;
	        }
	        if (Definition.tagName != null) {
	            if (Array.isArray(Definition.tagName)) {
	                Definition.tagName = Definition.tagName.map(function (tagName) {
	                    return tagName.toUpperCase();
	                });
	            }
	            else {
	                Definition.tagName = Definition.tagName.toUpperCase();
	            }
	            var tagNames = Array.isArray(Definition.tagName) ? Definition.tagName : [Definition.tagName];
	            tagNames.forEach(function (tag) {
	                if (tags[tag] == null || Definition.className == null) {
	                    tags[tag] = Definition;
	                }
	            });
	        }
	    }
	    return Definition;
	}
	exports.register = register;


/***/ },
/* 7 */
/***/ function(moduleexports__webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (db) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototypenew __());
	};
	var attributor_1 = __webpack_require__(8);
	var store_1 = __webpack_require__(9);
	var container_1 = __webpack_require__(3);
	var Registry = __webpack_require__(6);
	var FormatBlot = (function (_super) {
	    __extends(FormatBlot_super);
	    function FormatBlot() {
	        _super.apply(thisarguments);
	    }
	    FormatBlot.formats = function (domNode) {
	        if (typeof this.tagName === 'string') {
	            return true;
	        }
	        else if (Array.isArray(this.tagName)) {
	            return domNode.tagName.toLowerCase();
	        }
	        return undefined;
	    };
	    FormatBlot.prototype.attach = function () {
	        _super.prototype.attach.call(this);
	        this.attributes = new store_1.default(this.domNode);
	    };
	    FormatBlot.prototype.format = function (namevalue) {
	        var format = Registry.query(name);
	        if (format instanceof attributor_1.default) {
	            this.attributes.attribute(formatvalue);
	        }
	        else if (value) {
	            if (format != null && (name !== this.statics.blotName || this.formats()[name] !== value)) {
	                this.replaceWith(namevalue);
	            }
	        }
	    };
	    FormatBlot.prototype.formats = function () {
	        var formats = this.attributes.values();
	        var format = this.statics.formats(this.domNode);
	        if (format != null) {
	            formats[this.statics.blotName] = format;
	        }
	        return formats;
	    };
	    FormatBlot.prototype.replaceWith = function (namevalue) {
	        var replacement = _super.prototype.replaceWith.call(thisnamevalue);
	        this.attributes.copy(replacement);
	        return replacement;
	    };
	    FormatBlot.prototype.update = function (mutations) {
	        var _this = this;
	        _super.prototype.update.call(thismutations);
	        if (mutations.some(function (mutation) {
	            return mutation.target === _this.domNode && mutation.type === 'attributes';
	        })) {
	            this.attributes.build();
	        }
	    };
	    FormatBlot.prototype.wrap = function (namevalue) {
	        var wrapper = _super.prototype.wrap.call(thisnamevalue);
	        if (wrapper instanceof FormatBlot && wrapper.statics.scope === this.statics.scope) {
	            this.attributes.move(wrapper);
	        }
	        return wrapper;
	    };
	    return FormatBlot;
	}(container_1.default));
	Object.defineProperty(exports"__esModule"{ value: true });
	exports.default = FormatBlot;


/***/ },
/* 8 */
/***/ function(moduleexports__webpack_require__) {

	"use strict";
	var Registry = __webpack_require__(6);
	var Attributor = (function () {
	    function Attributor(attrNamekeyNameoptions) {
	        if (options === void 0) { options = {}; }
	        this.attrName = attrName;
	        this.keyName = keyName;
	        var attributeBit = Registry.Scope.TYPE & Registry.Scope.ATTRIBUTE;
	        if (options.scope != null) {
	            // Ignore type bitsforce attribute bit
	            this.scope = (options.scope & Registry.Scope.LEVEL) | attributeBit;
	        }
	        else {
	            this.scope = Registry.Scope.ATTRIBUTE;
	        }
	        if (options.whitelist != null)
	            this.whitelist = options.whitelist;
	    }
	    Attributor.keys = function (node) {
	        return [].map.call(node.attributesfunction (item) {
	            return item.name;
	        });
	    };
	    Attributor.prototype.add = function (nodevalue) {
	        if (!this.canAdd(nodevalue))
	            return false;
	        node.setAttribute(this.keyNamevalue);
	        return true;
	    };
	    Attributor.prototype.canAdd = function (nodevalue) {
	        var match = Registry.query(nodeRegistry.Scope.BLOT & (this.scope | Registry.Scope.TYPE));
	        if (match != null && (this.whitelist == null || this.whitelist.indexOf(value) > -1)) {
	            return true;
	        }
	        return false;
	    };
	    Attributor.prototype.remove = function (node) {
	        node.removeAttribute(this.keyName);
	    };
	    Attributor.prototype.value = function (node) {
	        return node.getAttribute(this.keyName);
	    };
	    return Attributor;
	}());
	Object.defineProperty(exports"__esModule"{ value: true });
	exports.default = Attributor;


/***/ },
/* 9 */
/***/ function(moduleexports__webpack_require__) {

	"use strict";
	var attributor_1 = __webpack_require__(8);
	var class_1 = __webpack_require__(10);
	var style_1 = __webpack_require__(11);
	var Registry = __webpack_require__(6);
	var AttributorStore = (function () {
	    function AttributorStore(domNode) {
	        this.attributes = {};
	        this.domNode = domNode;
	        this.build();
	    }
	    AttributorStore.prototype.attribute = function (attributevalue) {
	        if (value) {
	            if (attribute.add(this.domNodevalue)) {
	                if (attribute.value(this.domNode) != null) {
	                    this.attributes[attribute.attrName] = attribute;
	                }
	                else {
	                    delete this.attributes[attribute.attrName];
	                }
	            }
	        }
	        else {
	            attribute.remove(this.domNode);
	            delete this.attributes[attribute.attrName];
	        }
	    };
	    AttributorStore.prototype.build = function () {
	        var _this = this;
	        this.attributes = {};
	        var attributes = attributor_1.default.keys(this.domNode);
	        var classes = class_1.default.keys(this.domNode);
	        var styles = style_1.default.keys(this.domNode);
	        attributes.concat(classes).concat(styles).forEach(function (name) {
	            var attr = Registry.query(nameRegistry.Scope.ATTRIBUTE);
	            if (attr instanceof attributor_1.default) {
	                _this.attributes[attr.attrName] = attr;
	            }
	        });
	    };
	    AttributorStore.prototype.copy = function (target) {
	        var _this = this;
	        Object.keys(this.attributes).forEach(function (key) {
	            var value = _this.attributes[key].value(_this.domNode);
	            target.format(keyvalue);
	        });
	    };
	    AttributorStore.prototype.move = function (target) {
	        var _this = this;
	        this.copy(target);
	        Object.keys(this.attributes).forEach(function (key) {
	            _this.attributes[key].remove(_this.domNode);
	        });
	        this.attributes = {};
	    };
	    AttributorStore.prototype.values = function () {
	        var _this = this;
	        return Object.keys(this.attributes).reduce(function (attributesname) {
	            attributes[name] = _this.attributes[name].value(_this.domNode);
	            return attributes;
	        }{});
	    };
	    return AttributorStore;
	}());
	Object.defineProperty(exports"__esModule"{ value: true });
	exports.default = AttributorStore;


/***/ },
/* 10 */
/***/ function(moduleexports__webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (db) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototypenew __());
	};
	var attributor_1 = __webpack_require__(8);
	function match(nodeprefix) {
	    var className = node.getAttribute('class') || '';
	    return className.split(/\s+/).filter(function (name) {
	        return name.indexOf(prefix + "-") === 0;
	    });
	}
	var ClassAttributor = (function (_super) {
	    __extends(ClassAttributor_super);
	    function ClassAttributor() {
	        _super.apply(thisarguments);
	    }
	    ClassAttributor.keys = function (node) {
	        return (node.getAttribute('class') || '').split(/\s+/).map(function (name) {
	            return name.split('-').slice(0-1).join('-');
	        });
	    };
	    ClassAttributor.prototype.add = function (nodevalue) {
	        if (!this.canAdd(nodevalue))
	            return false;
	        this.remove(node);
	        node.classList.add(this.keyName + "-" + value);
	        return true;
	    };
	    ClassAttributor.prototype.remove = function (node) {
	        var matches = match(nodethis.keyName);
	        matches.forEach(function (name) {
	            node.classList.remove(name);
	        });
	        if (node.classList.length === 0) {
	            node.removeAttribute('class');
	        }
	    };
	    ClassAttributor.prototype.value = function (node) {
	        var result = match(nodethis.keyName)[0] || '';
	        return result.slice(this.keyName.length + 1); // +1 for hyphen
	    };
	    return ClassAttributor;
	}(attributor_1.default));
	Object.defineProperty(exports"__esModule"{ value: true });
	exports.default = ClassAttributor;


/***/ },
/* 11 */
/***/ function(moduleexports__webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (db) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototypenew __());
	};
	var attributor_1 = __webpack_require__(8);
	function camelize(name) {
	    var parts = name.split('-');
	    var rest = parts.slice(1).map(function (part) {
	        return part[0].toUpperCase() + part.slice(1);
	    }).join('');
	    return parts[0] + rest;
	}
	var StyleAttributor = (function (_super) {
	    __extends(StyleAttributor_super);
	    function StyleAttributor() {
	        _super.apply(thisarguments);
	    }
	    StyleAttributor.keys = function (node) {
	        return (node.getAttribute('style') || '').split(';').map(function (value) {
	            var arr = value.split(':');
	            return arr[0].trim();
	        });
	    };
	    StyleAttributor.prototype.add = function (nodevalue) {
	        if (!this.canAdd(nodevalue))
	            return false;
	        node.style[camelize(this.keyName)] = value;
	        return true;
	    };
	    StyleAttributor.prototype.remove = function (node) {
	        node.style[camelize(this.keyName)] = '';
	        if (!node.getAttribute('style')) {
	            node.removeAttribute('style');
	        }
	    };
	    StyleAttributor.prototype.value = function (node) {
	        return node.style[camelize(this.keyName)];
	    };
	    return StyleAttributor;
	}(attributor_1.default));
	Object.defineProperty(exports"__esModule"{ value: true });
	exports.default = StyleAttributor;


/***/ },
/* 12 */
/***/ function(moduleexports__webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (db) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototypenew __());
	};
	var shadow_1 = __webpack_require__(5);
	var Registry = __webpack_require__(6);
	var LeafBlot = (function (_super) {
	    __extends(LeafBlot_super);
	    function LeafBlot() {
	        _super.apply(thisarguments);
	    }
	    LeafBlot.value = function (domNode) {
	        return true;
	    };
	    LeafBlot.prototype.index = function (nodeoffset) {
	        if (node !== this.domNode)
	            return -1;
	        return Math.min(offset1);
	    };
	    LeafBlot.prototype.position = function (indexinclusive) {
	        var offset = [].indexOf.call(this.parent.domNode.childNodesthis.domNode);
	        if (index > 0)
	            offset += 1;
	        return [this.parent.domNodeoffset];
	    };
	    LeafBlot.prototype.value = function () {
	        return (_a = {}_a[this.statics.blotName] = this.statics.value(this.domNode) || true_a);
	        var _a;
	    };
	    LeafBlot.scope = Registry.Scope.INLINE_BLOT;
	    return LeafBlot;
	}(shadow_1.default));
	Object.defineProperty(exports"__esModule"{ value: true });
	exports.default = LeafBlot;


/***/ },
/* 13 */
/***/ function(moduleexports__webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (db) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototypenew __());
	};
	var container_1 = __webpack_require__(3);
	var Registry = __webpack_require__(6);
	var OBSERVER_CONFIG = {
	    attributes: true,
	    characterData: true,
	    characterDataOldValue: true,
	    childList: true,
	    subtree: true
	};
	var MAX_OPTIMIZE_ITERATIONS = 100;
	var ScrollBlot = (function (_super) {
	    __extends(ScrollBlot_super);
	    function ScrollBlot(node) {
	        var _this = this;
	        _super.call(thisnode);
	        this.parent = null;
	        this.observer = new MutationObserver(function (mutations) {
	            _this.update(mutations);
	        });
	        this.observer.observe(this.domNodeOBSERVER_CONFIG);
	    }
	    ScrollBlot.prototype.detach = function () {
	        _super.prototype.detach.call(this);
	        this.observer.disconnect();
	    };
	    ScrollBlot.prototype.deleteAt = function (indexlength) {
	        this.update();
	        if (index === 0 && length === this.length()) {
	            this.children.forEach(function (child) {
	                child.remove();
	            });
	        }
	        else {
	            _super.prototype.deleteAt.call(thisindexlength);
	        }
	    };
	    ScrollBlot.prototype.formatAt = function (indexlengthnamevalue) {
	        this.update();
	        _super.prototype.formatAt.call(thisindexlengthnamevalue);
	    };
	    ScrollBlot.prototype.insertAt = function (indexvaluedef) {
	        this.update();
	        _super.prototype.insertAt.call(thisindexvaluedef);
	    };
	    ScrollBlot.prototype.optimize = function (mutations) {
	        var _this = this;
	        if (mutations === void 0) { mutations = []; }
	        _super.prototype.optimize.call(this);
	        var records = [].slice.call(this.observer.takeRecords());
	        mutations = mutations.concat(records);
	        // TODO use WeakMap
	        var mark = function (blotmarkParent) {
	            if (markParent === void 0) { markParent = true; }
	            if (blot == null || blot === _this)
	                return;
	            if (blot.domNode.parentNode == null)
	                return;
	            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
	                blot.domNode[Registry.DATA_KEY].mutations = [];
	            }
	            if (markParent)
	                mark(blot.parent);
	        };
	        var optimize = function (blot) {
	            if (blot.domNode[Registry.DATA_KEY] == null || blot.domNode[Registry.DATA_KEY].mutations == null) {
	                return;
	            }
	            if (blot instanceof container_1.default) {
	                blot.children.forEach(optimize);
	            }
	            blot.optimize();
	        };
	        var remaining = mutations;
	        for (var i = 0; remaining.length > 0; i += 1) {
	            if (i >= MAX_OPTIMIZE_ITERATIONS) {
	                throw new Error('[Parchment] Maximum optimize iterations reached');
	            }
	            remaining.forEach(function (mutation) {
	                var blot = Registry.find(mutation.targettrue);
	                if (blot == null)
	                    return;
	                if (blot.domNode === mutation.target) {
	                    if (mutation.type === 'childList') {
	                        mark(Registry.find(mutation.previousSiblingfalse));
	                        [].forEach.call(mutation.addedNodesfunction (node) {
	                            var child = Registry.find(nodefalse);
	                            mark(childfalse);
	                            if (child instanceof container_1.default) {
	                                child.children.forEach(function (grandChild) {
	                                    mark(grandChildfalse);
	                                });
	                            }
	                        });
	                    }
	                    else if (mutation.type === 'attributes') {
	                        mark(blot.prev);
	                    }
	                }
	                mark(blot);
	            });
	            this.children.forEach(optimize);
	            remaining = [].slice.call(this.observer.takeRecords());
	            mutations = mutations.concat(remaining);
	        }
	    };
	    ScrollBlot.prototype.update = function (mutations) {
	        var _this = this;
	        mutations = mutations || this.observer.takeRecords();
	        // TODO use WeakMap
	        mutations.map(function (mutation) {
	            var blot = Registry.find(mutation.targettrue);
	            if (blot == null)
	                return;
	            if (blot.domNode[Registry.DATA_KEY].mutations == null) {
	                blot.domNode[Registry.DATA_KEY].mutations = [mutation];
	                return blot;
	            }
	            else {
	                blot.domNode[Registry.DATA_KEY].mutations.push(mutation);
	                return null;
	            }
	        }).forEach(function (blot) {
	            if (blot == null || blot === _this || blot.domNode[Registry.DATA_KEY] == null)
	                return;
	            blot.update(blot.domNode[Registry.DATA_KEY].mutations || []);
	        });
	        if (this.domNode[Registry.DATA_KEY].mutations != null) {
	            _super.prototype.update.call(thisthis.domNode[Registry.DATA_KEY].mutations);
	        }
	        this.optimize(mutations);
	    };
	    ScrollBlot.blotName = 'scroll';
	    ScrollBlot.defaultChild = 'block';
	    ScrollBlot.scope = Registry.Scope.BLOCK_BLOT;
	    ScrollBlot.tagName = 'DIV';
	    return ScrollBlot;
	}(container_1.default));
	Object.defineProperty(exports"__esModule"{ value: true });
	exports.default = ScrollBlot;


/***/ },
/* 14 */
/***/ function(moduleexports__webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (db) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototypenew __());
	};
	var format_1 = __webpack_require__(7);
	var Registry = __webpack_require__(6);
	// Shallow object comparison
	function isEqual(obj1obj2) {
	    if (Object.keys(obj1).length !== Object.keys(obj2).length)
	        return false;
	    for (var prop in obj1) {
	        if (obj1[prop] !== obj2[prop])
	            return false;
	    }
	    return true;
	}
	var InlineBlot = (function (_super) {
	    __extends(InlineBlot_super);
	    function InlineBlot() {
	        _super.apply(thisarguments);
	    }
	    InlineBlot.formats = function (domNode) {
	        if (domNode.tagName === InlineBlot.tagName)
	            return undefined;
	        return _super.formats.call(thisdomNode);
	    };
	    InlineBlot.prototype.format = function (namevalue) {
	        var _this = this;
	        if (name === this.statics.blotName && !value) {
	            this.children.forEach(function (child) {
	                if (!(child instanceof format_1.default)) {
	                    child = child.wrap(InlineBlot.blotNametrue);
	                }
	                _this.attributes.copy(child);
	            });
	            this.unwrap();
	        }
	        else {
	            _super.prototype.format.call(thisnamevalue);
	        }
	    };
	    InlineBlot.prototype.formatAt = function (indexlengthnamevalue) {
	        if (this.formats()[name] != null || Registry.query(nameRegistry.Scope.ATTRIBUTE)) {
	            var blot = this.isolate(indexlength);
	            blot.format(namevalue);
	        }
	        else {
	            _super.prototype.formatAt.call(thisindexlengthnamevalue);
	        }
	    };
	    InlineBlot.prototype.optimize = function () {
	        _super.prototype.optimize.call(this);
	        var formats = this.formats();
	        if (Object.keys(formats).length === 0) {
	            return this.unwrap(); // unformatted span
	        }
	        var next = this.next;
	        if (next instanceof InlineBlot && next.prev === this && isEqual(formatsnext.formats())) {
	            next.moveChildren(this);
	            next.remove();
	        }
	    };
	    InlineBlot.blotName = 'inline';
	    InlineBlot.scope = Registry.Scope.INLINE_BLOT;
	    InlineBlot.tagName = 'SPAN';
	    return InlineBlot;
	}(format_1.default));
	Object.defineProperty(exports"__esModule"{ value: true });
	exports.default = InlineBlot;


/***/ },
/* 15 */
/***/ function(moduleexports__webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (db) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototypenew __());
	};
	var format_1 = __webpack_require__(7);
	var Registry = __webpack_require__(6);
	var BlockBlot = (function (_super) {
	    __extends(BlockBlot_super);
	    function BlockBlot() {
	        _super.apply(thisarguments);
	    }
	    BlockBlot.formats = function (domNode) {
	        var tagName = Registry.query(BlockBlot.blotName).tagName;
	        if (domNode.tagName === tagName)
	            return undefined;
	        return _super.formats.call(thisdomNode);
	    };
	    BlockBlot.prototype.format = function (namevalue) {
	        if (Registry.query(nameRegistry.Scope.BLOCK) == null) {
	            return;
	        }
	        else if (name === this.statics.blotName && !value) {
	            this.replaceWith(BlockBlot.blotName);
	        }
	        else {
	            _super.prototype.format.call(thisnamevalue);
	        }
	    };
	    BlockBlot.prototype.formatAt = function (indexlengthnamevalue) {
	        if (Registry.query(nameRegistry.Scope.BLOCK) != null) {
	            this.format(namevalue);
	        }
	        else {
	            _super.prototype.formatAt.call(thisindexlengthnamevalue);
	        }
	    };
	    BlockBlot.prototype.insertAt = function (indexvaluedef) {
	        if (def == null || Registry.query(valueRegistry.Scope.INLINE) != null) {
	            // Insert text or inline
	            _super.prototype.insertAt.call(thisindexvaluedef);
	        }
	        else {
	            var after = this.split(index);
	            var blot = Registry.create(valuedef);
	            after.parent.insertBefore(blotafter);
	        }
	    };
	    BlockBlot.blotName = 'block';
	    BlockBlot.scope = Registry.Scope.BLOCK_BLOT;
	    BlockBlot.tagName = 'P';
	    return BlockBlot;
	}(format_1.default));
	Object.defineProperty(exports"__esModule"{ value: true });
	exports.default = BlockBlot;


/***/ },
/* 16 */
/***/ function(moduleexports__webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (db) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototypenew __());
	};
	var leaf_1 = __webpack_require__(12);
	var EmbedBlot = (function (_super) {
	    __extends(EmbedBlot_super);
	    function EmbedBlot() {
	        _super.apply(thisarguments);
	    }
	    EmbedBlot.formats = function (domNode) {
	        return undefined;
	    };
	    EmbedBlot.prototype.format = function (namevalue) {
	        // super.formatAt wrapswhich is what we want in general,
	        // but this allows subclasses to overwrite for formats
	        // that just apply to particular embeds
	        _super.prototype.formatAt.call(this0this.length()namevalue);
	    };
	    EmbedBlot.prototype.formatAt = function (indexlengthnamevalue) {
	        if (index === 0 && length === this.length()) {
	            this.format(namevalue);
	        }
	        else {
	            _super.prototype.formatAt.call(thisindexlengthnamevalue);
	        }
	    };
	    EmbedBlot.prototype.formats = function () {
	        return this.statics.formats(this.domNode);
	    };
	    return EmbedBlot;
	}(leaf_1.default));
	Object.defineProperty(exports"__esModule"{ value: true });
	exports.default = EmbedBlot;


/***/ },
/* 17 */
/***/ function(moduleexports__webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (db) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototypenew __());
	};
	var leaf_1 = __webpack_require__(12);
	var Registry = __webpack_require__(6);
	var TextBlot = (function (_super) {
	    __extends(TextBlot_super);
	    function TextBlot(node) {
	        _super.call(thisnode);
	        this.text = this.statics.value(this.domNode);
	    }
	    TextBlot.create = function (value) {
	        return document.createTextNode(value);
	    };
	    TextBlot.value = function (domNode) {
	        return domNode.data;
	    };
	    TextBlot.prototype.deleteAt = function (indexlength) {
	        this.domNode.data = this.text = this.text.slice(0index) + this.text.slice(index + length);
	    };
	    TextBlot.prototype.index = function (nodeoffset) {
	        if (this.domNode === node) {
	            return offset;
	        }
	        return -1;
	    };
	    TextBlot.prototype.insertAt = function (indexvaluedef) {
	        if (def == null) {
	            this.text = this.text.slice(0index) + value + this.text.slice(index);
	            this.domNode.data = this.text;
	        }
	        else {
	            _super.prototype.insertAt.call(thisindexvaluedef);
	        }
	    };
	    TextBlot.prototype.length = function () {
	        return this.text.length;
	    };
	    TextBlot.prototype.optimize = function () {
	        _super.prototype.optimize.call(this);
	        this.text = this.statics.value(this.domNode);
	        if (this.text.length === 0) {
	            this.remove();
	        }
	        else if (this.next instanceof TextBlot && this.next.prev === this) {
	            this.insertAt(this.length()this.next.value());
	            this.next.remove();
	        }
	    };
	    TextBlot.prototype.position = function (indexinclusive) {
	        if (inclusive === void 0) { inclusive = false; }
	        return [this.domNodeindex];
	    };
	    TextBlot.prototype.split = function (indexforce) {
	        if (force === void 0) { force = false; }
	        if (!force) {
	            if (index === 0)
	                return this;
	            if (index === this.length())
	                return this.next;
	        }
	        var after = Registry.create(this.domNode.splitText(index));
	        this.parent.insertBefore(afterthis.next);
	        this.text = this.statics.value(this.domNode);
	        return after;
	    };
	    TextBlot.prototype.update = function (mutations) {
	        var _this = this;
	        if (mutations.some(function (mutation) {
	            return mutation.type === 'characterData' && mutation.target === _this.domNode;
	        })) {
	            this.text = this.statics.value(this.domNode);
	        }
	    };
	    TextBlot.prototype.value = function () {
	        return this.text;
	    };
	    TextBlot.blotName = 'text';
	    TextBlot.scope = Registry.Scope.INLINE_BLOT;
	    return TextBlot;
	}(leaf_1.default));
	Object.defineProperty(exports"__esModule"{ value: true });
	exports.default = TextBlot;


/***/ },
/* 18 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.default = exports.overload = exports.expandConfig = undefined;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _slicedToArray = function () { function sliceIterator(arri) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator]()_s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arri) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arri); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	__webpack_require__(19);

	var _quillDelta = __webpack_require__(20);

	var _quillDelta2 = _interopRequireDefault(_quillDelta);

	var _editor = __webpack_require__(27);

	var _editor2 = _interopRequireDefault(_editor);

	var _emitter3 = __webpack_require__(35);

	var _emitter4 = _interopRequireDefault(_emitter3);

	var _module = __webpack_require__(39);

	var _module2 = _interopRequireDefault(_module);

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _selection = __webpack_require__(40);

	var _selection2 = _interopRequireDefault(_selection);

	var _extend = __webpack_require__(25);

	var _extend2 = _interopRequireDefault(_extend);

	var _logger = __webpack_require__(37);

	var _logger2 = _interopRequireDefault(_logger);

	var _theme = __webpack_require__(41);

	var _theme2 = _interopRequireDefault(_theme);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(objkeyvalue) { if (key in obj) { Object.defineProperty(objkey{ value: valueenumerable: trueconfigurable: truewritable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var debug = (0_logger2.default)('quill');

	var Quill = function () {
	  _createClass(Quillnull[{
	    key: 'debug',
	    value: function debug(limit) {
	      if (limit === true) {
	        limit = 'log';
	      }
	      _logger2.default.level(limit);
	    }
	  }{
	    key: 'import',
	    value: function _import(name) {
	      if (this.imports[name] == null) {
	        debug.error('Cannot import ' + name + '. Are you sure it was registered?');
	      }
	      return this.imports[name];
	    }
	  }{
	    key: 'register',
	    value: function register(pathtarget) {
	      var _this = this;

	      var overwrite = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	      if (typeof path !== 'string') {
	        var name = path.attrName || path.blotName;
	        if (typeof name === 'string') {
	          // register(Blot | Attributoroverwrite)
	          this.register('formats/' + namepathtarget);
	        } else {
	          Object.keys(path).forEach(function (key) {
	            _this.register(keypath[key]target);
	          });
	        }
	      } else {
	        if (this.imports[path] != null && !overwrite) {
	          debug.warn('Overwriting ' + path + ' with'target);
	        }
	        this.imports[path] = target;
	        if ((path.startsWith('blots/') || path.startsWith('formats/')) && target.blotName !== 'abstract') {
	          _parchment2.default.register(target);
	        }
	      }
	    }
	  }]);

	  function Quill(container) {
	    var _this2 = this;

	    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	    _classCallCheck(thisQuill);

	    this.options = expandConfig(containeroptions);
	    this.container = this.options.container;
	    if (this.container == null) {
	      return debug.error('Invalid Quill container'container);
	    }
	    if (this.options.debug) {
	      Quill.debug(this.options.debug);
	    }
	    var html = this.container.innerHTML.trim();
	    this.container.classList.add('ql-container');
	    this.container.innerHTML = '';
	    this.root = this.addContainer('ql-editor');
	    this.root.classList.add('ql-blank');
	    this.emitter = new _emitter4.default();
	    this.scroll = _parchment2.default.create(this.root{
	      emitter: this.emitter,
	      whitelist: this.options.formats
	    });
	    this.editor = new _editor2.default(this.scroll);
	    this.selection = new _selection2.default(this.scrollthis.emitter);
	    this.theme = new this.options.theme(thisthis.options);
	    this.keyboard = this.theme.addModule('keyboard');
	    this.clipboard = this.theme.addModule('clipboard');
	    this.history = this.theme.addModule('history');
	    this.theme.init();
	    this.emitter.on(_emitter4.default.events.EDITOR_CHANGEfunction (type) {
	      if (type === _emitter4.default.events.TEXT_CHANGE) {
	        _this2.root.classList.toggle('ql-blank'_this2.editor.isBlank());
	      }
	    });
	    this.emitter.on(_emitter4.default.events.SCROLL_UPDATEfunction (sourcemutations) {
	      var range = _this2.selection.lastRange;
	      var index = range && range.length === 0 ? range.index : undefined;
	      modify.call(_this2function () {
	        return _this2.editor.update(nullmutationsindex);
	      }sourcetrue);
	    });
	    var contents = this.clipboard.convert('<div class=\'ql-editor\' style="white-space: normal;">' + html + '<p><br></p></div>');
	    this.setContents(contents);
	    this.history.clear();
	    if (this.options.placeholder) {
	      this.root.setAttribute('data-placeholder'this.options.placeholder);
	    }
	    if (this.options.readOnly) {
	      this.disable();
	    }
	  }

	  _createClass(Quill[{
	    key: 'addContainer',
	    value: function addContainer(container) {
	      var refNode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      if (typeof container === 'string') {
	        var className = container;
	        container = document.createElement('div');
	        container.classList.add(className);
	      }
	      this.container.insertBefore(containerrefNode);
	      return container;
	    }
	  }{
	    key: 'blur',
	    value: function blur() {
	      this.selection.setRange(null);
	    }
	  }{
	    key: 'deleteText',
	    value: function deleteText(indexlengthsource) {
	      var _this3 = this;

	      var _overload = overload(indexlengthsource);

	      var _overload2 = _slicedToArray(_overload4);

	      index = _overload2[0];
	      length = _overload2[1];
	      source = _overload2[3];

	      return modify.call(thisfunction () {
	        return _this3.editor.deleteText(indexlength);
	      }sourceindex-1 * length);
	    }
	  }{
	    key: 'disable',
	    value: function disable() {
	      this.enable(false);
	    }
	  }{
	    key: 'enable',
	    value: function enable() {
	      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	      this.scroll.enable(enabled);
	      this.container.classList.toggle('ql-disabled'!enabled);
	      if (!enabled) {
	        this.blur();
	      }
	    }
	  }{
	    key: 'focus',
	    value: function focus() {
	      this.selection.focus();
	      this.selection.scrollIntoView();
	    }
	  }{
	    key: 'format',
	    value: function format(namevalue) {
	      var _this4 = this;

	      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

	      return modify.call(thisfunction () {
	        var range = _this4.getSelection(true);
	        var change = new _quillDelta2.default();
	        if (range == null) {
	          return change;
	        } else if (_parchment2.default.query(name_parchment2.default.Scope.BLOCK)) {
	          change = _this4.editor.formatLine(range.indexrange.length_defineProperty({}namevalue));
	        } else if (range.length === 0) {
	          _this4.selection.format(namevalue);
	          return change;
	        } else {
	          change = _this4.editor.formatText(range.indexrange.length_defineProperty({}namevalue));
	        }
	        _this4.setSelection(range_emitter4.default.sources.SILENT);
	        return change;
	      }source);
	    }
	  }{
	    key: 'formatLine',
	    value: function formatLine(indexlengthnamevaluesource) {
	      var _this5 = this;

	      var formats = void 0;

	      var _overload3 = overload(indexlengthnamevaluesource);

	      var _overload4 = _slicedToArray(_overload34);

	      index = _overload4[0];
	      length = _overload4[1];
	      formats = _overload4[2];
	      source = _overload4[3];

	      return modify.call(thisfunction () {
	        return _this5.editor.formatLine(indexlengthformats);
	      }sourceindex0);
	    }
	  }{
	    key: 'formatText',
	    value: function formatText(indexlengthnamevaluesource) {
	      var _this6 = this;

	      var formats = void 0;

	      var _overload5 = overload(indexlengthnamevaluesource);

	      var _overload6 = _slicedToArray(_overload54);

	      index = _overload6[0];
	      length = _overload6[1];
	      formats = _overload6[2];
	      source = _overload6[3];

	      return modify.call(thisfunction () {
	        return _this6.editor.formatText(indexlengthformats);
	      }sourceindex0);
	    }
	  }{
	    key: 'getBounds',
	    value: function getBounds(index) {
	      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	      if (typeof index === 'number') {
	        return this.selection.getBounds(indexlength);
	      } else {
	        return this.selection.getBounds(index.indexindex.length);
	      }
	    }
	  }{
	    key: 'getContents',
	    value: function getContents() {
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

	      var _overload7 = overload(indexlength);

	      var _overload8 = _slicedToArray(_overload72);

	      index = _overload8[0];
	      length = _overload8[1];

	      return this.editor.getContents(indexlength);
	    }
	  }{
	    key: 'getFormat',
	    value: function getFormat() {
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.getSelection();
	      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	      if (typeof index === 'number') {
	        return this.editor.getFormat(indexlength);
	      } else {
	        return this.editor.getFormat(index.indexindex.length);
	      }
	    }
	  }{
	    key: 'getLength',
	    value: function getLength() {
	      return this.scroll.length();
	    }
	  }{
	    key: 'getModule',
	    value: function getModule(name) {
	      return this.theme.modules[name];
	    }
	  }{
	    key: 'getSelection',
	    value: function getSelection() {
	      var focus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

	      if (focus) this.focus();
	      this.update(); // Make sure we access getRange with editor in consistent state
	      return this.selection.getRange()[0];
	    }
	  }{
	    key: 'getText',
	    value: function getText() {
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getLength() - index;

	      var _overload9 = overload(indexlength);

	      var _overload10 = _slicedToArray(_overload92);

	      index = _overload10[0];
	      length = _overload10[1];

	      return this.editor.getText(indexlength);
	    }
	  }{
	    key: 'hasFocus',
	    value: function hasFocus() {
	      return this.selection.hasFocus();
	    }
	  }{
	    key: 'insertEmbed',
	    value: function insertEmbed(indexembedvalue) {
	      var _this7 = this;

	      var source = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : Quill.sources.API;

	      return modify.call(thisfunction () {
	        return _this7.editor.insertEmbed(indexembedvalue);
	      }sourceindex);
	    }
	  }{
	    key: 'insertText',
	    value: function insertText(indextextnamevaluesource) {
	      var _this8 = this;

	      var formats = void 0;

	      var _overload11 = overload(index0namevaluesource);

	      var _overload12 = _slicedToArray(_overload114);

	      index = _overload12[0];
	      formats = _overload12[2];
	      source = _overload12[3];

	      return modify.call(thisfunction () {
	        return _this8.editor.insertText(indextextformats);
	      }sourceindextext.length);
	    }
	  }{
	    key: 'isEnabled',
	    value: function isEnabled() {
	      return !this.container.classList.contains('ql-disabled');
	    }
	  }{
	    key: 'off',
	    value: function off() {
	      return this.emitter.off.apply(this.emitterarguments);
	    }
	  }{
	    key: 'on',
	    value: function on() {
	      return this.emitter.on.apply(this.emitterarguments);
	    }
	  }{
	    key: 'once',
	    value: function once() {
	      return this.emitter.once.apply(this.emitterarguments);
	    }
	  }{
	    key: 'pasteHTML',
	    value: function pasteHTML(indexhtmlsource) {
	      this.clipboard.dangerouslyPasteHTML(indexhtmlsource);
	    }
	  }{
	    key: 'removeFormat',
	    value: function removeFormat(indexlengthsource) {
	      var _this9 = this;

	      var _overload13 = overload(indexlengthsource);

	      var _overload14 = _slicedToArray(_overload134);

	      index = _overload14[0];
	      length = _overload14[1];
	      source = _overload14[3];

	      return modify.call(thisfunction () {
	        return _this9.editor.removeFormat(indexlength);
	      }sourceindex);
	    }
	  }{
	    key: 'setContents',
	    value: function setContents(delta) {
	      var _this10 = this;

	      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

	      return modify.call(thisfunction () {
	        delta = new _quillDelta2.default(delta);
	        var length = _this10.getLength();
	        var deleted = _this10.editor.deleteText(0length);
	        var applied = _this10.editor.applyDelta(delta);
	        var lastOp = applied.ops[applied.ops.length - 1];
	        if (lastOp != null && typeof lastOp.insert === 'string' && lastOp.insert[lastOp.insert.length - 1] === '\n') {
	          _this10.editor.deleteText(_this10.getLength() - 11);
	          applied.delete(1);
	        }
	        var ret = deleted.compose(applied);
	        return ret;
	      }source);
	    }
	  }{
	    key: 'setSelection',
	    value: function setSelection(indexlengthsource) {
	      if (index == null) {
	        this.selection.setRange(nulllength || Quill.sources.API);
	      } else {
	        var _overload15 = overload(indexlengthsource);

	        var _overload16 = _slicedToArray(_overload154);

	        index = _overload16[0];
	        length = _overload16[1];
	        source = _overload16[3];

	        this.selection.setRange(new _selection.Range(indexlength)source);
	      }
	      this.selection.scrollIntoView();
	    }
	  }{
	    key: 'setText',
	    value: function setText(text) {
	      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

	      var delta = new _quillDelta2.default().insert(text);
	      return this.setContents(deltasource);
	    }
	  }{
	    key: 'update',
	    value: function update() {
	      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

	      var change = this.scroll.update(source); // Will update selection before selection.update() does if text changes
	      this.selection.update(source);
	      return change;
	    }
	  }{
	    key: 'updateContents',
	    value: function updateContents(delta) {
	      var _this11 = this;

	      var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _emitter4.default.sources.API;

	      return modify.call(thisfunction () {
	        delta = new _quillDelta2.default(delta);
	        return _this11.editor.applyDelta(deltasource);
	      }sourcetrue);
	    }
	  }]);

	  return Quill;
	}();

	Quill.DEFAULTS = {
	  bounds: null,
	  formats: null,
	  modules: {},
	  placeholder: '',
	  readOnly: false,
	  strict: true,
	  theme: 'default'
	};
	Quill.events = _emitter4.default.events;
	Quill.sources = _emitter4.default.sources;
	// eslint-disable-next-line no-undef
	Quill.version =  false ? 'dev' : ("1.1.6");

	Quill.imports = {
	  'delta': _quillDelta2.default,
	  'parchment': _parchment2.default,
	  'core/module': _module2.default,
	  'core/theme': _theme2.default
	};

	function expandConfig(containeruserConfig) {
	  userConfig = (0_extend2.default)(true{
	    container: container,
	    modules: {
	      clipboard: true,
	      keyboard: true,
	      history: true
	    }
	  }userConfig);
	  if (!userConfig.theme || userConfig.theme === Quill.DEFAULTS.theme) {
	    userConfig.theme = _theme2.default;
	  } else {
	    userConfig.theme = Quill.import('themes/' + userConfig.theme);
	    if (userConfig.theme == null) {
	      throw new Error('Invalid theme ' + userConfig.theme + '. Did you register it?');
	    }
	  }
	  var themeConfig = (0_extend2.default)(true{}userConfig.theme.DEFAULTS);
	  [themeConfiguserConfig].forEach(function (config) {
	    config.modules = config.modules || {};
	    Object.keys(config.modules).forEach(function (module) {
	      if (config.modules[module] === true) {
	        config.modules[module] = {};
	      }
	    });
	  });
	  var moduleNames = Object.keys(themeConfig.modules).concat(Object.keys(userConfig.modules));
	  var moduleConfig = moduleNames.reduce(function (configname) {
	    var moduleClass = Quill.import('modules/' + name);
	    if (moduleClass == null) {
	      debug.error('Cannot load ' + name + ' module. Are you sure you registered it?');
	    } else {
	      config[name] = moduleClass.DEFAULTS || {};
	    }
	    return config;
	  }{});
	  // Special case toolbar shorthand
	  if (userConfig.modules != null && userConfig.modules.toolbar && userConfig.modules.toolbar.constructor !== Object) {
	    userConfig.modules.toolbar = {
	      container: userConfig.modules.toolbar
	    };
	  }
	  userConfig = (0_extend2.default)(true{}Quill.DEFAULTS{ modules: moduleConfig }themeConfiguserConfig);
	  ['bounds''container'].forEach(function (key) {
	    if (typeof userConfig[key] === 'string') {
	      userConfig[key] = document.querySelector(userConfig[key]);
	    }
	  });
	  userConfig.modules = Object.keys(userConfig.modules).reduce(function (configname) {
	    if (userConfig.modules[name]) {
	      config[name] = userConfig.modules[name];
	    }
	    return config;
	  }{});
	  return userConfig;
	}

	// Handle selection preservation and TEXT_CHANGE emission
	// common to modification APIs
	function modify(modifiersourceindexshift) {
	  if (this.options.strict && !this.isEnabled() && source === _emitter4.default.sources.USER) {
	    return new _quillDelta2.default();
	  }
	  var range = index == null ? null : this.getSelection();
	  var oldDelta = this.editor.delta;
	  var change = modifier();
	  if (range != null) {
	    if (index === true) index = range.index;
	    if (shift == null) {
	      range = shiftRange(rangechangesource);
	    } else if (shift !== 0) {
	      range = shiftRange(rangeindexshiftsource);
	    }
	    if (range.index === 0 && range.length === 0) {
	      // Fixes cursor render bug in Chrome for code-block and checklist
	      this.setSelection(null_emitter4.default.sources.SILENT);
	    }
	    this.setSelection(range_emitter4.default.sources.SILENT);
	  }
	  if (change.length() > 0) {
	    var _emitter;

	    var args = [_emitter4.default.events.TEXT_CHANGEchangeoldDeltasource];
	    (_emitter = this.emitter).emit.apply(_emitter[_emitter4.default.events.EDITOR_CHANGE].concat(args));
	    if (source !== _emitter4.default.sources.SILENT) {
	      var _emitter2;

	      (_emitter2 = this.emitter).emit.apply(_emitter2args);
	    }
	  }
	  return change;
	}

	function overload(indexlengthnamevaluesource) {
	  var formats = {};
	  if (typeof index.index === 'number' && typeof index.length === 'number') {
	    // Allow for throwaway end (used by insertText/insertEmbed)
	    if (typeof length !== 'number') {
	      source = valuevalue = namename = lengthlength = index.lengthindex = index.index;
	    } else {
	      length = index.lengthindex = index.index;
	    }
	  } else if (typeof length !== 'number') {
	    source = valuevalue = namename = lengthlength = 0;
	  }
	  // Handle format being objecttwo format name/value strings or excluded
	  if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
	    formats = name;
	    source = value;
	  } else if (typeof name === 'string') {
	    if (value != null) {
	      formats[name] = value;
	    } else {
	      source = name;
	    }
	  }
	  // Handle optional source
	  source = source || _emitter4.default.sources.API;
	  return [indexlengthformatssource];
	}

	function shiftRange(rangeindexlengthsource) {
	  if (range == null) return null;
	  var start = void 0,
	      end = void 0;
	  if (index instanceof _quillDelta2.default) {
	    var _map = [range.indexrange.index + range.length].map(function (pos) {
	      return index.transformPosition(possource === _emitter4.default.sources.USER);
	    });

	    var _map2 = _slicedToArray(_map2);

	    start = _map2[0];
	    end = _map2[1];
	  } else {
	    var _map3 = [range.indexrange.index + range.length].map(function (pos) {
	      if (pos < index || pos === index && source !== _emitter4.default.sources.USER) return pos;
	      if (length >= 0) {
	        return pos + length;
	      } else {
	        return Math.max(indexpos + length);
	      }
	    });

	    var _map4 = _slicedToArray(_map32);

	    start = _map4[0];
	    end = _map4[1];
	  }
	  return new _selection.Range(startend - start);
	}

	exports.expandConfig = expandConfig;
	exports.overload = overload;
	exports.default = Quill;

/***/ },
/* 19 */
/***/ function(moduleexports) {

	'use strict';

	var elem = document.createElement('div');
	elem.classList.toggle('test-class'false);
	if (elem.classList.contains('test-class')) {
	  (function () {
	    var _toggle = DOMTokenList.prototype.toggle;
	    DOMTokenList.prototype.toggle = function (tokenforce) {
	      if (arguments.length > 1 && !this.contains(token) === !force) {
	        return force;
	      } else {
	        return _toggle.call(thistoken);
	      }
	    };
	  })();
	}

	if (!String.prototype.startsWith) {
	  String.prototype.startsWith = function (searchStringposition) {
	    position = position || 0;
	    return this.substr(positionsearchString.length) === searchString;
	  };
	}

	if (!String.prototype.endsWith) {
	  String.prototype.endsWith = function (searchStringposition) {
	    var subjectString = this.toString();
	    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
	      position = subjectString.length;
	    }
	    position -= searchString.length;
	    var lastIndex = subjectString.indexOf(searchStringposition);
	    return lastIndex !== -1 && lastIndex === position;
	  };
	}

	if (!Array.prototype.find) {
	  Object.defineProperty(Array.prototype"find"{
	    value: function value(predicate) {
	      if (this === null) {
	        throw new TypeError('Array.prototype.find called on null or undefined');
	      }
	      if (typeof predicate !== 'function') {
	        throw new TypeError('predicate must be a function');
	      }
	      var list = Object(this);
	      var length = list.length >>> 0;
	      var thisArg = arguments[1];
	      var value;

	      for (var i = 0; i < length; i++) {
	        value = list[i];
	        if (predicate.call(thisArgvalueilist)) {
	          return value;
	        }
	      }
	      return undefined;
	    }
	  });
	}

	// Disable resizing in Firefox
	document.addEventListener("DOMContentLoaded"function () {
	  document.execCommand("enableObjectResizing"falsefalse);
	});

/***/ },
/* 20 */
/***/ function(moduleexports__webpack_require__) {

	var diff = __webpack_require__(21);
	var equal = __webpack_require__(22);
	var extend = __webpack_require__(25);
	var op = __webpack_require__(26);


	var NULL_CHARACTER = String.fromCharCode(0);  // Placeholder char for embed in diff()


	var Delta = function (ops) {
	  // Assume we are given a well formed ops
	  if (Array.isArray(ops)) {
	    this.ops = ops;
	  } else if (ops != null && Array.isArray(ops.ops)) {
	    this.ops = ops.ops;
	  } else {
	    this.ops = [];
	  }
	};


	Delta.prototype.insert = function (textattributes) {
	  var newOp = {};
	  if (text.length === 0) return this;
	  newOp.insert = text;
	  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
	    newOp.attributes = attributes;
	  }
	  return this.push(newOp);
	};

	Delta.prototype['delete'] = function (length) {
	  if (length <= 0) return this;
	  return this.push({ 'delete': length });
	};

	Delta.prototype.retain = function (lengthattributes) {
	  if (length <= 0) return this;
	  var newOp = { retain: length };
	  if (attributes != null && typeof attributes === 'object' && Object.keys(attributes).length > 0) {
	    newOp.attributes = attributes;
	  }
	  return this.push(newOp);
	};

	Delta.prototype.push = function (newOp) {
	  var index = this.ops.length;
	  var lastOp = this.ops[index - 1];
	  newOp = extend(true{}newOp);
	  if (typeof lastOp === 'object') {
	    if (typeof newOp['delete'] === 'number' && typeof lastOp['delete'] === 'number') {
	      this.ops[index - 1] = { 'delete': lastOp['delete'] + newOp['delete'] };
	      return this;
	    }
	    // Since it does not matter if we insert before or after deleting at the same index,
	    // always prefer to insert first
	    if (typeof lastOp['delete'] === 'number' && newOp.insert != null) {
	      index -= 1;
	      lastOp = this.ops[index - 1];
	      if (typeof lastOp !== 'object') {
	        this.ops.unshift(newOp);
	        return this;
	      }
	    }
	    if (equal(newOp.attributeslastOp.attributes)) {
	      if (typeof newOp.insert === 'string' && typeof lastOp.insert === 'string') {
	        this.ops[index - 1] = { insert: lastOp.insert + newOp.insert };
	        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
	        return this;
	      } else if (typeof newOp.retain === 'number' && typeof lastOp.retain === 'number') {
	        this.ops[index - 1] = { retain: lastOp.retain + newOp.retain };
	        if (typeof newOp.attributes === 'object') this.ops[index - 1].attributes = newOp.attributes
	        return this;
	      }
	    }
	  }
	  if (index === this.ops.length) {
	    this.ops.push(newOp);
	  } else {
	    this.ops.splice(index0newOp);
	  }
	  return this;
	};

	Delta.prototype.filter = function (predicate) {
	  return this.ops.filter(predicate);
	};

	Delta.prototype.forEach = function (predicate) {
	  this.ops.forEach(predicate);
	};

	Delta.prototype.map = function (predicate) {
	  return this.ops.map(predicate);
	};

	Delta.prototype.partition = function (predicate) {
	  var passed = []failed = [];
	  this.forEach(function(op) {
	    var target = predicate(op) ? passed : failed;
	    target.push(op);
	  });
	  return [passedfailed];
	};

	Delta.prototype.reduce = function (predicateinitial) {
	  return this.ops.reduce(predicateinitial);
	};

	Delta.prototype.chop = function () {
	  var lastOp = this.ops[this.ops.length - 1];
	  if (lastOp && lastOp.retain && !lastOp.attributes) {
	    this.ops.pop();
	  }
	  return this;
	};

	Delta.prototype.length = function () {
	  return this.reduce(function (lengthelem) {
	    return length + op.length(elem);
	  }0);
	};

	Delta.prototype.slice = function (startend) {
	  start = start || 0;
	  if (typeof end !== 'number') end = Infinity;
	  var ops = [];
	  var iter = op.iterator(this.ops);
	  var index = 0;
	  while (index < end && iter.hasNext()) {
	    var nextOp;
	    if (index < start) {
	      nextOp = iter.next(start - index);
	    } else {
	      nextOp = iter.next(end - index);
	      ops.push(nextOp);
	    }
	    index += op.length(nextOp);
	  }
	  return new Delta(ops);
	};


	Delta.prototype.compose = function (other) {
	  var thisIter = op.iterator(this.ops);
	  var otherIter = op.iterator(other.ops);
	  var delta = new Delta();
	  while (thisIter.hasNext() || otherIter.hasNext()) {
	    if (otherIter.peekType() === 'insert') {
	      delta.push(otherIter.next());
	    } else if (thisIter.peekType() === 'delete') {
	      delta.push(thisIter.next());
	    } else {
	      var length = Math.min(thisIter.peekLength()otherIter.peekLength());
	      var thisOp = thisIter.next(length);
	      var otherOp = otherIter.next(length);
	      if (typeof otherOp.retain === 'number') {
	        var newOp = {};
	        if (typeof thisOp.retain === 'number') {
	          newOp.retain = length;
	        } else {
	          newOp.insert = thisOp.insert;
	        }
	        // Preserve null when composing with a retainotherwise remove it for inserts
	        var attributes = op.attributes.compose(thisOp.attributesotherOp.attributestypeof thisOp.retain === 'number');
	        if (attributes) newOp.attributes = attributes;
	        delta.push(newOp);
	      // Other op should be deletewe could be an insert or retain
	      // Insert + delete cancels out
	      } else if (typeof otherOp['delete'] === 'number' && typeof thisOp.retain === 'number') {
	        delta.push(otherOp);
	      }
	    }
	  }
	  return delta.chop();
	};

	Delta.prototype.concat = function (other) {
	  var delta = new Delta(this.ops.slice());
	  if (other.ops.length > 0) {
	    delta.push(other.ops[0]);
	    delta.ops = delta.ops.concat(other.ops.slice(1));
	  }
	  return delta;
	};

	Delta.prototype.diff = function (otherindex) {
	  if (this.ops === other.ops) {
	    return new Delta();
	  }
	  var strings = [thisother].map(function (delta) {
	    return delta.map(function (op) {
	      if (op.insert != null) {
	        return typeof op.insert === 'string' ? op.insert : NULL_CHARACTER;
	      }
	      var prep = (ops === other.ops) ? 'on' : 'with';
	      throw new Error('diff() called ' + prep + ' non-document');
	    }).join('');
	  });
	  var delta = new Delta();
	  var diffResult = diff(strings[0]strings[1]index);
	  var thisIter = op.iterator(this.ops);
	  var otherIter = op.iterator(other.ops);
	  diffResult.forEach(function (component) {
	    var length = component[1].length;
	    while (length > 0) {
	      var opLength = 0;
	      switch (component[0]) {
	        case diff.INSERT:
	          opLength = Math.min(otherIter.peekLength()length);
	          delta.push(otherIter.next(opLength));
	          break;
	        case diff.DELETE:
	          opLength = Math.min(lengththisIter.peekLength());
	          thisIter.next(opLength);
	          delta['delete'](opLength);
	          break;
	        case diff.EQUAL:
	          opLength = Math.min(thisIter.peekLength()otherIter.peekLength()length);
	          var thisOp = thisIter.next(opLength);
	          var otherOp = otherIter.next(opLength);
	          if (equal(thisOp.insertotherOp.insert)) {
	            delta.retain(opLengthop.attributes.diff(thisOp.attributesotherOp.attributes));
	          } else {
	            delta.push(otherOp)['delete'](opLength);
	          }
	          break;
	      }
	      length -= opLength;
	    }
	  });
	  return delta.chop();
	};

	Delta.prototype.eachLine = function (predicatenewline) {
	  newline = newline || '\n';
	  var iter = op.iterator(this.ops);
	  var line = new Delta();
	  while (iter.hasNext()) {
	    if (iter.peekType() !== 'insert') return;
	    var thisOp = iter.peek();
	    var start = op.length(thisOp) - iter.peekLength();
	    var index = typeof thisOp.insert === 'string' ?
	      thisOp.insert.indexOf(newlinestart) - start : -1;
	    if (index < 0) {
	      line.push(iter.next());
	    } else if (index > 0) {
	      line.push(iter.next(index));
	    } else {
	      predicate(lineiter.next(1).attributes || {});
	      line = new Delta();
	    }
	  }
	  if (line.length() > 0) {
	    predicate(line{});
	  }
	};

	Delta.prototype.transform = function (otherpriority) {
	  priority = !!priority;
	  if (typeof other === 'number') {
	    return this.transformPosition(otherpriority);
	  }
	  var thisIter = op.iterator(this.ops);
	  var otherIter = op.iterator(other.ops);
	  var delta = new Delta();
	  while (thisIter.hasNext() || otherIter.hasNext()) {
	    if (thisIter.peekType() === 'insert' && (priority || otherIter.peekType() !== 'insert')) {
	      delta.retain(op.length(thisIter.next()));
	    } else if (otherIter.peekType() === 'insert') {
	      delta.push(otherIter.next());
	    } else {
	      var length = Math.min(thisIter.peekLength()otherIter.peekLength());
	      var thisOp = thisIter.next(length);
	      var otherOp = otherIter.next(length);
	      if (thisOp['delete']) {
	        // Our delete either makes their delete redundant or removes their retain
	        continue;
	      } else if (otherOp['delete']) {
	        delta.push(otherOp);
	      } else {
	        // We retain either their retain or insert
	        delta.retain(lengthop.attributes.transform(thisOp.attributesotherOp.attributespriority));
	      }
	    }
	  }
	  return delta.chop();
	};

	Delta.prototype.transformPosition = function (indexpriority) {
	  priority = !!priority;
	  var thisIter = op.iterator(this.ops);
	  var offset = 0;
	  while (thisIter.hasNext() && offset <= index) {
	    var length = thisIter.peekLength();
	    var nextType = thisIter.peekType();
	    thisIter.next();
	    if (nextType === 'delete') {
	      index -= Math.min(lengthindex - offset);
	      continue;
	    } else if (nextType === 'insert' && (offset < index || !priority)) {
	      index += length;
	    }
	    offset += length;
	  }
	  return index;
	};


	module.exports = Delta;


/***/ },
/* 21 */
/***/ function(moduleexports) {

	/**
	 * This library modifies the diff-patch-match library by Neil Fraser
	 * by removing the patch and match functionality and certain advanced
	 * options in the diff function. The original license is as follows:
	 *
	 * ===
	 *
	 * Diff Match and Patch
	 *
	 * Copyright 2006 Google Inc.
	 * http://code.google.com/p/google-diff-match-patch/
	 *
	 * Licensed under the Apache LicenseVersion 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *   http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writingsoftware
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KINDeither express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */


	/**
	 * The data structure representing a diff is an array of tuples:
	 * [[DIFF_DELETE'Hello'][DIFF_INSERT'Goodbye'][DIFF_EQUAL' world.']]
	 * which means: delete 'Hello'add 'Goodbye' and keep ' world.'
	 */
	var DIFF_DELETE = -1;
	var DIFF_INSERT = 1;
	var DIFF_EQUAL = 0;


	/**
	 * Find the differences between two texts.  Simplifies the problem by stripping
	 * any common prefix or suffix off the texts before diffing.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {Int} cursor_pos Expected edit position in text1 (optional)
	 * @return {Array} Array of diff tuples.
	 */
	function diff_main(text1text2cursor_pos) {
	  // Check for equality (speedup).
	  if (text1 == text2) {
	    if (text1) {
	      return [[DIFF_EQUALtext1]];
	    }
	    return [];
	  }

	  // Check cursor_pos within bounds
	  if (cursor_pos < 0 || text1.length < cursor_pos) {
	    cursor_pos = null;
	  }

	  // Trim off common prefix (speedup).
	  var commonlength = diff_commonPrefix(text1text2);
	  var commonprefix = text1.substring(0commonlength);
	  text1 = text1.substring(commonlength);
	  text2 = text2.substring(commonlength);

	  // Trim off common suffix (speedup).
	  commonlength = diff_commonSuffix(text1text2);
	  var commonsuffix = text1.substring(text1.length - commonlength);
	  text1 = text1.substring(0text1.length - commonlength);
	  text2 = text2.substring(0text2.length - commonlength);

	  // Compute the diff on the middle block.
	  var diffs = diff_compute_(text1text2);

	  // Restore the prefix and suffix.
	  if (commonprefix) {
	    diffs.unshift([DIFF_EQUALcommonprefix]);
	  }
	  if (commonsuffix) {
	    diffs.push([DIFF_EQUALcommonsuffix]);
	  }
	  diff_cleanupMerge(diffs);
	  if (cursor_pos != null) {
	    diffs = fix_cursor(diffscursor_pos);
	  }
	  return diffs;
	};


	/**
	 * Find the differences between two texts.  Assumes that the texts do not
	 * have any common prefix or suffix.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @return {Array} Array of diff tuples.
	 */
	function diff_compute_(text1text2) {
	  var diffs;

	  if (!text1) {
	    // Just add some text (speedup).
	    return [[DIFF_INSERTtext2]];
	  }

	  if (!text2) {
	    // Just delete some text (speedup).
	    return [[DIFF_DELETEtext1]];
	  }

	  var longtext = text1.length > text2.length ? text1 : text2;
	  var shorttext = text1.length > text2.length ? text2 : text1;
	  var i = longtext.indexOf(shorttext);
	  if (i != -1) {
	    // Shorter text is inside the longer text (speedup).
	    diffs = [[DIFF_INSERTlongtext.substring(0i)],
	             [DIFF_EQUALshorttext],
	             [DIFF_INSERTlongtext.substring(i + shorttext.length)]];
	    // Swap insertions for deletions if diff is reversed.
	    if (text1.length > text2.length) {
	      diffs[0][0] = diffs[2][0] = DIFF_DELETE;
	    }
	    return diffs;
	  }

	  if (shorttext.length == 1) {
	    // Single character string.
	    // After the previous speedupthe character can't be an equality.
	    return [[DIFF_DELETEtext1][DIFF_INSERTtext2]];
	  }

	  // Check to see if the problem can be split in two.
	  var hm = diff_halfMatch_(text1text2);
	  if (hm) {
	    // A half-match was foundsort out the return data.
	    var text1_a = hm[0];
	    var text1_b = hm[1];
	    var text2_a = hm[2];
	    var text2_b = hm[3];
	    var mid_common = hm[4];
	    // Send both pairs off for separate processing.
	    var diffs_a = diff_main(text1_atext2_a);
	    var diffs_b = diff_main(text1_btext2_b);
	    // Merge the results.
	    return diffs_a.concat([[DIFF_EQUALmid_common]]diffs_b);
	  }

	  return diff_bisect_(text1text2);
	};


	/**
	 * Find the 'middle snake' of a diffsplit the problem in two
	 * and return the recursively constructed diff.
	 * See Myers 1986 paper: An O(ND) Difference Algorithm and Its Variations.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @return {Array} Array of diff tuples.
	 * @private
	 */
	function diff_bisect_(text1text2) {
	  // Cache the text lengths to prevent multiple calls.
	  var text1_length = text1.length;
	  var text2_length = text2.length;
	  var max_d = Math.ceil((text1_length + text2_length) / 2);
	  var v_offset = max_d;
	  var v_length = 2 * max_d;
	  var v1 = new Array(v_length);
	  var v2 = new Array(v_length);
	  // Setting all elements to -1 is faster in Chrome & Firefox than mixing
	  // integers and undefined.
	  for (var x = 0; x < v_length; x++) {
	    v1[x] = -1;
	    v2[x] = -1;
	  }
	  v1[v_offset + 1] = 0;
	  v2[v_offset + 1] = 0;
	  var delta = text1_length - text2_length;
	  // If the total number of characters is oddthen the front path will collide
	  // with the reverse path.
	  var front = (delta % 2 != 0);
	  // Offsets for start and end of k loop.
	  // Prevents mapping of space beyond the grid.
	  var k1start = 0;
	  var k1end = 0;
	  var k2start = 0;
	  var k2end = 0;
	  for (var d = 0; d < max_d; d++) {
	    // Walk the front path one step.
	    for (var k1 = -d + k1start; k1 <= d - k1end; k1 += 2) {
	      var k1_offset = v_offset + k1;
	      var x1;
	      if (k1 == -d || (k1 != d && v1[k1_offset - 1] < v1[k1_offset + 1])) {
	        x1 = v1[k1_offset + 1];
	      } else {
	        x1 = v1[k1_offset - 1] + 1;
	      }
	      var y1 = x1 - k1;
	      while (x1 < text1_length && y1 < text2_length &&
	             text1.charAt(x1) == text2.charAt(y1)) {
	        x1++;
	        y1++;
	      }
	      v1[k1_offset] = x1;
	      if (x1 > text1_length) {
	        // Ran off the right of the graph.
	        k1end += 2;
	      } else if (y1 > text2_length) {
	        // Ran off the bottom of the graph.
	        k1start += 2;
	      } else if (front) {
	        var k2_offset = v_offset + delta - k1;
	        if (k2_offset >= 0 && k2_offset < v_length && v2[k2_offset] != -1) {
	          // Mirror x2 onto top-left coordinate system.
	          var x2 = text1_length - v2[k2_offset];
	          if (x1 >= x2) {
	            // Overlap detected.
	            return diff_bisectSplit_(text1text2x1y1);
	          }
	        }
	      }
	    }

	    // Walk the reverse path one step.
	    for (var k2 = -d + k2start; k2 <= d - k2end; k2 += 2) {
	      var k2_offset = v_offset + k2;
	      var x2;
	      if (k2 == -d || (k2 != d && v2[k2_offset - 1] < v2[k2_offset + 1])) {
	        x2 = v2[k2_offset + 1];
	      } else {
	        x2 = v2[k2_offset - 1] + 1;
	      }
	      var y2 = x2 - k2;
	      while (x2 < text1_length && y2 < text2_length &&
	             text1.charAt(text1_length - x2 - 1) ==
	             text2.charAt(text2_length - y2 - 1)) {
	        x2++;
	        y2++;
	      }
	      v2[k2_offset] = x2;
	      if (x2 > text1_length) {
	        // Ran off the left of the graph.
	        k2end += 2;
	      } else if (y2 > text2_length) {
	        // Ran off the top of the graph.
	        k2start += 2;
	      } else if (!front) {
	        var k1_offset = v_offset + delta - k2;
	        if (k1_offset >= 0 && k1_offset < v_length && v1[k1_offset] != -1) {
	          var x1 = v1[k1_offset];
	          var y1 = v_offset + x1 - k1_offset;
	          // Mirror x2 onto top-left coordinate system.
	          x2 = text1_length - x2;
	          if (x1 >= x2) {
	            // Overlap detected.
	            return diff_bisectSplit_(text1text2x1y1);
	          }
	        }
	      }
	    }
	  }
	  // Diff took too long and hit the deadline or
	  // number of diffs equals number of charactersno commonality at all.
	  return [[DIFF_DELETEtext1][DIFF_INSERTtext2]];
	};


	/**
	 * Given the location of the 'middle snake'split the diff in two parts
	 * and recurse.
	 * @param {string} text1 Old string to be diffed.
	 * @param {string} text2 New string to be diffed.
	 * @param {number} x Index of split point in text1.
	 * @param {number} y Index of split point in text2.
	 * @return {Array} Array of diff tuples.
	 */
	function diff_bisectSplit_(text1text2xy) {
	  var text1a = text1.substring(0x);
	  var text2a = text2.substring(0y);
	  var text1b = text1.substring(x);
	  var text2b = text2.substring(y);

	  // Compute both diffs serially.
	  var diffs = diff_main(text1atext2a);
	  var diffsb = diff_main(text1btext2b);

	  return diffs.concat(diffsb);
	};


	/**
	 * Determine the common prefix of two strings.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the start of each
	 *     string.
	 */
	function diff_commonPrefix(text1text2) {
	  // Quick check for common null cases.
	  if (!text1 || !text2 || text1.charAt(0) != text2.charAt(0)) {
	    return 0;
	  }
	  // Binary search.
	  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
	  var pointermin = 0;
	  var pointermax = Math.min(text1.lengthtext2.length);
	  var pointermid = pointermax;
	  var pointerstart = 0;
	  while (pointermin < pointermid) {
	    if (text1.substring(pointerstartpointermid) ==
	        text2.substring(pointerstartpointermid)) {
	      pointermin = pointermid;
	      pointerstart = pointermin;
	    } else {
	      pointermax = pointermid;
	    }
	    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
	  }
	  return pointermid;
	};


	/**
	 * Determine the common suffix of two strings.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {number} The number of characters common to the end of each string.
	 */
	function diff_commonSuffix(text1text2) {
	  // Quick check for common null cases.
	  if (!text1 || !text2 ||
	      text1.charAt(text1.length - 1) != text2.charAt(text2.length - 1)) {
	    return 0;
	  }
	  // Binary search.
	  // Performance analysis: http://neil.fraser.name/news/2007/10/09/
	  var pointermin = 0;
	  var pointermax = Math.min(text1.lengthtext2.length);
	  var pointermid = pointermax;
	  var pointerend = 0;
	  while (pointermin < pointermid) {
	    if (text1.substring(text1.length - pointermidtext1.length - pointerend) ==
	        text2.substring(text2.length - pointermidtext2.length - pointerend)) {
	      pointermin = pointermid;
	      pointerend = pointermin;
	    } else {
	      pointermax = pointermid;
	    }
	    pointermid = Math.floor((pointermax - pointermin) / 2 + pointermin);
	  }
	  return pointermid;
	};


	/**
	 * Do the two texts share a substring which is at least half the length of the
	 * longer text?
	 * This speedup can produce non-minimal diffs.
	 * @param {string} text1 First string.
	 * @param {string} text2 Second string.
	 * @return {Array.<string>} Five element Arraycontaining the prefix of
	 *     text1the suffix of text1the prefix of text2the suffix of
	 *     text2 and the common middle.  Or null if there was no match.
	 */
	function diff_halfMatch_(text1text2) {
	  var longtext = text1.length > text2.length ? text1 : text2;
	  var shorttext = text1.length > text2.length ? text2 : text1;
	  if (longtext.length < 4 || shorttext.length * 2 < longtext.length) {
	    return null;  // Pointless.
	  }

	  /**
	   * Does a substring of shorttext exist within longtext such that the substring
	   * is at least half the length of longtext?
	   * Closurebut does not reference any external variables.
	   * @param {string} longtext Longer string.
	   * @param {string} shorttext Shorter string.
	   * @param {number} i Start index of quarter length substring within longtext.
	   * @return {Array.<string>} Five element Arraycontaining the prefix of
	   *     longtextthe suffix of longtextthe prefix of shorttextthe suffix
	   *     of shorttext and the common middle.  Or null if there was no match.
	   * @private
	   */
	  function diff_halfMatchI_(longtextshorttexti) {
	    // Start with a 1/4 length substring at position i as a seed.
	    var seed = longtext.substring(ii + Math.floor(longtext.length / 4));
	    var j = -1;
	    var best_common = '';
	    var best_longtext_abest_longtext_bbest_shorttext_abest_shorttext_b;
	    while ((j = shorttext.indexOf(seedj + 1)) != -1) {
	      var prefixLength = diff_commonPrefix(longtext.substring(i),
	                                           shorttext.substring(j));
	      var suffixLength = diff_commonSuffix(longtext.substring(0i),
	                                           shorttext.substring(0j));
	      if (best_common.length < suffixLength + prefixLength) {
	        best_common = shorttext.substring(j - suffixLengthj) +
	            shorttext.substring(jj + prefixLength);
	        best_longtext_a = longtext.substring(0i - suffixLength);
	        best_longtext_b = longtext.substring(i + prefixLength);
	        best_shorttext_a = shorttext.substring(0j - suffixLength);
	        best_shorttext_b = shorttext.substring(j + prefixLength);
	      }
	    }
	    if (best_common.length * 2 >= longtext.length) {
	      return [best_longtext_abest_longtext_b,
	              best_shorttext_abest_shorttext_bbest_common];
	    } else {
	      return null;
	    }
	  }

	  // First check if the second quarter is the seed for a half-match.
	  var hm1 = diff_halfMatchI_(longtextshorttext,
	                             Math.ceil(longtext.length / 4));
	  // Check again based on the third quarter.
	  var hm2 = diff_halfMatchI_(longtextshorttext,
	                             Math.ceil(longtext.length / 2));
	  var hm;
	  if (!hm1 && !hm2) {
	    return null;
	  } else if (!hm2) {
	    hm = hm1;
	  } else if (!hm1) {
	    hm = hm2;
	  } else {
	    // Both matched.  Select the longest.
	    hm = hm1[4].length > hm2[4].length ? hm1 : hm2;
	  }

	  // A half-match was foundsort out the return data.
	  var text1_atext1_btext2_atext2_b;
	  if (text1.length > text2.length) {
	    text1_a = hm[0];
	    text1_b = hm[1];
	    text2_a = hm[2];
	    text2_b = hm[3];
	  } else {
	    text2_a = hm[0];
	    text2_b = hm[1];
	    text1_a = hm[2];
	    text1_b = hm[3];
	  }
	  var mid_common = hm[4];
	  return [text1_atext1_btext2_atext2_bmid_common];
	};


	/**
	 * Reorder and merge like edit sections.  Merge equalities.
	 * Any edit section can move as long as it doesn't cross an equality.
	 * @param {Array} diffs Array of diff tuples.
	 */
	function diff_cleanupMerge(diffs) {
	  diffs.push([DIFF_EQUAL'']);  // Add a dummy entry at the end.
	  var pointer = 0;
	  var count_delete = 0;
	  var count_insert = 0;
	  var text_delete = '';
	  var text_insert = '';
	  var commonlength;
	  while (pointer < diffs.length) {
	    switch (diffs[pointer][0]) {
	      case DIFF_INSERT:
	        count_insert++;
	        text_insert += diffs[pointer][1];
	        pointer++;
	        break;
	      case DIFF_DELETE:
	        count_delete++;
	        text_delete += diffs[pointer][1];
	        pointer++;
	        break;
	      case DIFF_EQUAL:
	        // Upon reaching an equalitycheck for prior redundancies.
	        if (count_delete + count_insert > 1) {
	          if (count_delete !== 0 && count_insert !== 0) {
	            // Factor out any common prefixies.
	            commonlength = diff_commonPrefix(text_inserttext_delete);
	            if (commonlength !== 0) {
	              if ((pointer - count_delete - count_insert) > 0 &&
	                  diffs[pointer - count_delete - count_insert - 1][0] ==
	                  DIFF_EQUAL) {
	                diffs[pointer - count_delete - count_insert - 1][1] +=
	                    text_insert.substring(0commonlength);
	              } else {
	                diffs.splice(00[DIFF_EQUAL,
	                                    text_insert.substring(0commonlength)]);
	                pointer++;
	              }
	              text_insert = text_insert.substring(commonlength);
	              text_delete = text_delete.substring(commonlength);
	            }
	            // Factor out any common suffixies.
	            commonlength = diff_commonSuffix(text_inserttext_delete);
	            if (commonlength !== 0) {
	              diffs[pointer][1] = text_insert.substring(text_insert.length -
	                  commonlength) + diffs[pointer][1];
	              text_insert = text_insert.substring(0text_insert.length -
	                  commonlength);
	              text_delete = text_delete.substring(0text_delete.length -
	                  commonlength);
	            }
	          }
	          // Delete the offending records and add the merged ones.
	          if (count_delete === 0) {
	            diffs.splice(pointer - count_insert,
	                count_delete + count_insert[DIFF_INSERTtext_insert]);
	          } else if (count_insert === 0) {
	            diffs.splice(pointer - count_delete,
	                count_delete + count_insert[DIFF_DELETEtext_delete]);
	          } else {
	            diffs.splice(pointer - count_delete - count_insert,
	                count_delete + count_insert[DIFF_DELETEtext_delete],
	                [DIFF_INSERTtext_insert]);
	          }
	          pointer = pointer - count_delete - count_insert +
	                    (count_delete ? 1 : 0) + (count_insert ? 1 : 0) + 1;
	        } else if (pointer !== 0 && diffs[pointer - 1][0] == DIFF_EQUAL) {
	          // Merge this equality with the previous one.
	          diffs[pointer - 1][1] += diffs[pointer][1];
	          diffs.splice(pointer1);
	        } else {
	          pointer++;
	        }
	        count_insert = 0;
	        count_delete = 0;
	        text_delete = '';
	        text_insert = '';
	        break;
	    }
	  }
	  if (diffs[diffs.length - 1][1] === '') {
	    diffs.pop();  // Remove the dummy entry at the end.
	  }

	  // Second pass: look for single edits surrounded on both sides by equalities
	  // which can be shifted sideways to eliminate an equality.
	  // e.g: A<ins>BA</ins>C -> <ins>AB</ins>AC
	  var changes = false;
	  pointer = 1;
	  // Intentionally ignore the first and last element (don't need checking).
	  while (pointer < diffs.length - 1) {
	    if (diffs[pointer - 1][0] == DIFF_EQUAL &&
	        diffs[pointer + 1][0] == DIFF_EQUAL) {
	      // This is a single edit surrounded by equalities.
	      if (diffs[pointer][1].substring(diffs[pointer][1].length -
	          diffs[pointer - 1][1].length) == diffs[pointer - 1][1]) {
	        // Shift the edit over the previous equality.
	        diffs[pointer][1] = diffs[pointer - 1][1] +
	            diffs[pointer][1].substring(0diffs[pointer][1].length -
	                                        diffs[pointer - 1][1].length);
	        diffs[pointer + 1][1] = diffs[pointer - 1][1] + diffs[pointer + 1][1];
	        diffs.splice(pointer - 11);
	        changes = true;
	      } else if (diffs[pointer][1].substring(0diffs[pointer + 1][1].length) ==
	          diffs[pointer + 1][1]) {
	        // Shift the edit over the next equality.
	        diffs[pointer - 1][1] += diffs[pointer + 1][1];
	        diffs[pointer][1] =
	            diffs[pointer][1].substring(diffs[pointer + 1][1].length) +
	            diffs[pointer + 1][1];
	        diffs.splice(pointer + 11);
	        changes = true;
	      }
	    }
	    pointer++;
	  }
	  // If shifts were madethe diff needs reordering and another shift sweep.
	  if (changes) {
	    diff_cleanupMerge(diffs);
	  }
	};


	var diff = diff_main;
	diff.INSERT = DIFF_INSERT;
	diff.DELETE = DIFF_DELETE;
	diff.EQUAL = DIFF_EQUAL;

	module.exports = diff;

	/*
	 * Modify a diff such that the cursor position points to the start of a change:
	 * E.g.
	 *   cursor_normalize_diff([[DIFF_EQUAL'abc']]1)
	 *     => [1[[DIFF_EQUAL'a'][DIFF_EQUAL'bc']]]
	 *   cursor_normalize_diff([[DIFF_INSERT'new'][DIFF_DELETE'xyz']]2)
	 *     => [2[[DIFF_INSERT'new'][DIFF_DELETE'xy'][DIFF_DELETE'z']]]
	 *
	 * @param {Array} diffs Array of diff tuples
	 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
	 * @return {Array} A tuple [cursor location in the modified diffmodified diff]
	 */
	function cursor_normalize_diff (diffscursor_pos) {
	  if (cursor_pos === 0) {
	    return [DIFF_EQUALdiffs];
	  }
	  for (var current_pos = 0i = 0; i < diffs.length; i++) {
	    var d = diffs[i];
	    if (d[0] === DIFF_DELETE || d[0] === DIFF_EQUAL) {
	      var next_pos = current_pos + d[1].length;
	      if (cursor_pos === next_pos) {
	        return [i + 1diffs];
	      } else if (cursor_pos < next_pos) {
	        // copy to prevent side effects
	        diffs = diffs.slice();
	        // split d into two diff changes
	        var split_pos = cursor_pos - current_pos;
	        var d_left = [d[0]d[1].slice(0split_pos)];
	        var d_right = [d[0]d[1].slice(split_pos)];
	        diffs.splice(i1d_leftd_right);
	        return [i + 1diffs];
	      } else {
	        current_pos = next_pos;
	      }
	    }
	  }
	  throw new Error('cursor_pos is out of bounds!')
	}

	/*
	 * Modify a diff such that the edit position is "shifted" to the proposed edit location (cursor_position).
	 *
	 * Case 1)
	 *   Check if a naive shift is possible:
	 *     [0X][ 1Y] -> [ 1Y][0X]    (if X + Y === Y + X)
	 *     [0X][-1Y] -> [-1Y][0X]    (if X + Y === Y + X) - holds same result
	 * Case 2)
	 *   Check if the following shifts are possible:
	 *     [0'pre'][ 1'prefix'] -> [ 1'pre'][0'pre'][ 1'fix']
	 *     [0'pre'][-1'prefix'] -> [-1'pre'][0'pre'][-1'fix']
	 *         ^            ^
	 *         d          d_next
	 *
	 * @param {Array} diffs Array of diff tuples
	 * @param {Int} cursor_pos Suggested edit position. Must not be out of bounds!
	 * @return {Array} Array of diff tuples
	 */
	function fix_cursor (diffscursor_pos) {
	  var norm = cursor_normalize_diff(diffscursor_pos);
	  var ndiffs = norm[1];
	  var cursor_pointer = norm[0];
	  var d = ndiffs[cursor_pointer];
	  var d_next = ndiffs[cursor_pointer + 1];

	  if (d == null) {
	    // Text was deleted from end of original string,
	    // cursor is now out of bounds in new string
	    return diffs;
	  } else if (d[0] !== DIFF_EQUAL) {
	    // A modification happened at the cursor location.
	    // This is the expected outcomeso we can return the original diff.
	    return diffs;
	  } else {
	    if (d_next != null && d[1] + d_next[1] === d_next[1] + d[1]) {
	      // Case 1)
	      // It is possible to perform a naive shift
	      ndiffs.splice(cursor_pointer2d_nextd)
	      return merge_tuples(ndiffscursor_pointer2)
	    } else if (d_next != null && d_next[1].indexOf(d[1]) === 0) {
	      // Case 2)
	      // d[1] is a prefix of d_next[1]
	      // We can assume that d_next[0] !== 0since d[0] === 0
	      // Shift edit locations..
	      ndiffs.splice(cursor_pointer2[d_next[0]d[1]][0d[1]]);
	      var suffix = d_next[1].slice(d[1].length);
	      if (suffix.length > 0) {
	        ndiffs.splice(cursor_pointer + 20[d_next[0]suffix]);
	      }
	      return merge_tuples(ndiffscursor_pointer3)
	    } else {
	      // Not possible to perform any modification
	      return diffs;
	    }
	  }

	}

	/*
	 * Try to merge tuples with their neigbors in a given range.
	 * E.g. [0'a'][0'b'] -> [0'ab']
	 *
	 * @param {Array} diffs Array of diff tuples.
	 * @param {Int} start Position of the first element to merge (diffs[start] is also merged with diffs[start - 1]).
	 * @param {Int} length Number of consecutive elements to check.
	 * @return {Array} Array of merged diff tuples.
	 */
	function merge_tuples (diffsstartlength) {
	  // Check from (start-1) to (start+length).
	  for (var i = start + length - 1; i >= 0 && i >= start - 1; i--) {
	    if (i + 1 < diffs.length) {
	      var left_d = diffs[i];
	      var right_d = diffs[i+1];
	      if (left_d[0] === right_d[1]) {
	        diffs.splice(i2[left_d[0]left_d[1] + right_d[1]]);
	      }
	    }
	  }
	  return diffs;
	}


/***/ },
/* 22 */
/***/ function(moduleexports__webpack_require__) {

	var pSlice = Array.prototype.slice;
	var objectKeys = __webpack_require__(23);
	var isArguments = __webpack_require__(24);

	var deepEqual = module.exports = function (actualexpectedopts) {
	  if (!opts) opts = {};
	  // 7.1. All identical values are equivalentas determined by ===.
	  if (actual === expected) {
	    return true;

	  } else if (actual instanceof Date && expected instanceof Date) {
	    return actual.getTime() === expected.getTime();

	  // 7.3. Other pairs that do not both pass typeof value == 'object',
	  // equivalence is determined by ==.
	  } else if (!actual || !expected || typeof actual != 'object' && typeof expected != 'object') {
	    return opts.strict ? actual === expected : actual == expected;

	  // 7.4. For all other Object pairsincluding Array objectsequivalence is
	  // determined by having the same number of owned properties (as verified
	  // with Object.prototype.hasOwnProperty.call)the same set of keys
	  // (although not necessarily the same order)equivalent values for every
	  // corresponding keyand an identical 'prototype' property. Note: this
	  // accounts for both named and indexed properties on Arrays.
	  } else {
	    return objEquiv(actualexpectedopts);
	  }
	}

	function isUndefinedOrNull(value) {
	  return value === null || value === undefined;
	}

	function isBuffer (x) {
	  if (!x || typeof x !== 'object' || typeof x.length !== 'number') return false;
	  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
	    return false;
	  }
	  if (x.length > 0 && typeof x[0] !== 'number') return false;
	  return true;
	}

	function objEquiv(abopts) {
	  var ikey;
	  if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
	    return false;
	  // an identical 'prototype' property.
	  if (a.prototype !== b.prototype) return false;
	  //~~~I've managed to break Object.keys through screwy arguments passing.
	  //   Converting to array solves the problem.
	  if (isArguments(a)) {
	    if (!isArguments(b)) {
	      return false;
	    }
	    a = pSlice.call(a);
	    b = pSlice.call(b);
	    return deepEqual(abopts);
	  }
	  if (isBuffer(a)) {
	    if (!isBuffer(b)) {
	      return false;
	    }
	    if (a.length !== b.length) return false;
	    for (i = 0; i < a.length; i++) {
	      if (a[i] !== b[i]) return false;
	    }
	    return true;
	  }
	  try {
	    var ka = objectKeys(a),
	        kb = objectKeys(b);
	  } catch (e) {//happens when one is a string literal and the other isn't
	    return false;
	  }
	  // having the same number of owned properties (keys incorporates
	  // hasOwnProperty)
	  if (ka.length != kb.length)
	    return false;
	  //the same set of keys (although not necessarily the same order),
	  ka.sort();
	  kb.sort();
	  //~~~cheap key test
	  for (i = ka.length - 1; i >= 0; i--) {
	    if (ka[i] != kb[i])
	      return false;
	  }
	  //equivalent values for every corresponding keyand
	  //~~~possibly expensive deep test
	  for (i = ka.length - 1; i >= 0; i--) {
	    key = ka[i];
	    if (!deepEqual(a[key]b[key]opts)) return false;
	  }
	  return typeof a === typeof b;
	}


/***/ },
/* 23 */
/***/ function(moduleexports) {

	exports = module.exports = typeof Object.keys === 'function'
	  ? Object.keys : shim;

	exports.shim = shim;
	function shim (obj) {
	  var keys = [];
	  for (var key in obj) keys.push(key);
	  return keys;
	}


/***/ },
/* 24 */
/***/ function(moduleexports) {

	var supportsArgumentsClass = (function(){
	  return Object.prototype.toString.call(arguments)
	})() == '[object Arguments]';

	exports = module.exports = supportsArgumentsClass ? supported : unsupported;

	exports.supported = supported;
	function supported(object) {
	  return Object.prototype.toString.call(object) == '[object Arguments]';
	};

	exports.unsupported = unsupported;
	function unsupported(object){
	  return object &&
	    typeof object == 'object' &&
	    typeof object.length == 'number' &&
	    Object.prototype.hasOwnProperty.call(object'callee') &&
	    !Object.prototype.propertyIsEnumerable.call(object'callee') ||
	    false;
	};


/***/ },
/* 25 */
/***/ function(moduleexports) {

	'use strict';

	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;

	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}

		return toStr.call(arr) === '[object Array]';
	};

	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}

		var hasOwnConstructor = hasOwn.call(obj'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}

		// Own properties are enumerated firstlyso to speed up,
		// if last one is ownthen all properties are own.
		var key;
		for (key in obj) {/**/}

		return typeof key === 'undefined' || hasOwn.call(objkey);
	};

	module.exports = function extend() {
		var optionsnamesrccopycopyIsArrayclone,
			target = arguments[0],
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
			target = {};
		}

		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}

							// Never move original objectsclone them
							target[name] = extend(deepclonecopy);

						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							target[name] = copy;
						}
					}
				}
			}
		}

		// Return the modified object
		return target;
	};



/***/ },
/* 26 */
/***/ function(moduleexports__webpack_require__) {

	var equal = __webpack_require__(22);
	var extend = __webpack_require__(25);


	var lib = {
	  attributes: {
	    compose: function (abkeepNull) {
	      if (typeof a !== 'object') a = {};
	      if (typeof b !== 'object') b = {};
	      var attributes = extend(true{}b);
	      if (!keepNull) {
	        attributes = Object.keys(attributes).reduce(function (copykey) {
	          if (attributes[key] != null) {
	            copy[key] = attributes[key];
	          }
	          return copy;
	        }{});
	      }
	      for (var key in a) {
	        if (a[key] !== undefined && b[key] === undefined) {
	          attributes[key] = a[key];
	        }
	      }
	      return Object.keys(attributes).length > 0 ? attributes : undefined;
	    },

	    diff: function(ab) {
	      if (typeof a !== 'object') a = {};
	      if (typeof b !== 'object') b = {};
	      var attributes = Object.keys(a).concat(Object.keys(b)).reduce(function (attributeskey) {
	        if (!equal(a[key]b[key])) {
	          attributes[key] = b[key] === undefined ? null : b[key];
	        }
	        return attributes;
	      }{});
	      return Object.keys(attributes).length > 0 ? attributes : undefined;
	    },

	    transform: function (abpriority) {
	      if (typeof a !== 'object') return b;
	      if (typeof b !== 'object') return undefined;
	      if (!priority) return b;  // b simply overwrites us without priority
	      var attributes = Object.keys(b).reduce(function (attributeskey) {
	        if (a[key] === undefined) attributes[key] = b[key];  // null is a valid value
	        return attributes;
	      }{});
	      return Object.keys(attributes).length > 0 ? attributes : undefined;
	    }
	  },

	  iterator: function (ops) {
	    return new Iterator(ops);
	  },

	  length: function (op) {
	    if (typeof op['delete'] === 'number') {
	      return op['delete'];
	    } else if (typeof op.retain === 'number') {
	      return op.retain;
	    } else {
	      return typeof op.insert === 'string' ? op.insert.length : 1;
	    }
	  }
	};


	function Iterator(ops) {
	  this.ops = ops;
	  this.index = 0;
	  this.offset = 0;
	};

	Iterator.prototype.hasNext = function () {
	  return this.peekLength() < Infinity;
	};

	Iterator.prototype.next = function (length) {
	  if (!length) length = Infinity;
	  var nextOp = this.ops[this.index];
	  if (nextOp) {
	    var offset = this.offset;
	    var opLength = lib.length(nextOp)
	    if (length >= opLength - offset) {
	      length = opLength - offset;
	      this.index += 1;
	      this.offset = 0;
	    } else {
	      this.offset += length;
	    }
	    if (typeof nextOp['delete'] === 'number') {
	      return { 'delete': length };
	    } else {
	      var retOp = {};
	      if (nextOp.attributes) {
	        retOp.attributes = nextOp.attributes;
	      }
	      if (typeof nextOp.retain === 'number') {
	        retOp.retain = length;
	      } else if (typeof nextOp.insert === 'string') {
	        retOp.insert = nextOp.insert.substr(offsetlength);
	      } else {
	        // offset should === 0length should === 1
	        retOp.insert = nextOp.insert;
	      }
	      return retOp;
	    }
	  } else {
	    return { retain: Infinity };
	  }
	};

	Iterator.prototype.peek = function () {
	  return this.ops[this.index];
	};

	Iterator.prototype.peekLength = function () {
	  if (this.ops[this.index]) {
	    // Should never return 0 if our index is being managed correctly
	    return lib.length(this.ops[this.index]) - this.offset;
	  } else {
	    return Infinity;
	  }
	};

	Iterator.prototype.peekType = function () {
	  if (this.ops[this.index]) {
	    if (typeof this.ops[this.index]['delete'] === 'number') {
	      return 'delete';
	    } else if (typeof this.ops[this.index].retain === 'number') {
	      return 'retain';
	    } else {
	      return 'insert';
	    }
	  }
	  return 'retain';
	};


	module.exports = lib;


/***/ },
/* 27 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _slicedToArray = function () { function sliceIterator(arri) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator]()_s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arri) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arri); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _quillDelta = __webpack_require__(20);

	var _quillDelta2 = _interopRequireDefault(_quillDelta);

	var _op = __webpack_require__(26);

	var _op2 = _interopRequireDefault(_op);

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _code = __webpack_require__(28);

	var _code2 = _interopRequireDefault(_code);

	var _cursor = __webpack_require__(34);

	var _cursor2 = _interopRequireDefault(_cursor);

	var _block = __webpack_require__(29);

	var _block2 = _interopRequireDefault(_block);

	var _clone = __webpack_require__(38);

	var _clone2 = _interopRequireDefault(_clone);

	var _deepEqual = __webpack_require__(22);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _extend = __webpack_require__(25);

	var _extend2 = _interopRequireDefault(_extend);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(objkeyvalue) { if (key in obj) { Object.defineProperty(objkey{ value: valueenumerable: trueconfigurable: truewritable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Editor = function () {
	  function Editor(scroll) {
	    _classCallCheck(thisEditor);

	    this.scroll = scroll;
	    this.delta = this.getDelta();
	  }

	  _createClass(Editor[{
	    key: 'applyDelta',
	    value: function applyDelta(delta) {
	      var _this = this;

	      var consumeNextNewline = false;
	      this.scroll.update();
	      var scrollLength = this.scroll.length();
	      this.scroll.batch = true;
	      delta = normalizeDelta(delta);
	      delta.reduce(function (indexop) {
	        var length = op.retain || op.delete || op.insert.length || 1;
	        var attributes = op.attributes || {};
	        if (op.insert != null) {
	          if (typeof op.insert === 'string') {
	            var text = op.insert;
	            if (text.endsWith('\n') && consumeNextNewline) {
	              consumeNextNewline = false;
	              text = text.slice(0-1);
	            }
	            if (index >= scrollLength && !text.endsWith('\n')) {
	              consumeNextNewline = true;
	            }
	            _this.scroll.insertAt(indextext);

	            var _scroll$line = _this.scroll.line(index),
	                _scroll$line2 = _slicedToArray(_scroll$line2),
	                line = _scroll$line2[0],
	                offset = _scroll$line2[1];

	            var formats = (0_extend2.default)({}(0_block.bubbleFormats)(line));
	            if (line instanceof _block2.default) {
	              var _line$descendant = line.descendant(_parchment2.default.Leafoffset),
	                  _line$descendant2 = _slicedToArray(_line$descendant1),
	                  leaf = _line$descendant2[0];

	              formats = (0_extend2.default)(formats(0_block.bubbleFormats)(leaf));
	            }
	            attributes = _op2.default.attributes.diff(formatsattributes) || {};
	          } else if (_typeof(op.insert) === 'object') {
	            var key = Object.keys(op.insert)[0]; // There should only be one key
	            if (key == null) return index;
	            _this.scroll.insertAt(indexkeyop.insert[key]);
	          }
	          scrollLength += length;
	        }
	        Object.keys(attributes).forEach(function (name) {
	          _this.scroll.formatAt(indexlengthnameattributes[name]);
	        });
	        return index + length;
	      }0);
	      delta.reduce(function (indexop) {
	        if (typeof op.delete === 'number') {
	          _this.scroll.deleteAt(indexop.delete);
	          return index;
	        }
	        return index + (op.retain || op.insert.length || 1);
	      }0);
	      this.scroll.batch = false;
	      this.scroll.optimize();
	      return this.update(delta);
	    }
	  }{
	    key: 'deleteText',
	    value: function deleteText(indexlength) {
	      this.scroll.deleteAt(indexlength);
	      return this.update(new _quillDelta2.default().retain(index).delete(length));
	    }
	  }{
	    key: 'formatLine',
	    value: function formatLine(indexlength) {
	      var _this2 = this;

	      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      this.scroll.update();
	      Object.keys(formats).forEach(function (format) {
	        var lines = _this2.scroll.lines(indexMath.max(length1));
	        var lengthRemaining = length;
	        lines.forEach(function (line) {
	          var lineLength = line.length();
	          if (!(line instanceof _code2.default)) {
	            line.format(formatformats[format]);
	          } else {
	            var codeIndex = index - line.offset(_this2.scroll);
	            var codeLength = line.newlineIndex(codeIndex + lengthRemaining) - codeIndex + 1;
	            line.formatAt(codeIndexcodeLengthformatformats[format]);
	          }
	          lengthRemaining -= lineLength;
	        });
	      });
	      this.scroll.optimize();
	      return this.update(new _quillDelta2.default().retain(index).retain(length(0_clone2.default)(formats)));
	    }
	  }{
	    key: 'formatText',
	    value: function formatText(indexlength) {
	      var _this3 = this;

	      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      Object.keys(formats).forEach(function (format) {
	        _this3.scroll.formatAt(indexlengthformatformats[format]);
	      });
	      return this.update(new _quillDelta2.default().retain(index).retain(length(0_clone2.default)(formats)));
	    }
	  }{
	    key: 'getContents',
	    value: function getContents(indexlength) {
	      return this.delta.slice(indexindex + length);
	    }
	  }{
	    key: 'getDelta',
	    value: function getDelta() {
	      return this.scroll.lines().reduce(function (deltaline) {
	        return delta.concat(line.delta());
	      }new _quillDelta2.default());
	    }
	  }{
	    key: 'getFormat',
	    value: function getFormat(index) {
	      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	      var lines = [],
	          leaves = [];
	      if (length === 0) {
	        this.scroll.path(index).forEach(function (path) {
	          var _path = _slicedToArray(path1),
	              blot = _path[0];

	          if (blot instanceof _block2.default) {
	            lines.push(blot);
	          } else if (blot instanceof _parchment2.default.Leaf) {
	            leaves.push(blot);
	          }
	        });
	      } else {
	        lines = this.scroll.lines(indexlength);
	        leaves = this.scroll.descendants(_parchment2.default.Leafindexlength);
	      }
	      var formatsArr = [linesleaves].map(function (blots) {
	        if (blots.length === 0) return {};
	        var formats = (0_block.bubbleFormats)(blots.shift());
	        while (Object.keys(formats).length > 0) {
	          var blot = blots.shift();
	          if (blot == null) return formats;
	          formats = combineFormats((0_block.bubbleFormats)(blot)formats);
	        }
	        return formats;
	      });
	      return _extend2.default.apply(_extend2.defaultformatsArr);
	    }
	  }{
	    key: 'getText',
	    value: function getText(indexlength) {
	      return this.getContents(indexlength).filter(function (op) {
	        return typeof op.insert === 'string';
	      }).map(function (op) {
	        return op.insert;
	      }).join('');
	    }
	  }{
	    key: 'insertEmbed',
	    value: function insertEmbed(indexembedvalue) {
	      this.scroll.insertAt(indexembedvalue);
	      return this.update(new _quillDelta2.default().retain(index).insert(_defineProperty({}embedvalue)));
	    }
	  }{
	    key: 'insertText',
	    value: function insertText(indextext) {
	      var _this4 = this;

	      var formats = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      text = text.replace(/\r\n/g'\n').replace(/\r/g'\n');
	      this.scroll.insertAt(indextext);
	      Object.keys(formats).forEach(function (format) {
	        _this4.scroll.formatAt(indextext.lengthformatformats[format]);
	      });
	      return this.update(new _quillDelta2.default().retain(index).insert(text(0_clone2.default)(formats)));
	    }
	  }{
	    key: 'isBlank',
	    value: function isBlank() {
	      if (this.scroll.children.length == 0) return true;
	      if (this.scroll.children.length > 1) return false;
	      var child = this.scroll.children.head;
	      return child.length() <= 1 && Object.keys(child.formats()).length == 0;
	    }
	  }{
	    key: 'removeFormat',
	    value: function removeFormat(indexlength) {
	      var text = this.getText(indexlength);

	      var _scroll$line3 = this.scroll.line(index + length),
	          _scroll$line4 = _slicedToArray(_scroll$line32),
	          line = _scroll$line4[0],
	          offset = _scroll$line4[1];

	      var suffixLength = 0,
	          suffix = new _quillDelta2.default();
	      if (line != null) {
	        if (!(line instanceof _code2.default)) {
	          suffixLength = line.length() - offset;
	        } else {
	          suffixLength = line.newlineIndex(offset) - offset + 1;
	        }
	        suffix = line.delta().slice(offsetoffset + suffixLength - 1).insert('\n');
	      }
	      var contents = this.getContents(indexlength + suffixLength);
	      var diff = contents.diff(new _quillDelta2.default().insert(text).concat(suffix));
	      var delta = new _quillDelta2.default().retain(index).concat(diff);
	      return this.applyDelta(delta);
	    }
	  }{
	    key: 'update',
	    value: function update(change) {
	      var _this5 = this;

	      var mutations = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	      var cursorIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;

	      var oldDelta = this.delta;
	      if (mutations.length === 1 && mutations[0].type === 'characterData' && _parchment2.default.find(mutations[0].target)) {
	        (function () {
	          // Optimization for character changes
	          var textBlot = _parchment2.default.find(mutations[0].target);
	          var formats = (0_block.bubbleFormats)(textBlot);
	          var index = textBlot.offset(_this5.scroll);
	          var oldValue = mutations[0].oldValue.replace(_cursor2.default.CONTENTS'');
	          var oldText = new _quillDelta2.default().insert(oldValue);
	          var newText = new _quillDelta2.default().insert(textBlot.value());
	          var diffDelta = new _quillDelta2.default().retain(index).concat(oldText.diff(newTextcursorIndex));
	          change = diffDelta.reduce(function (deltaop) {
	            if (op.insert) {
	              return delta.insert(op.insertformats);
	            } else {
	              return delta.push(op);
	            }
	          }new _quillDelta2.default());
	          _this5.delta = oldDelta.compose(change);
	        })();
	      } else {
	        this.delta = this.getDelta();
	        if (!change || !(0_deepEqual2.default)(oldDelta.compose(change)this.delta)) {
	          change = oldDelta.diff(this.deltacursorIndex);
	        }
	      }
	      return change;
	    }
	  }]);

	  return Editor;
	}();

	function combineFormats(formatscombined) {
	  return Object.keys(combined).reduce(function (mergedname) {
	    if (formats[name] == null) return merged;
	    if (combined[name] === formats[name]) {
	      merged[name] = combined[name];
	    } else if (Array.isArray(combined[name])) {
	      if (combined[name].indexOf(formats[name]) < 0) {
	        merged[name] = combined[name].concat([formats[name]]);
	      }
	    } else {
	      merged[name] = [combined[name]formats[name]];
	    }
	    return merged;
	  }{});
	}

	function normalizeDelta(delta) {
	  return delta.reduce(function (deltaop) {
	    if (op.insert === 1) {
	      var attributes = (0_clone2.default)(op.attributes);
	      delete attributes['image'];
	      return delta.insert({ image: op.attributes.image }attributes);
	    }
	    if (op.attributes != null && (op.attributes.list === true || op.attributes.bullet === true)) {
	      op = (0_clone2.default)(op);
	      if (op.attributes.list) {
	        op.attributes.list = 'ordered';
	      } else {
	        op.attributes.list = 'bullet';
	        delete op.attributes.bullet;
	      }
	    }
	    if (typeof op.insert === 'string') {
	      var text = op.insert.replace(/\r\n/g'\n').replace(/\r/g'\n');
	      return delta.insert(textop.attributes);
	    }
	    return delta.push(op);
	  }new _quillDelta2.default());
	}

	exports.default = Editor;

/***/ },
/* 28 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.default = exports.Code = undefined;

	var _slicedToArray = function () { function sliceIterator(arri) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator]()_s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arri) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arri); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _quillDelta = __webpack_require__(20);

	var _quillDelta2 = _interopRequireDefault(_quillDelta);

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _block = __webpack_require__(29);

	var _block2 = _interopRequireDefault(_block);

	var _inline = __webpack_require__(32);

	var _inline2 = _interopRequireDefault(_inline);

	var _text = __webpack_require__(33);

	var _text2 = _interopRequireDefault(_text);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var Code = function (_Inline) {
	  _inherits(Code_Inline);

	  function Code() {
	    _classCallCheck(thisCode);

	    return _possibleConstructorReturn(this(Code.__proto__ || Object.getPrototypeOf(Code)).apply(thisarguments));
	  }

	  return Code;
	}(_inline2.default);

	Code.blotName = 'code';
	Code.tagName = 'CODE';

	var CodeBlock = function (_Block) {
	  _inherits(CodeBlock_Block);

	  function CodeBlock() {
	    _classCallCheck(thisCodeBlock);

	    return _possibleConstructorReturn(this(CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)).apply(thisarguments));
	  }

	  _createClass(CodeBlock[{
	    key: 'delta',
	    value: function delta() {
	      var _this3 = this;

	      var text = this.domNode.textContent;
	      if (text.endsWith('\n')) {
	        // Should always be true
	        text = text.slice(0-1);
	      }
	      return text.split('\n').reduce(function (deltafrag) {
	        return delta.insert(frag).insert('\n'_this3.formats());
	      }new _quillDelta2.default());
	    }
	  }{
	    key: 'format',
	    value: function format(namevalue) {
	      if (name === this.statics.blotName && value) return;

	      var _descendant = this.descendant(_text2.defaultthis.length() - 1),
	          _descendant2 = _slicedToArray(_descendant1),
	          text = _descendant2[0];

	      if (text != null) {
	        text.deleteAt(text.length() - 11);
	      }
	      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype)'format'this).call(thisnamevalue);
	    }
	  }{
	    key: 'formatAt',
	    value: function formatAt(indexlengthnamevalue) {
	      if (length === 0) return;
	      if (_parchment2.default.query(name_parchment2.default.Scope.BLOCK) == null || name === this.statics.blotName && value === this.statics.formats(this.domNode)) {
	        return;
	      }
	      var nextNewline = this.newlineIndex(index);
	      if (nextNewline < 0 || nextNewline >= index + length) return;
	      var prevNewline = this.newlineIndex(indextrue) + 1;
	      var isolateLength = nextNewline - prevNewline + 1;
	      var blot = this.isolate(prevNewlineisolateLength);
	      var next = blot.next;
	      blot.format(namevalue);
	      if (next instanceof CodeBlock) {
	        next.formatAt(0index - prevNewline + length - isolateLengthnamevalue);
	      }
	    }
	  }{
	    key: 'insertAt',
	    value: function insertAt(indexvaluedef) {
	      if (def != null) return;

	      var _descendant3 = this.descendant(_text2.defaultindex),
	          _descendant4 = _slicedToArray(_descendant32),
	          text = _descendant4[0],
	          offset = _descendant4[1];

	      text.insertAt(offsetvalue);
	    }
	  }{
	    key: 'length',
	    value: function length() {
	      var length = this.domNode.textContent.length;
	      if (!this.domNode.textContent.endsWith('\n')) {
	        return length + 1;
	      }
	      return length;
	    }
	  }{
	    key: 'newlineIndex',
	    value: function newlineIndex(searchIndex) {
	      var reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      if (!reverse) {
	        var offset = this.domNode.textContent.slice(searchIndex).indexOf('\n');
	        return offset > -1 ? searchIndex + offset : -1;
	      } else {
	        return this.domNode.textContent.slice(0searchIndex).lastIndexOf('\n');
	      }
	    }
	  }{
	    key: 'optimize',
	    value: function optimize() {
	      if (!this.domNode.textContent.endsWith('\n')) {
	        this.appendChild(_parchment2.default.create('text''\n'));
	      }
	      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype)'optimize'this).call(this);
	      var next = this.next;
	      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && this.statics.formats(this.domNode) === next.statics.formats(next.domNode)) {
	        next.optimize();
	        next.moveChildren(this);
	        next.remove();
	      }
	    }
	  }{
	    key: 'replace',
	    value: function replace(target) {
	      _get(CodeBlock.prototype.__proto__ || Object.getPrototypeOf(CodeBlock.prototype)'replace'this).call(thistarget);
	      [].slice.call(this.domNode.querySelectorAll('*')).forEach(function (node) {
	        var blot = _parchment2.default.find(node);
	        if (blot == null) {
	          node.parentNode.removeChild(node);
	        } else if (blot instanceof _parchment2.default.Embed) {
	          blot.remove();
	        } else {
	          blot.unwrap();
	        }
	      });
	    }
	  }][{
	    key: 'create',
	    value: function create(value) {
	      var domNode = _get(CodeBlock.__proto__ || Object.getPrototypeOf(CodeBlock)'create'this).call(thisvalue);
	      domNode.setAttribute('spellcheck'false);
	      return domNode;
	    }
	  }{
	    key: 'formats',
	    value: function formats() {
	      return true;
	    }
	  }]);

	  return CodeBlock;
	}(_block2.default);

	CodeBlock.blotName = 'code-block';
	CodeBlock.tagName = 'PRE';
	CodeBlock.TAB = '  ';

	exports.Code = Code;
	exports.default = CodeBlock;

/***/ },
/* 29 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.default = exports.BlockEmbed = exports.bubbleFormats = undefined;

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _extend = __webpack_require__(25);

	var _extend2 = _interopRequireDefault(_extend);

	var _quillDelta = __webpack_require__(20);

	var _quillDelta2 = _interopRequireDefault(_quillDelta);

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _break = __webpack_require__(30);

	var _break2 = _interopRequireDefault(_break);

	var _embed = __webpack_require__(31);

	var _embed2 = _interopRequireDefault(_embed);

	var _inline = __webpack_require__(32);

	var _inline2 = _interopRequireDefault(_inline);

	var _text = __webpack_require__(33);

	var _text2 = _interopRequireDefault(_text);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var NEWLINE_LENGTH = 1;

	var BlockEmbed = function (_Embed) {
	  _inherits(BlockEmbed_Embed);

	  function BlockEmbed() {
	    _classCallCheck(thisBlockEmbed);

	    return _possibleConstructorReturn(this(BlockEmbed.__proto__ || Object.getPrototypeOf(BlockEmbed)).apply(thisarguments));
	  }

	  _createClass(BlockEmbed[{
	    key: 'attach',
	    value: function attach() {
	      _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype)'attach'this).call(this);
	      this.attributes = new _parchment2.default.Attributor.Store(this.domNode);
	    }
	  }{
	    key: 'delta',
	    value: function delta() {
	      return new _quillDelta2.default().insert(this.value()(0_extend2.default)(this.formats()this.attributes.values()));
	    }
	  }{
	    key: 'format',
	    value: function format(namevalue) {
	      var attribute = _parchment2.default.query(name_parchment2.default.Scope.BLOCK_ATTRIBUTE);
	      if (attribute != null) {
	        this.attributes.attribute(attributevalue);
	      }
	    }
	  }{
	    key: 'formatAt',
	    value: function formatAt(indexlengthnamevalue) {
	      this.format(namevalue);
	    }
	  }{
	    key: 'insertAt',
	    value: function insertAt(indexvaluedef) {
	      if (typeof value === 'string' && value.endsWith('\n')) {
	        var block = _parchment2.default.create(Block.blotName);
	        this.parent.insertBefore(blockindex === 0 ? this : this.next);
	        block.insertAt(0value.slice(0-1));
	      } else {
	        _get(BlockEmbed.prototype.__proto__ || Object.getPrototypeOf(BlockEmbed.prototype)'insertAt'this).call(thisindexvaluedef);
	      }
	    }
	  }]);

	  return BlockEmbed;
	}(_embed2.default);

	BlockEmbed.scope = _parchment2.default.Scope.BLOCK_BLOT;
	// It is important for cursor behavior BlockEmbeds use tags that are block level elements


	var Block = function (_Parchment$Block) {
	  _inherits(Block_Parchment$Block);

	  function Block(domNode) {
	    _classCallCheck(thisBlock);

	    var _this2 = _possibleConstructorReturn(this(Block.__proto__ || Object.getPrototypeOf(Block)).call(thisdomNode));

	    _this2.cache = {};
	    return _this2;
	  }

	  _createClass(Block[{
	    key: 'delta',
	    value: function delta() {
	      if (this.cache.delta == null) {
	        this.cache.delta = this.descendants(_parchment2.default.Leaf).reduce(function (deltaleaf) {
	          if (leaf.length() === 0) {
	            return delta;
	          } else {
	            return delta.insert(leaf.value()bubbleFormats(leaf));
	          }
	        }new _quillDelta2.default()).insert('\n'bubbleFormats(this));
	      }
	      return this.cache.delta;
	    }
	  }{
	    key: 'deleteAt',
	    value: function deleteAt(indexlength) {
	      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype)'deleteAt'this).call(thisindexlength);
	      this.cache = {};
	    }
	  }{
	    key: 'formatAt',
	    value: function formatAt(indexlengthnamevalue) {
	      if (length <= 0) return;
	      if (_parchment2.default.query(name_parchment2.default.Scope.BLOCK)) {
	        if (index + length === this.length()) {
	          this.format(namevalue);
	        }
	      } else {
	        _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype)'formatAt'this).call(thisindexMath.min(lengththis.length() - index - 1)namevalue);
	      }
	      this.cache = {};
	    }
	  }{
	    key: 'insertAt',
	    value: function insertAt(indexvaluedef) {
	      if (def != null) return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype)'insertAt'this).call(thisindexvaluedef);
	      if (value.length === 0) return;
	      var lines = value.split('\n');
	      var text = lines.shift();
	      if (text.length > 0) {
	        if (index < this.length() - 1 || this.children.tail == null) {
	          _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype)'insertAt'this).call(thisMath.min(indexthis.length() - 1)text);
	        } else {
	          this.children.tail.insertAt(this.children.tail.length()text);
	        }
	        this.cache = {};
	      }
	      var block = this;
	      lines.reduce(function (indexline) {
	        block = block.split(indextrue);
	        block.insertAt(0line);
	        return line.length;
	      }index + text.length);
	    }
	  }{
	    key: 'insertBefore',
	    value: function insertBefore(blotref) {
	      var head = this.children.head;
	      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype)'insertBefore'this).call(thisblotref);
	      if (head instanceof _break2.default) {
	        head.remove();
	      }
	      this.cache = {};
	    }
	  }{
	    key: 'length',
	    value: function length() {
	      if (this.cache.length == null) {
	        this.cache.length = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype)'length'this).call(this) + NEWLINE_LENGTH;
	      }
	      return this.cache.length;
	    }
	  }{
	    key: 'moveChildren',
	    value: function moveChildren(targetref) {
	      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype)'moveChildren'this).call(thistargetref);
	      this.cache = {};
	    }
	  }{
	    key: 'optimize',
	    value: function optimize() {
	      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype)'optimize'this).call(this);
	      this.cache = {};
	    }
	  }{
	    key: 'path',
	    value: function path(index) {
	      return _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype)'path'this).call(thisindextrue);
	    }
	  }{
	    key: 'removeChild',
	    value: function removeChild(child) {
	      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype)'removeChild'this).call(thischild);
	      this.cache = {};
	    }
	  }{
	    key: 'split',
	    value: function split(index) {
	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      if (force && (index === 0 || index >= this.length() - NEWLINE_LENGTH)) {
	        var clone = this.clone();
	        if (index === 0) {
	          this.parent.insertBefore(clonethis);
	          return this;
	        } else {
	          this.parent.insertBefore(clonethis.next);
	          return clone;
	        }
	      } else {
	        var next = _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype)'split'this).call(thisindexforce);
	        this.cache = {};
	        return next;
	      }
	    }
	  }]);

	  return Block;
	}(_parchment2.default.Block);

	Block.blotName = 'block';
	Block.tagName = 'P';
	Block.defaultChild = 'break';
	Block.allowedChildren = [_inline2.default_embed2.default_text2.default];

	function bubbleFormats(blot) {
	  var formats = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  if (blot == null) return formats;
	  if (typeof blot.formats === 'function') {
	    formats = (0_extend2.default)(formatsblot.formats());
	  }
	  if (blot.parent == null || blot.parent.blotName == 'scroll' || blot.parent.statics.scope !== blot.statics.scope) {
	    return formats;
	  }
	  return bubbleFormats(blot.parentformats);
	}

	exports.bubbleFormats = bubbleFormats;
	exports.BlockEmbed = BlockEmbed;
	exports.default = Block;

/***/ },
/* 30 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _embed = __webpack_require__(31);

	var _embed2 = _interopRequireDefault(_embed);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var Break = function (_Embed) {
	  _inherits(Break_Embed);

	  function Break() {
	    _classCallCheck(thisBreak);

	    return _possibleConstructorReturn(this(Break.__proto__ || Object.getPrototypeOf(Break)).apply(thisarguments));
	  }

	  _createClass(Break[{
	    key: 'insertInto',
	    value: function insertInto(parentref) {
	      if (parent.children.length === 0) {
	        _get(Break.prototype.__proto__ || Object.getPrototypeOf(Break.prototype)'insertInto'this).call(thisparentref);
	      } else {
	        this.remove();
	      }
	    }
	  }{
	    key: 'length',
	    value: function length() {
	      return 0;
	    }
	  }{
	    key: 'value',
	    value: function value() {
	      return '';
	    }
	  }][{
	    key: 'value',
	    value: function value() {
	      return undefined;
	    }
	  }]);

	  return Break;
	}(_embed2.default);

	Break.blotName = 'break';
	Break.tagName = 'BR';

	exports.default = Break;

/***/ },
/* 31 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var Embed = function (_Parchment$Embed) {
	  _inherits(Embed_Parchment$Embed);

	  function Embed() {
	    _classCallCheck(thisEmbed);

	    return _possibleConstructorReturn(this(Embed.__proto__ || Object.getPrototypeOf(Embed)).apply(thisarguments));
	  }

	  return Embed;
	}(_parchment2.default.Embed);

	exports.default = Embed;

/***/ },
/* 32 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _embed = __webpack_require__(31);

	var _embed2 = _interopRequireDefault(_embed);

	var _text = __webpack_require__(33);

	var _text2 = _interopRequireDefault(_text);

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var Inline = function (_Parchment$Inline) {
	  _inherits(Inline_Parchment$Inline);

	  function Inline() {
	    _classCallCheck(thisInline);

	    return _possibleConstructorReturn(this(Inline.__proto__ || Object.getPrototypeOf(Inline)).apply(thisarguments));
	  }

	  _createClass(Inline[{
	    key: 'formatAt',
	    value: function formatAt(indexlengthnamevalue) {
	      if (Inline.compare(this.statics.blotNamename) < 0 && _parchment2.default.query(name_parchment2.default.Scope.BLOT)) {
	        var blot = this.isolate(indexlength);
	        if (value) {
	          blot.wrap(namevalue);
	        }
	      } else {
	        _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype)'formatAt'this).call(thisindexlengthnamevalue);
	      }
	    }
	  }{
	    key: 'optimize',
	    value: function optimize() {
	      _get(Inline.prototype.__proto__ || Object.getPrototypeOf(Inline.prototype)'optimize'this).call(this);
	      if (this.parent instanceof Inline && Inline.compare(this.statics.blotNamethis.parent.statics.blotName) > 0) {
	        var parent = this.parent.isolate(this.offset()this.length());
	        this.moveChildren(parent);
	        parent.wrap(this);
	      }
	    }
	  }][{
	    key: 'compare',
	    value: function compare(selfother) {
	      var selfIndex = Inline.order.indexOf(self);
	      var otherIndex = Inline.order.indexOf(other);
	      if (selfIndex >= 0 || otherIndex >= 0) {
	        return selfIndex - otherIndex;
	      } else if (self === other) {
	        return 0;
	      } else if (self < other) {
	        return -1;
	      } else {
	        return 1;
	      }
	    }
	  }]);

	  return Inline;
	}(_parchment2.default.Inline);

	Inline.allowedChildren = [Inline_embed2.default_text2.default];
	// Lower index means deeper in the DOM treesince not found (-1) is for embeds
	Inline.order = ['cursor''inline'// Must be lower
	'code''underline''strike''italic''bold''script''link' // Must be higher
	];

	exports.default = Inline;

/***/ },
/* 33 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var TextBlot = function (_Parchment$Text) {
	  _inherits(TextBlot_Parchment$Text);

	  function TextBlot() {
	    _classCallCheck(thisTextBlot);

	    return _possibleConstructorReturn(this(TextBlot.__proto__ || Object.getPrototypeOf(TextBlot)).apply(thisarguments));
	  }

	  return TextBlot;
	}(_parchment2.default.Text);

	exports.default = TextBlot;

/***/ },
/* 34 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arri) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator]()_s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arri) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arri); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _embed = __webpack_require__(31);

	var _embed2 = _interopRequireDefault(_embed);

	var _text = __webpack_require__(33);

	var _text2 = _interopRequireDefault(_text);

	var _emitter = __webpack_require__(35);

	var _emitter2 = _interopRequireDefault(_emitter);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var Cursor = function (_Embed) {
	  _inherits(Cursor_Embed);

	  _createClass(Cursornull[{
	    key: 'value',
	    value: function value() {
	      return undefined;
	    }
	  }]);

	  function Cursor(domNodeselection) {
	    _classCallCheck(thisCursor);

	    var _this = _possibleConstructorReturn(this(Cursor.__proto__ || Object.getPrototypeOf(Cursor)).call(thisdomNode));

	    _this.selection = selection;
	    _this.textNode = document.createTextNode(Cursor.CONTENTS);
	    _this.domNode.appendChild(_this.textNode);
	    _this._length = 0;
	    return _this;
	  }

	  _createClass(Cursor[{
	    key: 'detach',
	    value: function detach() {
	      // super.detach() will also clear domNode.__blot
	      if (this.parent != null) this.parent.removeChild(this);
	    }
	  }{
	    key: 'format',
	    value: function format(namevalue) {
	      if (this._length !== 0) {
	        return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype)'format'this).call(thisnamevalue);
	      }
	      var target = this,
	          index = 0;
	      while (target != null && target.statics.scope !== _parchment2.default.Scope.BLOCK_BLOT) {
	        index += target.offset(target.parent);
	        target = target.parent;
	      }
	      if (target != null) {
	        this._length = Cursor.CONTENTS.length;
	        target.optimize();
	        target.formatAt(indexCursor.CONTENTS.lengthnamevalue);
	        this._length = 0;
	      }
	    }
	  }{
	    key: 'index',
	    value: function index(nodeoffset) {
	      if (node === this.textNode) return 0;
	      return _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype)'index'this).call(thisnodeoffset);
	    }
	  }{
	    key: 'length',
	    value: function length() {
	      return this._length;
	    }
	  }{
	    key: 'position',
	    value: function position() {
	      return [this.textNodethis.textNode.data.length];
	    }
	  }{
	    key: 'remove',
	    value: function remove() {
	      _get(Cursor.prototype.__proto__ || Object.getPrototypeOf(Cursor.prototype)'remove'this).call(this);
	      this.parent = null;
	    }
	  }{
	    key: 'restore',
	    value: function restore() {
	      var _this2 = this;

	      if (this.selection.composing) return;
	      if (this.parent == null) return;
	      var textNode = this.textNode;
	      var range = this.selection.getNativeRange();
	      var restoreText = void 0,
	          start = void 0,
	          end = void 0;
	      if (range != null && range.start.node === textNode && range.end.node === textNode) {
	        var _ref = [textNoderange.start.offsetrange.end.offset];
	        restoreText = _ref[0];
	        start = _ref[1];
	        end = _ref[2];
	      }
	      // Link format will insert text outside of anchor tag
	      while (this.domNode.lastChild != null && this.domNode.lastChild !== this.textNode) {
	        this.domNode.parentNode.insertBefore(this.domNode.lastChildthis.domNode);
	      }
	      if (this.textNode.data !== Cursor.CONTENTS) {
	        var text = this.textNode.data.split(Cursor.CONTENTS).join('');
	        if (this.next instanceof _text2.default) {
	          restoreText = this.next.domNode;
	          this.next.insertAt(0text);
	          this.textNode.data = Cursor.CONTENTS;
	        } else {
	          this.textNode.data = text;
	          this.parent.insertBefore(_parchment2.default.create(this.textNode)this);
	          this.textNode = document.createTextNode(Cursor.CONTENTS);
	          this.domNode.appendChild(this.textNode);
	        }
	      }
	      this.remove();
	      if (start == null) return;
	      this.selection.emitter.once(_emitter2.default.events.SCROLL_OPTIMIZEfunction () {
	        var _map = [startend].map(function (offset) {
	          return Math.max(0Math.min(restoreText.data.lengthoffset - 1));
	        });

	        var _map2 = _slicedToArray(_map2);

	        start = _map2[0];
	        end = _map2[1];

	        _this2.selection.setNativeRange(restoreTextstartrestoreTextend);
	      });
	    }
	  }{
	    key: 'update',
	    value: function update(mutations) {
	      var _this3 = this;

	      mutations.forEach(function (mutation) {
	        if (mutation.type === 'characterData' && mutation.target === _this3.textNode) {
	          _this3.restore();
	        }
	      });
	    }
	  }{
	    key: 'value',
	    value: function value() {
	      return '';
	    }
	  }]);

	  return Cursor;
	}(_embed2.default);

	Cursor.blotName = 'cursor';
	Cursor.className = 'ql-cursor';
	Cursor.tagName = 'span';
	Cursor.CONTENTS = '\uFEFF'; // Zero width no break space


	exports.default = Cursor;

/***/ },
/* 35 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _eventemitter = __webpack_require__(36);

	var _eventemitter2 = _interopRequireDefault(_eventemitter);

	var _logger = __webpack_require__(37);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var debug = (0_logger2.default)('quill:events');

	var Emitter = function (_EventEmitter) {
	  _inherits(Emitter_EventEmitter);

	  function Emitter() {
	    _classCallCheck(thisEmitter);

	    var _this = _possibleConstructorReturn(this(Emitter.__proto__ || Object.getPrototypeOf(Emitter)).call(this));

	    _this.on('error'debug.error);
	    return _this;
	  }

	  _createClass(Emitter[{
	    key: 'emit',
	    value: function emit() {
	      debug.log.apply(debugarguments);
	      _get(Emitter.prototype.__proto__ || Object.getPrototypeOf(Emitter.prototype)'emit'this).apply(thisarguments);
	    }
	  }]);

	  return Emitter;
	}(_eventemitter2.default);

	Emitter.events = {
	  EDITOR_CHANGE: 'editor-change',
	  SCROLL_BEFORE_UPDATE: 'scroll-before-update',
	  SCROLL_OPTIMIZE: 'scroll-optimize',
	  SCROLL_UPDATE: 'scroll-update',
	  SELECTION_CHANGE: 'selection-change',
	  TEXT_CHANGE: 'text-change'
	};
	Emitter.sources = {
	  API: 'api',
	  SILENT: 'silent',
	  USER: 'user'
	};

	exports.default = Emitter;

/***/ },
/* 36 */
/***/ function(moduleexports) {

	'use strict';

	var has = Object.prototype.hasOwnProperty
	  prefix = '~';

	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @api private
	 */
	function Events() {}

	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);

	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4iPhone 5.1Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}

	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {Mixed} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @api private
	 */
	function EE(fncontextonce) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @api public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @api public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    events
	    name;

	  if (this._eventsCount === 0) return names;

	  for (name in (events = this._events)) {
	    if (has.call(eventsname)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Boolean} exists Only check if there are listeners.
	 * @returns {Array|Boolean}
	 * @api public
	 */
	EventEmitter.prototype.listeners = function listeners(eventexists) {
	  var evt = prefix ? prefix + event : event
	    available = this._events[evt];

	  if (exists) return !!available;
	  if (!available) return [];
	  if (available.fn) return [available.fn];

	  for (var i = 0l = available.lengthee = new Array(l); i < l; i++) {
	    ee[i] = available[i].fn;
	  }

	  return ee;
	};

	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @returns {Boolean} `true` if the event had listenerselse `false`.
	 * @api public
	 */
	EventEmitter.prototype.emit = function emit(eventa1a2a3a4a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return false;

	  var listeners = this._events[evt]
	    len = arguments.length
	    args
	    i;

	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(eventlisteners.fnundefinedtrue);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context)true;
	      case 2: return listeners.fn.call(listeners.contexta1)true;
	      case 3: return listeners.fn.call(listeners.contexta1a2)true;
	      case 4: return listeners.fn.call(listeners.contexta1a2a3)true;
	      case 5: return listeners.fn.call(listeners.contexta1a2a3a4)true;
	      case 6: return listeners.fn.call(listeners.contexta1a2a3a4a5)true;
	    }

	    for (i = 1args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.contextargs);
	  } else {
	    var length = listeners.length
	      j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(eventlisteners[i].fnundefinedtrue);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].contexta1); break;
	        case 3: listeners[i].fn.call(listeners[i].contexta1a2); break;
	        case 4: listeners[i].fn.call(listeners[i].contexta1a2a3); break;
	        default:
	          if (!args) for (j = 1args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].contextargs);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Add a listener for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {Mixed} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.on = function on(eventfncontext) {
	  var listener = new EE(fncontext || this)
	    evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) this._events[evt] = listenerthis._eventsCount++;
	  else if (!this._events[evt].fn) this._events[evt].push(listener);
	  else this._events[evt] = [this._events[evt]listener];

	  return this;
	};

	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {Mixed} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.once = function once(eventfncontext) {
	  var listener = new EE(fncontext || thistrue)
	    evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) this._events[evt] = listenerthis._eventsCount++;
	  else if (!this._events[evt].fn) this._events[evt].push(listener);
	  else this._events[evt] = [this._events[evt]listener];

	  return this;
	};

	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {String|Symbol} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {Mixed} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.removeListener = function removeListener(eventfncontextonce) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return this;
	  if (!fn) {
	    if (--this._eventsCount === 0) this._events = new Events();
	    else delete this._events[evt];
	    return this;
	  }

	  var listeners = this._events[evt];

	  if (listeners.fn) {
	    if (
	         listeners.fn === fn
	      && (!once || listeners.once)
	      && (!context || listeners.context === context)
	    ) {
	      if (--this._eventsCount === 0) this._events = new Events();
	      else delete this._events[evt];
	    }
	  } else {
	    for (var i = 0events = []length = listeners.length; i < length; i++) {
	      if (
	           listeners[i].fn !== fn
	        || (once && !listeners[i].once)
	        || (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }

	    //
	    // Reset the arrayor remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else if (--this._eventsCount === 0) this._events = new Events();
	    else delete this._events[evt];
	  }

	  return this;
	};

	/**
	 * Remove all listenersor those of the specified event.
	 *
	 * @param {String|Symbol} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @api public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;

	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) {
	      if (--this._eventsCount === 0) this._events = new Events();
	      else delete this._events[evt];
	    }
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// This function doesn't apply anymore.
	//
	EventEmitter.prototype.setMaxListeners = function setMaxListeners() {
	  return this;
	};

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;

	//
	// Expose the module.
	//
	if ('undefined' !== typeof module) {
	  module.exports = EventEmitter;
	}


/***/ },
/* 37 */
/***/ function(moduleexports) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	var levels = ['error''warn''log''info'];
	var level = 'warn';

	function debug(method) {
	  if (levels.indexOf(method) <= levels.indexOf(level)) {
	    for (var _len = arguments.lengthargs = Array(_len > 1 ? _len - 1 : 0)_key = 1; _key < _len; _key++) {
	      args[_key - 1] = arguments[_key];
	    }

	    console[method].apply(consoleargs); // eslint-disable-line no-console
	  }
	}

	function namespace(ns) {
	  return levels.reduce(function (loggermethod) {
	    logger[method] = debug.bind(consolemethodns);
	    return logger;
	  }{});
	}

	debug.level = namespace.level = function (newLevel) {
	  level = newLevel;
	};

	exports.default = namespace;

/***/ },
/* 38 */
/***/ function(moduleexports) {

	var clone = (function() {
	'use strict';

	var nativeMap;
	try {
	  nativeMap = Map;
	} catch(_) {
	  // maybe a reference error because no `Map`. Give it a dummy value that no
	  // value will ever be an instanceof.
	  nativeMap = function() {};
	}

	var nativeSet;
	try {
	  nativeSet = Set;
	} catch(_) {
	  nativeSet = function() {};
	}

	var nativePromise;
	try {
	  nativePromise = Promise;
	} catch(_) {
	  nativePromise = function() {};
	}

	/**
	 * Clones (copies) an Object using deep copying.
	 *
	 * This function supports circular references by defaultbut if you are certain
	 * there are no circular references in your objectyou can save some CPU time
	 * by calling clone(objfalse).
	 *
	 * Caution: if `circular` is false and `parent` contains circular references,
	 * your program may enter an infinite loop and crash.
	 *
	 * @param `parent` - the object to be cloned
	 * @param `circular` - set to true if the object to be cloned may contain
	 *    circular references. (optional - true by default)
	 * @param `depth` - set to a number if the object is only to be cloned to
	 *    a particular depth. (optional - defaults to Infinity)
	 * @param `prototype` - sets the prototype to be used when cloning an object.
	 *    (optional - defaults to parent prototype).
	 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
	 *    should be cloned as well. Non-enumerable properties on the prototype
	 *    chain will be ignored. (optional - false by default)
	*/
	function clone(parentcirculardepthprototypeincludeNonEnumerable) {
	  if (typeof circular === 'object') {
	    depth = circular.depth;
	    prototype = circular.prototype;
	    includeNonEnumerable = circular.includeNonEnumerable;
	    circular = circular.circular;
	  }
	  // maintain two arrays for circular referenceswhere corresponding parents
	  // and children have the same index
	  var allParents = [];
	  var allChildren = [];

	  var useBuffer = typeof Buffer != 'undefined';

	  if (typeof circular == 'undefined')
	    circular = true;

	  if (typeof depth == 'undefined')
	    depth = Infinity;

	  // recurse this function so we don't reset allParents and allChildren
	  function _clone(parentdepth) {
	    // cloning null always returns null
	    if (parent === null)
	      return null;

	    if (depth === 0)
	      return parent;

	    var child;
	    var proto;
	    if (typeof parent != 'object') {
	      return parent;
	    }

	    if (parent instanceof nativeMap) {
	      child = new nativeMap();
	    } else if (parent instanceof nativeSet) {
	      child = new nativeSet();
	    } else if (parent instanceof nativePromise) {
	      child = new nativePromise(function (resolvereject) {
	        parent.then(function(value) {
	          resolve(_clone(valuedepth - 1));
	        }function(err) {
	          reject(_clone(errdepth - 1));
	        });
	      });
	    } else if (clone.__isArray(parent)) {
	      child = [];
	    } else if (clone.__isRegExp(parent)) {
	      child = new RegExp(parent.source__getRegExpFlags(parent));
	      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
	    } else if (clone.__isDate(parent)) {
	      child = new Date(parent.getTime());
	    } else if (useBuffer && Buffer.isBuffer(parent)) {
	      child = new Buffer(parent.length);
	      parent.copy(child);
	      return child;
	    } else if (parent instanceof Error) {
	      child = Object.create(parent);
	    } else {
	      if (typeof prototype == 'undefined') {
	        proto = Object.getPrototypeOf(parent);
	        child = Object.create(proto);
	      }
	      else {
	        child = Object.create(prototype);
	        proto = prototype;
	      }
	    }

	    if (circular) {
	      var index = allParents.indexOf(parent);

	      if (index != -1) {
	        return allChildren[index];
	      }
	      allParents.push(parent);
	      allChildren.push(child);
	    }

	    if (parent instanceof nativeMap) {
	      var keyIterator = parent.keys();
	      while(true) {
	        var next = keyIterator.next();
	        if (next.done) {
	          break;
	        }
	        var keyChild = _clone(next.valuedepth - 1);
	        var valueChild = _clone(parent.get(next.value)depth - 1);
	        child.set(keyChildvalueChild);
	      }
	    }
	    if (parent instanceof nativeSet) {
	      var iterator = parent.keys();
	      while(true) {
	        var next = iterator.next();
	        if (next.done) {
	          break;
	        }
	        var entryChild = _clone(next.valuedepth - 1);
	        child.add(entryChild);
	      }
	    }

	    for (var i in parent) {
	      var attrs;
	      if (proto) {
	        attrs = Object.getOwnPropertyDescriptor(protoi);
	      }

	      if (attrs && attrs.set == null) {
	        continue;
	      }
	      child[i] = _clone(parent[i]depth - 1);
	    }

	    if (Object.getOwnPropertySymbols) {
	      var symbols = Object.getOwnPropertySymbols(parent);
	      for (var i = 0; i < symbols.length; i++) {
	        // Don't need to worry about cloning a symbol because it is a primitive,
	        // like a number or string.
	        var symbol = symbols[i];
	        var descriptor = Object.getOwnPropertyDescriptor(parentsymbol);
	        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
	          continue;
	        }
	        child[symbol] = _clone(parent[symbol]depth - 1);
	        if (!descriptor.enumerable) {
	          Object.defineProperty(childsymbol{
	            enumerable: false
	          });
	        }
	      }
	    }

	    if (includeNonEnumerable) {
	      var allPropertyNames = Object.getOwnPropertyNames(parent);
	      for (var i = 0; i < allPropertyNames.length; i++) {
	        var propertyName = allPropertyNames[i];
	        var descriptor = Object.getOwnPropertyDescriptor(parentpropertyName);
	        if (descriptor && descriptor.enumerable) {
	          continue;
	        }
	        child[propertyName] = _clone(parent[propertyName]depth - 1);
	        Object.defineProperty(childpropertyName{
	          enumerable: false
	        });
	      }
	    }

	    return child;
	  }

	  return _clone(parentdepth);
	}

	/**
	 * Simple flat clone using prototypeaccepts only objectsusefull for property
	 * override on FLAT configuration object (no nested props).
	 *
	 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
	 * works.
	 */
	clone.clonePrototype = function clonePrototype(parent) {
	  if (parent === null)
	    return null;

	  var c = function () {};
	  c.prototype = parent;
	  return new c();
	};

	// private utility functions

	function __objToStr(o) {
	  return Object.prototype.toString.call(o);
	}
	clone.__objToStr = __objToStr;

	function __isDate(o) {
	  return typeof o === 'object' && __objToStr(o) === '[object Date]';
	}
	clone.__isDate = __isDate;

	function __isArray(o) {
	  return typeof o === 'object' && __objToStr(o) === '[object Array]';
	}
	clone.__isArray = __isArray;

	function __isRegExp(o) {
	  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
	}
	clone.__isRegExp = __isRegExp;

	function __getRegExpFlags(re) {
	  var flags = '';
	  if (re.global) flags += 'g';
	  if (re.ignoreCase) flags += 'i';
	  if (re.multiline) flags += 'm';
	  return flags;
	}
	clone.__getRegExpFlags = __getRegExpFlags;

	return clone;
	})();

	if (typeof module === 'object' && module.exports) {
	  module.exports = clone;
	}


/***/ },
/* 39 */
/***/ function(moduleexports) {

	"use strict";

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Module = function Module(quill) {
	  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  _classCallCheck(thisModule);

	  this.quill = quill;
	  this.options = options;
	};

	Module.DEFAULTS = {};

	exports.default = Module;

/***/ },
/* 40 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.default = exports.Range = undefined;

	var _slicedToArray = function () { function sliceIterator(arri) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator]()_s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arri) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arri); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _clone = __webpack_require__(38);

	var _clone2 = _interopRequireDefault(_clone);

	var _deepEqual = __webpack_require__(22);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _emitter3 = __webpack_require__(35);

	var _emitter4 = _interopRequireDefault(_emitter3);

	var _logger = __webpack_require__(37);

	var _logger2 = _interopRequireDefault(_logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var debug = (0_logger2.default)('quill:selection');

	var Range = function Range(index) {
	  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	  _classCallCheck(thisRange);

	  this.index = index;
	  this.length = length;
	};

	var Selection = function () {
	  function Selection(scrollemitter) {
	    var _this = this;

	    _classCallCheck(thisSelection);

	    this.emitter = emitter;
	    this.scroll = scroll;
	    this.composing = false;
	    this.root = this.scroll.domNode;
	    this.root.addEventListener('compositionstart'function () {
	      _this.composing = true;
	    });
	    this.root.addEventListener('compositionend'function () {
	      _this.composing = false;
	    });
	    this.cursor = _parchment2.default.create('cursor'this);
	    // savedRange is last non-null range
	    this.lastRange = this.savedRange = new Range(00);
	    ['keyup''mouseup''mouseleave''touchend''touchleave''focus''blur'].forEach(function (eventName) {
	      _this.root.addEventListener(eventNamefunction () {
	        // When range used to be a selection and user click within the selection,
	        // the range now being a cursor has not updated yet without setTimeout
	        setTimeout(_this.update.bind(_this_emitter4.default.sources.USER)100);
	      });
	    });
	    this.emitter.on(_emitter4.default.events.EDITOR_CHANGEfunction (typedelta) {
	      if (type === _emitter4.default.events.TEXT_CHANGE && delta.length() > 0) {
	        _this.update(_emitter4.default.sources.SILENT);
	      }
	    });
	    this.emitter.on(_emitter4.default.events.SCROLL_BEFORE_UPDATEfunction () {
	      var native = _this.getNativeRange();
	      if (native == null) return;
	      if (native.start.node === _this.cursor.textNode) return; // cursor.restore() will handle
	      // TODO unclear if this has negative side effects
	      _this.emitter.once(_emitter4.default.events.SCROLL_UPDATEfunction () {
	        try {
	          _this.setNativeRange(native.start.nodenative.start.offsetnative.end.nodenative.end.offset);
	        } catch (ignored) {}
	      });
	    });
	    this.update(_emitter4.default.sources.SILENT);
	  }

	  _createClass(Selection[{
	    key: 'focus',
	    value: function focus() {
	      if (this.hasFocus()) return;
	      var bodyTop = document.body.scrollTop;
	      this.root.focus();
	      document.body.scrollTop = bodyTop;
	      this.setRange(this.savedRange);
	    }
	  }{
	    key: 'format',
	    value: function format(_formatvalue) {
	      this.scroll.update();
	      var nativeRange = this.getNativeRange();
	      if (nativeRange == null || !nativeRange.native.collapsed || _parchment2.default.query(_format_parchment2.default.Scope.BLOCK)) return;
	      if (nativeRange.start.node !== this.cursor.textNode) {
	        var blot = _parchment2.default.find(nativeRange.start.nodefalse);
	        if (blot == null) return;
	        // TODO Give blot ability to not split
	        if (blot instanceof _parchment2.default.Leaf) {
	          var after = blot.split(nativeRange.start.offset);
	          blot.parent.insertBefore(this.cursorafter);
	        } else {
	          blot.insertBefore(this.cursornativeRange.start.node); // Should never happen
	        }
	        this.cursor.attach();
	      }
	      this.cursor.format(_formatvalue);
	      this.scroll.optimize();
	      this.setNativeRange(this.cursor.textNodethis.cursor.textNode.data.length);
	      this.update();
	    }
	  }{
	    key: 'getBounds',
	    value: function getBounds(index) {
	      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	      var scrollLength = this.scroll.length();
	      index = Math.min(indexscrollLength - 1);
	      length = Math.min(index + lengthscrollLength - 1) - index;
	      var bounds = void 0,
	          node = void 0,
	          _scroll$leaf = this.scroll.leaf(index),
	          _scroll$leaf2 = _slicedToArray(_scroll$leaf2),
	          leaf = _scroll$leaf2[0],
	          offset = _scroll$leaf2[1];
	      if (leaf == null) return null;

	      var _leaf$position = leaf.position(offsettrue);

	      var _leaf$position2 = _slicedToArray(_leaf$position2);

	      node = _leaf$position2[0];
	      offset = _leaf$position2[1];

	      var range = document.createRange();
	      if (length > 0) {
	        range.setStart(nodeoffset);

	        var _scroll$leaf3 = this.scroll.leaf(index + length);

	        var _scroll$leaf4 = _slicedToArray(_scroll$leaf32);

	        leaf = _scroll$leaf4[0];
	        offset = _scroll$leaf4[1];

	        if (leaf == null) return null;

	        var _leaf$position3 = leaf.position(offsettrue);

	        var _leaf$position4 = _slicedToArray(_leaf$position32);

	        node = _leaf$position4[0];
	        offset = _leaf$position4[1];

	        range.setEnd(nodeoffset);
	        bounds = range.getBoundingClientRect();
	      } else {
	        var side = 'left';
	        var rect = void 0;
	        if (node instanceof Text) {
	          if (offset < node.data.length) {
	            range.setStart(nodeoffset);
	            range.setEnd(nodeoffset + 1);
	          } else {
	            range.setStart(nodeoffset - 1);
	            range.setEnd(nodeoffset);
	            side = 'right';
	          }
	          rect = range.getBoundingClientRect();
	        } else {
	          rect = leaf.domNode.getBoundingClientRect();
	          if (offset > 0) side = 'right';
	        }
	        bounds = {
	          height: rect.height,
	          left: rect[side],
	          width: 0,
	          top: rect.top
	        };
	      }
	      var containerBounds = this.root.parentNode.getBoundingClientRect();
	      return {
	        left: bounds.left - containerBounds.left,
	        right: bounds.left + bounds.width - containerBounds.left,
	        top: bounds.top - containerBounds.top,
	        bottom: bounds.top + bounds.height - containerBounds.top,
	        height: bounds.height,
	        width: bounds.width
	      };
	    }
	  }{
	    key: 'getNativeRange',
	    value: function getNativeRange() {
	      var selection = document.getSelection();
	      if (selection == null || selection.rangeCount <= 0) return null;
	      var nativeRange = selection.getRangeAt(0);
	      if (nativeRange == null) return null;
	      if (!contains(this.rootnativeRange.startContainer) || !nativeRange.collapsed && !contains(this.rootnativeRange.endContainer)) {
	        return null;
	      }
	      var range = {
	        start: { node: nativeRange.startContaineroffset: nativeRange.startOffset },
	        end: { node: nativeRange.endContaineroffset: nativeRange.endOffset },
	        native: nativeRange
	      };
	      [range.startrange.end].forEach(function (position) {
	        var node = position.node,
	            offset = position.offset;
	        while (!(node instanceof Text) && node.childNodes.length > 0) {
	          if (node.childNodes.length > offset) {
	            node = node.childNodes[offset];
	            offset = 0;
	          } else if (node.childNodes.length === offset) {
	            node = node.lastChild;
	            offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
	          } else {
	            break;
	          }
	        }
	        position.node = nodeposition.offset = offset;
	      });
	      debug.info('getNativeRange'range);
	      return range;
	    }
	  }{
	    key: 'getRange',
	    value: function getRange() {
	      var _this2 = this;

	      var range = this.getNativeRange();
	      if (range == null) return [nullnull];
	      var positions = [[range.start.noderange.start.offset]];
	      if (!range.native.collapsed) {
	        positions.push([range.end.noderange.end.offset]);
	      }
	      var indexes = positions.map(function (position) {
	        var _position = _slicedToArray(position2),
	            node = _position[0],
	            offset = _position[1];

	        var blot = _parchment2.default.find(nodetrue);
	        var index = blot.offset(_this2.scroll);
	        if (offset === 0) {
	          return index;
	        } else if (blot instanceof _parchment2.default.Container) {
	          return index + blot.length();
	        } else {
	          return index + blot.index(nodeoffset);
	        }
	      });
	      var start = Math.min.apply(Math_toConsumableArray(indexes)),
	          end = Math.max.apply(Math_toConsumableArray(indexes));
	      return [new Range(startend - start)range];
	    }
	  }{
	    key: 'hasFocus',
	    value: function hasFocus() {
	      return document.activeElement === this.root;
	    }
	  }{
	    key: 'scrollIntoView',
	    value: function scrollIntoView() {
	      var range = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.lastRange;

	      if (range == null) return;
	      var bounds = this.getBounds(range.indexrange.length);
	      if (bounds == null) return;
	      if (this.root.offsetHeight < bounds.bottom) {
	        var _scroll$line = this.scroll.line(Math.min(range.index + range.lengththis.scroll.length() - 1)),
	            _scroll$line2 = _slicedToArray(_scroll$line1),
	            line = _scroll$line2[0];

	        this.root.scrollTop = line.domNode.offsetTop + line.domNode.offsetHeight - this.root.offsetHeight;
	      } else if (bounds.top < 0) {
	        var _scroll$line3 = this.scroll.line(Math.min(range.indexthis.scroll.length() - 1)),
	            _scroll$line4 = _slicedToArray(_scroll$line31),
	            _line = _scroll$line4[0];

	        this.root.scrollTop = _line.domNode.offsetTop;
	      }
	    }
	  }{
	    key: 'setNativeRange',
	    value: function setNativeRange(startNodestartOffset) {
	      var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startNode;
	      var endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;
	      var force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

	      debug.info('setNativeRange'startNodestartOffsetendNodeendOffset);
	      if (startNode != null && (this.root.parentNode == null || startNode.parentNode == null || endNode.parentNode == null)) {
	        return;
	      }
	      var selection = document.getSelection();
	      if (selection == null) return;
	      if (startNode != null) {
	        if (!this.hasFocus()) this.root.focus();
	        var nativeRange = this.getNativeRange();
	        if (nativeRange == null || force || startNode !== nativeRange.start.node || startOffset !== nativeRange.start.offset || endNode !== nativeRange.end.node || endOffset !== nativeRange.end.offset) {
	          var range = document.createRange();
	          range.setStart(startNodestartOffset);
	          range.setEnd(endNodeendOffset);
	          selection.removeAllRanges();
	          selection.addRange(range);
	        }
	      } else {
	        selection.removeAllRanges();
	        this.root.blur();
	        document.body.focus(); // root.blur() not enough on IE11+Travis+SauceLabs (but not local VMs)
	      }
	    }
	  }{
	    key: 'setRange',
	    value: function setRange(range) {
	      var _this3 = this;

	      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _emitter4.default.sources.API;

	      if (typeof force === 'string') {
	        source = force;
	        force = false;
	      }
	      debug.info('setRange'range);
	      if (range != null) {
	        (function () {
	          var indexes = range.collapsed ? [range.index] : [range.indexrange.index + range.length];
	          var args = [];
	          var scrollLength = _this3.scroll.length();
	          indexes.forEach(function (indexi) {
	            index = Math.min(scrollLength - 1index);
	            var node = void 0,
	                _scroll$leaf5 = _this3.scroll.leaf(index),
	                _scroll$leaf6 = _slicedToArray(_scroll$leaf52),
	                leaf = _scroll$leaf6[0],
	                offset = _scroll$leaf6[1];
	            var _leaf$position5 = leaf.position(offseti !== 0);

	            var _leaf$position6 = _slicedToArray(_leaf$position52);

	            node = _leaf$position6[0];
	            offset = _leaf$position6[1];

	            args.push(nodeoffset);
	          });
	          if (args.length < 2) {
	            args = args.concat(args);
	          }
	          _this3.setNativeRange.apply(_this3_toConsumableArray(args).concat([force]));
	        })();
	      } else {
	        this.setNativeRange(null);
	      }
	      this.update(source);
	    }
	  }{
	    key: 'update',
	    value: function update() {
	      var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _emitter4.default.sources.USER;

	      var nativeRange = void 0,
	          oldRange = this.lastRange;

	      var _getRange = this.getRange();

	      var _getRange2 = _slicedToArray(_getRange2);

	      this.lastRange = _getRange2[0];
	      nativeRange = _getRange2[1];

	      if (this.lastRange != null) {
	        this.savedRange = this.lastRange;
	      }
	      if (!(0_deepEqual2.default)(oldRangethis.lastRange)) {
	        var _emitter;

	        if (!this.composing && nativeRange != null && nativeRange.native.collapsed && nativeRange.start.node !== this.cursor.textNode) {
	          this.cursor.restore();
	        }
	        var args = [_emitter4.default.events.SELECTION_CHANGE(0_clone2.default)(this.lastRange)(0_clone2.default)(oldRange)source];
	        (_emitter = this.emitter).emit.apply(_emitter[_emitter4.default.events.EDITOR_CHANGE].concat(args));
	        if (source !== _emitter4.default.sources.SILENT) {
	          var _emitter2;

	          (_emitter2 = this.emitter).emit.apply(_emitter2args);
	        }
	      }
	    }
	  }]);

	  return Selection;
	}();

	function contains(parentdescendant) {
	  try {
	    // Firefox inserts inaccessible nodes around video elements
	    descendant.parentNode;
	  } catch (e) {
	    return false;
	  }
	  // IE11 has bug with Text nodes
	  // https://connect.microsoft.com/IE/feedback/details/780874/node-contains-is-incorrect
	  if (descendant instanceof Text) {
	    descendant = descendant.parentNode;
	  }
	  return parent.contains(descendant);
	}

	exports.Range = Range;
	exports.default = Selection;

/***/ },
/* 41 */
/***/ function(moduleexports) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Theme = function () {
	  function Theme(quilloptions) {
	    _classCallCheck(thisTheme);

	    this.quill = quill;
	    this.options = options;
	    this.modules = {};
	  }

	  _createClass(Theme[{
	    key: 'init',
	    value: function init() {
	      var _this = this;

	      Object.keys(this.options.modules).forEach(function (name) {
	        if (_this.modules[name] == null) {
	          _this.addModule(name);
	        }
	      });
	    }
	  }{
	    key: 'addModule',
	    value: function addModule(name) {
	      var moduleClass = this.quill.constructor.import('modules/' + name);
	      this.modules[name] = new moduleClass(this.quillthis.options.modules[name] || {});
	      return this.modules[name];
	    }
	  }]);

	  return Theme;
	}();

	Theme.DEFAULTS = {
	  modules: {}
	};
	Theme.themes = {
	  'default': Theme
	};

	exports.default = Theme;

/***/ },
/* 42 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _block = __webpack_require__(29);

	var _block2 = _interopRequireDefault(_block);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var Container = function (_Parchment$Container) {
	  _inherits(Container_Parchment$Container);

	  function Container() {
	    _classCallCheck(thisContainer);

	    return _possibleConstructorReturn(this(Container.__proto__ || Object.getPrototypeOf(Container)).apply(thisarguments));
	  }

	  return Container;
	}(_parchment2.default.Container);

	Container.allowedChildren = [_block2.default_block.BlockEmbedContainer];

	exports.default = Container;

/***/ },
/* 43 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arri) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator]()_s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arri) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arri); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _emitter = __webpack_require__(35);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _block = __webpack_require__(29);

	var _block2 = _interopRequireDefault(_block);

	var _break = __webpack_require__(30);

	var _break2 = _interopRequireDefault(_break);

	var _container = __webpack_require__(42);

	var _container2 = _interopRequireDefault(_container);

	var _code = __webpack_require__(28);

	var _code2 = _interopRequireDefault(_code);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	function isLine(blot) {
	  return blot instanceof _block2.default || blot instanceof _block.BlockEmbed;
	}

	var Scroll = function (_Parchment$Scroll) {
	  _inherits(Scroll_Parchment$Scroll);

	  function Scroll(domNodeconfig) {
	    _classCallCheck(thisScroll);

	    var _this = _possibleConstructorReturn(this(Scroll.__proto__ || Object.getPrototypeOf(Scroll)).call(thisdomNode));

	    _this.emitter = config.emitter;
	    if (Array.isArray(config.whitelist)) {
	      _this.whitelist = config.whitelist.reduce(function (whitelistformat) {
	        whitelist[format] = true;
	        return whitelist;
	      }{});
	    }
	    _this.optimize();
	    _this.enable();
	    return _this;
	  }

	  _createClass(Scroll[{
	    key: 'deleteAt',
	    value: function deleteAt(indexlength) {
	      var _line = this.line(index),
	          _line2 = _slicedToArray(_line2),
	          first = _line2[0],
	          offset = _line2[1];

	      var _line3 = this.line(index + length),
	          _line4 = _slicedToArray(_line31),
	          last = _line4[0];

	      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype)'deleteAt'this).call(thisindexlength);
	      if (last != null && first !== last && offset > 0 && !(first instanceof _block.BlockEmbed) && !(last instanceof _block.BlockEmbed)) {
	        if (last instanceof _code2.default) {
	          last.deleteAt(last.length() - 11);
	        }
	        var ref = last.children.head instanceof _break2.default ? null : last.children.head;
	        first.moveChildren(lastref);
	        first.remove();
	      }
	      this.optimize();
	    }
	  }{
	    key: 'enable',
	    value: function enable() {
	      var enabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

	      this.domNode.setAttribute('contenteditable'enabled);
	    }
	  }{
	    key: 'formatAt',
	    value: function formatAt(indexlengthformatvalue) {
	      if (this.whitelist != null && !this.whitelist[format]) return;
	      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype)'formatAt'this).call(thisindexlengthformatvalue);
	      this.optimize();
	    }
	  }{
	    key: 'insertAt',
	    value: function insertAt(indexvaluedef) {
	      if (def != null && this.whitelist != null && !this.whitelist[value]) return;
	      if (index >= this.length()) {
	        if (def == null || _parchment2.default.query(value_parchment2.default.Scope.BLOCK) == null) {
	          var blot = _parchment2.default.create(this.statics.defaultChild);
	          this.appendChild(blot);
	          if (def == null && value.endsWith('\n')) {
	            value = value.slice(0-1);
	          }
	          blot.insertAt(0valuedef);
	        } else {
	          var embed = _parchment2.default.create(valuedef);
	          this.appendChild(embed);
	        }
	      } else {
	        _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype)'insertAt'this).call(thisindexvaluedef);
	      }
	      this.optimize();
	    }
	  }{
	    key: 'insertBefore',
	    value: function insertBefore(blotref) {
	      if (blot.statics.scope === _parchment2.default.Scope.INLINE_BLOT) {
	        var wrapper = _parchment2.default.create(this.statics.defaultChild);
	        wrapper.appendChild(blot);
	        blot = wrapper;
	      }
	      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype)'insertBefore'this).call(thisblotref);
	    }
	  }{
	    key: 'leaf',
	    value: function leaf(index) {
	      return this.path(index).pop() || [null-1];
	    }
	  }{
	    key: 'line',
	    value: function line(index) {
	      if (index === this.length()) {
	        return this.line(index - 1);
	      }
	      return this.descendant(isLineindex);
	    }
	  }{
	    key: 'lines',
	    value: function lines() {
	      var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	      var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_VALUE;

	      var getLines = function getLines(blotindexlength) {
	        var lines = [],
	            lengthLeft = length;
	        blot.children.forEachAt(indexlengthfunction (childindexlength) {
	          if (isLine(child)) {
	            lines.push(child);
	          } else if (child instanceof _parchment2.default.Container) {
	            lines = lines.concat(getLines(childindexlengthLeft));
	          }
	          lengthLeft -= length;
	        });
	        return lines;
	      };
	      return getLines(thisindexlength);
	    }
	  }{
	    key: 'optimize',
	    value: function optimize() {
	      var mutations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	      if (this.batch === true) return;
	      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype)'optimize'this).call(thismutations);
	      if (mutations.length > 0) {
	        this.emitter.emit(_emitter2.default.events.SCROLL_OPTIMIZEmutations);
	      }
	    }
	  }{
	    key: 'path',
	    value: function path(index) {
	      return _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype)'path'this).call(thisindex).slice(1); // Exclude self
	    }
	  }{
	    key: 'update',
	    value: function update(mutations) {
	      if (this.batch === true) return;
	      var source = _emitter2.default.sources.USER;
	      if (typeof mutations === 'string') {
	        source = mutations;
	      }
	      if (!Array.isArray(mutations)) {
	        mutations = this.observer.takeRecords();
	      }
	      if (mutations.length > 0) {
	        this.emitter.emit(_emitter2.default.events.SCROLL_BEFORE_UPDATEsourcemutations);
	      }
	      _get(Scroll.prototype.__proto__ || Object.getPrototypeOf(Scroll.prototype)'update'this).call(thismutations.concat([])); // pass copy
	      if (mutations.length > 0) {
	        this.emitter.emit(_emitter2.default.events.SCROLL_UPDATEsourcemutations);
	      }
	    }
	  }]);

	  return Scroll;
	}(_parchment2.default.Scroll);

	Scroll.blotName = 'scroll';
	Scroll.className = 'ql-editor';
	Scroll.tagName = 'DIV';
	Scroll.defaultChild = 'block';
	Scroll.allowedChildren = [_block2.default_block.BlockEmbed_container2.default];

	exports.default = Scroll;

/***/ },
/* 44 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.matchText = exports.matchSpacing = exports.matchNewline = exports.matchBlot = exports.matchAttributor = exports.default = undefined;

	var _slicedToArray = function () { function sliceIterator(arri) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator]()_s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arri) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arri); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _quillDelta = __webpack_require__(20);

	var _quillDelta2 = _interopRequireDefault(_quillDelta);

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _quill = __webpack_require__(18);

	var _quill2 = _interopRequireDefault(_quill);

	var _logger = __webpack_require__(37);

	var _logger2 = _interopRequireDefault(_logger);

	var _module = __webpack_require__(39);

	var _module2 = _interopRequireDefault(_module);

	var _align = __webpack_require__(45);

	var _background = __webpack_require__(46);

	var _color = __webpack_require__(47);

	var _direction = __webpack_require__(48);

	var _font = __webpack_require__(49);

	var _size = __webpack_require__(50);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(objkeyvalue) { if (key in obj) { Object.defineProperty(objkey{ value: valueenumerable: trueconfigurable: truewritable: true }); } else { obj[key] = value; } return obj; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var debug = (0_logger2.default)('quill:clipboard');

	var DOM_KEY = '__ql-matcher';

	var CLIPBOARD_CONFIG = [[Node.TEXT_NODEmatchText]['br'matchBreak][Node.ELEMENT_NODEmatchNewline][Node.ELEMENT_NODEmatchBlot][Node.ELEMENT_NODEmatchSpacing][Node.ELEMENT_NODEmatchAttributor][Node.ELEMENT_NODEmatchStyles]['b'matchAlias.bind(matchAlias'bold')]['i'matchAlias.bind(matchAlias'italic')]['style'matchIgnore]];

	var ATTRIBUTE_ATTRIBUTORS = [_align.AlignAttribute_direction.DirectionAttribute].reduce(function (memoattr) {
	  memo[attr.keyName] = attr;
	  return memo;
	}{});

	var STYLE_ATTRIBUTORS = [_align.AlignStyle_background.BackgroundStyle_color.ColorStyle_direction.DirectionStyle_font.FontStyle_size.SizeStyle].reduce(function (memoattr) {
	  memo[attr.keyName] = attr;
	  return memo;
	}{});

	var Clipboard = function (_Module) {
	  _inherits(Clipboard_Module);

	  function Clipboard(quilloptions) {
	    _classCallCheck(thisClipboard);

	    var _this = _possibleConstructorReturn(this(Clipboard.__proto__ || Object.getPrototypeOf(Clipboard)).call(thisquilloptions));

	    _this.quill.root.addEventListener('paste'_this.onPaste.bind(_this));
	    _this.container = _this.quill.addContainer('ql-clipboard');
	    _this.container.setAttribute('contenteditable'true);
	    _this.container.setAttribute('tabindex'-1);
	    _this.matchers = [];
	    CLIPBOARD_CONFIG.concat(_this.options.matchers).forEach(function (pair) {
	      _this.addMatcher.apply(_this_toConsumableArray(pair));
	    });
	    return _this;
	  }

	  _createClass(Clipboard[{
	    key: 'addMatcher',
	    value: function addMatcher(selectormatcher) {
	      this.matchers.push([selectormatcher]);
	    }
	  }{
	    key: 'convert',
	    value: function convert(html) {
	      if (typeof html === 'string') {
	        this.container.innerHTML = html;
	      }

	      var _prepareMatching = this.prepareMatching(),
	          _prepareMatching2 = _slicedToArray(_prepareMatching2),
	          elementMatchers = _prepareMatching2[0],
	          textMatchers = _prepareMatching2[1];

	      var delta = traverse(this.containerelementMatcherstextMatchers);
	      // Remove trailing newline
	      if (deltaEndsWith(delta'\n') && delta.ops[delta.ops.length - 1].attributes == null) {
	        delta = delta.compose(new _quillDelta2.default().retain(delta.length() - 1).delete(1));
	      }
	      debug.log('convert'this.container.innerHTMLdelta);
	      this.container.innerHTML = '';
	      return delta;
	    }
	  }{
	    key: 'dangerouslyPasteHTML',
	    value: function dangerouslyPasteHTML(indexhtml) {
	      var source = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _quill2.default.sources.API;

	      if (typeof index === 'string') {
	        return this.quill.setContents(this.convert(index)html);
	      } else {
	        var paste = this.convert(html);
	        return this.quill.updateContents(new _quillDelta2.default().retain(index).concat(paste)source);
	      }
	    }
	  }{
	    key: 'onPaste',
	    value: function onPaste(e) {
	      var _this2 = this;

	      if (e.defaultPrevented || !this.quill.isEnabled()) return;
	      var range = this.quill.getSelection();
	      var delta = new _quillDelta2.default().retain(range.index).delete(range.length);
	      var bodyTop = document.body.scrollTop;
	      this.container.focus();
	      setTimeout(function () {
	        _this2.quill.selection.update(_quill2.default.sources.SILENT);
	        delta = delta.concat(_this2.convert());
	        _this2.quill.updateContents(delta_quill2.default.sources.USER);
	        // range.length contributes to delta.length()
	        _this2.quill.setSelection(delta.length() - range.length_quill2.default.sources.SILENT);
	        document.body.scrollTop = bodyTop;
	        _this2.quill.selection.scrollIntoView();
	      }1);
	    }
	  }{
	    key: 'prepareMatching',
	    value: function prepareMatching() {
	      var _this3 = this;

	      var elementMatchers = [],
	          textMatchers = [];
	      this.matchers.forEach(function (pair) {
	        var _pair = _slicedToArray(pair2),
	            selector = _pair[0],
	            matcher = _pair[1];

	        switch (selector) {
	          case Node.TEXT_NODE:
	            textMatchers.push(matcher);
	            break;
	          case Node.ELEMENT_NODE:
	            elementMatchers.push(matcher);
	            break;
	          default:
	            [].forEach.call(_this3.container.querySelectorAll(selector)function (node) {
	              // TODO use weakmap
	              node[DOM_KEY] = node[DOM_KEY] || [];
	              node[DOM_KEY].push(matcher);
	            });
	            break;
	        }
	      });
	      return [elementMatcherstextMatchers];
	    }
	  }]);

	  return Clipboard;
	}(_module2.default);

	Clipboard.DEFAULTS = {
	  matchers: []
	};

	function computeStyle(node) {
	  if (node.nodeType !== Node.ELEMENT_NODE) return {};
	  var DOM_KEY = '__ql-computed-style';
	  return node[DOM_KEY] || (node[DOM_KEY] = window.getComputedStyle(node));
	}

	function deltaEndsWith(deltatext) {
	  var endText = "";
	  for (var i = delta.ops.length - 1; i >= 0 && endText.length < text.length; --i) {
	    var op = delta.ops[i];
	    if (typeof op.insert !== 'string') break;
	    endText = op.insert + endText;
	  }
	  return endText.slice(-1 * text.length) === text;
	}

	function isLine(node) {
	  if (node.childNodes.length === 0) return false; // Exclude embed blocks
	  var style = computeStyle(node);
	  return ['block''list-item'].indexOf(style.display) > -1;
	}

	function traverse(nodeelementMatcherstextMatchers) {
	  // Post-order
	  if (node.nodeType === node.TEXT_NODE) {
	    return textMatchers.reduce(function (deltamatcher) {
	      return matcher(nodedelta);
	    }new _quillDelta2.default());
	  } else if (node.nodeType === node.ELEMENT_NODE) {
	    return [].reduce.call(node.childNodes || []function (deltachildNode) {
	      var childrenDelta = traverse(childNodeelementMatcherstextMatchers);
	      if (childNode.nodeType === node.ELEMENT_NODE) {
	        childrenDelta = elementMatchers.reduce(function (childrenDeltamatcher) {
	          return matcher(childNodechildrenDelta);
	        }childrenDelta);
	        childrenDelta = (childNode[DOM_KEY] || []).reduce(function (childrenDeltamatcher) {
	          return matcher(childNodechildrenDelta);
	        }childrenDelta);
	      }
	      return delta.concat(childrenDelta);
	    }new _quillDelta2.default());
	  } else {
	    return new _quillDelta2.default();
	  }
	}

	function matchAlias(formatnodedelta) {
	  return delta.compose(new _quillDelta2.default().retain(delta.length()_defineProperty({}formattrue)));
	}

	function matchAttributor(nodedelta) {
	  var attributes = _parchment2.default.Attributor.Attribute.keys(node);
	  var classes = _parchment2.default.Attributor.Class.keys(node);
	  var styles = _parchment2.default.Attributor.Style.keys(node);
	  var formats = {};
	  attributes.concat(classes).concat(styles).forEach(function (name) {
	    var attr = _parchment2.default.query(name_parchment2.default.Scope.ATTRIBUTE);
	    if (attr != null) {
	      formats[attr.attrName] = attr.value(node);
	      if (formats[attr.attrName]) return;
	    }
	    if (ATTRIBUTE_ATTRIBUTORS[name] != null) {
	      attr = ATTRIBUTE_ATTRIBUTORS[name];
	      formats[attr.attrName] = attr.value(node);
	    }
	    if (STYLE_ATTRIBUTORS[name] != null) {
	      attr = STYLE_ATTRIBUTORS[name];
	      formats[attr.attrName] = attr.value(node);
	    }
	  });
	  if (Object.keys(formats).length > 0) {
	    delta = delta.compose(new _quillDelta2.default().retain(delta.length()formats));
	  }
	  return delta;
	}

	function matchBlot(nodedelta) {
	  var match = _parchment2.default.query(node);
	  if (match == null) return delta;
	  if (match.prototype instanceof _parchment2.default.Embed) {
	    var embed = {};
	    var value = match.value(node);
	    if (value != null) {
	      embed[match.blotName] = value;
	      delta = new _quillDelta2.default().insert(embedmatch.formats(node));
	    }
	  } else if (typeof match.formats === 'function') {
	    var formats = _defineProperty({}match.blotNamematch.formats(node));
	    delta = delta.compose(new _quillDelta2.default().retain(delta.length()formats));
	  }
	  return delta;
	}

	function matchBreak(nodedelta) {
	  if (!deltaEndsWith(delta'\n')) {
	    delta.insert('\n');
	  }
	  return delta;
	}

	function matchIgnore() {
	  return new _quillDelta2.default();
	}

	function matchNewline(nodedelta) {
	  if (isLine(node) && !deltaEndsWith(delta'\n')) {
	    delta.insert('\n');
	  }
	  return delta;
	}

	function matchSpacing(nodedelta) {
	  if (isLine(node) && node.nextElementSibling != null && !deltaEndsWith(delta'\n\n')) {
	    var nodeHeight = node.offsetHeight + parseFloat(computeStyle(node).marginTop) + parseFloat(computeStyle(node).marginBottom);
	    if (node.nextElementSibling.offsetTop > node.offsetTop + nodeHeight * 1.5) {
	      delta.insert('\n');
	    }
	  }
	  return delta;
	}

	function matchStyles(nodedelta) {
	  var formats = {};
	  var style = node.style || {};
	  if (style.fontWeight && computeStyle(node).fontWeight === 'bold') {
	    formats.bold = true;
	  }
	  if (Object.keys(formats).length > 0) {
	    delta = delta.compose(new _quillDelta2.default().retain(delta.length()formats));
	  }
	  if (parseFloat(style.textIndent || 0) > 0) {
	    // Could be 0.5in
	    delta = new _quillDelta2.default().insert('\t').concat(delta);
	  }
	  return delta;
	}

	function matchText(nodedelta) {
	  var text = node.data;
	  // Word represents empty line with <o:p>&nbsp;</o:p>
	  if (node.parentNode.tagName === 'O:P') {
	    return delta.insert(text.trim());
	  }
	  if (!computeStyle(node.parentNode).whiteSpace.startsWith('pre')) {
	    // eslint-disable-next-line func-style
	    var replacer = function replacer(collapsematch) {
	      match = match.replace(/[^\u00a0]/g''); // \u00a0 is nbsp;
	      return match.length < 1 && collapse ? ' ' : match;
	    };
	    text = text.replace(/\r\n/g' ').replace(/\n/g' ');
	    text = text.replace(/\s\s+/greplacer.bind(replacertrue)); // collapse whitespace
	    if (node.previousSibling == null && isLine(node.parentNode) || node.previousSibling != null && isLine(node.previousSibling)) {
	      text = text.replace(/^\s+/replacer.bind(replacerfalse));
	    }
	    if (node.nextSibling == null && isLine(node.parentNode) || node.nextSibling != null && isLine(node.nextSibling)) {
	      text = text.replace(/\s+$/replacer.bind(replacerfalse));
	    }
	  }
	  return delta.insert(text);
	}

	exports.default = Clipboard;
	exports.matchAttributor = matchAttributor;
	exports.matchBlot = matchBlot;
	exports.matchNewline = matchNewline;
	exports.matchSpacing = matchSpacing;
	exports.matchText = matchText;

/***/ },
/* 45 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.AlignStyle = exports.AlignClass = exports.AlignAttribute = undefined;

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var config = {
	  scope: _parchment2.default.Scope.BLOCK,
	  whitelist: ['right''center''justify']
	};

	var AlignAttribute = new _parchment2.default.Attributor.Attribute('align''align'config);
	var AlignClass = new _parchment2.default.Attributor.Class('align''ql-align'config);
	var AlignStyle = new _parchment2.default.Attributor.Style('align''text-align'config);

	exports.AlignAttribute = AlignAttribute;
	exports.AlignClass = AlignClass;
	exports.AlignStyle = AlignStyle;

/***/ },
/* 46 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.BackgroundStyle = exports.BackgroundClass = undefined;

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _color = __webpack_require__(47);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var BackgroundClass = new _parchment2.default.Attributor.Class('background''ql-bg'{
	  scope: _parchment2.default.Scope.INLINE
	});
	var BackgroundStyle = new _color.ColorAttributor('background''background-color'{
	  scope: _parchment2.default.Scope.INLINE
	});

	exports.BackgroundClass = BackgroundClass;
	exports.BackgroundStyle = BackgroundStyle;

/***/ },
/* 47 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.ColorStyle = exports.ColorClass = exports.ColorAttributor = undefined;

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var ColorAttributor = function (_Parchment$Attributor) {
	  _inherits(ColorAttributor_Parchment$Attributor);

	  function ColorAttributor() {
	    _classCallCheck(thisColorAttributor);

	    return _possibleConstructorReturn(this(ColorAttributor.__proto__ || Object.getPrototypeOf(ColorAttributor)).apply(thisarguments));
	  }

	  _createClass(ColorAttributor[{
	    key: 'value',
	    value: function value(domNode) {
	      var value = _get(ColorAttributor.prototype.__proto__ || Object.getPrototypeOf(ColorAttributor.prototype)'value'this).call(thisdomNode);
	      if (!value.startsWith('rgb(')) return value;
	      value = value.replace(/^[^\d]+/'').replace(/[^\d]+$/'');
	      return '#' + value.split(',').map(function (component) {
	        return ('00' + parseInt(component).toString(16)).slice(-2);
	      }).join('');
	    }
	  }]);

	  return ColorAttributor;
	}(_parchment2.default.Attributor.Style);

	var ColorClass = new _parchment2.default.Attributor.Class('color''ql-color'{
	  scope: _parchment2.default.Scope.INLINE
	});
	var ColorStyle = new ColorAttributor('color''color'{
	  scope: _parchment2.default.Scope.INLINE
	});

	exports.ColorAttributor = ColorAttributor;
	exports.ColorClass = ColorClass;
	exports.ColorStyle = ColorStyle;

/***/ },
/* 48 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.DirectionStyle = exports.DirectionClass = exports.DirectionAttribute = undefined;

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var config = {
	  scope: _parchment2.default.Scope.BLOCK,
	  whitelist: ['rtl']
	};

	var DirectionAttribute = new _parchment2.default.Attributor.Attribute('direction''dir'config);
	var DirectionClass = new _parchment2.default.Attributor.Class('direction''ql-direction'config);
	var DirectionStyle = new _parchment2.default.Attributor.Style('direction''direction'config);

	exports.DirectionAttribute = DirectionAttribute;
	exports.DirectionClass = DirectionClass;
	exports.DirectionStyle = DirectionStyle;

/***/ },
/* 49 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.FontClass = exports.FontStyle = undefined;

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var config = {
	  scope: _parchment2.default.Scope.INLINE,
	  whitelist: ['serif''monospace']
	};

	var FontClass = new _parchment2.default.Attributor.Class('font''ql-font'config);

	var FontStyleAttributor = function (_Parchment$Attributor) {
	  _inherits(FontStyleAttributor_Parchment$Attributor);

	  function FontStyleAttributor() {
	    _classCallCheck(thisFontStyleAttributor);

	    return _possibleConstructorReturn(this(FontStyleAttributor.__proto__ || Object.getPrototypeOf(FontStyleAttributor)).apply(thisarguments));
	  }

	  _createClass(FontStyleAttributor[{
	    key: 'value',
	    value: function value(node) {
	      return _get(FontStyleAttributor.prototype.__proto__ || Object.getPrototypeOf(FontStyleAttributor.prototype)'value'this).call(thisnode).replace(/["']/g'');
	    }
	  }]);

	  return FontStyleAttributor;
	}(_parchment2.default.Attributor.Style);

	var FontStyle = new FontStyleAttributor('font''font-family'config);

	exports.FontStyle = FontStyle;
	exports.FontClass = FontClass;

/***/ },
/* 50 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.SizeStyle = exports.SizeClass = undefined;

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SizeClass = new _parchment2.default.Attributor.Class('size''ql-size'{
	  scope: _parchment2.default.Scope.INLINE,
	  whitelist: ['small''large''huge']
	});
	var SizeStyle = new _parchment2.default.Attributor.Style('size''font-size'{
	  scope: _parchment2.default.Scope.INLINE,
	  whitelist: ['10px''18px''32px']
	});

	exports.SizeClass = SizeClass;
	exports.SizeStyle = SizeStyle;

/***/ },
/* 51 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.getLastChangeIndex = exports.default = undefined;

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _quill = __webpack_require__(18);

	var _quill2 = _interopRequireDefault(_quill);

	var _module = __webpack_require__(39);

	var _module2 = _interopRequireDefault(_module);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var History = function (_Module) {
	  _inherits(History_Module);

	  function History(quilloptions) {
	    _classCallCheck(thisHistory);

	    var _this = _possibleConstructorReturn(this(History.__proto__ || Object.getPrototypeOf(History)).call(thisquilloptions));

	    _this.lastRecorded = 0;
	    _this.ignoreChange = false;
	    _this.clear();
	    _this.quill.on(_quill2.default.events.EDITOR_CHANGEfunction (eventNamedeltaoldDeltasource) {
	      if (eventName !== _quill2.default.events.TEXT_CHANGE || _this.ignoreChange) return;
	      if (!_this.options.userOnly || source === _quill2.default.sources.USER) {
	        _this.record(deltaoldDelta);
	      } else {
	        _this.transform(delta);
	      }
	    });
	    _this.quill.keyboard.addBinding({ key: 'Z'shortKey: true }_this.undo.bind(_this));
	    _this.quill.keyboard.addBinding({ key: 'Z'shortKey: trueshiftKey: true }_this.redo.bind(_this));
	    if (/Win/i.test(navigator.platform)) {
	      _this.quill.keyboard.addBinding({ key: 'Y'shortKey: true }_this.redo.bind(_this));
	    }
	    return _this;
	  }

	  _createClass(History[{
	    key: 'change',
	    value: function change(sourcedest) {
	      if (this.stack[source].length === 0) return;
	      var delta = this.stack[source].pop();
	      this.lastRecorded = 0;
	      this.ignoreChange = true;
	      this.quill.updateContents(delta[source]_quill2.default.sources.USER);
	      this.ignoreChange = false;
	      var index = getLastChangeIndex(delta[source]);
	      this.quill.setSelection(index);
	      this.quill.selection.scrollIntoView();
	      this.stack[dest].push(delta);
	    }
	  }{
	    key: 'clear',
	    value: function clear() {
	      this.stack = { undo: []redo: [] };
	    }
	  }{
	    key: 'record',
	    value: function record(changeDeltaoldDelta) {
	      if (changeDelta.ops.length === 0) return;
	      this.stack.redo = [];
	      var undoDelta = this.quill.getContents().diff(oldDelta);
	      var timestamp = Date.now();
	      if (this.lastRecorded + this.options.delay > timestamp && this.stack.undo.length > 0) {
	        var delta = this.stack.undo.pop();
	        undoDelta = undoDelta.compose(delta.undo);
	        changeDelta = delta.redo.compose(changeDelta);
	      } else {
	        this.lastRecorded = timestamp;
	      }
	      this.stack.undo.push({
	        redo: changeDelta,
	        undo: undoDelta
	      });
	      if (this.stack.undo.length > this.options.maxStack) {
	        this.stack.undo.shift();
	      }
	    }
	  }{
	    key: 'redo',
	    value: function redo() {
	      this.change('redo''undo');
	    }
	  }{
	    key: 'transform',
	    value: function transform(delta) {
	      this.stack.undo.forEach(function (change) {
	        change.undo = delta.transform(change.undotrue);
	        change.redo = delta.transform(change.redotrue);
	      });
	      this.stack.redo.forEach(function (change) {
	        change.undo = delta.transform(change.undotrue);
	        change.redo = delta.transform(change.redotrue);
	      });
	    }
	  }{
	    key: 'undo',
	    value: function undo() {
	      this.change('undo''redo');
	    }
	  }]);

	  return History;
	}(_module2.default);

	History.DEFAULTS = {
	  delay: 1000,
	  maxStack: 100,
	  userOnly: false
	};

	function endsWithNewlineChange(delta) {
	  var lastOp = delta.ops[delta.ops.length - 1];
	  if (lastOp == null) return false;
	  if (lastOp.insert != null) {
	    return typeof lastOp.insert === 'string' && lastOp.insert.endsWith('\n');
	  }
	  if (lastOp.attributes != null) {
	    return Object.keys(lastOp.attributes).some(function (attr) {
	      return _parchment2.default.query(attr_parchment2.default.Scope.BLOCK) != null;
	    });
	  }
	  return false;
	}

	function getLastChangeIndex(delta) {
	  var deleteLength = delta.reduce(function (lengthop) {
	    length += op.delete || 0;
	    return length;
	  }0);
	  var changeIndex = delta.length() - deleteLength;
	  if (endsWithNewlineChange(delta)) {
	    changeIndex -= 1;
	  }
	  return changeIndex;
	}

	exports.default = History;
	exports.getLastChangeIndex = getLastChangeIndex;

/***/ },
/* 52 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _slicedToArray = function () { function sliceIterator(arri) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator]()_s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arri) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arri); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _clone = __webpack_require__(38);

	var _clone2 = _interopRequireDefault(_clone);

	var _deepEqual = __webpack_require__(22);

	var _deepEqual2 = _interopRequireDefault(_deepEqual);

	var _extend = __webpack_require__(25);

	var _extend2 = _interopRequireDefault(_extend);

	var _op = __webpack_require__(26);

	var _op2 = _interopRequireDefault(_op);

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _quill = __webpack_require__(18);

	var _quill2 = _interopRequireDefault(_quill);

	var _logger = __webpack_require__(37);

	var _logger2 = _interopRequireDefault(_logger);

	var _module = __webpack_require__(39);

	var _module2 = _interopRequireDefault(_module);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var debug = (0_logger2.default)('quill:keyboard');

	var SHORTKEY = /Mac/i.test(navigator.platform) ? 'metaKey' : 'ctrlKey';

	var Keyboard = function (_Module) {
	  _inherits(Keyboard_Module);

	  _createClass(Keyboardnull[{
	    key: 'match',
	    value: function match(evtbinding) {
	      binding = normalize(binding);
	      if (!!binding.shortKey !== evt[SHORTKEY] && binding.shortKey !== null) return false;
	      if (['altKey''ctrlKey''metaKey''shiftKey'].some(function (key) {
	        return key != SHORTKEY && !!binding[key] !== evt[key] && binding[key] !== null;
	      })) {
	        return false;
	      }
	      return binding.key === (evt.which || evt.keyCode);
	    }
	  }]);

	  function Keyboard(quilloptions) {
	    _classCallCheck(thisKeyboard);

	    var _this = _possibleConstructorReturn(this(Keyboard.__proto__ || Object.getPrototypeOf(Keyboard)).call(thisquilloptions));

	    _this.bindings = {};
	    Object.keys(_this.options.bindings).forEach(function (name) {
	      if (_this.options.bindings[name]) {
	        _this.addBinding(_this.options.bindings[name]);
	      }
	    });
	    _this.addBinding({ key: Keyboard.keys.ENTERshiftKey: null }handleEnter);
	    _this.addBinding({ key: Keyboard.keys.ENTERmetaKey: nullctrlKey: nullaltKey: null }function () {});
	    _this.addBinding({ key: Keyboard.keys.BACKSPACE }{ collapsed: trueprefix: /^.?$/ }handleBackspace);
	    _this.addBinding({ key: Keyboard.keys.DELETE }{ collapsed: truesuffix: /^$/ }handleDelete);
	    _this.addBinding({ key: Keyboard.keys.BACKSPACE }{ collapsed: false }handleDeleteRange);
	    _this.addBinding({ key: Keyboard.keys.DELETE }{ collapsed: false }handleDeleteRange);
	    if (/Trident/i.test(navigator.userAgent)) {
	      _this.addBinding({ key: Keyboard.keys.BACKSPACEshortKey: true }handleBackspace);
	      _this.addBinding({ key: Keyboard.keys.DELETEshortKey: true }handleDelete);
	    }
	    _this.listen();
	    return _this;
	  }

	  _createClass(Keyboard[{
	    key: 'addBinding',
	    value: function addBinding(key) {
	      var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      var handler = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

	      var binding = normalize(key);
	      if (binding == null || binding.key == null) {
	        return debug.warn('Attempted to add invalid keyboard binding'binding);
	      }
	      if (typeof context === 'function') {
	        context = { handler: context };
	      }
	      if (typeof handler === 'function') {
	        handler = { handler: handler };
	      }
	      binding = (0_extend2.default)(bindingcontexthandler);
	      this.bindings[binding.key] = this.bindings[binding.key] || [];
	      this.bindings[binding.key].push(binding);
	    }
	  }{
	    key: 'listen',
	    value: function listen() {
	      var _this2 = this;

	      this.quill.root.addEventListener('keydown'function (evt) {
	        if (evt.defaultPrevented) return;
	        var which = evt.which || evt.keyCode;
	        var bindings = (_this2.bindings[which] || []).filter(function (binding) {
	          return Keyboard.match(evtbinding);
	        });
	        if (bindings.length === 0) return;
	        var range = _this2.quill.getSelection();
	        if (range == null || !_this2.quill.hasFocus()) return;

	        var _quill$scroll$line = _this2.quill.scroll.line(range.index),
	            _quill$scroll$line2 = _slicedToArray(_quill$scroll$line2),
	            line = _quill$scroll$line2[0],
	            offset = _quill$scroll$line2[1];

	        var _quill$scroll$leaf = _this2.quill.scroll.leaf(range.index),
	            _quill$scroll$leaf2 = _slicedToArray(_quill$scroll$leaf2),
	            leafStart = _quill$scroll$leaf2[0],
	            offsetStart = _quill$scroll$leaf2[1];

	        var _ref = range.length === 0 ? [leafStartoffsetStart] : _this2.quill.scroll.leaf(range.index + range.length),
	            _ref2 = _slicedToArray(_ref2),
	            leafEnd = _ref2[0],
	            offsetEnd = _ref2[1];

	        var prefixText = leafStart instanceof _parchment2.default.Text ? leafStart.value().slice(0offsetStart) : '';
	        var suffixText = leafEnd instanceof _parchment2.default.Text ? leafEnd.value().slice(offsetEnd) : '';
	        var curContext = {
	          collapsed: range.length === 0,
	          empty: range.length === 0 && line.length() <= 1,
	          format: _this2.quill.getFormat(range),
	          offset: offset,
	          prefix: prefixText,
	          suffix: suffixText
	        };
	        var prevented = bindings.some(function (binding) {
	          if (binding.collapsed != null && binding.collapsed !== curContext.collapsed) return false;
	          if (binding.empty != null && binding.empty !== curContext.empty) return false;
	          if (binding.offset != null && binding.offset !== curContext.offset) return false;
	          if (Array.isArray(binding.format)) {
	            // any format is present
	            if (binding.format.every(function (name) {
	              return curContext.format[name] == null;
	            })) {
	              return false;
	            }
	          } else if (_typeof(binding.format) === 'object') {
	            // all formats must match
	            if (!Object.keys(binding.format).every(function (name) {
	              if (binding.format[name] === true) return curContext.format[name] != null;
	              if (binding.format[name] === false) return curContext.format[name] == null;
	              return (0_deepEqual2.default)(binding.format[name]curContext.format[name]);
	            })) {
	              return false;
	            }
	          }
	          if (binding.prefix != null && !binding.prefix.test(curContext.prefix)) return false;
	          if (binding.suffix != null && !binding.suffix.test(curContext.suffix)) return false;
	          return binding.handler.call(_this2rangecurContext) !== true;
	        });
	        if (prevented) {
	          evt.preventDefault();
	        }
	      });
	    }
	  }]);

	  return Keyboard;
	}(_module2.default);

	Keyboard.keys = {
	  BACKSPACE: 8,
	  TAB: 9,
	  ENTER: 13,
	  ESCAPE: 27,
	  LEFT: 37,
	  UP: 38,
	  RIGHT: 39,
	  DOWN: 40,
	  DELETE: 46
	};

	Keyboard.DEFAULTS = {
	  bindings: {
	    'bold': makeFormatHandler('bold'),
	    'italic': makeFormatHandler('italic'),
	    'underline': makeFormatHandler('underline'),
	    'indent': {
	      // highlight tab or tab at beginning of listindent or blockquote
	      key: Keyboard.keys.TAB,
	      format: ['blockquote''indent''list'],
	      handler: function handler(rangecontext) {
	        if (context.collapsed && context.offset !== 0) return true;
	        this.quill.format('indent''+1'_quill2.default.sources.USER);
	      }
	    },
	    'outdent': {
	      key: Keyboard.keys.TAB,
	      shiftKey: true,
	      format: ['blockquote''indent''list'],
	      // highlight tab or tab at beginning of listindent or blockquote
	      handler: function handler(rangecontext) {
	        if (context.collapsed && context.offset !== 0) return true;
	        this.quill.format('indent''-1'_quill2.default.sources.USER);
	      }
	    },
	    'outdent backspace': {
	      key: Keyboard.keys.BACKSPACE,
	      collapsed: true,
	      format: ['blockquote''indent''list'],
	      offset: 0,
	      handler: function handler(rangecontext) {
	        if (context.format.indent != null) {
	          this.quill.format('indent''-1'_quill2.default.sources.USER);
	        } else if (context.format.blockquote != null) {
	          this.quill.format('blockquote'false_quill2.default.sources.USER);
	        } else if (context.format.list != null) {
	          this.quill.format('list'false_quill2.default.sources.USER);
	        }
	      }
	    },
	    'indent code-block': makeCodeBlockHandler(true),
	    'outdent code-block': makeCodeBlockHandler(false),
	    'remove tab': {
	      key: Keyboard.keys.TAB,
	      shiftKey: true,
	      collapsed: true,
	      prefix: /\t$/,
	      handler: function handler(range) {
	        this.quill.deleteText(range.index - 11_quill2.default.sources.USER);
	      }
	    },
	    'tab': {
	      key: Keyboard.keys.TAB,
	      handler: function handler(rangecontext) {
	        if (!context.collapsed) {
	          this.quill.scroll.deleteAt(range.indexrange.length);
	        }
	        this.quill.insertText(range.index'\t'_quill2.default.sources.USER);
	        this.quill.setSelection(range.index + 1_quill2.default.sources.SILENT);
	      }
	    },
	    'list empty enter': {
	      key: Keyboard.keys.ENTER,
	      collapsed: true,
	      format: ['list'],
	      empty: true,
	      handler: function handler(rangecontext) {
	        this.quill.format('list'false_quill2.default.sources.USER);
	        if (context.format.indent) {
	          this.quill.format('indent'false_quill2.default.sources.USER);
	        }
	      }
	    },
	    'checklist enter': {
	      key: Keyboard.keys.ENTER,
	      collapsed: true,
	      format: { list: 'checked' },
	      handler: function handler(range) {
	        this.quill.scroll.insertAt(range.index'\n');

	        var _quill$scroll$line3 = this.quill.scroll.line(range.index + 1),
	            _quill$scroll$line4 = _slicedToArray(_quill$scroll$line31),
	            line = _quill$scroll$line4[0];

	        line.format('list''unchecked');
	        this.quill.update(_quill2.default.sources.USER);
	        this.quill.setSelection(range.index + 1_quill2.default.sources.SILENT);
	        this.quill.selection.scrollIntoView();
	      }
	    },
	    'header enter': {
	      key: Keyboard.keys.ENTER,
	      collapsed: true,
	      format: ['header'],
	      suffix: /^$/,
	      handler: function handler(range) {
	        this.quill.scroll.insertAt(range.index'\n');
	        this.quill.formatText(range.index + 11'header'false_quill2.default.sources.USER);
	        this.quill.setSelection(range.index + 1_quill2.default.sources.SILENT);
	        this.quill.selection.scrollIntoView();
	      }
	    },
	    'list autofill': {
	      key: ' ',
	      collapsed: true,
	      format: { list: false },
	      prefix: /^(1\.|-)$/,
	      handler: function handler(rangecontext) {
	        var length = context.prefix.length;
	        this.quill.scroll.deleteAt(range.index - lengthlength);
	        this.quill.formatLine(range.index - length1'list'length === 1 ? 'bullet' : 'ordered'_quill2.default.sources.USER);
	        this.quill.setSelection(range.index - length_quill2.default.sources.SILENT);
	      }
	    }
	  }
	};

	function handleBackspace(rangecontext) {
	  if (range.index === 0) return;

	  var _quill$scroll$line5 = this.quill.scroll.line(range.index),
	      _quill$scroll$line6 = _slicedToArray(_quill$scroll$line51),
	      line = _quill$scroll$line6[0];

	  var formats = {};
	  if (context.offset === 0) {
	    var curFormats = line.formats();
	    var prevFormats = this.quill.getFormat(range.index - 11);
	    formats = _op2.default.attributes.diff(curFormatsprevFormats) || {};
	  }
	  this.quill.deleteText(range.index - 11_quill2.default.sources.USER);
	  if (Object.keys(formats).length > 0) {
	    this.quill.formatLine(range.index - 11formats_quill2.default.sources.USER);
	  }
	  this.quill.selection.scrollIntoView();
	}

	function handleDelete(range) {
	  if (range.index >= this.quill.getLength() - 1) return;
	  this.quill.deleteText(range.index1_quill2.default.sources.USER);
	}

	function handleDeleteRange(range) {
	  this.quill.deleteText(range_quill2.default.sources.USER);
	  this.quill.setSelection(range.index_quill2.default.sources.SILENT);
	  this.quill.selection.scrollIntoView();
	}

	function handleEnter(rangecontext) {
	  var _this3 = this;

	  if (range.length > 0) {
	    this.quill.scroll.deleteAt(range.indexrange.length); // So we do not trigger text-change
	  }
	  var lineFormats = Object.keys(context.format).reduce(function (lineFormatsformat) {
	    if (_parchment2.default.query(format_parchment2.default.Scope.BLOCK) && !Array.isArray(context.format[format])) {
	      lineFormats[format] = context.format[format];
	    }
	    return lineFormats;
	  }{});
	  this.quill.insertText(range.index'\n'lineFormats_quill2.default.sources.USER);
	  this.quill.selection.scrollIntoView();
	  Object.keys(context.format).forEach(function (name) {
	    if (lineFormats[name] != null) return;
	    if (Array.isArray(context.format[name])) return;
	    if (name === 'link') return;
	    _this3.quill.format(namecontext.format[name]_quill2.default.sources.USER);
	  });
	}

	function makeCodeBlockHandler(indent) {
	  return {
	    key: Keyboard.keys.TAB,
	    shiftKey: !indent,
	    format: { 'code-block': true },
	    handler: function handler(range) {
	      var CodeBlock = _parchment2.default.query('code-block');
	      var index = range.index,
	          length = range.length;

	      var _quill$scroll$descend = this.quill.scroll.descendant(CodeBlockindex),
	          _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend2),
	          block = _quill$scroll$descend2[0],
	          offset = _quill$scroll$descend2[1];

	      if (block == null) return;
	      var scrollOffset = this.quill.scroll.offset(block);
	      var start = block.newlineIndex(offsettrue) + 1;
	      var end = block.newlineIndex(scrollOffset + offset + length);
	      var lines = block.domNode.textContent.slice(startend).split('\n');
	      offset = 0;
	      lines.forEach(function (linei) {
	        if (indent) {
	          block.insertAt(start + offsetCodeBlock.TAB);
	          offset += CodeBlock.TAB.length;
	          if (i === 0) {
	            index += CodeBlock.TAB.length;
	          } else {
	            length += CodeBlock.TAB.length;
	          }
	        } else if (line.startsWith(CodeBlock.TAB)) {
	          block.deleteAt(start + offsetCodeBlock.TAB.length);
	          offset -= CodeBlock.TAB.length;
	          if (i === 0) {
	            index -= CodeBlock.TAB.length;
	          } else {
	            length -= CodeBlock.TAB.length;
	          }
	        }
	        offset += line.length + 1;
	      });
	      this.quill.update(_quill2.default.sources.USER);
	      this.quill.setSelection(indexlength_quill2.default.sources.SILENT);
	    }
	  };
	}

	function makeFormatHandler(format) {
	  return {
	    key: format[0].toUpperCase(),
	    shortKey: true,
	    handler: function handler(rangecontext) {
	      this.quill.format(format!context.format[format]_quill2.default.sources.USER);
	    }
	  };
	}

	function normalize(binding) {
	  if (typeof binding === 'string' || typeof binding === 'number') {
	    return normalize({ key: binding });
	  }
	  if ((typeof binding === 'undefined' ? 'undefined' : _typeof(binding)) === 'object') {
	    binding = (0_clone2.default)(bindingfalse);
	  }
	  if (typeof binding.key === 'string') {
	    if (Keyboard.keys[binding.key.toUpperCase()] != null) {
	      binding.key = Keyboard.keys[binding.key.toUpperCase()];
	    } else if (binding.key.length === 1) {
	      binding.key = binding.key.toUpperCase().charCodeAt(0);
	    } else {
	      return null;
	    }
	  }
	  return binding;
	}

	exports.default = Keyboard;

/***/ },
/* 53 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	var _core = __webpack_require__(1);

	var _core2 = _interopRequireDefault(_core);

	var _align = __webpack_require__(45);

	var _direction = __webpack_require__(48);

	var _indent = __webpack_require__(54);

	var _blockquote = __webpack_require__(55);

	var _blockquote2 = _interopRequireDefault(_blockquote);

	var _header = __webpack_require__(56);

	var _header2 = _interopRequireDefault(_header);

	var _list = __webpack_require__(57);

	var _list2 = _interopRequireDefault(_list);

	var _background = __webpack_require__(46);

	var _color = __webpack_require__(47);

	var _font = __webpack_require__(49);

	var _size = __webpack_require__(50);

	var _bold = __webpack_require__(58);

	var _bold2 = _interopRequireDefault(_bold);

	var _italic = __webpack_require__(59);

	var _italic2 = _interopRequireDefault(_italic);

	var _link = __webpack_require__(60);

	var _link2 = _interopRequireDefault(_link);

	var _script = __webpack_require__(61);

	var _script2 = _interopRequireDefault(_script);

	var _strike = __webpack_require__(62);

	var _strike2 = _interopRequireDefault(_strike);

	var _underline = __webpack_require__(63);

	var _underline2 = _interopRequireDefault(_underline);

	var _image = __webpack_require__(64);

	var _image2 = _interopRequireDefault(_image);

	var _video = __webpack_require__(65);

	var _video2 = _interopRequireDefault(_video);

	var _code = __webpack_require__(28);

	var _code2 = _interopRequireDefault(_code);

	var _formula = __webpack_require__(66);

	var _formula2 = _interopRequireDefault(_formula);

	var _syntax = __webpack_require__(67);

	var _syntax2 = _interopRequireDefault(_syntax);

	var _toolbar = __webpack_require__(68);

	var _toolbar2 = _interopRequireDefault(_toolbar);

	var _icons = __webpack_require__(69);

	var _icons2 = _interopRequireDefault(_icons);

	var _picker = __webpack_require__(102);

	var _picker2 = _interopRequireDefault(_picker);

	var _colorPicker = __webpack_require__(104);

	var _colorPicker2 = _interopRequireDefault(_colorPicker);

	var _iconPicker = __webpack_require__(105);

	var _iconPicker2 = _interopRequireDefault(_iconPicker);

	var _tooltip = __webpack_require__(106);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	var _bubble = __webpack_require__(107);

	var _bubble2 = _interopRequireDefault(_bubble);

	var _snow = __webpack_require__(109);

	var _snow2 = _interopRequireDefault(_snow);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_core2.default.register({
	  'attributors/attribute/direction': _direction.DirectionAttribute,

	  'attributors/class/align': _align.AlignClass,
	  'attributors/class/background': _background.BackgroundClass,
	  'attributors/class/color': _color.ColorClass,
	  'attributors/class/direction': _direction.DirectionClass,
	  'attributors/class/font': _font.FontClass,
	  'attributors/class/size': _size.SizeClass,

	  'attributors/style/align': _align.AlignStyle,
	  'attributors/style/background': _background.BackgroundStyle,
	  'attributors/style/color': _color.ColorStyle,
	  'attributors/style/direction': _direction.DirectionStyle,
	  'attributors/style/font': _font.FontStyle,
	  'attributors/style/size': _size.SizeStyle
	}true);

	_core2.default.register({
	  'formats/align': _align.AlignClass,
	  'formats/direction': _direction.DirectionClass,
	  'formats/indent': _indent.IndentClass,

	  'formats/background': _background.BackgroundStyle,
	  'formats/color': _color.ColorStyle,
	  'formats/font': _font.FontClass,
	  'formats/size': _size.SizeClass,

	  'formats/blockquote': _blockquote2.default,
	  'formats/code-block': _code2.default,
	  'formats/header': _header2.default,
	  'formats/list': _list2.default,

	  'formats/bold': _bold2.default,
	  'formats/code': _code.Code,
	  'formats/italic': _italic2.default,
	  'formats/link': _link2.default,
	  'formats/script': _script2.default,
	  'formats/strike': _strike2.default,
	  'formats/underline': _underline2.default,

	  'formats/image': _image2.default,
	  'formats/video': _video2.default,

	  'formats/list/item': _list.ListItem,

	  'modules/formula': _formula2.default,
	  'modules/syntax': _syntax2.default,
	  'modules/toolbar': _toolbar2.default,

	  'themes/bubble': _bubble2.default,
	  'themes/snow': _snow2.default,

	  'ui/icons': _icons2.default,
	  'ui/picker': _picker2.default,
	  'ui/icon-picker': _iconPicker2.default,
	  'ui/color-picker': _colorPicker2.default,
	  'ui/tooltip': _tooltip2.default
	}true);

	module.exports = _core2.default;

/***/ },
/* 54 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.IndentClass = undefined;

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var IdentAttributor = function (_Parchment$Attributor) {
	  _inherits(IdentAttributor_Parchment$Attributor);

	  function IdentAttributor() {
	    _classCallCheck(thisIdentAttributor);

	    return _possibleConstructorReturn(this(IdentAttributor.__proto__ || Object.getPrototypeOf(IdentAttributor)).apply(thisarguments));
	  }

	  _createClass(IdentAttributor[{
	    key: 'add',
	    value: function add(nodevalue) {
	      if (value === '+1' || value === '-1') {
	        var indent = this.value(node) || 0;
	        value = value === '+1' ? indent + 1 : indent - 1;
	      }
	      if (value === 0) {
	        this.remove(node);
	        return true;
	      } else {
	        return _get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype)'add'this).call(thisnodevalue);
	      }
	    }
	  }{
	    key: 'value',
	    value: function value(node) {
	      return parseInt(_get(IdentAttributor.prototype.__proto__ || Object.getPrototypeOf(IdentAttributor.prototype)'value'this).call(thisnode)) || undefined; // Don't return NaN
	    }
	  }]);

	  return IdentAttributor;
	}(_parchment2.default.Attributor.Class);

	var IndentClass = new IdentAttributor('indent''ql-indent'{
	  scope: _parchment2.default.Scope.BLOCK,
	  whitelist: [12345678]
	});

	exports.IndentClass = IndentClass;

/***/ },
/* 55 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _block = __webpack_require__(29);

	var _block2 = _interopRequireDefault(_block);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var Blockquote = function (_Block) {
	  _inherits(Blockquote_Block);

	  function Blockquote() {
	    _classCallCheck(thisBlockquote);

	    return _possibleConstructorReturn(this(Blockquote.__proto__ || Object.getPrototypeOf(Blockquote)).apply(thisarguments));
	  }

	  return Blockquote;
	}(_block2.default);

	Blockquote.blotName = 'blockquote';
	Blockquote.tagName = 'blockquote';

	exports.default = Blockquote;

/***/ },
/* 56 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _block = __webpack_require__(29);

	var _block2 = _interopRequireDefault(_block);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var Header = function (_Block) {
	  _inherits(Header_Block);

	  function Header() {
	    _classCallCheck(thisHeader);

	    return _possibleConstructorReturn(this(Header.__proto__ || Object.getPrototypeOf(Header)).apply(thisarguments));
	  }

	  _createClass(Headernull[{
	    key: 'formats',
	    value: function formats(domNode) {
	      return this.tagName.indexOf(domNode.tagName) + 1;
	    }
	  }]);

	  return Header;
	}(_block2.default);

	Header.blotName = 'header';
	Header.tagName = ['H1''H2''H3''H4''H5''H6'];

	exports.default = Header;

/***/ },
/* 57 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.default = exports.ListItem = undefined;

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _block = __webpack_require__(29);

	var _block2 = _interopRequireDefault(_block);

	var _container = __webpack_require__(42);

	var _container2 = _interopRequireDefault(_container);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(objkeyvalue) { if (key in obj) { Object.defineProperty(objkey{ value: valueenumerable: trueconfigurable: truewritable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var ListItem = function (_Block) {
	  _inherits(ListItem_Block);

	  function ListItem() {
	    _classCallCheck(thisListItem);

	    return _possibleConstructorReturn(this(ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(thisarguments));
	  }

	  _createClass(ListItem[{
	    key: 'format',
	    value: function format(namevalue) {
	      if (name === List.blotName && !value) {
	        this.replaceWith(_parchment2.default.create(this.statics.scope));
	      } else {
	        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype)'format'this).call(thisnamevalue);
	      }
	    }
	  }{
	    key: 'remove',
	    value: function remove() {
	      if (this.prev == null && this.next == null) {
	        this.parent.remove();
	      } else {
	        _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype)'remove'this).call(this);
	      }
	    }
	  }{
	    key: 'replaceWith',
	    value: function replaceWith(namevalue) {
	      this.parent.isolate(this.offset(this.parent)this.length());
	      if (name === this.parent.statics.blotName) {
	        this.parent.replaceWith(namevalue);
	        return this;
	      } else {
	        this.parent.unwrap();
	        return _get(ListItem.prototype.__proto__ || Object.getPrototypeOf(ListItem.prototype)'replaceWith'this).call(thisnamevalue);
	      }
	    }
	  }][{
	    key: 'formats',
	    value: function formats(domNode) {
	      return domNode.tagName === this.tagName ? undefined : _get(ListItem.__proto__ || Object.getPrototypeOf(ListItem)'formats'this).call(thisdomNode);
	    }
	  }]);

	  return ListItem;
	}(_block2.default);

	ListItem.blotName = 'list-item';
	ListItem.tagName = 'LI';

	var List = function (_Container) {
	  _inherits(List_Container);

	  function List() {
	    _classCallCheck(thisList);

	    return _possibleConstructorReturn(this(List.__proto__ || Object.getPrototypeOf(List)).apply(thisarguments));
	  }

	  _createClass(List[{
	    key: 'format',
	    value: function format(namevalue) {
	      if (this.children.length > 0) {
	        this.children.tail.format(namevalue);
	      }
	    }
	  }{
	    key: 'formats',
	    value: function formats() {
	      // We don't inherit from FormatBlot
	      return _defineProperty({}this.statics.blotNamethis.statics.formats(this.domNode));
	    }
	  }{
	    key: 'insertBefore',
	    value: function insertBefore(blotref) {
	      if (blot instanceof ListItem) {
	        _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype)'insertBefore'this).call(thisblotref);
	      } else {
	        var index = ref == null ? this.length() : ref.offset(this);
	        var after = this.split(index);
	        after.parent.insertBefore(blotafter);
	      }
	    }
	  }{
	    key: 'optimize',
	    value: function optimize() {
	      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype)'optimize'this).call(this);
	      var next = this.next;
	      if (next != null && next.prev === this && next.statics.blotName === this.statics.blotName && next.domNode.tagName === this.domNode.tagName && next.domNode.getAttribute('data-checked') === this.domNode.getAttribute('data-checked')) {
	        next.moveChildren(this);
	        next.remove();
	      }
	    }
	  }{
	    key: 'replace',
	    value: function replace(target) {
	      if (target.statics.blotName !== this.statics.blotName) {
	        var item = _parchment2.default.create(this.statics.defaultChild);
	        target.moveChildren(item);
	        this.appendChild(item);
	      }
	      _get(List.prototype.__proto__ || Object.getPrototypeOf(List.prototype)'replace'this).call(thistarget);
	    }
	  }][{
	    key: 'create',
	    value: function create(value) {
	      var tagName = value === 'ordered' ? 'OL' : 'UL';
	      var node = _get(List.__proto__ || Object.getPrototypeOf(List)'create'this).call(thistagName);
	      if (value === 'checked' || value === 'unchecked') {
	        node.setAttribute('data-checked'value === 'checked');
	      }
	      return node;
	    }
	  }{
	    key: 'formats',
	    value: function formats(domNode) {
	      if (domNode.tagName === 'OL') return 'ordered';
	      if (domNode.tagName === 'UL') {
	        if (domNode.hasAttribute('data-checked')) {
	          return domNode.getAttribute('data-checked') === 'true' ? 'checked' : 'unchecked';
	        } else {
	          return 'bullet';
	        }
	      }
	      return undefined;
	    }
	  }]);

	  return List;
	}(_container2.default);

	List.blotName = 'list';
	List.scope = _parchment2.default.Scope.BLOCK_BLOT;
	List.tagName = ['OL''UL'];
	List.defaultChild = 'list-item';
	List.allowedChildren = [ListItem];

	exports.ListItem = ListItem;
	exports.default = List;

/***/ },
/* 58 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inline = __webpack_require__(32);

	var _inline2 = _interopRequireDefault(_inline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var Bold = function (_Inline) {
	  _inherits(Bold_Inline);

	  function Bold() {
	    _classCallCheck(thisBold);

	    return _possibleConstructorReturn(this(Bold.__proto__ || Object.getPrototypeOf(Bold)).apply(thisarguments));
	  }

	  _createClass(Bold[{
	    key: 'optimize',
	    value: function optimize() {
	      _get(Bold.prototype.__proto__ || Object.getPrototypeOf(Bold.prototype)'optimize'this).call(this);
	      if (this.domNode.tagName !== this.statics.tagName[0]) {
	        this.replaceWith(this.statics.blotName);
	      }
	    }
	  }][{
	    key: 'create',
	    value: function create() {
	      return _get(Bold.__proto__ || Object.getPrototypeOf(Bold)'create'this).call(this);
	    }
	  }{
	    key: 'formats',
	    value: function formats() {
	      return true;
	    }
	  }]);

	  return Bold;
	}(_inline2.default);

	Bold.blotName = 'bold';
	Bold.tagName = ['STRONG''B'];

	exports.default = Bold;

/***/ },
/* 59 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _bold = __webpack_require__(58);

	var _bold2 = _interopRequireDefault(_bold);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var Italic = function (_Bold) {
	  _inherits(Italic_Bold);

	  function Italic() {
	    _classCallCheck(thisItalic);

	    return _possibleConstructorReturn(this(Italic.__proto__ || Object.getPrototypeOf(Italic)).apply(thisarguments));
	  }

	  return Italic;
	}(_bold2.default);

	Italic.blotName = 'italic';
	Italic.tagName = ['EM''I'];

	exports.default = Italic;

/***/ },
/* 60 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.sanitize = exports.default = undefined;

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inline = __webpack_require__(32);

	var _inline2 = _interopRequireDefault(_inline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var Link = function (_Inline) {
	  _inherits(Link_Inline);

	  function Link() {
	    _classCallCheck(thisLink);

	    return _possibleConstructorReturn(this(Link.__proto__ || Object.getPrototypeOf(Link)).apply(thisarguments));
	  }

	  _createClass(Link[{
	    key: 'format',
	    value: function format(namevalue) {
	      if (name !== this.statics.blotName || !value) return _get(Link.prototype.__proto__ || Object.getPrototypeOf(Link.prototype)'format'this).call(thisnamevalue);
	      value = this.constructor.sanitize(value);
	      this.domNode.setAttribute('href'value);
	    }
	  }][{
	    key: 'create',
	    value: function create(value) {
	      var node = _get(Link.__proto__ || Object.getPrototypeOf(Link)'create'this).call(thisvalue);
	      value = this.sanitize(value);
	      node.setAttribute('href'value);
	      node.setAttribute('target''_blank');
	      return node;
	    }
	  }{
	    key: 'formats',
	    value: function formats(domNode) {
	      return domNode.getAttribute('href');
	    }
	  }{
	    key: 'sanitize',
	    value: function sanitize(url) {
	      return _sanitize(url['http''https''mailto']) ? url : this.SANITIZED_URL;
	    }
	  }]);

	  return Link;
	}(_inline2.default);

	Link.blotName = 'link';
	Link.tagName = 'A';
	Link.SANITIZED_URL = 'about:blank';

	function _sanitize(urlprotocols) {
	  var anchor = document.createElement('a');
	  anchor.href = url;
	  var protocol = anchor.href.slice(0anchor.href.indexOf(':'));
	  return protocols.indexOf(protocol) > -1;
	}

	exports.default = Link;
	exports.sanitize = _sanitize;

/***/ },
/* 61 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inline = __webpack_require__(32);

	var _inline2 = _interopRequireDefault(_inline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var Script = function (_Inline) {
	  _inherits(Script_Inline);

	  function Script() {
	    _classCallCheck(thisScript);

	    return _possibleConstructorReturn(this(Script.__proto__ || Object.getPrototypeOf(Script)).apply(thisarguments));
	  }

	  _createClass(Scriptnull[{
	    key: 'create',
	    value: function create(value) {
	      if (value === 'super') {
	        return document.createElement('sup');
	      } else if (value === 'sub') {
	        return document.createElement('sub');
	      } else {
	        return _get(Script.__proto__ || Object.getPrototypeOf(Script)'create'this).call(thisvalue);
	      }
	    }
	  }{
	    key: 'formats',
	    value: function formats(domNode) {
	      if (domNode.tagName === 'SUB') return 'sub';
	      if (domNode.tagName === 'SUP') return 'super';
	      return undefined;
	    }
	  }]);

	  return Script;
	}(_inline2.default);

	Script.blotName = 'script';
	Script.tagName = ['SUB''SUP'];

	exports.default = Script;

/***/ },
/* 62 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _inline = __webpack_require__(32);

	var _inline2 = _interopRequireDefault(_inline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var Strike = function (_Inline) {
	  _inherits(Strike_Inline);

	  function Strike() {
	    _classCallCheck(thisStrike);

	    return _possibleConstructorReturn(this(Strike.__proto__ || Object.getPrototypeOf(Strike)).apply(thisarguments));
	  }

	  return Strike;
	}(_inline2.default);

	Strike.blotName = 'strike';
	Strike.tagName = 'S';

	exports.default = Strike;

/***/ },
/* 63 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _inline = __webpack_require__(32);

	var _inline2 = _interopRequireDefault(_inline);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var Underline = function (_Inline) {
	  _inherits(Underline_Inline);

	  function Underline() {
	    _classCallCheck(thisUnderline);

	    return _possibleConstructorReturn(this(Underline.__proto__ || Object.getPrototypeOf(Underline)).apply(thisarguments));
	  }

	  return Underline;
	}(_inline2.default);

	Underline.blotName = 'underline';
	Underline.tagName = 'U';

	exports.default = Underline;

/***/ },
/* 64 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _embed = __webpack_require__(31);

	var _embed2 = _interopRequireDefault(_embed);

	var _link = __webpack_require__(60);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var ATTRIBUTES = ['alt''height''width'];

	var Image = function (_Embed) {
	  _inherits(Image_Embed);

	  function Image() {
	    _classCallCheck(thisImage);

	    return _possibleConstructorReturn(this(Image.__proto__ || Object.getPrototypeOf(Image)).apply(thisarguments));
	  }

	  _createClass(Image[{
	    key: 'format',
	    value: function format(namevalue) {
	      if (ATTRIBUTES.indexOf(name) > -1) {
	        if (value) {
	          this.domNode.setAttribute(namevalue);
	        } else {
	          this.domNode.removeAttribute(name);
	        }
	      } else {
	        _get(Image.prototype.__proto__ || Object.getPrototypeOf(Image.prototype)'format'this).call(thisnamevalue);
	      }
	    }
	  }][{
	    key: 'create',
	    value: function create(value) {
	      var node = _get(Image.__proto__ || Object.getPrototypeOf(Image)'create'this).call(thisvalue);
	      if (typeof value === 'string') {
	        node.setAttribute('src'this.sanitize(value));
	      }
	      return node;
	    }
	  }{
	    key: 'formats',
	    value: function formats(domNode) {
	      return ATTRIBUTES.reduce(function (formatsattribute) {
	        if (domNode.hasAttribute(attribute)) {
	          formats[attribute] = domNode.getAttribute(attribute);
	        }
	        return formats;
	      }{});
	    }
	  }{
	    key: 'match',
	    value: function match(url) {
	      return (/\.(jpe?g|gif|png)$/.test(url) || /^data:image\/.+;base64/.test(url)
	      );
	    }
	  }{
	    key: 'sanitize',
	    value: function sanitize(url) {
	      return (0_link.sanitize)(url['http''https''data']) ? url : '//:0';
	    }
	  }{
	    key: 'value',
	    value: function value(domNode) {
	      return domNode.getAttribute('src');
	    }
	  }]);

	  return Image;
	}(_embed2.default);

	Image.blotName = 'image';
	Image.tagName = 'IMG';

	exports.default = Image;

/***/ },
/* 65 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _block = __webpack_require__(29);

	var _link = __webpack_require__(60);

	var _link2 = _interopRequireDefault(_link);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var ATTRIBUTES = ['height''width'];

	var Video = function (_BlockEmbed) {
	  _inherits(Video_BlockEmbed);

	  function Video() {
	    _classCallCheck(thisVideo);

	    return _possibleConstructorReturn(this(Video.__proto__ || Object.getPrototypeOf(Video)).apply(thisarguments));
	  }

	  _createClass(Video[{
	    key: 'format',
	    value: function format(namevalue) {
	      if (ATTRIBUTES.indexOf(name) > -1) {
	        if (value) {
	          this.domNode.setAttribute(namevalue);
	        } else {
	          this.domNode.removeAttribute(name);
	        }
	      } else {
	        _get(Video.prototype.__proto__ || Object.getPrototypeOf(Video.prototype)'format'this).call(thisnamevalue);
	      }
	    }
	  }][{
	    key: 'create',
	    value: function create(value) {
	      var node = _get(Video.__proto__ || Object.getPrototypeOf(Video)'create'this).call(thisvalue);
	      node.setAttribute('frameborder''0');
	      node.setAttribute('allowfullscreen'true);
	      node.setAttribute('src'this.sanitize(value));
	      return node;
	    }
	  }{
	    key: 'formats',
	    value: function formats(domNode) {
	      return ATTRIBUTES.reduce(function (formatsattribute) {
	        if (domNode.hasAttribute(attribute)) {
	          formats[attribute] = domNode.getAttribute(attribute);
	        }
	        return formats;
	      }{});
	    }
	  }{
	    key: 'sanitize',
	    value: function sanitize(url) {
	      return _link2.default.sanitize(url);
	    }
	  }{
	    key: 'value',
	    value: function value(domNode) {
	      return domNode.getAttribute('src');
	    }
	  }]);

	  return Video;
	}(_block.BlockEmbed);

	Video.blotName = 'video';
	Video.className = 'ql-video';
	Video.tagName = 'IFRAME';

	exports.default = Video;

/***/ },
/* 66 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.default = exports.FormulaBlot = undefined;

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _embed = __webpack_require__(31);

	var _embed2 = _interopRequireDefault(_embed);

	var _quill = __webpack_require__(18);

	var _quill2 = _interopRequireDefault(_quill);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var FormulaBlot = function (_Embed) {
	  _inherits(FormulaBlot_Embed);

	  function FormulaBlot() {
	    _classCallCheck(thisFormulaBlot);

	    return _possibleConstructorReturn(this(FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot)).apply(thisarguments));
	  }

	  _createClass(FormulaBlot[{
	    key: 'index',
	    value: function index() {
	      return 1;
	    }
	  }][{
	    key: 'create',
	    value: function create(value) {
	      var node = _get(FormulaBlot.__proto__ || Object.getPrototypeOf(FormulaBlot)'create'this).call(thisvalue);
	      if (typeof value === 'string') {
	        window.katex.render(valuenode);
	        node.setAttribute('data-value'value);
	      }
	      node.setAttribute('contenteditable'false);
	      return node;
	    }
	  }{
	    key: 'value',
	    value: function value(domNode) {
	      return domNode.getAttribute('data-value');
	    }
	  }]);

	  return FormulaBlot;
	}(_embed2.default);

	FormulaBlot.blotName = 'formula';
	FormulaBlot.className = 'ql-formula';
	FormulaBlot.tagName = 'SPAN';

	function Formula() {
	  if (window.katex == null) {
	    throw new Error('Formula module requires KaTeX.');
	  }
	  _quill2.default.register(FormulaBlottrue);
	}

	exports.FormulaBlot = FormulaBlot;
	exports.default = Formula;

/***/ },
/* 67 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.default = exports.CodeToken = exports.CodeBlock = undefined;

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _quill = __webpack_require__(18);

	var _quill2 = _interopRequireDefault(_quill);

	var _module = __webpack_require__(39);

	var _module2 = _interopRequireDefault(_module);

	var _code = __webpack_require__(28);

	var _code2 = _interopRequireDefault(_code);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var SyntaxCodeBlock = function (_CodeBlock) {
	  _inherits(SyntaxCodeBlock_CodeBlock);

	  function SyntaxCodeBlock() {
	    _classCallCheck(thisSyntaxCodeBlock);

	    return _possibleConstructorReturn(this(SyntaxCodeBlock.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock)).apply(thisarguments));
	  }

	  _createClass(SyntaxCodeBlock[{
	    key: 'replaceWith',
	    value: function replaceWith(block) {
	      this.domNode.textContent = this.domNode.textContent;
	      this.attach();
	      _get(SyntaxCodeBlock.prototype.__proto__ || Object.getPrototypeOf(SyntaxCodeBlock.prototype)'replaceWith'this).call(thisblock);
	    }
	  }{
	    key: 'highlight',
	    value: function highlight(_highlight) {
	      if (this.cachedHTML !== this.domNode.innerHTML) {
	        var text = this.domNode.textContent;
	        if (text.trim().length > 0 || this.cachedHTML == null) {
	          this.domNode.innerHTML = _highlight(text);
	          this.attach();
	        }
	        this.cachedHTML = this.domNode.innerHTML;
	      }
	    }
	  }]);

	  return SyntaxCodeBlock;
	}(_code2.default);

	SyntaxCodeBlock.className = 'ql-syntax';

	var CodeToken = new _parchment2.default.Attributor.Class('token''hljs'{
	  scope: _parchment2.default.Scope.INLINE
	});

	var Syntax = function (_Module) {
	  _inherits(Syntax_Module);

	  function Syntax(quilloptions) {
	    _classCallCheck(thisSyntax);

	    var _this2 = _possibleConstructorReturn(this(Syntax.__proto__ || Object.getPrototypeOf(Syntax)).call(thisquilloptions));

	    if (typeof _this2.options.highlight !== 'function') {
	      throw new Error('Syntax module requires highlight.js. Please include the library on the page before Quill.');
	    }
	    _quill2.default.register(CodeTokentrue);
	    _quill2.default.register(SyntaxCodeBlocktrue);
	    var timer = null;
	    _this2.quill.on(_quill2.default.events.SCROLL_OPTIMIZEfunction () {
	      if (timer != null) return;
	      timer = setTimeout(function () {
	        _this2.highlight();
	        timer = null;
	      }100);
	    });
	    _this2.highlight();
	    return _this2;
	  }

	  _createClass(Syntax[{
	    key: 'highlight',
	    value: function highlight() {
	      var _this3 = this;

	      if (this.quill.selection.composing) return;
	      var range = this.quill.getSelection();
	      this.quill.scroll.descendants(SyntaxCodeBlock).forEach(function (code) {
	        code.highlight(_this3.options.highlight);
	      });
	      this.quill.update(_quill2.default.sources.SILENT);
	      if (range != null) {
	        this.quill.setSelection(range_quill2.default.sources.SILENT);
	      }
	    }
	  }]);

	  return Syntax;
	}(_module2.default);

	Syntax.DEFAULTS = {
	  highlight: function () {
	    if (window.hljs == null) return null;
	    return function (text) {
	      var result = window.hljs.highlightAuto(text);
	      return result.value;
	    };
	  }()
	};

	exports.CodeBlock = SyntaxCodeBlock;
	exports.CodeToken = CodeToken;
	exports.default = Syntax;

/***/ },
/* 68 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.addControls = exports.default = undefined;

	var _slicedToArray = function () { function sliceIterator(arri) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator]()_s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arri) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arri); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _quillDelta = __webpack_require__(20);

	var _quillDelta2 = _interopRequireDefault(_quillDelta);

	var _parchment = __webpack_require__(2);

	var _parchment2 = _interopRequireDefault(_parchment);

	var _quill = __webpack_require__(18);

	var _quill2 = _interopRequireDefault(_quill);

	var _logger = __webpack_require__(37);

	var _logger2 = _interopRequireDefault(_logger);

	var _module = __webpack_require__(39);

	var _module2 = _interopRequireDefault(_module);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(objkeyvalue) { if (key in obj) { Object.defineProperty(objkey{ value: valueenumerable: trueconfigurable: truewritable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var debug = (0_logger2.default)('quill:toolbar');

	var Toolbar = function (_Module) {
	  _inherits(Toolbar_Module);

	  function Toolbar(quilloptions) {
	    _classCallCheck(thisToolbar);

	    var _this = _possibleConstructorReturn(this(Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).call(thisquilloptions));

	    if (Array.isArray(_this.options.container)) {
	      var container = document.createElement('div');
	      addControls(container_this.options.container);
	      quill.container.parentNode.insertBefore(containerquill.container);
	      _this.container = container;
	    } else if (typeof _this.options.container === 'string') {
	      _this.container = document.querySelector(_this.options.container);
	    } else {
	      _this.container = _this.options.container;
	    }
	    if (!(_this.container instanceof HTMLElement)) {
	      var _ret;

	      return _ret = debug.error('Container required for toolbar'_this.options)_possibleConstructorReturn(_this_ret);
	    }
	    _this.container.classList.add('ql-toolbar');
	    _this.controls = [];
	    _this.handlers = {};
	    Object.keys(_this.options.handlers).forEach(function (format) {
	      _this.addHandler(format_this.options.handlers[format]);
	    });
	    [].forEach.call(_this.container.querySelectorAll('buttonselect')function (input) {
	      _this.attach(input);
	    });
	    _this.quill.on(_quill2.default.events.EDITOR_CHANGEfunction (typerange) {
	      if (type === _quill2.default.events.SELECTION_CHANGE) {
	        _this.update(range);
	      }
	    });
	    _this.quill.on(_quill2.default.events.SCROLL_OPTIMIZEfunction () {
	      var _this$quill$selection = _this.quill.selection.getRange(),
	          _this$quill$selection2 = _slicedToArray(_this$quill$selection1),
	          range = _this$quill$selection2[0]; // quill.getSelection triggers update


	      _this.update(range);
	    });
	    return _this;
	  }

	  _createClass(Toolbar[{
	    key: 'addHandler',
	    value: function addHandler(formathandler) {
	      this.handlers[format] = handler;
	    }
	  }{
	    key: 'attach',
	    value: function attach(input) {
	      var _this2 = this;

	      var format = [].find.call(input.classListfunction (className) {
	        return className.indexOf('ql-') === 0;
	      });
	      if (!format) return;
	      format = format.slice('ql-'.length);
	      if (input.tagName === 'BUTTON') {
	        input.setAttribute('type''button');
	      }
	      if (this.handlers[format] == null) {
	        if (this.quill.scroll.whitelist != null && this.quill.scroll.whitelist[format] == null) {
	          debug.warn('ignoring attaching to disabled format'formatinput);
	          return;
	        }
	        if (_parchment2.default.query(format) == null) {
	          debug.warn('ignoring attaching to nonexistent format'formatinput);
	          return;
	        }
	      }
	      var eventName = input.tagName === 'SELECT' ? 'change' : 'click';
	      input.addEventListener(eventNamefunction (e) {
	        var value = void 0;
	        if (input.tagName === 'SELECT') {
	          if (input.selectedIndex < 0) return;
	          var selected = input.options[input.selectedIndex];
	          if (selected.hasAttribute('selected')) {
	            value = false;
	          } else {
	            value = selected.value || false;
	          }
	        } else {
	          if (input.classList.contains('ql-active')) {
	            value = false;
	          } else {
	            value = input.value || !input.hasAttribute('value');
	          }
	          e.preventDefault();
	        }
	        _this2.quill.focus();

	        var _quill$selection$getR = _this2.quill.selection.getRange(),
	            _quill$selection$getR2 = _slicedToArray(_quill$selection$getR1),
	            range = _quill$selection$getR2[0];

	        if (_this2.handlers[format] != null) {
	          _this2.handlers[format].call(_this2value);
	        } else if (_parchment2.default.query(format).prototype instanceof _parchment2.default.Embed) {
	          value = prompt('Enter ' + format);
	          if (!value) return;
	          _this2.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert(_defineProperty({}formatvalue))_quill2.default.sources.USER);
	        } else {
	          _this2.quill.format(formatvalue_quill2.default.sources.USER);
	        }
	        _this2.update(range);
	      });
	      // TODO use weakmap
	      this.controls.push([formatinput]);
	    }
	  }{
	    key: 'update',
	    value: function update(range) {
	      var formats = range == null ? {} : this.quill.getFormat(range);
	      this.controls.forEach(function (pair) {
	        var _pair = _slicedToArray(pair2),
	            format = _pair[0],
	            input = _pair[1];

	        if (input.tagName === 'SELECT') {
	          var option = void 0;
	          if (range == null) {
	            option = null;
	          } else if (formats[format] == null) {
	            option = input.querySelector('option[selected]');
	          } else if (!Array.isArray(formats[format])) {
	            var value = formats[format];
	            if (typeof value === 'string') {
	              value = value.replace(/\"/g'\\"');
	            }
	            option = input.querySelector('option[value="' + value + '"]');
	          }
	          if (option == null) {
	            input.value = ''; // TODO make configurable?
	            input.selectedIndex = -1;
	          } else {
	            option.selected = true;
	          }
	        } else {
	          if (range == null) {
	            input.classList.remove('ql-active');
	          } else if (input.hasAttribute('value')) {
	            // both being null should match (default values)
	            // '1' should match with 1 (headers)
	            var isActive = formats[format] === input.getAttribute('value') || formats[format] != null && formats[format].toString() === input.getAttribute('value') || formats[format] == null && !input.getAttribute('value');
	            input.classList.toggle('ql-active'isActive);
	          } else {
	            input.classList.toggle('ql-active'formats[format] != null);
	          }
	        }
	      });
	    }
	  }]);

	  return Toolbar;
	}(_module2.default);

	Toolbar.DEFAULTS = {};

	function addButton(containerformatvalue) {
	  var input = document.createElement('button');
	  input.setAttribute('type''button');
	  input.classList.add('ql-' + format);
	  if (value != null) {
	    input.value = value;
	  }
	  container.appendChild(input);
	}

	function addControls(containergroups) {
	  if (!Array.isArray(groups[0])) {
	    groups = [groups];
	  }
	  groups.forEach(function (controls) {
	    var group = document.createElement('span');
	    group.classList.add('ql-formats');
	    controls.forEach(function (control) {
	      if (typeof control === 'string') {
	        addButton(groupcontrol);
	      } else {
	        var format = Object.keys(control)[0];
	        var value = control[format];
	        if (Array.isArray(value)) {
	          addSelect(groupformatvalue);
	        } else {
	          addButton(groupformatvalue);
	        }
	      }
	    });
	    container.appendChild(group);
	  });
	}

	function addSelect(containerformatvalues) {
	  var input = document.createElement('select');
	  input.classList.add('ql-' + format);
	  values.forEach(function (value) {
	    var option = document.createElement('option');
	    if (value !== false) {
	      option.setAttribute('value'value);
	    } else {
	      option.setAttribute('selected''selected');
	    }
	    input.appendChild(option);
	  });
	  container.appendChild(input);
	}

	Toolbar.DEFAULTS = {
	  container: null,
	  handlers: {
	    clean: function clean() {
	      var _this3 = this;

	      var range = this.quill.getSelection();
	      if (range == null) return;
	      if (range.length == 0) {
	        var formats = this.quill.getFormat();
	        Object.keys(formats).forEach(function (name) {
	          // Clean functionality in existing apps only clean inline formats
	          if (_parchment2.default.query(name_parchment2.default.Scope.INLINE) != null) {
	            _this3.quill.format(namefalse);
	          }
	        });
	      } else {
	        this.quill.removeFormat(range_quill2.default.sources.USER);
	      }
	    },
	    direction: function direction(value) {
	      var align = this.quill.getFormat()['align'];
	      if (value === 'rtl' && align == null) {
	        this.quill.format('align''right'_quill2.default.sources.USER);
	      } else if (!value && align === 'right') {
	        this.quill.format('align'false_quill2.default.sources.USER);
	      }
	      this.quill.format('direction'value_quill2.default.sources.USER);
	    },
	    link: function link(value) {
	      if (value === true) {
	        value = prompt('Enter link URL:');
	      }
	      this.quill.format('link'value_quill2.default.sources.USER);
	    },
	    indent: function indent(value) {
	      var range = this.quill.getSelection();
	      var formats = this.quill.getFormat(range);
	      var indent = parseInt(formats.indent || 0);
	      if (value === '+1' || value === '-1') {
	        var modifier = value === '+1' ? 1 : -1;
	        if (formats.direction === 'rtl') modifier *= -1;
	        this.quill.format('indent'indent + modifier_quill2.default.sources.USER);
	      }
	    }
	  }
	};

	exports.default = Toolbar;
	exports.addControls = addControls;

/***/ },
/* 69 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	module.exports = {
	  'align': {
	    '': __webpack_require__(70),
	    'center': __webpack_require__(71),
	    'right': __webpack_require__(72),
	    'justify': __webpack_require__(73)
	  },
	  'background': __webpack_require__(74),
	  'blockquote': __webpack_require__(75),
	  'bold': __webpack_require__(76),
	  'clean': __webpack_require__(77),
	  'code': __webpack_require__(78),
	  'code-block': __webpack_require__(78),
	  'color': __webpack_require__(79),
	  'direction': {
	    '': __webpack_require__(80),
	    'rtl': __webpack_require__(81)
	  },
	  'float': {
	    'center': __webpack_require__(82),
	    'full': __webpack_require__(83),
	    'left': __webpack_require__(84),
	    'right': __webpack_require__(85)
	  },
	  'formula': __webpack_require__(86),
	  'header': {
	    '1': __webpack_require__(87),
	    '2': __webpack_require__(88)
	  },
	  'italic': __webpack_require__(89),
	  'image': __webpack_require__(90),
	  'indent': {
	    '+1': __webpack_require__(91),
	    '-1': __webpack_require__(92)
	  },
	  'link': __webpack_require__(93),
	  'list': {
	    'ordered': __webpack_require__(94),
	    'bullet': __webpack_require__(95),
	    'unchecked': __webpack_require__(96)
	  },
	  'script': {
	    'sub': __webpack_require__(97),
	    'super': __webpack_require__(98)
	  },
	  'strike': __webpack_require__(99),
	  'underline': __webpack_require__(100),
	  'video': __webpack_require__(101)
	};

/***/ },
/* 70 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=13 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=9 y1=4 y2=4></line> </svg>";

/***/ },
/* 71 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=14 x2=4 y1=14 y2=14></line> <line class=ql-stroke x1=12 x2=6 y1=4 y2=4></line> </svg>";

/***/ },
/* 72 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=5 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=9 y1=4 y2=4></line> </svg>";

/***/ },
/* 73 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=15 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=15 x2=3 y1=14 y2=14></line> <line class=ql-stroke x1=15 x2=3 y1=4 y2=4></line> </svg>";

/***/ },
/* 74 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <g class=\"ql-fill ql-color-label\"> <polygon points=\"6 6.868 6 6 5 6 5 7 5.942 7 6 6.868\"></polygon> <rect height=1 width=1 x=4 y=4></rect> <polygon points=\"6.817 5 6 5 6 6 6.38 6 6.817 5\"></polygon> <rect height=1 width=1 x=2 y=6></rect> <rect height=1 width=1 x=3 y=5></rect> <rect height=1 width=1 x=4 y=7></rect> <polygon points=\"4 11.439 4 11 3 11 3 12 3.755 12 4 11.439\"></polygon> <rect height=1 width=1 x=2 y=12></rect> <rect height=1 width=1 x=2 y=9></rect> <rect height=1 width=1 x=2 y=15></rect> <polygon points=\"4.63 10 4 10 4 11 4.192 11 4.63 10\"></polygon> <rect height=1 width=1 x=3 y=8></rect> <path d=M10.832,4.2L11,4.582V4H10.708A1.948,1.948,0,0,1,10.832,4.2Z></path> <path d=M7,4.582L7.168,4.2A1.929,1.929,0,0,1,7.292,4H7V4.582Z></path> <path d=M8,13H7.683l-0.351.8a1.933,1.933,0,0,1-.124.2H8V13Z></path> <rect height=1 width=1 x=12 y=2></rect> <rect height=1 width=1 x=11 y=3></rect> <path d=M9,3H8V3.282A1.985,1.985,0,0,1,9,3Z></path> <rect height=1 width=1 x=2 y=3></rect> <rect height=1 width=1 x=6 y=2></rect> <rect height=1 width=1 x=3 y=2></rect> <rect height=1 width=1 x=5 y=3></rect> <rect height=1 width=1 x=9 y=2></rect> <rect height=1 width=1 x=15 y=14></rect> <polygon points=\"13.447 10.174 13.469 10.225 13.472 10.232 13.808 11 14 11 14 10 13.37 10 13.447 10.174\"></polygon> <rect height=1 width=1 x=13 y=7></rect> <rect height=1 width=1 x=15 y=5></rect> <rect height=1 width=1 x=14 y=6></rect> <rect height=1 width=1 x=15 y=8></rect> <rect height=1 width=1 x=14 y=9></rect> <path d=M3.775,14H3v1H4V14.314A1.97,1.97,0,0,1,3.775,14Z></path> <rect height=1 width=1 x=14 y=3></rect> <polygon points=\"12 6.868 12 6 11.62 6 12 6.868\"></polygon> <rect height=1 width=1 x=15 y=2></rect> <rect height=1 width=1 x=12 y=5></rect> <rect height=1 width=1 x=13 y=4></rect> <polygon points=\"12.933 9 13 9 13 8 12.495 8 12.933 9\"></polygon> <rect height=1 width=1 x=9 y=14></rect> <rect height=1 width=1 x=8 y=15></rect> <path d=M6,14.926V15H7V14.316A1.993,1.993,0,0,1,6,14.926Z></path> <rect height=1 width=1 x=5 y=15></rect> <path d=M10.668,13.8L10.317,13H10v1h0.792A1.947,1.947,0,0,1,10.668,13.8Z></path> <rect height=1 width=1 x=11 y=15></rect> <path d=M14.332,12.2a1.99,1.99,0,0,1,.166.8H15V12H14.245Z></path> <rect height=1 width=1 x=14 y=15></rect> <rect height=1 width=1 x=15 y=11></rect> </g> <polyline class=ql-stroke points=\"5.5 13 9 5 12.5 13\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=11 y2=11></line> </svg>";

/***/ },
/* 75 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=4 y=5></rect> <rect class=\"ql-fill ql-stroke\" height=3 width=3 x=11 y=5></rect> <path class=\"ql-even ql-fill ql-stroke\" d=M7,8c0,4.031-3,5-3,5></path> <path class=\"ql-even ql-fill ql-stroke\" d=M14,8c0,4.031-3,5-3,5></path> </svg>";

/***/ },
/* 76 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,4H9.5A2.5,2.5,0,0,1,12,6.5v0A2.5,2.5,0,0,1,9.5,9H5A0,0,0,0,1,5,9V4A0,0,0,0,1,5,4Z></path> <path class=ql-stroke d=M5,9h5.5A2.5,2.5,0,0,1,13,11.5v0A2.5,2.5,0,0,1,10.5,14H5a0,0,0,0,1,0,0V9A0,0,0,0,1,5,9Z></path> </svg>";

/***/ },
/* 77 */
/***/ function(moduleexports) {

	module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=5 x2=13 y1=3 y2=3></line> <line class=ql-stroke x1=6 x2=9.35 y1=12 y2=3></line> <line class=ql-stroke x1=11 x2=15 y1=11 y2=15></line> <line class=ql-stroke x1=15 x2=11 y1=11 y2=15></line> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=7 x=2 y=14></rect> </svg>";

/***/ },
/* 78 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <polyline class=\"ql-even ql-stroke\" points=\"5 7 3 9 5 11\"></polyline> <polyline class=\"ql-even ql-stroke\" points=\"13 7 15 9 13 11\"></polyline> <line class=ql-stroke x1=10 x2=8 y1=5 y2=13></line> </svg>";

/***/ },
/* 79 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-color-label ql-stroke ql-transparent\" x1=3 x2=15 y1=15 y2=15></line> <polyline class=ql-stroke points=\"5.5 11 9 3 12.5 11\"></polyline> <line class=ql-stroke x1=11.63 x2=6.38 y1=9 y2=9></line> </svg>";

/***/ },
/* 80 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"3 11 5 9 3 7 3 11\"></polygon> <line class=\"ql-stroke ql-fill\" x1=15 x2=11 y1=4 y2=4></line> <path class=ql-fill d=M11,3a3,3,0,0,0,0,6h1V3H11Z></path> <rect class=ql-fill height=11 width=1 x=11 y=4></rect> <rect class=ql-fill height=11 width=1 x=13 y=4></rect> </svg>";

/***/ },
/* 81 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=\"ql-stroke ql-fill\" points=\"15 12 13 10 15 8 15 12\"></polygon> <line class=\"ql-stroke ql-fill\" x1=9 x2=5 y1=4 y2=4></line> <path class=ql-fill d=M5,3A3,3,0,0,0,5,9H6V3H5Z></path> <rect class=ql-fill height=11 width=1 x=5 y=4></rect> <rect class=ql-fill height=11 width=1 x=7 y=4></rect> </svg>";

/***/ },
/* 82 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M14,16H4a1,1,0,0,1,0-2H14A1,1,0,0,1,14,16Z /> <path class=ql-fill d=M14,4H4A1,1,0,0,1,4,2H14A1,1,0,0,1,14,4Z /> <rect class=ql-fill x=3 y=6 width=12 height=6 rx=1 ry=1 /> </svg>";

/***/ },
/* 83 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M13,16H5a1,1,0,0,1,0-2h8A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H5A1,1,0,0,1,5,2h8A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=2 y=6 width=14 height=6 rx=1 ry=1 /> </svg>";

/***/ },
/* 84 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15,8H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,8Z /> <path class=ql-fill d=M15,12H13a1,1,0,0,1,0-2h2A1,1,0,0,1,15,12Z /> <path class=ql-fill d=M15,16H5a1,1,0,0,1,0-2H15A1,1,0,0,1,15,16Z /> <path class=ql-fill d=M15,4H5A1,1,0,0,1,5,2H15A1,1,0,0,1,15,4Z /> <rect class=ql-fill x=2 y=6 width=8 height=6 rx=1 ry=1 /> </svg>";

/***/ },
/* 85 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M5,8H3A1,1,0,0,1,3,6H5A1,1,0,0,1,5,8Z /> <path class=ql-fill d=M5,12H3a1,1,0,0,1,0-2H5A1,1,0,0,1,5,12Z /> <path class=ql-fill d=M13,16H3a1,1,0,0,1,0-2H13A1,1,0,0,1,13,16Z /> <path class=ql-fill d=M13,4H3A1,1,0,0,1,3,2H13A1,1,0,0,1,13,4Z /> <rect class=ql-fill x=8 y=6 width=8 height=6 rx=1 ry=1 transform=\"translate(24 18) rotate(-180)\"/> </svg>";

/***/ },
/* 86 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M11.759,2.482a2.561,2.561,0,0,0-3.53.607A7.656,7.656,0,0,0,6.8,6.2C6.109,9.188,5.275,14.677,4.15,14.927a1.545,1.545,0,0,0-1.3-.933A0.922,0.922,0,0,0,2,15.036S1.954,16,4.119,16s3.091-2.691,3.7-5.553c0.177-.826.36-1.726,0.554-2.6L8.775,6.2c0.381-1.421.807-2.521,1.306-2.676a1.014,1.014,0,0,0,1.02.56A0.966,0.966,0,0,0,11.759,2.482Z></path> <rect class=ql-fill height=1.6 rx=0.8 ry=0.8 width=5 x=5.15 y=6.2></rect> <path class=ql-fill d=M13.663,12.027a1.662,1.662,0,0,1,.266-0.276q0.193,0.069.456,0.138a2.1,2.1,0,0,0,.535.069,1.075,1.075,0,0,0,.767-0.3,1.044,1.044,0,0,0,.314-0.8,0.84,0.84,0,0,0-.238-0.619,0.8,0.8,0,0,0-.594-0.239,1.154,1.154,0,0,0-.781.3,4.607,4.607,0,0,0-.781,1q-0.091.15-.218,0.346l-0.246.38c-0.068-.288-0.137-0.582-0.212-0.885-0.459-1.847-2.494-.984-2.941-0.8-0.482.2-.353,0.647-0.094,0.529a0.869,0.869,0,0,1,1.281.585c0.217,0.751.377,1.436,0.527,2.038a5.688,5.688,0,0,1-.362.467,2.69,2.69,0,0,1-.264.271q-0.221-.08-0.471-0.147a2.029,2.029,0,0,0-.522-0.066,1.079,1.079,0,0,0-.768.3A1.058,1.058,0,0,0,9,15.131a0.82,0.82,0,0,0,.832.852,1.134,1.134,0,0,0,.787-0.3,5.11,5.11,0,0,0,.776-0.993q0.141-.219.215-0.34c0.046-.076.122-0.194,0.223-0.346a2.786,2.786,0,0,0,.918,1.726,2.582,2.582,0,0,0,2.376-.185c0.317-.181.212-0.565,0-0.494A0.807,0.807,0,0,1,14.176,15a5.159,5.159,0,0,1-.913-2.446l0,0Q13.487,12.24,13.663,12.027Z></path> </svg>";

/***/ },
/* 87 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=3 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=11 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=3 y1=9 y2=9></line> <line class=\"ql-stroke ql-thin\" x1=13.5 x2=15.5 y1=14.5 y2=14.5></line> <path class=ql-fill d=M14.5,15a0.5,0.5,0,0,1-.5-0.5V12.085l-0.276.138A0.5,0.5,0,0,1,13.053,12c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,15,11.5v3A0.5,0.5,0,0,1,14.5,15Z></path> </svg>";

/***/ },
/* 88 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=3 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=11 y1=4 y2=14></line> <line class=ql-stroke x1=11 x2=3 y1=9 y2=9></line> <path class=\"ql-stroke ql-thin\" d=M15.5,14.5h-2c0-.234,1.85-1.076,1.85-2.234a0.959,0.959,0,0,0-1.85-.109></path> </svg>";

/***/ },
/* 89 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=13 y1=4 y2=4></line> <line class=ql-stroke x1=5 x2=11 y1=14 y2=14></line> <line class=ql-stroke x1=8 x2=10 y1=14 y2=4></line> </svg>";

/***/ },
/* 90 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=10 width=12 x=3 y=4></rect> <circle class=ql-fill cx=6 cy=7 r=1></circle> <polyline class=\"ql-even ql-fill\" points=\"5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12\"></polyline> </svg>";

/***/ },
/* 91 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=\"ql-fill ql-stroke\" points=\"3 7 3 11 5 9 3 7\"></polyline> </svg>";

/***/ },
/* 92 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=3 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"5 7 5 11 3 9 5 7\"></polyline> </svg>";

/***/ },
/* 93 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=11 y1=7 y2=11></line> <path class=\"ql-even ql-stroke\" d=M8.9,4.577a3.476,3.476,0,0,1,.36,4.679A3.476,3.476,0,0,1,4.577,8.9C3.185,7.5,2.035,6.4,4.217,4.217S7.5,3.185,8.9,4.577Z></path> <path class=\"ql-even ql-stroke\" d=M13.423,9.1a3.476,3.476,0,0,0-4.679-.36,3.476,3.476,0,0,0,.36,4.679c1.392,1.392,2.5,2.542,4.679.36S14.815,10.5,13.423,9.1Z></path> </svg>";

/***/ },
/* 94 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=7 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=7 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=7 x2=15 y1=14 y2=14></line> <line class=\"ql-stroke ql-thin\" x1=2.5 x2=4.5 y1=5.5 y2=5.5></line> <path class=ql-fill d=M3.5,6A0.5,0.5,0,0,1,3,5.5V3.085l-0.276.138A0.5,0.5,0,0,1,2.053,3c-0.124-.247-0.023-0.324.224-0.447l1-.5A0.5,0.5,0,0,1,4,2.5v3A0.5,0.5,0,0,1,3.5,6Z></path> <path class=\"ql-stroke ql-thin\" d=M4.5,10.5h-2c0-.234,1.85-1.076,1.85-2.234A0.959,0.959,0,0,0,2.5,8.156></path> <path class=\"ql-stroke ql-thin\" d=M2.5,14.846a0.959,0.959,0,0,0,1.85-.109A0.7,0.7,0,0,0,3.75,14a0.688,0.688,0,0,0,.6-0.736,0.959,0.959,0,0,0-1.85-.109></path> </svg>";

/***/ },
/* 95 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=6 x2=15 y1=4 y2=4></line> <line class=ql-stroke x1=6 x2=15 y1=9 y2=9></line> <line class=ql-stroke x1=6 x2=15 y1=14 y2=14></line> <line class=ql-stroke x1=3 x2=3 y1=4 y2=4></line> <line class=ql-stroke x1=3 x2=3 y1=9 y2=9></line> <line class=ql-stroke x1=3 x2=3 y1=14 y2=14></line> </svg>";

/***/ },
/* 96 */
/***/ function(moduleexports) {

	module.exports = "<svg class=\"\" viewbox=\"0 0 18 18\"> <line class=ql-stroke x1=9 x2=15 y1=4 y2=4></line> <polyline class=ql-stroke points=\"3 4 4 5 6 3\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=14 y2=14></line> <polyline class=ql-stroke points=\"3 14 4 15 6 13\"></polyline> <line class=ql-stroke x1=9 x2=15 y1=9 y2=9></line> <polyline class=ql-stroke points=\"3 9 4 10 6 8\"></polyline> </svg>";

/***/ },
/* 97 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,15H13.861a3.858,3.858,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.921,1.921,0,0,0,12.021,11.7a0.50013,0.50013,0,1,0,.957.291h0a0.914,0.914,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.076-1.16971,1.86982-1.93971,2.43082A1.45639,1.45639,0,0,0,12,15.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,15Z /> <path class=ql-fill d=M9.65,5.241a1,1,0,0,0-1.409.108L6,7.964,3.759,5.349A1,1,0,0,0,2.192,6.59178Q2.21541,6.6213,2.241,6.649L4.684,9.5,2.241,12.35A1,1,0,0,0,3.71,13.70722q0.02557-.02768.049-0.05722L6,11.036,8.241,13.65a1,1,0,1,0,1.567-1.24277Q9.78459,12.3777,9.759,12.35L7.316,9.5,9.759,6.651A1,1,0,0,0,9.65,5.241Z /> </svg>";

/***/ },
/* 98 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-fill d=M15.5,7H13.861a4.015,4.015,0,0,0,1.914-2.975,1.8,1.8,0,0,0-1.6-1.751A1.922,1.922,0,0,0,12.021,3.7a0.5,0.5,0,1,0,.957.291,0.917,0.917,0,0,1,1.053-.725,0.81,0.81,0,0,1,.744.762c0,1.077-1.164,1.925-1.934,2.486A1.423,1.423,0,0,0,12,7.5a0.5,0.5,0,0,0,.5.5h3A0.5,0.5,0,0,0,15.5,7Z /> <path class=ql-fill d=M9.651,5.241a1,1,0,0,0-1.41.108L6,7.964,3.759,5.349a1,1,0,1,0-1.519,1.3L4.683,9.5,2.241,12.35a1,1,0,1,0,1.519,1.3L6,11.036,8.241,13.65a1,1,0,0,0,1.519-1.3L7.317,9.5,9.759,6.651A1,1,0,0,0,9.651,5.241Z /> </svg>";

/***/ },
/* 99 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <line class=\"ql-stroke ql-thin\" x1=15.5 x2=2.5 y1=8.5 y2=9.5></line> <path class=ql-fill d=M9.007,8C6.542,7.791,6,7.519,6,6.5,6,5.792,7.283,5,9,5c1.571,0,2.765.679,2.969,1.309a1,1,0,0,0,1.9-.617C13.356,4.106,11.354,3,9,3,6.2,3,4,4.538,4,6.5a3.2,3.2,0,0,0,.5,1.843Z></path> <path class=ql-fill d=M8.984,10C11.457,10.208,12,10.479,12,11.5c0,0.708-1.283,1.5-3,1.5-1.571,0-2.765-.679-2.969-1.309a1,1,0,1,0-1.9.617C4.644,13.894,6.646,15,9,15c2.8,0,5-1.538,5-3.5a3.2,3.2,0,0,0-.5-1.843Z></path> </svg>";

/***/ },
/* 100 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <path class=ql-stroke d=M5,3V9a4.012,4.012,0,0,0,4,4H9a4.012,4.012,0,0,0,4-4V3></path> <rect class=ql-fill height=1 rx=0.5 ry=0.5 width=12 x=3 y=15></rect> </svg>";

/***/ },
/* 101 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <rect class=ql-stroke height=12 width=12 x=3 y=3></rect> <rect class=ql-fill height=12 width=1 x=5 y=3></rect> <rect class=ql-fill height=12 width=1 x=12 y=3></rect> <rect class=ql-fill height=2 width=8 x=5 y=8></rect> <rect class=ql-fill height=1 width=3 x=3 y=5></rect> <rect class=ql-fill height=1 width=3 x=3 y=7></rect> <rect class=ql-fill height=1 width=3 x=3 y=10></rect> <rect class=ql-fill height=1 width=3 x=3 y=12></rect> <rect class=ql-fill height=1 width=3 x=12 y=5></rect> <rect class=ql-fill height=1 width=3 x=12 y=7></rect> <rect class=ql-fill height=1 width=3 x=12 y=10></rect> <rect class=ql-fill height=1 width=3 x=12 y=12></rect> </svg>";

/***/ },
/* 102 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _dropdown = __webpack_require__(103);

	var _dropdown2 = _interopRequireDefault(_dropdown);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Picker = function () {
	  function Picker(select) {
	    var _this = this;

	    _classCallCheck(thisPicker);

	    this.select = select;
	    this.container = document.createElement('span');
	    this.buildPicker();
	    this.select.style.display = 'none';
	    this.select.parentNode.insertBefore(this.containerthis.select);
	    this.label.addEventListener('click'function () {
	      _this.container.classList.toggle('ql-expanded');
	    });
	    this.select.addEventListener('change'this.update.bind(this));
	  }

	  _createClass(Picker[{
	    key: 'buildItem',
	    value: function buildItem(option) {
	      var _this2 = this;

	      var item = document.createElement('span');
	      item.classList.add('ql-picker-item');
	      if (option.hasAttribute('value')) {
	        item.setAttribute('data-value'option.getAttribute('value'));
	      }
	      if (option.textContent) {
	        item.setAttribute('data-label'option.textContent);
	      }
	      item.addEventListener('click'function () {
	        _this2.selectItem(itemtrue);
	      });
	      return item;
	    }
	  }{
	    key: 'buildLabel',
	    value: function buildLabel() {
	      var label = document.createElement('span');
	      label.classList.add('ql-picker-label');
	      label.innerHTML = _dropdown2.default;
	      this.container.appendChild(label);
	      return label;
	    }
	  }{
	    key: 'buildOptions',
	    value: function buildOptions() {
	      var _this3 = this;

	      var options = document.createElement('span');
	      options.classList.add('ql-picker-options');
	      [].slice.call(this.select.options).forEach(function (option) {
	        var item = _this3.buildItem(option);
	        options.appendChild(item);
	        if (option.hasAttribute('selected')) {
	          _this3.selectItem(item);
	        }
	      });
	      this.container.appendChild(options);
	    }
	  }{
	    key: 'buildPicker',
	    value: function buildPicker() {
	      var _this4 = this;

	      [].slice.call(this.select.attributes).forEach(function (item) {
	        _this4.container.setAttribute(item.nameitem.value);
	      });
	      this.container.classList.add('ql-picker');
	      this.label = this.buildLabel();
	      this.buildOptions();
	    }
	  }{
	    key: 'close',
	    value: function close() {
	      this.container.classList.remove('ql-expanded');
	    }
	  }{
	    key: 'selectItem',
	    value: function selectItem(item) {
	      var trigger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

	      var selected = this.container.querySelector('.ql-selected');
	      if (item === selected) return;
	      if (selected != null) {
	        selected.classList.remove('ql-selected');
	      }
	      if (item != null) {
	        item.classList.add('ql-selected');
	        this.select.selectedIndex = [].indexOf.call(item.parentNode.childrenitem);
	        if (item.hasAttribute('data-value')) {
	          this.label.setAttribute('data-value'item.getAttribute('data-value'));
	        } else {
	          this.label.removeAttribute('data-value');
	        }
	        if (item.hasAttribute('data-label')) {
	          this.label.setAttribute('data-label'item.getAttribute('data-label'));
	        } else {
	          this.label.removeAttribute('data-label');
	        }
	        if (trigger) {
	          if (typeof Event === 'function') {
	            this.select.dispatchEvent(new Event('change'));
	          } else if ((typeof Event === 'undefined' ? 'undefined' : _typeof(Event)) === 'object') {
	            // IE11
	            var event = document.createEvent('Event');
	            event.initEvent('change'truetrue);
	            this.select.dispatchEvent(event);
	          }
	          this.close();
	        }
	      } else {
	        this.label.removeAttribute('data-value');
	        this.label.removeAttribute('data-label');
	      }
	    }
	  }{
	    key: 'update',
	    value: function update() {
	      var option = void 0;
	      if (this.select.selectedIndex > -1) {
	        var item = this.container.querySelector('.ql-picker-options').children[this.select.selectedIndex];
	        option = this.select.options[this.select.selectedIndex];
	        this.selectItem(item);
	      } else {
	        this.selectItem(null);
	      }
	      var isActive = option != null && option !== this.select.querySelector('option[selected]');
	      this.label.classList.toggle('ql-active'isActive);
	    }
	  }]);

	  return Picker;
	}();

	exports.default = Picker;

/***/ },
/* 103 */
/***/ function(moduleexports) {

	module.exports = "<svg viewbox=\"0 0 18 18\"> <polygon class=ql-stroke points=\"7 11 9 13 11 11 7 11\"></polygon> <polygon class=ql-stroke points=\"7 7 9 5 11 7 7 7\"></polygon> </svg>";

/***/ },
/* 104 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _picker = __webpack_require__(102);

	var _picker2 = _interopRequireDefault(_picker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var ColorPicker = function (_Picker) {
	  _inherits(ColorPicker_Picker);

	  function ColorPicker(selectlabel) {
	    _classCallCheck(thisColorPicker);

	    var _this = _possibleConstructorReturn(this(ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(thisselect));

	    _this.label.innerHTML = label;
	    _this.container.classList.add('ql-color-picker');
	    [].slice.call(_this.container.querySelectorAll('.ql-picker-item')07).forEach(function (item) {
	      item.classList.add('ql-primary');
	    });
	    return _this;
	  }

	  _createClass(ColorPicker[{
	    key: 'buildItem',
	    value: function buildItem(option) {
	      var item = _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype)'buildItem'this).call(thisoption);
	      item.style.backgroundColor = option.getAttribute('value') || '';
	      return item;
	    }
	  }{
	    key: 'selectItem',
	    value: function selectItem(itemtrigger) {
	      _get(ColorPicker.prototype.__proto__ || Object.getPrototypeOf(ColorPicker.prototype)'selectItem'this).call(thisitemtrigger);
	      var colorLabel = this.label.querySelector('.ql-color-label');
	      var value = item ? item.getAttribute('data-value') || '' : '';
	      if (colorLabel) {
	        if (colorLabel.tagName === 'line') {
	          colorLabel.style.stroke = value;
	        } else {
	          colorLabel.style.fill = value;
	        }
	      }
	    }
	  }]);

	  return ColorPicker;
	}(_picker2.default);

	exports.default = ColorPicker;

/***/ },
/* 105 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _picker = __webpack_require__(102);

	var _picker2 = _interopRequireDefault(_picker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var IconPicker = function (_Picker) {
	  _inherits(IconPicker_Picker);

	  function IconPicker(selecticons) {
	    _classCallCheck(thisIconPicker);

	    var _this = _possibleConstructorReturn(this(IconPicker.__proto__ || Object.getPrototypeOf(IconPicker)).call(thisselect));

	    _this.container.classList.add('ql-icon-picker');
	    [].forEach.call(_this.container.querySelectorAll('.ql-picker-item')function (item) {
	      item.innerHTML = icons[item.getAttribute('data-value') || ''];
	    });
	    _this.defaultItem = _this.container.querySelector('.ql-selected');
	    _this.selectItem(_this.defaultItem);
	    return _this;
	  }

	  _createClass(IconPicker[{
	    key: 'selectItem',
	    value: function selectItem(itemtrigger) {
	      _get(IconPicker.prototype.__proto__ || Object.getPrototypeOf(IconPicker.prototype)'selectItem'this).call(thisitemtrigger);
	      item = item || this.defaultItem;
	      this.label.innerHTML = item.innerHTML;
	    }
	  }]);

	  return IconPicker;
	}(_picker2.default);

	exports.default = IconPicker;

/***/ },
/* 106 */
/***/ function(moduleexports) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Tooltip = function () {
	  function Tooltip(quillboundsContainer) {
	    var _this = this;

	    _classCallCheck(thisTooltip);

	    this.quill = quill;
	    this.boundsContainer = boundsContainer || document.body;
	    this.root = quill.addContainer('ql-tooltip');
	    this.root.innerHTML = this.constructor.TEMPLATE;
	    var offset = parseInt(window.getComputedStyle(this.root).marginTop);
	    this.quill.root.addEventListener('scroll'function () {
	      _this.root.style.marginTop = -1 * _this.quill.root.scrollTop + offset + 'px';
	      _this.checkBounds();
	    });
	    this.hide();
	  }

	  _createClass(Tooltip[{
	    key: 'checkBounds',
	    value: function checkBounds() {
	      this.root.classList.toggle('ql-out-top'this.root.offsetTop <= 0);
	      this.root.classList.remove('ql-out-bottom');
	      this.root.classList.toggle('ql-out-bottom'this.root.offsetTop + this.root.offsetHeight >= this.quill.root.offsetHeight);
	    }
	  }{
	    key: 'hide',
	    value: function hide() {
	      this.root.classList.add('ql-hidden');
	    }
	  }{
	    key: 'position',
	    value: function position(reference) {
	      var left = reference.left + reference.width / 2 - this.root.offsetWidth / 2;
	      var top = reference.bottom + this.quill.root.scrollTop;
	      this.root.style.left = left + 'px';
	      this.root.style.top = top + 'px';
	      var containerBounds = this.boundsContainer.getBoundingClientRect();
	      var rootBounds = this.root.getBoundingClientRect();
	      var shift = 0;
	      if (rootBounds.right > containerBounds.right) {
	        shift = containerBounds.right - rootBounds.right;
	        this.root.style.left = left + shift + 'px';
	      }
	      if (rootBounds.left < containerBounds.left) {
	        shift = containerBounds.left - rootBounds.left;
	        this.root.style.left = left + shift + 'px';
	      }
	      this.checkBounds();
	      return shift;
	    }
	  }{
	    key: 'show',
	    value: function show() {
	      this.root.classList.remove('ql-editing');
	      this.root.classList.remove('ql-hidden');
	    }
	  }]);

	  return Tooltip;
	}();

	exports.default = Tooltip;

/***/ },
/* 107 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.default = exports.BubbleTooltip = undefined;

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _extend = __webpack_require__(25);

	var _extend2 = _interopRequireDefault(_extend);

	var _emitter = __webpack_require__(35);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _base = __webpack_require__(108);

	var _base2 = _interopRequireDefault(_base);

	var _selection = __webpack_require__(40);

	var _icons = __webpack_require__(69);

	var _icons2 = _interopRequireDefault(_icons);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var TOOLBAR_CONFIG = [['bold''italic''link'][{ header: 1 }{ header: 2 }'blockquote']];

	var BubbleTheme = function (_BaseTheme) {
	  _inherits(BubbleTheme_BaseTheme);

	  function BubbleTheme(quilloptions) {
	    _classCallCheck(thisBubbleTheme);

	    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
	      options.modules.toolbar.container = TOOLBAR_CONFIG;
	    }

	    var _this = _possibleConstructorReturn(this(BubbleTheme.__proto__ || Object.getPrototypeOf(BubbleTheme)).call(thisquilloptions));

	    _this.quill.container.classList.add('ql-bubble');
	    return _this;
	  }

	  _createClass(BubbleTheme[{
	    key: 'extendToolbar',
	    value: function extendToolbar(toolbar) {
	      this.tooltip = new BubbleTooltip(this.quillthis.options.bounds);
	      this.tooltip.root.appendChild(toolbar.container);
	      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button'))_icons2.default);
	      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select'))_icons2.default);
	    }
	  }]);

	  return BubbleTheme;
	}(_base2.default);

	BubbleTheme.DEFAULTS = (0_extend2.default)(true{}_base2.default.DEFAULTS{
	  modules: {
	    toolbar: {
	      handlers: {
	        link: function link(value) {
	          if (!value) {
	            this.quill.format('link'false);
	          } else {
	            this.quill.theme.tooltip.edit();
	          }
	        }
	      }
	    }
	  }
	});

	var BubbleTooltip = function (_BaseTooltip) {
	  _inherits(BubbleTooltip_BaseTooltip);

	  function BubbleTooltip(quillbounds) {
	    _classCallCheck(thisBubbleTooltip);

	    var _this2 = _possibleConstructorReturn(this(BubbleTooltip.__proto__ || Object.getPrototypeOf(BubbleTooltip)).call(thisquillbounds));

	    _this2.quill.on(_emitter2.default.events.EDITOR_CHANGEfunction (typerange) {
	      if (type !== _emitter2.default.events.SELECTION_CHANGE) return;
	      if (range != null && range.length > 0) {
	        _this2.show();
	        // Lock our width so we will expand beyond our offsetParent boundaries
	        _this2.root.style.left = '0px';
	        _this2.root.style.width = '';
	        _this2.root.style.width = _this2.root.offsetWidth + 'px';
	        var lines = _this2.quill.scroll.lines(range.indexrange.length);
	        if (lines.length === 1) {
	          _this2.position(_this2.quill.getBounds(range));
	        } else {
	          var lastLine = lines[lines.length - 1];
	          var index = lastLine.offset(_this2.quill.scroll);
	          var length = Math.min(lastLine.length() - 1range.index + range.length - index);
	          var _bounds = _this2.quill.getBounds(new _selection.Range(indexlength));
	          _this2.position(_bounds);
	        }
	      } else if (document.activeElement !== _this2.textbox && _this2.quill.hasFocus()) {
	        _this2.hide();
	      }
	    });
	    return _this2;
	  }

	  _createClass(BubbleTooltip[{
	    key: 'listen',
	    value: function listen() {
	      var _this3 = this;

	      _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype)'listen'this).call(this);
	      this.root.querySelector('.ql-close').addEventListener('click'function () {
	        _this3.root.classList.remove('ql-editing');
	      });
	      this.quill.on(_emitter2.default.events.SCROLL_OPTIMIZEfunction () {
	        // Let selection be restored by toolbar handlers before repositioning
	        setTimeout(function () {
	          if (_this3.root.classList.contains('ql-hidden')) return;
	          var range = _this3.quill.getSelection();
	          if (range != null) {
	            _this3.position(_this3.quill.getBounds(range));
	          }
	        }1);
	      });
	    }
	  }{
	    key: 'cancel',
	    value: function cancel() {
	      this.show();
	    }
	  }{
	    key: 'position',
	    value: function position(reference) {
	      var shift = _get(BubbleTooltip.prototype.__proto__ || Object.getPrototypeOf(BubbleTooltip.prototype)'position'this).call(thisreference);
	      var arrow = this.root.querySelector('.ql-tooltip-arrow');
	      arrow.style.marginLeft = '';
	      if (shift === 0) return shift;
	      arrow.style.marginLeft = -1 * shift - arrow.offsetWidth / 2 + 'px';
	    }
	  }]);

	  return BubbleTooltip;
	}(_base.BaseTooltip);

	BubbleTooltip.TEMPLATE = ['<span class="ql-tooltip-arrow"></span>''<div class="ql-tooltip-editor">''<input type="text" data-formula="e=mc^2" data-link="quilljs.com" data-video="Embed URL">''<a class="ql-close"></a>''</div>'].join('');

	exports.BubbleTooltip = BubbleTooltip;
	exports.default = BubbleTheme;

/***/ },
/* 108 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});
	exports.default = exports.BaseTooltip = undefined;

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _extend = __webpack_require__(25);

	var _extend2 = _interopRequireDefault(_extend);

	var _quillDelta = __webpack_require__(20);

	var _quillDelta2 = _interopRequireDefault(_quillDelta);

	var _emitter = __webpack_require__(35);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _keyboard = __webpack_require__(52);

	var _keyboard2 = _interopRequireDefault(_keyboard);

	var _theme = __webpack_require__(41);

	var _theme2 = _interopRequireDefault(_theme);

	var _colorPicker = __webpack_require__(104);

	var _colorPicker2 = _interopRequireDefault(_colorPicker);

	var _iconPicker = __webpack_require__(105);

	var _iconPicker2 = _interopRequireDefault(_iconPicker);

	var _picker = __webpack_require__(102);

	var _picker2 = _interopRequireDefault(_picker);

	var _tooltip = __webpack_require__(106);

	var _tooltip2 = _interopRequireDefault(_tooltip);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var ALIGNS = [false'center''right''justify'];

	var COLORS = ["#000000""#e60000""#ff9900""#ffff00""#008a00""#0066cc""#9933ff""#ffffff""#facccc""#ffebcc""#ffffcc""#cce8cc""#cce0f5""#ebd6ff""#bbbbbb""#f06666""#ffc266""#ffff66""#66b966""#66a3e0""#c285ff""#888888""#a10000""#b26b00""#b2b200""#006100""#0047b2""#6b24b2""#444444""#5c0000""#663d00""#666600""#003700""#002966""#3d1466"];

	var FONTS = [false'serif''monospace'];

	var HEADERS = ['1''2''3'false];

	var SIZES = ['small'false'large''huge'];

	var BaseTheme = function (_Theme) {
	  _inherits(BaseTheme_Theme);

	  function BaseTheme(quilloptions) {
	    _classCallCheck(thisBaseTheme);

	    var _this = _possibleConstructorReturn(this(BaseTheme.__proto__ || Object.getPrototypeOf(BaseTheme)).call(thisquilloptions));

	    var listener = function listener(e) {
	      if (!document.body.contains(quill.root)) {
	        return document.body.removeEventListener('click'listener);
	      }
	      if (_this.tooltip != null && !_this.tooltip.root.contains(e.target) && document.activeElement !== _this.tooltip.textbox && !_this.quill.hasFocus()) {
	        _this.tooltip.hide();
	      }
	      if (_this.pickers != null) {
	        _this.pickers.forEach(function (picker) {
	          if (!picker.container.contains(e.target)) {
	            picker.close();
	          }
	        });
	      }
	    };
	    document.body.addEventListener('click'listener);
	    return _this;
	  }

	  _createClass(BaseTheme[{
	    key: 'addModule',
	    value: function addModule(name) {
	      var module = _get(BaseTheme.prototype.__proto__ || Object.getPrototypeOf(BaseTheme.prototype)'addModule'this).call(thisname);
	      if (name === 'toolbar') {
	        this.extendToolbar(module);
	      }
	      return module;
	    }
	  }{
	    key: 'buildButtons',
	    value: function buildButtons(buttonsicons) {
	      buttons.forEach(function (button) {
	        var className = button.getAttribute('class') || '';
	        className.split(/\s+/).forEach(function (name) {
	          if (!name.startsWith('ql-')) return;
	          name = name.slice('ql-'.length);
	          if (icons[name] == null) return;
	          if (name === 'direction') {
	            button.innerHTML = icons[name][''] + icons[name]['rtl'];
	          } else if (typeof icons[name] === 'string') {
	            button.innerHTML = icons[name];
	          } else {
	            var value = button.value || '';
	            if (value != null && icons[name][value]) {
	              button.innerHTML = icons[name][value];
	            }
	          }
	        });
	      });
	    }
	  }{
	    key: 'buildPickers',
	    value: function buildPickers(selectsicons) {
	      var _this2 = this;

	      this.pickers = selects.map(function (select) {
	        if (select.classList.contains('ql-align')) {
	          if (select.querySelector('option') == null) {
	            fillSelect(selectALIGNS);
	          }
	          return new _iconPicker2.default(selecticons.align);
	        } else if (select.classList.contains('ql-background') || select.classList.contains('ql-color')) {
	          var format = select.classList.contains('ql-background') ? 'background' : 'color';
	          if (select.querySelector('option') == null) {
	            fillSelect(selectCOLORSformat === 'background' ? '#ffffff' : '#000000');
	          }
	          return new _colorPicker2.default(selecticons[format]);
	        } else {
	          if (select.querySelector('option') == null) {
	            if (select.classList.contains('ql-font')) {
	              fillSelect(selectFONTS);
	            } else if (select.classList.contains('ql-header')) {
	              fillSelect(selectHEADERS);
	            } else if (select.classList.contains('ql-size')) {
	              fillSelect(selectSIZES);
	            }
	          }
	          return new _picker2.default(select);
	        }
	      });
	      var update = function update() {
	        _this2.pickers.forEach(function (picker) {
	          picker.update();
	        });
	      };
	      this.quill.on(_emitter2.default.events.SELECTION_CHANGEupdate).on(_emitter2.default.events.SCROLL_OPTIMIZEupdate);
	    }
	  }]);

	  return BaseTheme;
	}(_theme2.default);

	BaseTheme.DEFAULTS = (0_extend2.default)(true{}_theme2.default.DEFAULTS{
	  modules: {
	    toolbar: {
	      handlers: {
	        formula: function formula() {
	          this.quill.theme.tooltip.edit('formula');
	        },
	        image: function image() {
	          var _this3 = this;

	          var fileInput = this.container.querySelector('input.ql-image[type=file]');
	          if (fileInput == null) {
	            fileInput = document.createElement('input');
	            fileInput.setAttribute('type''file');
	            fileInput.setAttribute('accept''image/pngimage/gifimage/jpegimage/bmpimage/x-iconimage/svg+xml');
	            fileInput.classList.add('ql-image');
	            fileInput.addEventListener('change'function () {
	              if (fileInput.files != null && fileInput.files[0] != null) {
	                var reader = new FileReader();
	                reader.onload = function (e) {
	                  var range = _this3.quill.getSelection(true);
	                  _this3.quill.updateContents(new _quillDelta2.default().retain(range.index).delete(range.length).insert({ image: e.target.result })_emitter2.default.sources.USER);
	                  fileInput.value = "";
	                };
	                reader.readAsDataURL(fileInput.files[0]);
	              }
	            });
	            this.container.appendChild(fileInput);
	          }
	          fileInput.click();
	        },
	        video: function video() {
	          this.quill.theme.tooltip.edit('video');
	        }
	      }
	    }
	  }
	});

	var BaseTooltip = function (_Tooltip) {
	  _inherits(BaseTooltip_Tooltip);

	  function BaseTooltip(quillboundsContainer) {
	    _classCallCheck(thisBaseTooltip);

	    var _this4 = _possibleConstructorReturn(this(BaseTooltip.__proto__ || Object.getPrototypeOf(BaseTooltip)).call(thisquillboundsContainer));

	    _this4.textbox = _this4.root.querySelector('input[type="text"]');
	    _this4.listen();
	    return _this4;
	  }

	  _createClass(BaseTooltip[{
	    key: 'listen',
	    value: function listen() {
	      var _this5 = this;

	      this.textbox.addEventListener('keydown'function (event) {
	        if (_keyboard2.default.match(event'enter')) {
	          _this5.save();
	          event.preventDefault();
	        } else if (_keyboard2.default.match(event'escape')) {
	          _this5.cancel();
	          event.preventDefault();
	        }
	      });
	    }
	  }{
	    key: 'cancel',
	    value: function cancel() {
	      this.hide();
	    }
	  }{
	    key: 'edit',
	    value: function edit() {
	      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'link';
	      var preview = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	      this.root.classList.remove('ql-hidden');
	      this.root.classList.add('ql-editing');
	      if (preview != null) {
	        this.textbox.value = preview;
	      } else if (mode !== this.root.getAttribute('data-mode')) {
	        this.textbox.value = '';
	      }
	      this.position(this.quill.getBounds(this.quill.selection.savedRange));
	      this.textbox.select();
	      this.textbox.setAttribute('placeholder'this.textbox.getAttribute('data-' + mode) || '');
	      this.root.setAttribute('data-mode'mode);
	    }
	  }{
	    key: 'restoreFocus',
	    value: function restoreFocus() {
	      var scrollTop = this.quill.root.scrollTop;
	      this.quill.focus();
	      this.quill.root.scrollTop = scrollTop;
	    }
	  }{
	    key: 'save',
	    value: function save() {
	      var value = this.textbox.value;
	      switch (this.root.getAttribute('data-mode')) {
	        case 'link':
	          {
	            var scrollTop = this.quill.root.scrollTop;
	            if (this.linkRange) {
	              this.quill.formatText(this.linkRange'link'value_emitter2.default.sources.USER);
	              delete this.linkRange;
	            } else {
	              this.restoreFocus();
	              this.quill.format('link'value_emitter2.default.sources.USER);
	            }
	            this.quill.root.scrollTop = scrollTop;
	            break;
	          }
	        case 'video':
	          {
	            var match = value.match(/^(https?):\/\/(www\.)?youtube\.com\/watch.*v=([a-zA-Z0-9_-]+)/) || value.match(/^(https?):\/\/(www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/);
	            if (match) {
	              value = match[1] + '://www.youtube.com/embed/' + match[3] + '?showinfo=0';
	            } else if (match = value.match(/^(https?):\/\/(www\.)?vimeo\.com\/(\d+)/)) {
	              // eslint-disable-line no-cond-assign
	              value = match[1] + '://player.vimeo.com/video/' + match[3] + '/';
	            }
	          } // eslint-disable-next-line no-fallthrough
	        case 'formula':
	          {
	            var range = this.quill.getSelection(true);
	            var index = range.index + range.length;
	            if (range != null) {
	              this.quill.insertEmbed(indexthis.root.getAttribute('data-mode')value_emitter2.default.sources.USER);
	              if (this.root.getAttribute('data-mode') === 'formula') {
	                this.quill.insertText(index + 1' '_emitter2.default.sources.USER);
	              }
	              this.quill.setSelection(index + 2_emitter2.default.sources.USER);
	            }
	            break;
	          }
	        default:
	      }
	      this.textbox.value = '';
	      this.hide();
	    }
	  }]);

	  return BaseTooltip;
	}(_tooltip2.default);

	function fillSelect(selectvalues) {
	  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

	  values.forEach(function (value) {
	    var option = document.createElement('option');
	    if (value === defaultValue) {
	      option.setAttribute('selected''selected');
	    } else {
	      option.setAttribute('value'value);
	    }
	    select.appendChild(option);
	  });
	}

	exports.BaseTooltip = BaseTooltip;
	exports.default = BaseTheme;

/***/ },
/* 109 */
/***/ function(moduleexports__webpack_require__) {

	'use strict';

	Object.defineProperty(exports"__esModule"{
	  value: true
	});

	var _slicedToArray = function () { function sliceIterator(arri) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator]()_s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arri) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arri); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	var _get = function get(objectpropertyreceiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(objectproperty); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parentpropertyreceiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _createClass = function () { function defineProperties(targetprops) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(targetdescriptor.keydescriptor); } } return function (ConstructorprotoPropsstaticProps) { if (protoProps) defineProperties(Constructor.prototypeprotoProps); if (staticProps) defineProperties(ConstructorstaticProps); return Constructor; }; }();

	var _extend = __webpack_require__(25);

	var _extend2 = _interopRequireDefault(_extend);

	var _emitter = __webpack_require__(35);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _base = __webpack_require__(108);

	var _base2 = _interopRequireDefault(_base);

	var _link = __webpack_require__(60);

	var _link2 = _interopRequireDefault(_link);

	var _selection = __webpack_require__(40);

	var _icons = __webpack_require__(69);

	var _icons2 = _interopRequireDefault(_icons);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instanceConstructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(selfcall) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClasssuperClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a functionnot " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype{ constructor: { value: subClassenumerable: falsewritable: trueconfigurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClasssuperClass) : subClass.__proto__ = superClass; }

	var TOOLBAR_CONFIG = [[{ header: ['1''2''3'false] }]['bold''italic''underline''link'][{ list: 'ordered' }{ list: 'bullet' }]['clean']];

	var SnowTheme = function (_BaseTheme) {
	  _inherits(SnowTheme_BaseTheme);

	  function SnowTheme(quilloptions) {
	    _classCallCheck(thisSnowTheme);

	    if (options.modules.toolbar != null && options.modules.toolbar.container == null) {
	      options.modules.toolbar.container = TOOLBAR_CONFIG;
	    }

	    var _this = _possibleConstructorReturn(this(SnowTheme.__proto__ || Object.getPrototypeOf(SnowTheme)).call(thisquilloptions));

	    _this.quill.container.classList.add('ql-snow');
	    return _this;
	  }

	  _createClass(SnowTheme[{
	    key: 'extendToolbar',
	    value: function extendToolbar(toolbar) {
	      toolbar.container.classList.add('ql-snow');
	      this.buildButtons([].slice.call(toolbar.container.querySelectorAll('button'))_icons2.default);
	      this.buildPickers([].slice.call(toolbar.container.querySelectorAll('select'))_icons2.default);
	      this.tooltip = new SnowTooltip(this.quillthis.options.bounds);
	      if (toolbar.container.querySelector('.ql-link')) {
	        this.quill.keyboard.addBinding({ key: 'K'shortKey: true }function (rangecontext) {
	          toolbar.handlers['link'].call(toolbar!context.format.link);
	        });
	      }
	    }
	  }]);

	  return SnowTheme;
	}(_base2.default);

	SnowTheme.DEFAULTS = (0_extend2.default)(true{}_base2.default.DEFAULTS{
	  modules: {
	    toolbar: {
	      handlers: {
	        link: function link(value) {
	          if (value) {
	            var range = this.quill.getSelection();
	            if (range == null || range.length == 0) return;
	            var preview = this.quill.getText(range);
	            if (/^\S+@\S+\.\S+$/.test(preview) && preview.indexOf('mailto:') !== 0) {
	              preview = 'mailto:' + preview;
	            }
	            var tooltip = this.quill.theme.tooltip;
	            tooltip.edit('link'preview);
	          } else {
	            this.quill.format('link'false);
	          }
	        }
	      }
	    }
	  }
	});

	var SnowTooltip = function (_BaseTooltip) {
	  _inherits(SnowTooltip_BaseTooltip);

	  function SnowTooltip(quillbounds) {
	    _classCallCheck(thisSnowTooltip);

	    var _this2 = _possibleConstructorReturn(this(SnowTooltip.__proto__ || Object.getPrototypeOf(SnowTooltip)).call(thisquillbounds));

	    _this2.preview = _this2.root.querySelector('a.ql-preview');
	    return _this2;
	  }

	  _createClass(SnowTooltip[{
	    key: 'listen',
	    value: function listen() {
	      var _this3 = this;

	      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype)'listen'this).call(this);
	      this.root.querySelector('a.ql-action').addEventListener('click'function (event) {
	        if (_this3.root.classList.contains('ql-editing')) {
	          _this3.save();
	        } else {
	          _this3.edit('link'_this3.preview.textContent);
	        }
	        event.preventDefault();
	      });
	      this.root.querySelector('a.ql-remove').addEventListener('click'function (event) {
	        if (_this3.linkRange != null) {
	          _this3.restoreFocus();
	          _this3.quill.formatText(_this3.linkRange'link'false_emitter2.default.sources.USER);
	          delete _this3.linkRange;
	        }
	        event.preventDefault();
	        _this3.hide();
	      });
	      this.quill.on(_emitter2.default.events.SELECTION_CHANGEfunction (range) {
	        if (range == null) return;
	        if (range.length === 0) {
	          var _quill$scroll$descend = _this3.quill.scroll.descendant(_link2.defaultrange.index),
	              _quill$scroll$descend2 = _slicedToArray(_quill$scroll$descend2),
	              link = _quill$scroll$descend2[0],
	              offset = _quill$scroll$descend2[1];

	          if (link != null) {
	            _this3.linkRange = new _selection.Range(range.index - offsetlink.length());
	            var preview = _link2.default.formats(link.domNode);
	            _this3.preview.textContent = preview;
	            _this3.preview.setAttribute('href'preview);
	            _this3.show();
	            _this3.position(_this3.quill.getBounds(_this3.linkRange));
	            return;
	          }
	        } else {
	          delete _this3.linkRange;
	        }
	        _this3.hide();
	      });
	    }
	  }{
	    key: 'show',
	    value: function show() {
	      _get(SnowTooltip.prototype.__proto__ || Object.getPrototypeOf(SnowTooltip.prototype)'show'this).call(this);
	      this.root.removeAttribute('data-mode');
	    }
	  }]);

	  return SnowTooltip;
	}(_base.BaseTooltip);

	SnowTooltip.TEMPLATE = ['<a class="ql-preview" target="_blank" href="about:blank"></a>''<input type="text" data-formula="e=mc^2" data-link="quilljs.com" data-video="Embed URL">''<a class="ql-action"></a>''<a class="ql-remove"></a>'].join('');

	exports.default = SnowTheme;

/***/ }
/******/ ])
});
;