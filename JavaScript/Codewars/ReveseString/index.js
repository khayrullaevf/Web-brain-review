










// function reverseString(str) {
//     let x='';
//     for (let i = str.length-1; i >=0; i--) {
      
//        x+=str[i];
       
//     }
// //     return x;
    
// // }


// // console.log(reverseString("hello"));


// // var str='FazLiDiN';


// function names(str) {
//     var news='';
//     for (let i = 0; i < str.length; i++) {
    
//         // console.log(str[i],str[i].toUpperCase());
//         if (str[i]==str[i].toUpperCase()) {
//           news+=str[i]
          
            
//         }
    
    
        
// //     }
// //     console.log(news);
    
// // }



// // names('FaZliDdin');

// function repeatString(n, s) {
//   return s.repeat(n);
// }
// var n = 6;
// var s = "HEllo";
// var result = repeatString(n, s);
// console.log(result); // Output: "IIIIII

// function isPrime(n) {
//   // Negative numbers and 0 are not prime
//   if (n <= 1) {
//     return false;
//   }
  
//   // Check if n is divisible by any number between 2 and the square root of n
//   for (var i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
  
//   // If n is not divisible by any number between 2 and the square root of n, it is prime
//   return true;
// }






// function twoSum(nums, target) {
//   // Create a map to store the complements of each number in the array
//   const complementMap = new Map();
  
//   // Loop through each number in the array
//   for (let i = 0; i < nums.length; i++) {
//     // Check if the complement of the current number exists in the map
//     const complementIndex = complementMap.get(target - nums[i]);
//     if (complementIndex !== undefined) {
//       // If the complement exists, return the current index and the complement index
//       return [complementIndex, i];
//     }
    
//     // Otherwise, add the current number and its index to the map
//     complementMap.set(nums[i], i);
//   }
  
//   // If no two numbers add up to the target, return an empty array
//   return [];
// }
