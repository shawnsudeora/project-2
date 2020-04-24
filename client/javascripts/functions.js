// jshint esversion: 6

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};

//Req 3-A

let revWord = (str) => {
  let arr = str.split("");
  let result = "";
  for (char of arr) {
    result = char + result;
  }
  return result;
};


let revWords1 = (str) => {
  let arr = str.split(" ");
  let result = " ";
  for (var i = 0; i < arr.length; i++) {

    result = result + revWord(arr[i]) + " ";
  }
  return result;
};

//Req 3-B

let revWords2 = (str) => {
  let arr = str.split(" ");
  let result = " ";
arr.forEach((char) => {
  result = result + revWord(char) + " ";

});

  return result;
};


//Req 3-C

let revWords3 = (str) => {
  let arr = str.split(" ");
  let result = " ";

for (var char of arr) {
result = result + revWord(char) + " ";

}

  return result;
};
