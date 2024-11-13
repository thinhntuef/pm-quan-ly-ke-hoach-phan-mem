let isOverlapChecking = true;

const checkOverlap = () => {
  const cards = document.querySelectorAll("#rightColLabel .card");

  if (cards.length === 0) {
    isOverlapChecking = false;
    return;
  }

  for (let i = 0; i < cards.length; i++) {
    const card1 = cards[i];
    const rect1 = card1.getBoundingClientRect();

    for (let j = i + 1; j < cards.length; j++) {
      const card2 = cards[j];
      let x = 1;

      const adjustPosition = () => {
        console.log("adjustPosition");
        let rect2 = card2.getBoundingClientRect();

        // Kiểm tra xem có chồng lấp không
        const isOverlapping = !(
          rect1.right <= rect2.left ||
          rect1.left >= rect2.right ||
          rect1.bottom <= rect2.top ||
          rect1.top >= rect2.bottom
        );

        if (isOverlapping) {
          // Di chuyển `card2` sang phải thêm 10px
          card2.style.left = `${x * 258}px`;
          x++;

          // Đệ quy `setTimeout` để kiểm tra lại sau 100ms
          setTimeout(adjustPosition, 100);
        }
      };
      // Gọi hàm `adjustPosition` để bắt đầu dịch chuyển
      adjustPosition();
    }
  }
};

// Gọi `checkOverlap` sau khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");
  setTimeout(checkOverlap, 1000); // Chờ 1000ms để đảm bảo các thẻ đã render
});
