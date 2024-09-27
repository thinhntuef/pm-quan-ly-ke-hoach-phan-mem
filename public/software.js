let hideoffcanvasTimeout;
const events = [
    {type:null, id: "e3", start: "04/11/2024", end: "10/11/2024", event: "Thi học kỳ 1A", organization:  "Đào tạo", participant:  "TT.IT" , schoolyer: 2024,details:"",details:"" ,details:"" },
    {type:null, id: "e4", start: "13/01/2025", end: "19/01/2025", event: "Thi học kỳ 1B", organization:  "Đào tạo", participant:  "TT.IT", schoolyer: 2024,details:"",details:"" ,details:"" },
    {type:null, id: "e5", start: "14/04/2025", end: "20/04/2025", event: "Thi học kỳ 2A", organization:  "Đào tạo", participant:  "TT.IT", schoolyer: 2024,details:"",details:"" ,details:"" },
    {type:null, id: "e6", start: "07/07/2025", end: "13/07/2025", event: "Thi học kỳ 2B", organization:  "Đào tạo", participant:  "TT.IT", schoolyer: 2024,details:"",details:"" ,details:"" },
    {type:null, id: "e7", start: "18/08/2025", end: "24/08/2025", event: "Thi học kỳ 3", organization:  "Đào tạo", participant:  "TT.IT", schoolyer: 2024,details:"",details:"" ,details:"" },
    {type:null, id: "e4", start: "13/01/2025", end: "19/01/2025", event: "Thi học kỳ 1B", organization:  "Đào tạo", participant:  "TT.IT", schoolyer: 2024,details:"" },
    {type:null, id: "e5", start: "14/04/2025", end: "20/04/2025", event: "Thi học kỳ 2A", organization:  "Đào tạo", participant:  "TT.IT", schoolyer: 2024,details:"" },
    {type:null, id: "e6", start: "07/07/2025", end: "13/07/2025", event: "Thi học kỳ 2B", organization:  "Đào tạo", participant:  "TT.IT", schoolyer: 2024,details:"" },
    {type:null, id: "e7", start: "18/08/2025", end: "24/08/2025", event: "Thi học kỳ 3", organization:  "Đào tạo", participant:  "TT.IT" , schoolyer: 2024,details:"" },
    {type:null, id: "e8", start: "09/09/2024", end: "15/09/2024", event: "Sinh hoạt chủ nhiệm", organization:  "Đào tạo", participant:  "TT.IT", schoolyer: 2024,details:"" },
    {type:null, id: "e9", start: "10/02/2025", end: "16/02/2025", event: "Sinh hoạt chủ nhiệm", organization:  "Đào tạo", participant:  "TT.IT", schoolyer: 2024,details:"" },
    {type:null, id: "e10", start: "16/09/2024", end: "22/09/2024", event: "Đăng ký thực tập", organization:  "Đào tạo", participant:  "TT.IT" , schoolyer: 2024,details:"" },
    {type:null, id: "e11", start: "24/02/2025", end: "02/03/2025", event: "Đăng ký thực tập", organization:  "Đào tạo", participant:  "TT.IT" , schoolyer: 2024,details:"" },
    {type:null, id: "e12", start: "01/06/2025", end: "29/06/2025", event: "Nộp chứng chỉ điều kiện đầu ra Xét tốt nghiệp", organization:  "Đào tạo", participant:  "TT.IT", schoolyer: 2024,details:"" },
    {type:null, id: "e13", start: "21/07/2025", end: "27/07/2025", event: "Xét tốt nghiệp", organization:  "Đào tạo", participant:  "TT.IT" , schoolyer: 2024,details:"" },
    {type:null, id: "e14", start: "18/08/2025", end: "24/08/2025", event: "Lễ tốt nghiệp", organization:  "Công tác sinh viên", participant:  "TT.IT" , schoolyer: 2024,details:"" },
    {type:null, id: "e15", start: "20/01/2025", end: "09/02/2025", event: "Nghỉ tết", organization:  "-", participant:  "TT.IT" , schoolyer: 2024,details:"" },
];

