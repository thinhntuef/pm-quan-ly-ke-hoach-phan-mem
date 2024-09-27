'use client';
import Popover from '@/components/softwaretimeline/Popover'; // Import component
import { Modal, Tooltip, OverlayTrigger } from 'react-bootstrap';
import React, { useState } from 'react';
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

const isOverlapping = (event1: EventProps, event2: EventProps): boolean => {
    const event1Start = new Date(event1.start.split("/").reverse().join("-"));
    const event1End = new Date(event1.end.split("/").reverse().join("-"));
    const event2Start = new Date(event2.start.split("/").reverse().join("-"));
    const event2End = new Date(event2.end.split("/").reverse().join("-"));

    return event1Start < event2End && event1End >= event2Start;
};

const getDaysBetween = (endDate: Date, startDate: Date): number =>
    Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));

const groupEvents = (events: EventProps[]): EventProps[][] => {
    const uniqueEvents = Array.from(new Map(events.map(event => [event.id, event])).values());
    const sortedEvents = uniqueEvents.sort((a, b) => {
        const dateA = new Date(a.start.split("/").reverse().join("-"));
        const dateB = new Date(b.start.split("/").reverse().join("-"));
        return dateA.getTime() - dateB.getTime();
    });

    const groups: EventProps[][] = [];

    for (const event of sortedEvents) {
        let placed = false;

        for (const group of groups) {
            if (group.every((e) => !isOverlapping(e, event))) {
                group.push(event);
                placed = true;
                break;
            }
        }

        if (!placed) {
            groups.push([event]);
        }
    }

    return groups;
};

const eventColors = ["success", "danger", "warning", "info", "primary"];

const TimelineLeftcolGroup: React.FC<{ events: EventProps[], startDate: Date }> = ({ events, startDate }) => {
    let colorIndex = 0;
    const getNextColor = () => {
        const color = eventColors[colorIndex];
        colorIndex = (colorIndex + 1) % eventColors.length;
        return color;
    };

    const groups = groupEvents(events);
    const [popover, setPopover] = useState<JSX.Element | null>(null);
    const [popoverPosition, setPopoverPosition] = useState<{ x: number; y: number } | null>(null);
    const [showModal, setShowModal] = useState(false); // Modal state
    const [selectedEvent, setSelectedEvent] = useState<EventProps | null>(null); // State for the selected event

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, eventData: EventProps) => {
        const { clientX: x, clientY: y } = event;
        setPopoverPosition({ x, y });
        console.log(popoverPosition);
        setPopover(<Popover event={eventData} position={{ x, y }} />);
        const eventDiv = event.currentTarget;
        const leftCol = document.getElementById('leftCol') as HTMLDivElement;
        const groups = leftCol.children;
        for (let groupIndex = 0; groupIndex < groups.length; groupIndex++) {
            const group = groups[groupIndex] as HTMLDivElement;
            const events = group.children;
            for (let eventIndex = 0; eventIndex < events.length; eventIndex++) {
                const event = events[eventIndex] as HTMLDivElement;
                if (event.id !== eventDiv.id) {
                    event.classList.add('opacity-25');
                }
            }
        }
        const backDropEvent = document.getElementById('backdropevent') as HTMLDivElement;
        backDropEvent.style.top = `${eventDiv.style.top}`;
        backDropEvent.style.height = `${eventDiv.style.height}`;
    };

    const handleMouseLeave = () => {
        setPopover(null);

        const leftCol = document.getElementById('leftCol') as HTMLDivElement;
        const groups = leftCol.children;
        for (let groupIndex = 0; groupIndex < groups.length; groupIndex++) {
            const group = groups[groupIndex] as HTMLDivElement;
            const events = group.children;
            for (let eventIndex = 0; eventIndex < events.length; eventIndex++) {
                const event = events[eventIndex] as HTMLDivElement;
                event.classList.remove('opacity-25');
            }
        }
        const backDropEvent = document.getElementById('backdropevent') as HTMLDivElement;
        backDropEvent.style.height = '0';
    };

    const handleClick = (eventData: EventProps) => {
        setSelectedEvent(eventData); // Set selected event data
        setShowModal(true); // Show modal
    };

    const avatarList = (string: string) => {
        if (string === "") {
            return "";
        }
        const arr = string.split(/,|;/);
        return arr.map((name, index) => (
            <OverlayTrigger
                key={index}
                placement="top"
                overlay={<Tooltip id={`tooltip-${index}`}>{name}</Tooltip>}
            >
                <div className="avatar pull-up">
                    <span className="avatar-initial rounded-circle bg-label-primary">{(name.match(/\b\w/g) || []).shift()?.toUpperCase()}</span>
                </div>
            </OverlayTrigger>
        ));
    };

    const result: JSX.Element[] = [];

    for (let groupIndex = 0; groupIndex < groups.length; groupIndex++) {
        const group = groups[groupIndex];
        const groupDivs: JSX.Element[] = [];

        for (let eventIndex = 0; eventIndex < group.length; eventIndex++) {
            const event = group[eventIndex];
            groupDivs.push(
                <div
                    className={`rounded btn-${getNextColor()}`}
                    id={`event-${event.id}`}
                    key={event.id}
                    style={{
                        top: `${getDaysBetween(new Date(event.start.split("/").reverse().join("-")), startDate)}rem`,
                        height: `${getDaysBetween(new Date(event.end.split("/").reverse().join("-")), new Date(event.start.split("/").reverse().join("-"))) + 1}rem`
                    }}
                    event-id={event.id}
                    onMouseEnter={(e) => handleMouseEnter(e, event)}
                    onMouseMove={(e) => handleMouseEnter(e, event)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(event)}
                ></div>
            );
        }

        result.push(
            <div className={`group-${groupIndex} d-flex flex-column`} key={groupIndex}>
                {groupDivs}
            </div>
        );
    }

    return (
        <>
            {result}
            {popover && (
                <div className='popover' style={{ position: 'absolute', zIndex: 9999 }}>
                    {popover}
                </div>
            )}

            {/* React-Bootstrap Modal for event details */}
            {selectedEvent && (
                <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Chi tiết sự kiện</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text-center">
                            <h4 className="mb-2">{selectedEvent.event}</h4>
                            <p className="mb-6">Từ {selectedEvent.start} đến {selectedEvent.end}</p>
                        </div>
                        <div className="row mb-4 g-3">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="avatar flex-shrink-0 me-3">
                                        <span className="avatar-initial rounded bg-label-primary">
                                            <i className="bx bx-time"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <h6 className="mb-0 text-nowrap">{selectedEvent.start}</h6>
                                        <small>Bắt đầu</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    <div className="avatar flex-shrink-0 me-3">
                                        <span className="avatar-initial rounded bg-label-primary">
                                            <i className="bx bx-time-five"></i>
                                        </span>
                                    </div>
                                    <div>
                                        <h6 className="mb-0 text-nowrap">{selectedEvent.end}</h6>
                                        <small>Kết thúc</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-4 g-3">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    {avatarList(selectedEvent.organization)}
                                    <div>
                                        <h6 className="mb-0 text-nowrap">{selectedEvent.organization}</h6>
                                        <small>Đơn vị tổ chức</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    {avatarList(selectedEvent.participant)}
                                    <small>Đơn vị phối hợp</small>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            )}
        </>
    );
};

export default TimelineLeftcolGroup;
