// Generated by dts-bundle v0.7.3-fork.1
// Dependencies for this module:
//   ../../../../../moment
//   ../../../../../@fullcalendar/core

declare module '@fullcalendar/moment' {
    import * as momentNs from 'moment';
    import { CalendarDuration } from '@fullcalendar/core';
    export function toMoment(date: Datecalendar: Calendar): momentNs.Moment;
    export function toDuration(fcDuration: Duration): momentNs.Duration;
    const _default: import("@fullcalendar/core").PluginDef;
    export default _default;
}

