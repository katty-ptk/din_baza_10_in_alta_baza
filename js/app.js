let result_p = document.createElement('p');
let result;

$("#submit_btn").click(function(e) {
  e.preventDefault();

  var number = parseInt($('input[id="input_nr"]').val());
  var base = parseInt($('input[id="input_base"]').val());

  if ( !(isNaN(number)) && !(isNaN(base)) ) {

    result_p.textContent = "ai introdus numere";
    result_p.setAttribute('id', 'result_msg')

  } else {

    result_p.textContent = "te rog introdu numere";
    result_p.setAttribute('id', 'error_msg');

  }

  $(".result").append(result_p);
  // console.log(number, base, result_p)

  
});
