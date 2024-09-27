import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
interface PopoverProps {
    event: {
        id: string;
        event: string;
        start: string;
        end?: string;
    };
    position: { x: number; y: number };
}

const Popover: React.FC<PopoverProps> = ({ event, position }) => {
    const popoverRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const updatePosition = () => {
            if (popoverRef.current) {
                const popoverWidth = popoverRef.current.offsetWidth;
                const popoverHeight = popoverRef.current.offsetHeight;

                // Calculate the initial position of the popover relative to the viewport
                let top = position.y + 10 + window.scrollY || 0; // Move Popover down 10px
                let left = position.x + 10 + window.scrollX || 0; // Move Popover right 10px

                // Adjust position if Popover exceeds bottom edge of the viewport
                if (top + popoverHeight > window.innerHeight + window.scrollY || 0) {
                    top = position.y - popoverHeight - 10 + window.scrollY || 0; // Move Popover up
                }

                // Adjust position if Popover exceeds right edge of the viewport
                if (left + popoverWidth > window.innerWidth + window.scrollX || 0) {
                    left = position.x - popoverWidth - 10 + window.scrollX || 0; // Move Popover left
                }

                // Set the new position of the Popover
                popoverRef.current.style.top = `${top}px`;
                popoverRef.current.style.left = `${left}px`;
            }
        };

        updatePosition();

        // Update position on window resize and scroll
        window.addEventListener('resize', updatePosition);
        window.addEventListener('scroll', updatePosition);

        return () => {
            window.removeEventListener('resize', updatePosition);
            window.removeEventListener('scroll', updatePosition);
        };
    }, [position]);

    return createPortal(
        <div
            ref={popoverRef}
            className="bs-popover-auto fade popover show"
            style={{ position: 'absolute', zIndex: 9999 }}
            role="tooltip"
        >
            <div className="popover-arrow" style={{ position: 'absolute', transform: 'translate(0,0)', top: '0' }}></div>
            <h3 className="popover-header">{event.event}</h3>
            <div className="popover-body">
                <div className="d-flex gap-3 justify-content-between">
                    <div className="d-flex">
                        <div className="avatar me-2">
                            <span className="avatar-initial rounded-2 bg-label-primary">
                                <i className="bx bx-time text-primary"></i>
                            </span>
                        </div>
                        <div className="d-flex flex-column">
                            <small>{event.start}</small>
                            <h6 className="mb-0">Bắt đầu</h6>
                        </div>
                    </div>
                    {event.end && (
                        <div className="d-flex">
                            <div className="avatar me-2">
                                <span className="avatar-initial rounded-2 bg-label-info">
                                    <i className="bx bx-time-five text-info"></i>
                                </span>
                            </div>
                            <div className="d-flex flex-column">
                                <small>{event.end}</small>
                                <h6 className="mb-0">Kết thúc</h6>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>,
        document.body // Render into the body
    );
};

export default Popover;
