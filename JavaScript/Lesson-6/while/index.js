
// 

//  let str= 'goal';

//  for (let i = str.length-1; i >=0; i--) {
 
//     console.log(str[i]);


//  }

// for (let i = 10; i >=0 ; i--) {
//    console.log(i);
    
// }



//  for (let i = 1; i <10; i++) {
//     console.log('I love you');
    
//  }




// function reverseString(str) {
//     let x='';
//     for (let i = str.length-1; i >=0; i--) {
      
//        x+=str[i];
       


//     }
//     return x;
    
// }


// console.log(reverseString("hello"));

// var str='baaafabAa';
// var g='';
// count=0;
// for (let i = 0; i < str.length; i++) {
//   if (str[i]=='a'||str[i]=='A') {
//     count++


    
//   }
    
// }

// console.log(count);

function median(numbers) {
    const sorted = Array.from(numbers).sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

console.log(median([4, 5, 7, 1, 33]));