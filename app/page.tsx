'use client';

import Timeline from '@/components/softwaretimeline/Timeline';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function Home() {
  // State for form fields
  const [type, setType] = useState('');
  const [event, setEvent] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [organization, setOrganization] = useState('');
  const [participant, setParticipant] = useState('');
  const [schoolYear, setSchoolYear] = useState<number>(0);
  const [details, setDetails] = useState('');

  // State for modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to handle form submission
  const handleSubmit = async () => {
    const payload = {
      type,
      event,
      start,
      end,
      organization,
      participant,
      schoolYear,
      details,
    };

    try {
      const response = await fetch('https://api-annual.uef.edu.vn/api/softwares', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log('Data submitted successfully');
        // Đóng modal sau khi dữ liệu được gửi thành công
        setShowModal(false);
      } else {
        console.error('Error submitting data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <div className="card shadow-none bg-transparent">
        <div className="card-body">
          <Timeline schoolYear={2024} />
        </div>
      </div>
      <div className='btn-toolbar d-flex position-fixed top-0 end-0 h-100'>
        <div className="btn-group position-absolute end-0 mt-2 me-2">
          <button type="button" className="btn btn-sm btn-outline-primary">Sửa</button>
          <button type="button" className="btn btn-sm btn-outline-primary">Xóa</button>
          <button type="button"
            className='btn btn-sm btn-outline-primary'
            onClick={() => setShowModal(true)}
          >
            Thêm
          </button>
        </div>
      </div>


      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Thêm công tác</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Form fields */}
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="type" className="form-label">Loại (để trống là cột công tác cấp trường)</label>
              <input
                type="text"
                id="type"
                className="form-control"
                value={type}
                onChange={(e) => setType(e.target.value)}
                placeholder="Loại (option)"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <label htmlFor="event" className="form-label">Tên công tác</label>
              <input
                type="text"
                id="event"
                className="form-control"
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                placeholder="Nhập tên"
              />
            </div>
          </div>
          <div className="row g-2">
            <div className="col mb-0">
              <label htmlFor="start" className="form-label">Ngày bắt đầu</label>
              <input
                type="text"
                id="start"
                className="form-control"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                placeholder="dd/mm/yyyy"
              />
            </div>
            <div className="col mb-0">
              <label htmlFor="end" className="form-label">Ngày kết thúc</label>
              <input
                type="text"
                id="end"
                className="form-control"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                placeholder="dd/mm/yyyy"
              />
            </div>
          </div>
          <div className="row g-2 mt-3">
            <div className="col mb-0">
              <label htmlFor="organization" className="form-label">Đơn vị tổ chức</label>
              <input
                type="text"
                id="organization"
                className="form-control"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder="ĐV tổ chức"
              />
            </div>
            <div className="col mb-0">
              <label htmlFor="participant" className="form-label">Đơn vị phối hợp</label>
              <input
                type="text"
                id="participant"
                className="form-control"
                value={participant}
                onChange={(e) => setParticipant(e.target.value)}
                placeholder="ĐV phối hợp"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col mb-3">
              <label htmlFor="schoolYear" className="form-label">Năm học</label>
              <input
                type="number"
                id="schoolYear"
                className="form-control"
                value={schoolYear}
                onChange={(e) => setSchoolYear(Number(e.target.value))}
                placeholder="Nhập năm học"
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col mb-3">
              <label htmlFor="details" className="form-label">Mô tả</label>
              <input
                type="text"
                id="details"
                className="form-control"
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="mô tả nếu có"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Hủy
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
