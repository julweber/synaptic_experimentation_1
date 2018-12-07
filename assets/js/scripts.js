function convertNumberToInputArray(number) {
  var input1 = 0;
  var input2 = 0;
  var input3 = 0;

  if ((number / 4) >= 1) {
    input1 = 1;
    number = number - 4;
  }

  if (number != 0) {
    if ((number / 2) >= 1) {
      input2 = 1;
      number = number - 2;
    }
  }

  if (number != 0) {
    input3 = number
  }

  return [input1, input2, input3];
}


function convertNumberToInputArrayGeneral(number, outputNumber) {
  output = []
  for(var i = 0; i < outputNumber; i++) {
    output.push(0);
  }

  for(var i = outputNumber - 1; i >= 0; i--) {
    if(number == 0) {
      break;
    }
    divider = Math.pow(2,i);
    if ((number / divider) >= 1) {
      number = number - divider;
      output[i] = 1;
    }
  }

  return output.reverse();
}
