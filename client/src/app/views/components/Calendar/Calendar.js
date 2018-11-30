import React from 'react';
import moment from 'moment';
 import events from './Events';
import BigCalendar from 'react-big-calendar';
import "./Calendar.css";
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('en-GB');
const localizer = BigCalendar.momentLocalizer(moment);

const allViews = Object
  .keys(BigCalendar.Views)
  .map(k => BigCalendar.Views[k])

const calStyle = {
  width:"550px",
  height: "400px",
  fontColor:"white"
}

const Calendar = () => (
  <div>
    <BigCalendar
      localizer = {localizer}
      events={events}
      step={60}
      views={allViews}
      style = {calStyle}
      defaultDate={new Date("November 5, 2018")}
    />
  </div>
);

 
export default Calendar;