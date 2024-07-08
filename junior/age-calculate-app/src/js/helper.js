

// check if the user had enter a input, if not show error message
export function checkInputEmpty(input) { 
  if(input.value == '') {
    const errorMsg = input.parentElement.querySelector('.error')
    errorMsg.textContent = `Must be a valid ${input.id}`
    return false
  }
}

// transfer the string number into a number
export function transferToInteger(element) {
  return parseInt(element)
}

// check if the input value is between 1 and maximal Value possible 
// i.e for months should be 1 and 12
// i.e for days should be 1 and max day of the month
// if the input field is equal to 0 or bigger than maxVal than error message appear
export function checkValue(el, val , error, maxVal) {
  if(val == 0 || val > maxVal) {
    error.textContent = `Must be a valid ${el.id}`
    return false
  }
}

// check if the input value is current year, if is true than error message else nothing happen
export function checkYear(inputVal, currYear, error) {
  if(inputVal > currYear) {
    error.textContent = 'Must be in the past'
    return false
  }
}


// update Element for the forEach
// only apply the new content if the id of the element is the same as the name
export function updateElement(el, name, val) {
  if(el.id === `output-${name}`) {
    const outputName = name
    const outputNum = el.querySelector('.output-num')
    const outputDesc = el.querySelector('.output-desc')

    // add 0 to it, if the number is smaller than 10
    // if not it add the val to and plural form of the name is added
    if(val < 10) {
      outputNum.textContent = val.toString().padStart(2, "0")
      //update description depends on the val
      if(val < 2) {
        outputDesc.textContent = outputName
      } else {
        outputDesc.textContent =  `${outputName}s`
      }
    } else {
      outputNum.textContent = val
      outputDesc.textContent =  `${outputName}s`
    }
  }
}

