var chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles']


function addElementToBeginningOfArray(array, element) {
  a = [element,...array]
  return a
}

function destructivelyAddElementToBeginningOfArray(array, element) {
   array.unshift(element)
   return array
  }

function addElementToEndOfArray(array, element) {
  a = [...array, element]
  return a
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array
}

function removeElementFromBeginningOfArray(array) {
  a = array.slice()
  return a
}
