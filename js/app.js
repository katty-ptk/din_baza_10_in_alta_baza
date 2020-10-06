let result_p = document.createElement('p');
let result;

$("#submit_btn").click(function(e) {
  e.preventDefault();

  var number = $('input[id="input_nr"]').val();
  var base = $('input[id="input_base"]').val();

  if ( isNaN( number ) || isNaN( base ) ) {
    result_p.textContent = "te rog introdu un numar";
  } else {
    result_p.textContent = "ai introud numere";
  }

  $(".result").append(result_p);
  console.log(number, base, result_p)
});
