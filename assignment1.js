// YOU have to use a HOF.

// 1. Write a function that takes a string parameter, and it console "YES" if the string,
// contains 'y' other wise it console "NO".
// Example - 'Crazyy' // YES
// Example - Hello // NO

function checkY(str) {
    if (str.includes('y') || str.includes('Y')) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}

// 2. Write a function that finds a factorial of a number.  5! ==> 5 * 4 * 3 * 2 * 1
// Example - 5! = 120 (Use a normal loop for this one.) // ForEach

// function getFactorial(num) {
// logic
// return the value;
// }
function getFactorial(num) {
    let result = 1;
    for (let i = num; i > 1; i--) {
        result *= i;
    }
    return result;
}

//3. You have an array of students
// let studentList = [
//   { name: "Mike", marks: [80, 50, 60, 100] },  290
//   { name: "Daniel", marks: [40, 80, 100, 100] }, //
//   {
//     name: "Stacy",
//     marks: [20, 100, 50, 70], 240
//   },
// ];

// function getHighestAverageStudent() { // return string
    // returns the student name with highest average marks
// }
let studentList = [
    { name: "Mike", marks: [80, 50, 60, 100] },
    { name: "Daniel", marks: [40, 80, 100, 100] },
    { name: "Stacy", marks: [20, 100, 50, 70] }
  ];

  function getHighestAverageStudent() {
    let highestAverage = 0;
    let topStudent = "";
  
    studentList.forEach(student => {
      let totalMarks = student.marks.reduce((sum, mark) => sum + mark, 0);
      let averageMarks = totalMarks / student.marks.length;
  
      if (averageMarks > highestAverage) {
        highestAverage = averageMarks;
        topStudent = student.name;
      }
    });
  
    return topStudent;
  }

//4. HARD Question - You have to write a function that has the highest number of occurrences
// [ 20, 4, -10, 4, 11, 20, 4, 2]; // 4


//5. You have to write a function that has to find a number which is unique in the array (I.e Only occured once)
// [20, 20, 11, 4, 11, 20, 2, 4]


// aba abba  abca  acca a 
//6. You have an arryay of palindromes and not palindromes,  and you have to return only palindromes array

// ['abc', 'aba', 'ccc', 'dca', 'a']

// ['aba', 'ccc', 'a']
