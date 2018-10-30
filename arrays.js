var chocolateBars = ['snickers', 'hundred grand', 'kit kat', 'skittles']


function addElementToBeginningOfArray(array, element) {
  a = [element,...array]
  return a
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.push(element)
}