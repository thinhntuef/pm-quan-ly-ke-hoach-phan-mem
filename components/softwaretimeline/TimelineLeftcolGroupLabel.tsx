import React from 'react';

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

const getDaysBetween = (endDate: Date, startDate: Date): number =>
    Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

// Group events by start date
const groupEvents = (events: EventProps[]): { [key: string]: EventProps[] } => {
    const groupMap: { [key: string]: EventProps[] } = {};

    events.forEach((event) => {
        const startDateKey = event.start.split("/").reverse().join("-"); // Ensure proper date formatting
        if (!groupMap[startDateKey]) {
            groupMap[startDateKey] = [];
        }

        groupMap[startDateKey].push(event);
    });

    return groupMap;
};

const TimelineLeftcolGroupLabel: React.FC<{ events: EventProps[], startDate: Date }> = ({ events, startDate }) => {
    const groups = groupEvents(events);

    const result: JSX.Element[] = [];

    Object.keys(groups).forEach((groupKey, groupIndex) => {
        const group = groups[groupKey];
        const groupDivs: JSX.Element[] = [];

        group.forEach((event) => {
            groupDivs.push(
                <span key={event.id} className="rounded bg-label-secondary text-wrap p-1 mb-1">
                    {event.event}
                </span>
            );
        });

        result.push(
            <div
                className={`group-${groupIndex} d-flex flex-column w-px-100`}
                key={groupIndex}
                style={{
                    top: `${getDaysBetween(new Date(groupKey), startDate)}rem`,
                    position: "absolute",
                }}
            >
                {groupDivs}
            </div>
        );
    });

    return <>{result}</>;
};

export default TimelineLeftcolGroupLabel;
