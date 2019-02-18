var chocolateBars = ['snickers','hundred grand','kitkat','skittles']

function addElementToBeginningOfArray(array1,element1) {
    return [element1,...array1]
}

function destructivelyAddElementToBeginningOfArray(array1,element1) {
  return array.unshift(element1)
}
