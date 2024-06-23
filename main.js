function setClock() {
    var dateInfo = new Date();
    var hour = modifyNumber(dateInfo.getHours());
    var min = modifyNumber(dateInfo.getMinutes());
    var sec = modifyNumber(dateInfo.getSeconds());
    var year = dateInfo.getFullYear();
    var month = dateInfo.getMonth() + 1; // monthIndex를 반환해주기 때문에 1을 더해준다.
    var date = dateInfo.getDate();
    document.getElementById("time").innerHTML = "🐲" + hour + "시 " + min + "분 " + sec + "초" + "🐲";
    document.getElementById("date").innerHTML = "🐲" + year + "년 " + month + "월 " + date + "일" + "🐲";
}

function modifyNumber(time) {
    if (parseInt(time) < 10) {
        return "0" + time;
    } else {
        return time;
    }
}

window.onload = function() {
    setClock();
    setInterval(setClock, 1000); // 1초마다 setClock 함수 실행
}
