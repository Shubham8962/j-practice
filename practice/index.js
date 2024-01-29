// const input1 = { a: 1, b: 2, c: 10, d: 5 };
// const input2 = { a: 9, b: 2, e: 3, d: 5 };
// const output = { d: 5, b: 2 };

// function func(input1, input2) {
//   let c = {};

//   for (let i in input1) {
//     if (input1[i] == input2[i]) {
//       c[i] = input1[i];
//     }
//   }
//   return c;
// }

// console.log(func(input1, input2));

const a = [1, 2, 11, 10, 9, 9, -7, 6, 8];

function seclar(a) {
  if (a.length < 2) {
    throw new Error("array have atleast two elements");
  }

  let largest = a[0];
  let secondLar = a[1];

  for (let i = 2; i < a.length; i++) {
    if (a[i] > largest) {
      secondLar = largest;
      largest = a[i];
    } else if (a[i] > secondLar && a[i] < largest) {
      secondLar = a[i];
    }
  }
  return secondLar;
  // shubham
}

console.log(seclar(a));
