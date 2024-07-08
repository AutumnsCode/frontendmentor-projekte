import { checkInputEmpty, checkValue, checkYear, transferToInteger } from "./helper";


export function checkError(elements) {
  let currentDate = new Date()
  let currentDay = currentDate.getDate()
  let currentMonth = currentDate.getMonth() + 1
  let currentYear = currentDate.getFullYear()
  let year, month, day
  let isValid = true;

  // general checking if the input is empty or the number isn't invalid
  elements.forEach(element => {
    checkInputEmpty(element)
    let errorMsg = element.parentElement.querySelector('.error')
    if(element.id == 'year') {
      year = transferToInteger(element.value)
      isValid = checkYear(year, currentYear, errorMsg)
      console.log(isValid)
    } else if(element.id == 'month') {
      month = transferToInteger(element.value)
      isValid =checkValue(element, month, errorMsg, 12)
      
    } else {
      day = transferToInteger(element.value)
      const calculateLengthOfMonth = new Date(year, month, 0).getDate();
      isValid = checkValue(element, day, errorMsg, calculateLengthOfMonth)
    }
  })

  // check if the day are not in the future for month and day

  if(year == currentYear && month > currentMonth) {
    isValid = false
    const monthError = document.querySelector('#month-error')
    monthError.textContent = 'Must be in the past'
  }

  if(year == currentYear && month == currentMonth && day > currentDay) {
    isValid = false
    const dayError = document.querySelector('#day-error')
    dayError.textContent = 'Must be in the past'
  }

  return isValid
}