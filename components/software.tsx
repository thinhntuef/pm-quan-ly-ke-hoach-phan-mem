'use client';
import React, { useEffect } from "react";
import $ from "jquery";

type EventProps = {
  id: string;
  type: string;
  event: string;
  start: string;
  end: string;
  organization: string;
  participant: string;
  schoolYear: number;
  details: string;
};

const TaskingComponent: React.FC<{ events: EventProps[], ITevents: EventProps[] }> = ({ events, ITevents }) => {
  const taskingYear = 2024;
  const startDate = new Date(taskingYear, 8, 1);
  const endDate = new Date(taskingYear + 1, 7, 31);
  const timeline = $("#timeline");

  const countDaysBetween = (endDate: Date, startDate: Date) =>    
    Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  useEffect(() => {
    const dayrowlayer = $('<div class="w-100" id="dayrowlayer"><div class="w-100 bg-label-secondary d-flex opacity-50 rounded" id="backdropevent" style="position: absolute; transition: opacity 0.5s ease-in-out 0.5s, top 0.5s ease, height 0.5s ease;"></div></div>');
    const dayrowattention = $(`<div id="dayrowattention" class=" d-flex opacity-50 rounded mt-n2" style="position: absolute;width:95%; height:1.2rem; top:${countDaysBetween(new Date(), startDate)}rem;background: linear-gradient(to right, rgba(var(--bs-primary-rgb), 0.5), rgba(var(--bs-primary-rgb), 0));"></div>`);
    const yearday = countDaysBetween(endDate, startDate);

    dayrowlayer.css({ height: `${yearday}rem` });

    timeline.append(dayrowlayer.append(dayrowattention));
   

  }, [events, ITevents, timeline, startDate, endDate]);

  return (
    <div id="timeline"></div>
  );
};

export default TaskingComponent;
