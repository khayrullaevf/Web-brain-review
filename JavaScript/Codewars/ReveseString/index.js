










function reverseString(str) {
    let x='';
    for (let i = str.length-1; i >=0; i--) {
      
       x+=str[i];
       


    }
    return x;
    
}


console.log(reverseString("hello"));