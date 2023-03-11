






// let arr=[
//     [1,2,3 ,'array-1'],
//     [4,5,6,'array-2',[7,8, 'array-3',[9,10,'array-4' ,[11,12,'array-5',[13,14, 'array-6',[15,'array-7']]]]]]
// ]



// for (let i = 0; i < arr.length; i++) {
//     const innerArray1=arr[i]
//     for (let j = 0; j < innerArray1.length; j++) {
//         const innerArray2=innerArray1[j]
//       if (Array.isArray(innerArray2)) {
//          for (let k = 0; k < innerArray2.length; k++) {
//             const innerArray3=innerArray2[k]
//             if (Array.isArray(innerArray3)) {
                
//                 for (let l = 0; l <innerArray3.length; l++) {
//                     const innerArray4=innerArray3[l]
//                  if (Array.isArray(innerArray4)) {
//                       for (let m = 0; m < innerArray4.length; m++) {
//                         const innerArray5 = innerArray4[m];
//                          if (Array.isArray(innerArray5)) {
//                              for (let n = 0; n < innerArray5.length; n++) {
//                                 const innerArray6 = innerArray5[n];
//                                 if (Array.isArray(innerArray6)) {
//                                     for (let o = 0; o < innerArray6.length; o++) {
//                                         const element = innerArray6[o];
//                                         console.log(element);
                                        
//                                     }
//                                 } else{
//                                     console.log(innerArray6);
//                                 }
                               
                                
//                              }
//                          } else{
//                         console.log(innerArray5);
//                          }
                        
//                       }
//                  } else{
//                     console.log(innerArray4);

//                  }
                    
//                  }
//             }else{
//                 console.log(innerArray3);
//             }
            
//          }
//       }else {
//         console.log(innerArray2);
//       }
        
//     }
    
// }



let arr=['Fazliddin','Leo','Sheeran','Suarez'];



// for (let i = 0; i < arr.length; i++) {
//    let result='';
   
//    for (let j = arr[i].length - 1; j >= 0; j--) {
//     result+=arr[i][j];
    
    
//    }
//    arr[i]=result;
// }
// console.log(arr);
// console.log(arr.reverse());

// console.log(result.split(''));



let arr2=[6,4,2,3,0,5,7,18,912,3,35,673,3,2,4345,332]


// let newArr22=arr2.filter((val,index,arr)=>{
//   return val<50&&val>10
// })

// console.log(newArr22);

// let newArr22=arr2.filter(val=> val<50&&val>10)
//  console.log(newArr22);



// let newArr22=''
// var newArr2=arr2.map((val,index,arr)=>{
//  if (val<50) {
//   // console.log(val);
//   newArr22+=val
 
  
//  }
   
// })
// console.log(newArr22.split(''));

let arr3=['p','Q' ,'N' ,'D' ,'A','c' ,'B']


// let newArr3=arr3.filter(letter=>{
//   return letter!==letter.toLowerCase()
// })
// console.log(newArr3);
// let newArr3=arr3.find((letter)=>{
//   return letter!==letter.toLowerCase()
// })
// console.log(newArr3);
let newArr3=arr3.findIndex((letter)=>{
  return letter!==letter.toLowerCase()
})
console.log(newArr3);
// let newArr2=arr2.map((val)=> {
//    if (val<20) {
//       console.log(val);
//    } else{
//     return false
//    }

// })

const numbers = [1, 2, 3, 4, 5];

numbers.unshift(12)
numbers.unshift(13)
numbers.unshift(14)
numbers.shift()
// console.log(numbers);

// const filteredNumbers = numbers.filter(function(num) {
//   return num % 2 === 0;
// });

// console.log(filteredNumbers);


// let newArr2=arr2.filter(val=>val<20)
// console.log(newArr2);
//  console.log(arr3.join(' '));


// arr3.splice(0,4)


arr3.slice(0,4)


// console.log(arr3);

// console.log(arr3.slice(1,6));
// console.log(arr3.splice(1,6));



// console.log(arr3.concat('1'));


// console.log(arr3.sort((x,y)=>x.localeCompare(y)));
// for (const num of arr2) {
//     console.log(num!==0);
// }


// console.log(arr2.sort((a,b)=>a-b));
// console.log(arr2.sort((a,b)=>b-a)); teskari sort qilib beradi
// let lastword=arr[arr.length-1]
// console.log(lastword[lastword.length-1]);


let fruits=['olma', 'behi' ,'anor']


var newFruits=fruits.map((val,index,arr)=>{
  // console.log(val); //fruits[i]
  // console.log(index); // i
  // console.log(arr);  //fruits
  return 'Meva'
})
// console.log(newFruits);

for (let i = 0; i < fruits.length; i++) {
  // console.log(i);
  // console.log(fruits[i]);
  // console.log(fruits);
  
}

// fruits.pop()

// fruits.push('limon' , 'cherry')

// let newFruits=fruits.map((item)=>{
//     return 'Hi'
// })


// console.log(fruits);
// console.log(newFruits);
// let str='Fazliddin'
// let result=''

// for (let i = str.length-1; i >=0; i--) {
//    result+=str[i]


// }
//  console.log(result);


// for (let i = 0; i < fruits.length; i++) {
//      let reversedFruit='';
//      var fruit=fruits[i]
  
//      for (let j = fruit.length - 1; j >= 0; j--) {
//         reversedFruit+=fruit[j];
        
//      }
//      fruits[i]=reversedFruit
// }

// console.log(fruits);



// function toCamelCase(str) {
//   // Replace all dashes and underscores with a space
//   str = str.replace(/[-_]/g, ' ');

//   // Split the words into an array
//   var words = str.split(' ');

  // Combine the words into camel case
  // The first word is lowercase unless it is capitalized in the original string
  // The remaining words are always capitalized
//   var camelCaseWords = [words[0].toLowerCase()];
//   for (var i = 1; i < words.length; i++) {
//     camelCaseWords.push(words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase());
//   }

//   // Join the words together into a single string
//   var camelCaseStr = camelCaseWords.join('');

//   return camelCaseStr;
// }

// console.log(toCamelCase('Fazliddin-khayrullaev'));

// function toCamelCase(str){
//   return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }
// console.log(toCamelCase('hda-HJH-ksj'));