

 export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

//   console.log(randomNumber(1, 15));


  export function randomString(length) {
    let characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = length; i > 0; --i) 
    result += characters[Math.floor(Math.random() * characters.length)];
    return result;
  };

//   console.log(randomString(8));


  export function randomArray(min, max, length) {
    let arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(randomNumber(min, max));
    }
    return arr;
  };
  

//   console.log(randomArray(1, 5, 10));


  // export default {randomNumber, randomString, randomArray};