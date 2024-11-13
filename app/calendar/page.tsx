const CalendarApp = () => {
    return (
        <div className="container-xxl flex-grow-1 container-p-y">
            <div className="card app-calendar-wrapper">
                <div className="row g-0">
                    <div className="col app-calendar-sidebar border-end" id="app-calendar-sidebar">
                        <div className="border-bottom p-6 my-sm-0 mb-4">
                            <button
                                type="button"
                                className="btn btn-primary btn-toggle-sidebar w-100"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#addEventSidebar"
                                aria-controls="addEventSidebar"
                            >
                                <i className="bx bx-plus bx-16px me-2"></i>
                                <span className="align-middle">Add Event</span>
                            </button>
                        </div>
                        <div className="px-3 pt-2">
                            <div className="inline-calendar"></div>
                        </div>
                        <hr className="mb-6 mx-n4 mt-3" />
                        <div className="px-6 pb-2">
                            <div>
                                <h5>Event Filters</h5>
                            </div>

                            <div className="form-check form-check-secondary mb-5 ms-2">
                                <input
                                    className="form-check-input select-all"
                                    type="checkbox"
                                    id="selectAll"
                                    data-value="all"
                                    defaultChecked
                                />
                                <label className="form-check-label" htmlFor="selectAll">
                                    View All
                                </label>
                            </div>

                            <div className="app-calendar-events-filter text-heading">
                                <div className="form-check form-check-danger mb-5 ms-2">
                                    <input
                                        className="form-check-input input-filter"
                                        type="checkbox"
                                        id="select-personal"
                                        data-value="personal"
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="select-personal">
                                        Personal
                                    </label>
                                </div>
                                <div className="form-check mb-5 ms-2">
                                    <input
                                        className="form-check-input input-filter"
                                        type="checkbox"
                                        id="select-business"
                                        data-value="business"
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="select-business">
                                        Business
                                    </label>
                                </div>
                                <div className="form-check form-check-warning mb-5 ms-2">
                                    <input
                                        className="form-check-input input-filter"
                                        type="checkbox"
                                        id="select-family"
                                        data-value="family"
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="select-family">
                                        Family
                                    </label>
                                </div>
                                <div className="form-check form-check-success mb-5 ms-2">
                                    <input
                                        className="form-check-input input-filter"
                                        type="checkbox"
                                        id="select-holiday"
                                        data-value="holiday"
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="select-holiday">
                                        Holiday
                                    </label>
                                </div>
                                <div className="form-check form-check-info ms-2">
                                    <input
                                        className="form-check-input input-filter"
                                        type="checkbox"
                                        id="select-etc"
                                        data-value="etc"
                                        defaultChecked
                                    />
                                    <label className="form-check-label" htmlFor="select-etc">
                                        ETC
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col app-calendar-content">
                        <div className="card shadow-none border-0">
                            <div className="card-body pb-0">
                                <div id="calendar"></div>
                            </div>
                        </div>
                        <div className="app-overlay"></div>
                        <div
                            className="offcanvas offcanvas-end event-sidebar"
                            tabIndex={-1}
                            id="addEventSidebar"
                            aria-labelledby="addEventSidebarLabel"
                        >
                            <div className="offcanvas-header border-bottom">
                                <h5 className="offcanvas-title" id="addEventSidebarLabel">
                                    Add Event
                                </h5>
                                <button
                                    type="button"
                                    className="btn-close text-reset"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                ></button>
                            </div>
                            <div className="offcanvas-body">
                                <form className="event-form pt-0" id="eventForm">
                                    <div className="mb-6">
                                        <label className="form-label" htmlFor="eventTitle">
                                            Title
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="eventTitle"
                                            name="eventTitle"
                                            placeholder="Event Title"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="form-label" htmlFor="eventLabel">
                                            Label
                                        </label>
                                        <select
                                            className="select2 select-event-label form-select"
                                            id="eventLabel"
                                            name="eventLabel"
                                        >
                                            <option data-label="primary" value="Business" selected>
                                                Business
                                            </option>
                                            <option data-label="danger" value="Personal">
                                                Personal
                                            </option>
                                            <option data-label="warning" value="Family">
                                                Family
                                            </option>
                                            <option data-label="success" value="Holiday">
                                                Holiday
                                            </option>
                                            <option data-label="info" value="ETC">
                                                ETC
                                            </option>
                                        </select>
                                    </div>
                                    <div className="mb-6">
                                        <label className="form-label" htmlFor="eventStartDate">
                                            Start Date
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="eventStartDate"
                                            name="eventStartDate"
                                            placeholder="Start Date"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="form-label" htmlFor="eventEndDate">
                                            End Date
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="eventEndDate"
                                            name="eventEndDate"
                                            placeholder="End Date"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <div className="form-check form-switch">
                                            <input
                                                type="checkbox"
                                                className="form-check-input allDay-switch"
                                                id="allDaySwitch"
                                            />
                                            <label className="form-check-label" htmlFor="allDaySwitch">
                                                All Day
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-6">
                                        <label className="form-label" htmlFor="eventURL">
                                            Event URL
                                        </label>
                                        <input
                                            type="url"
                                            className="form-control"
                                            id="eventURL"
                                            name="eventURL"
                                            placeholder="https://www.google.com"
                                        />
                                    </div>
                                    <div className="mb-4 select2-primary">
                                        <label className="form-label" htmlFor="eventGuests">
                                            Add Guests
                                        </label>
                                        <select
                                            className="select2 select-event-guests form-select"
                                            id="eventGuests"
                                            name="eventGuests"
                                            multiple
                                        >
                                            <option data-avatar="1.png" value="Jane Foster">
                                                Jane Foster
                                            </option>
                                            <option data-avatar="3.png" value="Donna Frank">
                                                Donna Frank
                                            </option>
                                            <option data-avatar="5.png" value="Gabrielle Robertson">
                                                Gabrielle Robertson
                                            </option>
                                            <option data-avatar="7.png" value="Lori Spears">
                                                Lori Spears
                                            </option>
                                            <option data-avatar="9.png" value="Sandy Vega">
                                                Sandy Vega
                                            </option>
                                            <option data-avatar="11.png" value="Cheryl May">
                                                Cheryl May
                                            </option>
                                        </select>
                                    </div>
                                    <div className="mb-6">
                                        <label className="form-label" htmlFor="eventLocation">
                                            Location
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="eventLocation"
                                            name="eventLocation"
                                            placeholder="Enter Location"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="form-label" htmlFor="eventDescription">
                                            Description
                                        </label>
                                        <textarea
                                            className="form-control"
                                            name="eventDescription"
                                            id="eventDescription"
                                        ></textarea>
                                    </div>
                                    <div className="d-flex justify-content-sm-between justify-content-start mt-6 gap-2">
                                        <div className="d-flex">
                                            <button type="submit" id="addEventBtn" className="btn btn-primary btn-add-event me-4">
                                                Add
                                            </button>
                                            <button
                                                type="reset"
                                                className="btn btn-label-secondary btn-cancel me-sm-0 me-1"
                                                data-bs-dismiss="offcanvas"
                                            >
                                                Cancel
                                            </button>
                                            <button type="button" className="btn btn-label-danger btn-delete-event d-none">Delete</button>
                                            <button className="btn btn-label-danger btn-delete-event d-none">Delete</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarApp;
