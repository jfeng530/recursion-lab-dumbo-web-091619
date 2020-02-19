// Code your solution here!

function printString(myString) {
  console.log(myString[0])
  if (myString.length > 1) {
    let mySubString = myString.substring(1, myString.length)
    printString(mySubString)
  } else {
    return true
  }
}

function reverseString(myString) {
  if (myString.length < 2) {
    return myString
  } else {
    return reverseString(myString.substring(1)) + myString[0];
  }
}

function isPalindrome(myString) {
  if (myString.length < 2) {
    return true
  } else if (myString[myString.length-1] === myString[0]) {
    return isPalindrome(myString.substring(1, myString.length-1))
  } else {
    return false
  }
}

function addUpTo(myArr, index) {
  return index ? myArr[index] + addUpTo(myArr, --index) : myArr[index]
}

function maxOf(myArr) {
  if (myArr.length = 1)
}