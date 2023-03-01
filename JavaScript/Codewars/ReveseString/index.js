










// function reverseString(str) {
//     let x='';
//     for (let i = str.length-1; i >=0; i--) {
      
//        x+=str[i];
       
//     }
//     return x;
    
// }


// console.log(reverseString("hello"));


// var str='FazLiDiN';
var news='';

function names(str) {
    for (let i = 0; i < str.length; i++) {
    
        // console.log(str[i],str[i].toUpperCase());
        if (str[i]==str[i].toUpperCase()) {
          news+=str[i]
          
            
        }
    
    
        
    }
    console.log(news);
    
}



names('FaZliDdin');