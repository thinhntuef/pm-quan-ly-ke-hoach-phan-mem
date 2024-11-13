import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'; // Import Modal, Button, and Form from react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

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
    Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;

// Group events by start date
const groupEvents = (events: EventProps[]): { [key: string]: EventProps[] } => {
    const groupMap: { [key: string]: EventProps[] } = {};

    for (const event of events) {
        if (!groupMap[event.start]) {
            groupMap[event.start] = [];
        }

        groupMap[event.start].push(event);
    }
    const sortedGroupMap: { [key: string]: EventProps[] } = {};
    Object.keys(groupMap)
        .sort((a, b) => new Date(a.split("/").reverse().join("-")).getTime() - new Date(b.split("/").reverse().join("-")).getTime()) // Sắp xếp key theo ngày
        .forEach(key => {
            sortedGroupMap[key] = groupMap[key];
        });

    return sortedGroupMap;
};

const TimelineRightcolGroupLabel: React.FC<{ events: EventProps[], startDate: Date }> = ({ events, startDate }) => {
    const [selectedEvent, setSelectedEvent] = useState<EventProps | null>(null);
    const [showModal, setShowModal] = useState(false);
    const [updatedEvent, setUpdatedEvent] = useState<EventProps | null>(null);

    const groups = groupEvents(events);
    const handleCardClick = (event: EventProps) => {
        setSelectedEvent(event);
        setUpdatedEvent({ ...event });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedEvent(null);
        setUpdatedEvent(null);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (updatedEvent) {
            setUpdatedEvent({
                ...updatedEvent,
                [e.target.id]: e.target.value,
            });
        }
    };

    const handleSubmit = async () => {
        if (updatedEvent) {
            console.log('Updating event:', updatedEvent);
            try {
                const response = await fetch(`https://api-annual.uef.edu.vn/api/softwares?id=${updatedEvent.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        type: updatedEvent.type || '',
                        event: updatedEvent.event || '',
                        start: updatedEvent.start || '',
                        end: updatedEvent.end || '',
                        organization: updatedEvent.organization || '',
                        participant: updatedEvent.participant || '',
                        schoolYear: updatedEvent.schoolYear || 0,
                        details: updatedEvent.details || '',
                    }),
                });

                if (response.ok) {
                    alert('Cập nhật thành công');
                    handleCloseModal();
                    //tải lại rightcol
                    window.location.reload();
                } else {
                    alert('Cập nhật thất bại');
                }
            } catch (error) {
                console.error('Error updating event:', error);
                alert('Cập nhật thất bại');
            }
        }
    };
    const eventColors = ["success", "danger", "warning", "info", "primary"];
    let colorIndex = 0;
    const getNextColor = () => {
        const color = eventColors[colorIndex];
        colorIndex = (colorIndex + 1) % eventColors.length;
        return color;
    };
    const result: JSX.Element[] = [];

    // //disctinct event type
    // // Đảm bảo kiểu dữ liệu của EventProps cho event
    // const eventTypes: string[] = events.map((event: EventProps) => event.type);

    // // Sử dụng Set để loại bỏ các giá trị trùng lặp
    // const distinctEventTypes: string[] = Array.from(new Set(eventTypes));


    // const sortedGroupKeys = Object.keys(groups).sort(
    //     (a, b) => new Date(a.split("/").reverse().join("-")).getTime() - new Date(b.split("/").reverse().join("-")).getTime()
    // );
    Object.keys(groups).forEach((groupKey, groupIndex) => {
        const group = groups[groupKey];
        const groupDivs: JSX.Element[] = [];

        group.forEach((event) => {
            groupDivs.push(
                <div
                    data-event-type={event.type}
                    className="card border w-px-250 ms-2 mb-2"
                    key={event.id}
                    onClick={() => handleCardClick(event)}
                >
                    <div className={`d-flex gap-2 justify-content-end mt-n2 border event-type-${event.type} rounded bg-${event.type.length > 1 ? 'label-' + getNextColor() : 'white'}`}>
                        <span className="mt-n1 small text-primary"><i className="bx bx-time text-primary"></i> {event.start}</span>
                        <span className="mt-n1 small text-info"><i className="bx bx-time-five text-info"></i> {event.end}</span>
                    </div>
                    <div className="card-body p-0 pb-1">
                        <p className="mb-0 small" style={{ fontSize: '.8rem', lineHeight: '1' }}>{event.event}</p>
                    </div>
                </div>
            );
        });

        // Xác định vị trí `top` ban đầu của `row` hiện tại
        const groupPosition = getDaysBetween(new Date(groupKey.split("/").reverse().join("-")), startDate);
    
        result.push(
            <div
                className="row"
                key={groupIndex}
                style={{
                    top: `${groupPosition}rem`,
                    position: "absolute",
                }}
            >{groupDivs}
            </div>
        );
    });

    return (
        <>
            {result}
            {selectedEvent && (
                <Modal show={showModal} onHide={handleCloseModal} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Chỉnh Sửa Sự Kiện</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Loại (để trống là cột công tác cấp trường)</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="type"
                                    value={updatedEvent?.type || ''}
                                    onChange={handleInputChange}
                                    placeholder="Loại (option)"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Tên Sự Kiện</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="event"
                                    value={updatedEvent?.event || ''}
                                    onChange={handleInputChange}
                                    placeholder="Nhập tên"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Ngày Bắt Đầu</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="start"
                                    value={updatedEvent?.start || ''}
                                    onChange={handleInputChange}
                                    placeholder="dd/mm/yyyy"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Ngày Kết Thúc</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="end"
                                    value={updatedEvent?.end || ''}
                                    onChange={handleInputChange}
                                    placeholder="dd/mm/yyyy"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Đơn Vị Tổ Chức</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="organization"
                                    value={updatedEvent?.organization || ''}
                                    onChange={handleInputChange}
                                    placeholder="ĐV tổ chức"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Đơn Vị Phối Hợp</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="participant"
                                    value={updatedEvent?.participant || ''}
                                    onChange={handleInputChange}
                                    placeholder="ĐV phối hợp"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Năm Học</Form.Label>
                                <Form.Control
                                    type="number"
                                    id="schoolYear"
                                    value={updatedEvent?.schoolYear || 0}
                                    onChange={handleInputChange}
                                    placeholder="Nhập năm học"
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Mô Tả</Form.Label>
                                <Form.Control
                                    type="text"
                                    id="details"
                                    value={updatedEvent?.details || ''}
                                    onChange={handleInputChange}
                                    placeholder="Mô tả nếu có"
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseModal}>
                            Hủy
                        </Button>
                        <Button variant="primary" onClick={handleSubmit}>
                            Lưu
                        </Button>
                    </Modal.Footer>
                </Modal>
            )}
        </>
    );
};

export default TimelineRightcolGroupLabel;
