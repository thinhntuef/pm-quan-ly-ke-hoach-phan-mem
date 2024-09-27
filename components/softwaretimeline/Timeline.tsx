import React, { useState, useEffect } from 'react';
import TimelineMidcolItem from '@/components/softwaretimeline/TimelineMidcolItem'; // Import component
import TimelineLeftcolGroup from '@/components/softwaretimeline/TimelineLeftcolGroup'; // Import component
import TimelineLeftcolGroupLabel from '@/components/softwaretimeline/TimelineLeftcolGroupLabel'; // Import component
import TimelineRightcolGroupLabel from '@/components/softwaretimeline/TimelineRightcolGroupLabel'; // Import component

// Event interface for the event props
interface EventProps {
  id: string;
  type: string;
  event: string;
  start: string;
  end: string;
  organization: string;
  participant: string;
  schoolYear: number;
  details: string;
}

// Props for school year
interface SchoolYearProps {
  schoolYear: number;
}


// Function to calculate the number of days between two dates
const countDaysBetween = (endDate: Date, startDate: Date): number =>
  Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

// Component to display all days in the school year
const MidcolumnItem: React.FC<SchoolYearProps> = ({ schoolYear }) => {
  const startDate = new Date(schoolYear, 8, 1); // Start date (September 1)
  const endDate = new Date(schoolYear + 1, 7, 31); // End date (August 31 next year)

  const daysInYear = countDaysBetween(endDate, startDate); // Calculate number of days
  const MidGroup: JSX.Element[] = [];

  // Generate and render each day in the year
  for (let i = 0; i < daysInYear; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i); // Increment day by day
    MidGroup.push(<TimelineMidcolItem key={i} yearday={date} />); // Render each day
  }

  return <>{MidGroup}</>;
};

// Main Timeline component
const Timeline: React.FC<SchoolYearProps> = ({ schoolYear }) => {
  const [events, setEvents] = useState<EventProps[]>([]);
  const [ITevents, setITevents] = useState<EventProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api-annual.uef.edu.vn/api/softwares');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEvents(data.items.filter((ev: EventProps) => !ev.type.length));
        setITevents(data.items.filter((ev: EventProps) => ev.type.length > 0));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);
  
  const startDate: Date = new Date(schoolYear, 8, 1); // Start of school year

  return (
    <div className="w-100" id="softwaretimeline">
      <div className="w-100 height-fullyear" id="dayrowlayer">
        <div className="w-100 bg-label-secondary d-flex opacity-50 rounded" id="backdropevent"></div>
        <div className="d-flex opacity-50 rounded mt-n2" id="dayrowattention" style={{ top: `${countDaysBetween(new Date(), startDate)}rem` }}></div>
      </div>

      {/* Timeline structure */}
      <div className="card-img-overlay d-flex height-fullyear">
        <div className="height-fullyear d-flex me-3 flex-column w-px-100" id="leftColLabel">
          <TimelineLeftcolGroupLabel events={events} startDate={startDate} />
        </div>
        <div className="height-fullyear d-flex" id="leftCol">
          <TimelineLeftcolGroup events={events} startDate={startDate} />
        </div>
        <div className="height-fullyear d-flex flex-column" id="midCol">
          <MidcolumnItem schoolYear={schoolYear} />
        </div>
        <div className="height-fullyear d-flex" id="rightCol">
          <TimelineLeftcolGroup events={ITevents} startDate={startDate} />
        </div>
        <div className="height-fullyear d-flex ms-3 w-auto" id="rightColLabel">
          <TimelineRightcolGroupLabel events={ITevents} startDate={startDate} />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
