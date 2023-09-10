var btns = document.querySelectorAll(".add-bag form button");
var tableBag = document.querySelector(".table-bag");
var count = 0;
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    var tr = btn.parentElement.parentElement.parentElement;
    var td = tr.children;
    quality = btn.previousElementSibling.value;
    var product = td[1].innerHTML;
    var price = td[2].innerHTML;
    var totalPrice = price * quality;
    console.log(totalPrice);
    count++;
    if (count === 1) {
      bag_Tr = document.createElement("tr");
      bag_Tr.innerHTML = `<th>STT</th>
      <th style="width: 200px">Tên sản phẩm</th>
      <th>Gía</th>
      <th>Số Lượng</th>
      <th>Thành Tiền</th>
      <th>Xóa</th>`;
      tableBag.appendChild(bag_Tr);
      var th = bag_Tr.children;
    }
  });
});
