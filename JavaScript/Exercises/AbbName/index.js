


 function Abbname(str) {
    var news='';
   str=str.trim();
  for (let i = 0; i < str.length; i++) {
   if(i==0){
        news+=str[0].toUpperCase();
     } 
     else if (str[i]==' ') {
       news+='.';
       news+=str[i+1].toUpperCase();
     } 
        
    }
     return news;
    }

console.log( Abbname('   fazliddin khayrullaev')); //F.K
