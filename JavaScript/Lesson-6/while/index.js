
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




function reverseString(str) {
    let x='';
    for (let i = str.length-1; i >=0; i--) {
      
       x+=str[i];
       


    }
    return x;
    
}


console.log(reverseString("hello"));