const ITevents = [
    {type:"-", id: "main-e1", start: "21/10/2024", end: "03/11/2024", event: "Cập nhật mẫu khảo sát SV nếu TT.BĐCL có yêu cầu", organization:  "TT.IT", participant:  "TT.BĐCL", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e2", start: "30/12/2024", end: "12/01/2025", event: "Cập nhật mẫu khảo sát SV nếu TT.BĐCL có yêu cầu", organization:  "TT.IT", participant:  "TT.BĐCL", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e3", start: "31/03/2025", end: "13/04/2025", event: "Cập nhật mẫu khảo sát SV nếu TT.BĐCL có yêu cầu", organization:  "TT.IT", participant:  "TT.BĐCL", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e4", start: "23/06/2025", end: "06/07/2025", event: "Cập nhật mẫu khảo sát SV nếu TT.BĐCL có yêu cầu", organization:  "TT.IT", participant:  "TT.BĐCL", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e5", start: "04/09/2024", end: "15/09/2024", event: "Cập nhật PM sinh hoạt lớp nếu phòng ĐT có yêu cầu", organization:  "TT.IT", participant:  "P.ĐT", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e6", start: "13/01/2025", end: "19/01/2025", event: "Cập nhật PM sinh hoạt lớp nếu phòng ĐT có yêu cầu", organization:  "TT.IT", participant:  "P.ĐT", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e7", start: "09/09/2024", end: "22/09/2024", event: "Hỗ trợ xử lý dữ liệu nếu Trung tâm hợp tác DN có yêu cầu", organization:  "TT.IT", participant:  "TT.HTDN", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e8", start: "10/02/2025", end: "02/03/2025", event: "Hỗ trợ xử lý dữ liệu nếu Trung tâm hợp tác DN có yêu cầu", organization:  "TT.IT", participant:  "TT.HTDN", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e9", start: "05/05/2025", end: "06/06/2025", event: "Rà soát, cập nhật mẫu chứng chỉ xét tốt nghiệp", organization:  "TT.IT", participant:  "P.ĐT", schoolyer: 2024,details:"" },

    // Công tác đầu học kỳ
    {type:"-", id: "main-e10", start: "04/09/2024", end: "08/09/2024", event: "Rà soát dữ liệu các PM đầu học kỳ", organization:  "TT.IT", participant:  "P.ĐT", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e11", start: "04/09/2024", end: "08/09/2024", event: "Hỗ trợ GV tài khoản đăng nhập các hệ thống", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e12", start: "11/11/2024", end: "17/11/2024", event: "Rà soát dữ liệu các PM đầu học kỳ", organization:  "TT.IT", participant:  "P.ĐT", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e13", start: "11/11/2024", end: "17/11/2024", event: "Hỗ trợ GV tài khoản đăng nhập các hệ thống", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e14", start: "10/02/2025", end: "23/02/2025", event: "Rà soát dữ liệu các PM đầu học kỳ", organization:  "TT.IT", participant:  "P.ĐT", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e15", start: "10/02/2025", end: "23/02/2025", event: "Hỗ trợ GV tài khoản đăng nhập các hệ thống", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e16", start: "05/05/2025", end: "11/05/2025", event: "Rà soát dữ liệu các PM đầu học kỳ", organization:  "TT.IT", participant:  "P.ĐT", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e17", start: "05/05/2025", end: "11/05/2025", event: "Hỗ trợ GV tài khoản đăng nhập các hệ thống", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e18", start: "14/07/2025", end: "20/07/2025", event: "Rà soát dữ liệu các PM đầu học kỳ", organization:  "TT.IT", participant:  "P.ĐT", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e19", start: "14/07/2025", end: "20/07/2025", event: "Hỗ trợ GV tài khoản đăng nhập các hệ thống", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },

    
    {type:"-", id: "main-e20", start: "02/07/2025", end: "29/08/2025", event: "Rà soát, cập nhật, hỗ trợ cập nhật Phát - thu lễ phục", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e21", start: "07/07/2025", end: "12/07/2025", event: "Rà soát, hỗ trợ cập nhật PM check-in", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e22", start: "14/07/2025", end: "20/07/2025", event: "Hỗ trợ công tác lễ tốt nghiệp", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e23", start: "02/12/2024", end: "14/12/2024", event: "Rà soát, cập nhật, hỗ trợ cập nhật Phát - thu lễ phục", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e24", start: "16/12/2024", end: "18/01/2025", event: "Rà soát, cập nhật phần mềm hỗ trợ chụp ảnh kỷ yếu", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e26", start: "02/06/2025", end: "13/06/2025", event: "Rà soát, cập nhật phần mềm ghi nhận khen thưởng sinh viên", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e27", start: "16/06/2025", end: "20/06/2025", event: "Tổng hợp các yêu cầu điều chỉnh phần mềm check-in của các đơn vị tổ chức lễ tốt nghiệp", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },
    
    {type:"-", id: "main-e25", start: "09/09/2024", end: "19/11/2024", event: "Rà soát, cập nhật phần mềm đăng ký khóa học online", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e28", start: "04/11/2024", end: "13/12/2024", event: "Rà soát, cập nhật phần mềm sinh hoạt lớp", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e29", start: "03/03/2025", end: "29/03/2025", event: "Rà soát, cập nhật phần mềm xác nhận sinh viên", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },
    {type:"-", id: "main-e30", start: "31/03/2025", end: "02/05/2025", event: "Rà soát, cập nhật phần mềm đánh giá rèn luyện", organization:  "TT.IT", participant:  "", schoolyer: 2024,details:"" },
];


$(document).ready(function () {
  const taskingYear = 2024;
  const startDate = new Date(taskingYear, 8, 1);
  const endDate = new Date(taskingYear + 1, 7, 31);
  const timeline = $("#timeline");
  const leftCol = $('<div class="d-flex" id="leftCol">');
  const midCol = $('<div class="d-flex flex-column" id="midCol">');
  const rightCol = $('<div class="d-flex" id="rightCol">');
  const rightColLabel = $('<div class="d-flex ms-3" id="rightColLabel">');
  const leftColLabel = $('<div class="d-flex me-3" id="leftColLabel">');
  const countDaysBetween = (endDate, startDate) =>
    Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
  const dayrowlayer = $(
    '<div class="w-100" id="dayrowlayer"><div class="w-100 bg-label-secondary d-flex opacity-50 rounded" id="backdropevent" style="position: absolute; transition: opacity 0.5s ease-in-out 0.5s, top 0.5s ease, height 0.5s ease;"></div>'
  );
  const dayrowattention = $(
    `<div id="dayrowattention" class=" d-flex opacity-50 rounded mt-n2" style="position: absolute;width:95%; height:1.2rem; top:${countDaysBetween(
      new Date(),
      startDate
    )}rem;background: linear-gradient(to right, rgba(var(--bs-primary-rgb), 0.5), rgba(var(--bs-primary-rgb), 0));">`
  );
  const yearday = countDaysBetween(endDate, startDate);
  dayrowlayer.css({ height: yearday + "rem" });
  leftCol.css({ height: yearday + "rem" });
  midCol.css({ height: yearday + "rem" });
  rightCol.css({ height: yearday + "rem" });
  rightColLabel.css({ height: yearday + "rem" });
  leftColLabel.css({ height: yearday + "rem" });
  timeline.append(
    dayrowlayer.append(dayrowattention),
    $('<div class="card-img-overlay d-flex">').append(
      leftColLabel,
      leftCol,
      midCol,
      rightCol,
      rightColLabel
    )
  );
  const formatDateyyyymmdd=(date) =>{
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  const eventstime = events
    .map((event) => ({
      id: event.id,
      startDate: new Date(event.start.split("/").reverse().join("-")),
      endDate: new Date(event.end.split("/").reverse().join("-")),
    }))
    .sort((a, b) => a.startDate - b.startDate);

  const eventColors = ["success", "danger", "warning", "info", "primary"];
  let colorIndex = 0;

  const getNextColor=()=> {
    const color = eventColors[colorIndex];
    colorIndex = (colorIndex + 1) % eventColors.length;
    return color;
  }
  for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    const formattedDate = `${day}-${month}-${year}`;
    const maindate = $(
      `<div class="text-center p-0" day-row="${formattedDate}">${
        day == 1
          ? `<span class="rounded-pill bg-primary px-2 text-white" style="height:1rem">${day}/${month}</span>`
          : 
          //nếu là thứ 7 hoặc chủ nhật thì màu đỏ
            d.getDay() == 0 || d.getDay() == 6
            ? `<span class="rounded-pill bg-label-secondary px-2 text-white" style="height:1rem">${day}</span>`
            :day
      }</div>`
    );
    //kiểm tra ngày hiện tại có phải  formattedDate không

    midCol.append(maindate);
  }
  const isOverlapping = (event1, event2) =>
    event1.startDate < event2.endDate && event1.endDate >= event2.startDate;

  const groupEvents = (events) => {
    const groups = [];
    events.forEach((event) => {
      let placed = false;
      for (let group of groups) {
        if (group.every((e) => !isOverlapping(e, event))) {
          group.push(event);
          placed = true;
          break;
        }
      }
      if (!placed) groups.push([event]);
    });
    return groups;
  };

  const eventsGroup = groupEvents(eventstime);
  leftCol.append(
    eventsGroup
      .reverse()
      .map(
        (group, i) =>
          `<div class="group-${i} d-flex flex-column" group>${group
            .map(
              (event, j) =>
                `<div class="btn-${getNextColor()} rounded event-toggle" id="event-${
                  event.id
                }" event="${event.id}" startDate="${formatDateyyyymmdd(
                  event.startDate
                )}" endDate="${formatDateyyyymmdd(
                  event.endDate
                )}" style="height:${
                  countDaysBetween(event.endDate, event.startDate) - 0.5
                }rem;top:${
                  countDaysBetween(
                    event.startDate,
                    new Date(taskingYear, 8, 1)
                  ) - 0.25
                }rem;"></div>`
            )
            .join("")}</div>`
      )
      .join("")
  );
  var eventtoggle = $(".event-toggle");

  eventtoggle.each(function (index, el) {
    // Sử dụng hàm callback của .each với hai tham số
    var $element = $(el);

    // Xử lý sự kiện mouseenter
    $element.on("mouseenter", function (e) {
      var event = events.find((ev) => ev.id == $element.attr("event")); // Sử dụng $element để lấy thuộc tính ID
      if (!event) return; // Kiểm tra nếu không tìm thấy event thì thoát

      const popoverContent = `<div class="bs-popover-auto fade popover show" style="position:absolute;z-index:9999;" role="tooltip">
            <div class="popover-arrow" style="position:absolute;transform:translate(0,0);top:0;"></div>
            <h3 class="popover-header">${event.event}</h3>
            <div class="popover-body">
                <div class="d-flex gap-3 justify-content-between">
                    <div class="d-flex">
                        <div class="avatar me-2">
                            <span class="avatar-initial rounded-2 bg-label-primary">
                                <i class="bx bx-time text-primary"></i>
                            </span>
                        </div>
                        <div class="d-flex flex-column">
                            <small>${event.start}</small>
                            <h6 class="mb-0">Bắt đầu</h6>
                        </div>
                    </div>
                    ${
                      event.end
                        ? `<div class="d-flex">
                        <div class="avatar me-2">
                            <span class="avatar-initial rounded-2 bg-label-info">
                                <i class="bx bx-time-five text-info"></i>
                            </span>
                        </div>
                        <div class="d-flex flex-column">
                            <small>${event.end}</small>
                            <h6 class="mb-0">Kết thúc</h6>
                        </div>
                    </div>`
                        : ""
                    }
                </div>
            </div>
        </div>`;

      const $popover = $(popoverContent).appendTo("body");

      // Hàm cập nhật vị trí Popover
      const updatePopoverPosition = (e) => {
        const popoverWidth = $popover.outerWidth();
        const popoverHeight = $popover.outerHeight();

        let top = e.clientY + window.scrollY + 10; // Dịch chuyển Popover xuống 10px
        let left = e.clientX + window.scrollX + 10; // Dịch chuyển Popover sang phải 10px

        // Điều chỉnh vị trí nếu Popover vượt quá cạnh dưới của cửa sổ
        if (top + popoverHeight > $(window).height() + $(window).scrollTop()) {
          top = e.clientY + window.scrollY - popoverHeight - 10; // Di chuyển Popover lên trên
        }

        // Điều chỉnh vị trí nếu Popover vượt quá cạnh phải của cửa sổ
        if (left + popoverWidth > $(window).width() + $(window).scrollLeft()) {
          left = e.clientX + window.scrollX - popoverWidth - 10; // Di chuyển Popover sang trái
        }

        // Đặt vị trí Popover
        $popover.css({
          top: top + "px",
          organization:  left + "px",
        });
      };

      // Cập nhật vị trí Popover theo con trỏ chuột
      $(document).on("mousemove.popover", updatePopoverPosition);

      // Cập nhật vị trí Popover khi cuộn trang
      $(window).on("scroll.popover", updatePopoverPosition);
      //create new div with same position as event but width 100%
      const rowforevent = () => {
        //lấy top và height của event
        var top = $element.position().top;
        var height = $element.height() + 16;
        $(`#backdropevent`).css({ height: `${height}px`, top: `${top}px` });
        //leftCol slect all but not this event and add class opacity-25
        $(`#leftCol [event]:not(#${$element.attr("id")})`).addClass(
          "opacity-25"
        );
      };
      rowforevent();
      // Lưu trữ Popover vào phần tử để xóa sau này
      $element.data("popover", $popover);
    });

    // Xử lý sự kiện mouseleave
    $element.on("mouseleave", function (e) {
      // Lấy sự kiện từ ID của phần tử hiện tại
      var event = events.find((ev) => ev.id == $element.attr("id"));
      if (event) {
        var rowforevent = $(`.label-for-event-${event.id}`)
          .closest(".row.by-date")
          .removeClass("bg-label-secondary");
        $(`[class^="label-for-event-"]`)
          .not(`.label-for-event-${event.id},.label-for-event-placeholder`)
          .removeClass("opacity-25");
      }
      var top = $element.position().top;
      var height = $element.height() + 16;
      $(`#backdropevent`).css({ height: `0px`, top: `${top + height / 2}px` });
      $(`#leftCol [event]`).removeClass("opacity-25");

      // Xóa Popover
      const $popover = $element.data("popover");
      if ($popover) {
        $popover.remove();
        $(document).off("mousemove.popover"); // Ngừng theo dõi di chuyển chuột
        $(window).off("scroll.popover"); // Ngừng theo dõi cuộn trang
      }
    });
    const avatarList = (string) => {
      //check if string is empty or not
      if (string == "") {
        return "";
      }
      //split string into array by , or ;
      var arr = string.split(/,|;/);
      var ulAvatar = $(
        `<ul class="list-unstyled m-0 d-flex align-items-center avatar-group me-3">`
      );
      //loop through array and create li with avatar
      for (var i = 0; i < arr.length && i <= 3; i++) {
        ulAvatar.append(
          $(`<a data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="top"  class="avatar pull-up" aria-label="${
            arr[i]
          }" data-bs-original-title="${arr[i]}">
                <span class="avatar-initial rounded-circle bg-label-${
                  [
                    "success",
                    "danger",
                    "warning",
                    "info",
                    "dark",
                    "primary",
                    "secondary",
                  ][Math.floor(6 * Math.random())]
                }">${(l = (
            ((l = (s = arr[i]).match(/\b\w/g) || []).shift() || "") +
            (l.pop() || "")
          ).toUpperCase())}</span>
            </a>`)
        );
      }
      //if array length is more than 3 then create a li with + sign
      if (arr.length > 3) {
        ulAvatar.append(
          $(`<a data-bs-toggle="tooltip" data-bs-offset="0,4"  data-bs-placement="top" class="avatar pull-up" aria-label="More" data-bs-original-title="${string}">
                <span class="avatar-initial rounded-circle pull-up">+${
                  arr.length - 3
                }</span>
            </a>`)
        );
      }
      //convert ulAvatar to string and return
      return ulAvatar.prop("outerHTML");
      //return ulAvatar.prop("outerHTML");
    };
    $element.click((e) => {
      var event = events.find((ev) => ev.id == $(this).attr("event"));
      $("#detailEvent").remove();
      var modalEl = $(`<div class="modal fade" id="detailEvent">
              <div class="modal-dialog modal-dialog-centered modal-simple modal-upgrade-plan">
                <div class="modal-content">
                  <div class="modal-body">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <div class="text-center">
                      <h4 class="mb-2">Chi tiết sự kiện</h4>
                      <p class="mb-6">${event.event}</p>
                    </div>
                    <div class="row mb-4 g-3">
                      <div class="col-6">
                        <div class="d-flex align-items-center">
                          <div class="avatar flex-shrink-0 me-3">
                            <span class="avatar-initial rounded bg-label-primary"><i class='bx bx-time'></i></span>
                          </div>
                          <div>
                            <h6 class="mb-0 text-nowrap">${event.start}</h6>
                            <small>Bắt đầu</small>
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="d-flex align-items-center">
                          <div class="avatar flex-shrink-0 me-3">
                            <span class="avatar-initial rounded bg-label-primary"><i class="bx bx-time-five"></i></span>
                          </div>
                          <div>
                            <h6 class="mb-0 text-nowrap">${event.end}</h6>
                            <small>Kết thúc</small>
                          </div>
                        </div>
                      </div>
                    </div> 
                    <div class="row mb-4 g-3">
                      <div class="col-6">
                        <div class="d-flex align-items-center">
                          ${avatarList(event.organization)}
                        <div>
                            <h6 class="mb-0 text-nowrap">${event.organization}</h6>
                             <small>Đơn vị tổ chức</small>
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="d-flex align-items-center">
                        ${avatarList(event.participant)}
                        </div>
                        <small>Đơn vị phối hợp</small>
                      </div>
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>`);
      $("body").append(modalEl);
      $("#detailEvent").modal("show");
      $('[data-bs-toggle="tooltip"]').tooltip();
    });
  });

  // Tạo dữ liệu cho ITevents
  const ITeventstime = ITevents.map((event) => ({
    id: event.id,
    startDate: new Date(event.start.split("/").reverse().join("-")),
    endDate: new Date(event.end.split("/").reverse().join("-")),
  })).sort((a, b) => a.startDate - b.startDate);

  const eventsGroupIT = groupEvents(ITeventstime);

  rightCol.append(
    eventsGroupIT
      .reverse()
      .map(
        (group, i) =>
          `<div class="group-${i} d-flex flex-column" group>${group
            .map(
              (event, j) =>
                `<div class="btn-${getNextColor()} rounded ITevent-toggle" id="event-${
                  event.id
                }" event="${event.id}" startDate="${formatDateyyyymmdd(
                  event.startDate
                )}" endDate="${formatDateyyyymmdd(
                  event.endDate
                )}" style="height:${
                  countDaysBetween(event.endDate, event.startDate) - 0.5
                }rem;top:${
                  countDaysBetween(
                    event.startDate,
                    new Date(taskingYear, 8, 1)
                  ) - 0.25
                }rem;"></div>`
            )
            .join("")}</div>`
      )
      .join("")
  );

  var ITeventtoggle = $(".ITevent-toggle");

  ITeventtoggle.each(function (index, el) {
    var $element = $(el);
    
    $element.on("mouseenter", function (e) {
      var event = ITevents.find((ev) => ev.id == $element.attr("event"));
      if (!event) return;

      var atention = $(`#card-for-${event.id}`);
      atention.css({ backgroundColor: $element.css("backgroundColor") });

      const rowforevent = () => {
        var top = $element.position().top;
        var height = $element.height() + 16;
        $(`#backdropevent`).css({ height: `${height}px`, top: `${top}px` });
        $(`#rightCol [event]:not(#${$element.attr("id")})`).addClass(
          "opacity-25"
        );
      };
      rowforevent();
    });

    $element.on("mouseleave", function (e) {
      var event = ITevents.find((ev) => ev.id == $element.attr("event"));
      var top = $element.position().top;
      var height = $element.height() + 16;
      $(`#backdropevent`).css({ height: `0px`, top: `${top + height / 2}px` });
      $(`#rightCol [event]`).removeClass("opacity-25");

      var atention = $(`#card-for-${event.id}`);
      atention.css({ backgroundColor: "" });
      const $popover = $element.data("popover");
      if ($popover) {
        $popover.remove();
        $(document).off("mousemove.popover");
        $(window).off("scroll.popover");
      }
    });
  });

  //nhóm sự kiện ITevents theo ngày bắt đầu (startDate)
  const groupEventsByStartDate = (events) => {
    return events.reduce((groupedEvents, event) => {
      const startDate = event.start;
      if (!groupedEvents[startDate]) {
        groupedEvents[startDate] = [];
      }
      groupedEvents[startDate].push(event);
      return groupedEvents;
    });
  };


  const ITeventsGroup = groupEventsByStartDate(ITevents);



  //each group of ITeventsgroup
  for (const [evstartDate, events] of Object.entries(ITeventsGroup)) {
    //create a div width 100% and height 100% and position absolute
    const dayrow = $(
      `<div class="row" style="position: absolute; top: ${
        countDaysBetween(
          new Date(evstartDate.split("/").reverse().join("-")),
          new Date(taskingYear, 8, 1)
        ) - 0.25
      }rem;">
            
            ${events
              .map(
                (event) => `
                    <div class="card border w-px-400 ms-2 mb-2" id="card-for-${
                      event.id
                    }">
            <div class="card-body p-1">
                <h6 class="mb-0">${event.event}</h6>
                <div class="d-flex gap-3 justify-content-between">
                    <div class="d-flex">
                        <div class="avatar me-2">
                            <span class="avatar-initial rounded-2 bg-label-primary">
                                <i class="bx bx-time text-primary"></i>
                            </span>
                        </div>
                        <div class="d-flex flex-column">
                            <small>${event.start}</small>
                            <h6 class="mb-0">Bắt đầu</h6>
                        </div>
                    </div>
                    ${
                      event.end
                        ? `<div class="d-flex">
                                <div class="avatar me-2">
                                    <span class="avatar-initial rounded-2 bg-label-info">
                                        <i class="bx bx-time-five text-info"></i>
                                    </span>
                                </div>
                                <div class="d-flex flex-column">
                                    <small>${event.end}</small>
                                    <h6 class="mb-0">Kết thúc</h6>
                                </div>
                            </div>`
                        : ""
                    }
                </div>
            </div>
        </div>`
              )
              .join("")}
            
            </div>`
    );
    //append to rightCollabel
    rightColLabel.append(dayrow);
  }

});
