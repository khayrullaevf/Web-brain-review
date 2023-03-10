






let arr=[
    [1,2,3 ,'array-1'],
    [4,5,6,'array-2',[7,8, 'array-3',[9,10,'array-4' ,[11,12,'array-5',[13,14, 'array-6',[15,'array-7']]]]]]
]



for (let i = 0; i < arr.length; i++) {
    const innerArray1=arr[i]
    for (let j = 0; j < innerArray1.length; j++) {
        const innerArray2=innerArray1[j]
      if (Array.isArray(innerArray2)) {
         for (let k = 0; k < innerArray2.length; k++) {
            const innerArray3=innerArray2[k]
            if (Array.isArray(innerArray3)) {
                
                for (let l = 0; l <innerArray3.length; l++) {
                    const innerArray4=innerArray3[l]
                 if (Array.isArray(innerArray4)) {
                      for (let m = 0; m < innerArray4.length; m++) {
                        const innerArray5 = innerArray4[m];
                         if (Array.isArray(innerArray5)) {
                             for (let n = 0; n < innerArray5.length; n++) {
                                const innerArray6 = innerArray5[n];
                                if (Array.isArray(innerArray6)) {
                                    for (let o = 0; o < innerArray6.length; o++) {
                                        const element = innerArray6[o];
                                        console.log(element);
                                        
                                    }
                                } else{
                                    console.log(innerArray6);
                                }
                               
                                
                             }
                         } else{
                        console.log(innerArray5);
                         }
                        
                      }
                 } else{
                    console.log(innerArray4);

                 }
                    
                 }
            }else{
                console.log(innerArray3);
            }
            
         }
      }else {
        console.log(innerArray2);
      }
        
    }
    
}