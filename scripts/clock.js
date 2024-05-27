function updateDateTime() {
    const now = new Date();

    // 현재 날짜
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const dateString = `오늘은 ${year}년 ${month}월 ${day}일`;
    document.getElementById('date').textContent = dateString;

    // 현재 시간
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0시를 12시로 표시
    const timeString = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds} ${ampm}`;
    document.getElementById('clock').textContent = timeString;
  }

  // 1초마다 시간 업데이트
  setInterval(updateDateTime, 1000);
