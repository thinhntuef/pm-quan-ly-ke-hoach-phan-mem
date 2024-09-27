import React from 'react';

// Interface for yearday prop
interface YeardayProps {
  yearday: Date;
}

export default function TimelineMidcolItem({ yearday }: YeardayProps) {
  const day = String(yearday.getDate()).padStart(2, "0");
  const month = String(yearday.getMonth() + 1).padStart(2, "0");
  const year = yearday.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  return (
    <div className="text-center p-0" day-row={formattedDate} key={formattedDate}>
      <span
        className={`rounded-pill ${day === '01' 
          ? 'bg-primary text-white' 
          : (yearday.getDay() === 0 || yearday.getDay() === 6) 
          ? 'bg-label-secondary text-white' 
          : ''} px-2`}
      >
        {yearday.getDay() !== 0 && yearday.getDay() !== 6 ? day : `${day}/${month}`}
      </span>
    </div>
  );
}
