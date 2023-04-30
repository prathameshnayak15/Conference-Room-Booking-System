// process live cost price of reservation form

$('.form-group').on('input', '.prc', function () {

  var totalPrice = 0;
  var counter = 0;

  $('.form-group .prc').each(function () {
    var inputVal = $(this).val();

    if (inputVal.includes("Auditorium")) {
      totalPrice = 200;
    }

    if (inputVal.includes("Theatre")) {
      totalPrice = 300;
    }

    if (inputVal.includes("Meeting")) {
      totalPrice = 400;
    }

    if (inputVal.includes("Boardroom")) {
      totalPrice = 500;
    }
    if (inputVal.includes("YES")) {
      totalPrice += 200;
    }

    if ($.isNumeric(inputVal)) {
      if (counter == 1) {
        totalPrice += (inputVal * 80);
      }

      if (counter == 2) {
        totalPrice += (inputVal * 400);
      }

      if (counter == 3) {
        totalPrice += (inputVal * 60);
      }

      if (counter == 4) {
        totalPrice += (inputVal * 10);
      }
    }

    counter++;
  });

  document.getElementById('priceField').value = totalPrice;
  $('#price-count').text(totalPrice);

});