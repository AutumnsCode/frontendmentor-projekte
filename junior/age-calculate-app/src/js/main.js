const allInputs = document.querySelectorAll("[inputmode='numeric']");
const formBtn = document.getElementById('form-btn')
import validateInput from "./validateInput";
import { transferToInteger, updateElement } from './helper'
import { checkError } from "./checkError";

let isValid = true
allInputs.forEach((input) => {
  // check if the input of the number is actually a number
  validateInput(input);

  // add leading 0 to day and month

  input.addEventListener('focusout', () => {
    if(input.id !== 'year') {
      const inputMax = input.maxLength;
      const inputLength = input.value.length;

      if(inputLength < inputMax) {
        input.value = input.value.padStart(inputMax, "0")
      }
    }
  })  
});


formBtn.addEventListener('click', (e) => {
  e.preventDefault()
  let yearInput, monthInput, dayInput;
  
  let allError = document.querySelectorAll('.error')
  
  // remove all previous error Message
  allError.forEach(errMsg => {
    errMsg.textContent = ''
    isValid = true
  })

  // check if any inputs doesn't compline with the guids
  isValid = checkError(allInputs)
  console.log(isValid)

  // get numberInput otherwise dont save
  allInputs.forEach(input => {
    if(input.id == 'year') {
      yearInput = transferToInteger(input.value)
    } else if(input.id == 'month') {
      monthInput = transferToInteger(input.value)
    } else {
      dayInput = transferToInteger(input.value)
    }
  })

  // only calculate if there weren't found any error
  if(isValid == true) {
    calculate(dayInput, monthInput, yearInput)
  }
})


function calculate(day, month, year) {
  const currentDate = new Date()
  let currentYear = currentDate.getFullYear()
  let currentMonth = currentDate.getMonth()
  let currentDay = currentDate.getDate()
  let diffYears = currentYear - year
  let diffMonths = currentMonth + 1 - month
  let diffDay = currentDay - day

  if(diffDay < 0) {
    diffMonths--
    diffDay += new Date(currentYear, currentMonth, 0).getDate()
  }

  if(diffMonths < 0) {
    diffYears--
    diffMonths += 12
  }
  
  updateOutput(diffDay, diffMonths, diffYears)
}

function updateOutput(outputDay, outputMonth, outputYear) {
  const allOutput = document.querySelectorAll('.output-number')

  allOutput.forEach(output => {
    updateElement(output, 'year', outputYear)
    updateElement(output, 'month', outputMonth)
    updateElement(output, 'day', outputDay)
  })
}


