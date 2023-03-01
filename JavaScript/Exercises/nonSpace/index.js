





function nonSpace(x) {
    var news='';
    for (let i = 0; i < x.length; i++) {
        if (x[i]!==' ') {
        
             news+=x[i];
        }
       
        
    }
    return news
}

console.log(nonSpace('23  hh ll  322rnkfle'));