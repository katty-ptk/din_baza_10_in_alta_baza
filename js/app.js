var result_p = document.createElement('p');
var result;

// FUNCTIONS
transform_in_base_2_or_8 = ( number, base, number_copy ) => {

  var reminders = new Array(); // contains the reminders for creating the result

  for ( number_copy; number_copy >= 1; number_copy /= base ) {
    reminder = parseInt(number_copy % base);
    reminders.push(reminder);
  }

  var result_arr = new Array();
  result_arr = reminders.reverse();

  result = result_arr.join('');
  console.log("result in base 2: ", result)

  return {reminders, result_arr};
}

$("#submit_btn").click(function(e) {
  e.preventDefault();

  var number = parseInt($('input[id="input_nr"]').val());
  var base = parseInt($('input[id="input_base"]').val());

  var number_copy = number;

  if ( !(isNaN(number)) && !(isNaN(base)) ) {

    switch ( base ) {
      case 2:
        transform_in_base_2_or_8( number, base, number_copy );
        result_p.textContent = "Numarul " + number + " trasformat in baza 2 este " + result;
        break;

      case 8:
        transform_in_base_2_or_8( number, base, number_copy );
        result_p.textContent = "Numarul " + number + " trasformat in baza 8 este " + result;
        break;

      case 16:
        // function
        break;

      case 10:
        result_p.textContent = "Numarul introdus este deja in baza 10";
        break;
        
      default:
        result_p.textContent = "te rog introdu una din bazele 2, 8, sau 16";

    }

    result_p.setAttribute('id', 'result_msg')

  } else {

    result_p.textContent = "te rog introdu numere";
    result_p.setAttribute('id', 'error_msg');

  }

  $(".result").append(result_p); // append result to dom

  // clear input fields
  $('input[id="input_nr"]').val("");
  $('input[id="input_base"]').val("");
});
