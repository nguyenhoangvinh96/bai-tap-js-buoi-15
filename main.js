document.getElementById("btnResult").onclick = function () {
    var Score1 = document.getElementById("inputScore1").value * 1;
    var area = document.getElementById("selLocation").value * 1;
    var subject = document.getElementById("selUser").value * 1;
    var Score2 = document.getElementById("inputScore2").value * 1;
    var Score3 = document.getElementById("inputScore3").value * 1;
    var Score4 = document.getElementById("inputScore4").value * 1;
    var total = ""
    if ((Score1 && Score2 && Score3 && Score4)) {
total = Score2 + Score3 + Score4 + (area + subject);
total = total >= Score1 ? "Bạn đã đậu. Tổng điểm : " + total : "Bạn đã rớt. Tổng điểm : " + total;
    }
else {
    total = "Bạn đã rớt. Do có điểm nhỏ hơn hoặc bằng 0 ";
}
document.getElementById("txtResult").innerHTML = total;
}

// Bài 2: Tính tiền điện

document.getElementById("btnElecBill").onclick = function () {
    var Name = document.getElementById("inputName").value;
    var kw = document.getElementById("inputKW").value;
    var total = 0;
    if (kw > 0 && kw <= 50) {
        total = kw * 500;
    }
    else if (kw > 50 && kw <= 100) {
        total = 50 * 500 + (kw - 50) * 650
    }
    else if (kw > 100 && kw <= 200) {
        total = 50 * 500 + 50 * 650 (kw - 100) * 850;
    }
    else if (kw > 200 && kw <= 350) {
        total = 50 * 500 + 50 * 650 + 50 * 850 (kw - 200) * 1100;
    }
    else if (kw > 350) {
        total = 50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (kw - 350) * 1300; 
    }

    (total = new Intl.NumberFormat("vn-VN").format(total));
    var totalPrice ="Họ tên: " + Name + " Tiền điện: " + total
    document.getElementById("txtElecBill").innerHTML = totalPrice;

}