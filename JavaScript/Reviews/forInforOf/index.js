





   
//   const keys=Object.keys(person)

//   function deleteItem(itemValue) {
//     for (let i = 0; i < keys.length; i++) {
   
//         // console.log(`keys:${keys[i]}, values: ${ person[keys[i]]}`);
//         // console.log(person[keys[i]]);
//     if (person[keys[i]]!==itemValue) {
//        console.log(person[keys[i]]);
 

        
// //     }
        
// //       }
// //   }


// //   deleteItem('John')

// // function deleteItem(itemKey) {
    

// //   for (const key in person) {
// //     // console.log(`key : ${key},   value : ${person[key]}`);
// //      if (key!==itemKey) {
// //         console.log(key);
        
// //      }

// //   }
// // }
// //    deleteItem('age')
// const person = {
//     name: 'John',
//     age: 30,
//     occupation: 'Developer'
//   };
  
//   const entriesArray = Object.entries(person);
  
//   const capitalizedEntries = entriesArray.map(([key, value]) => [key.toUpperCase(), String(value).toUpperCase()]);

  
//   const capitalizedObject = Object.fromEntries(capitalizedEntries);
  
//   console.log(capitalizedObject); // Output: { NAME: 'JOHN', AGE: '30', OCCUPATION: 'DEVELOPER' }
  



//  const properties=[];
// for (const i of  Object.values(person)) {
//     properties.push(i)
//     console.log(i);
// }

   // const key = keys[i];
    // console.log(keys[i]);
    // console.log(`${keys[i]} :  ${person[keys[i]]}`); 
    //   console.log(keys);


    let arr=[12,32,334,34,'fazliddin'];
    let capitalizedArray=arr.map((value)=>String(value).toUpperCase())
    // console.log(capitalizedArray);
   

    // for (const iterator of arr) {
         
    //     //  console.log(iterator!==String(iterator)&&iterator*2);
    //     if (iterator!==String(iterator)) {
    //         console.log(Math.floor(iterator*2 /12));
    //     }
  
    // }


  

    //   for (let i = 0; i < nestedArray.length; i++) {
    //     const innerArray1 = nestedArray[i];
    //     for (let j = 0; j < innerArray1.length; j++) {
    //       const innerArray2 = innerArray1[j];
    //       if (Array.isArray(innerArray2)) {
    //         for (let k = 0; k < innerArray2.length; k++) {
    //           const innerArray3 = innerArray2[k];
    //           if (Array.isArray(innerArray3)) {
    //             for (let l = 0; l < innerArray3.length; l++) {
    //               console.log(innerArray3[l]);
    //             }
    //           } else {
    //             console.log(innerArray3);
    //           }
    //         }
    //       } else {
    //         console.log(innerArray2);
    //       }
    //     }
    //   }

    //   for (let i = 0; i < nestedArray.length; i++) {
    //     for (let j = 0; j < nestedArray[i].length; j++) {
    //         for (let k = 0; k < nestedArray[i][j].length; k++) {
    //             // console.log(nestedArray[i][j][k]);
    //             for (let l = 0; l  < nestedArray[i][j][k].length; l++) {
    //                console.log(nestedArray[i][j][k][l]);
    //                 //  for (let m = 0; m <nestedArray[i][j][k][l] .length; m++) {
    //                 //     console.log(nestedArray[i][j][k][l]);
    //                 // //  for (let n = 0; n <nestedArray[i][j][k][l][m].length; n++) {
    //                 // //     // console.log(nestedArray[i][j][k][l][m][n]);
                        
    //                 // //  }
                        
    //                 //  }
                    
    //             }
                
    //         }
    //     }
        
    //   }
  


    // for (let i = 0; i < nestedArray.length; i++) {
    //     const innerArray1=nestedArray[i]
    //     for (let j = 0; j < innerArray1.length; j++) {
    //         const innerArray2 = innerArray1[j]; 
    //         if (Array.isArray(innerArray2)) {
    //              for (let k = 0; k < innerArray2.length; k++) {
    //                 const innerArray3=innerArray2[k]
    //                  if (Array.isArray(innerArray3)) {
    //                      for (let m = 0; m < innerArray3.length; m++) {
    //                        const innerArray4=innerArray3[m]
    //                         if (Array.isArray(innerArray4)) {
    //                              for (let n = 0; n < innerArray4.length; n++) {
    //                                const innerArray5=innerArray4[n]
    //                                if (Array.isArray(innerArray5)) {
    //                                 for (let o = 0; o < innerArray5.length; o++) {
    //                                     const innerArray6=innerArray5[o]
    //                                     if (Array.isArray(innerArray6)) {
    //                                         for (let p = 0; p < innerArray6.length; p++) {
    //                                             const innerArray7 = innerArray6[p];
    //                                             if (Array.isArray(innerArray7)) {
    //                                                 for (let q = 0; q < innerArray7.length; q++) {
    //                                                     const innerArray8=innerArray7[q]
    //                                                      if (Array.isArray(innerArray8)) {
    //                                                          for (let r = 0; r < innerArray8.length; r++) {
    //                                                             const element = innerArray8[r];
    //                                                             console.log(element);
                                                                
    //                                                          }
    //                                                      } else{
    //                                                         console.log(innerArray8);
    //                                                      }
    //                                                 }
    //                                             }else{
    //                                                 console.log(innerArray7);
    //                                             }
                                                
    //                                         }
                                            
    //                                     } else {
    //                                         console.log(innerArray6);
    //                                     }
    //                                 }
                                    
    //                                } else{
    //                                 console.log(innerArray5);
    //                                }
                                    
    //                              }
    //                         } else{
    //                             console.log(innerArray4);
    //                         }
    //                      }
    //                  } else{
    //                     console.log(innerArray3);
    //                  }
    //              }
    //         } else{
    //             console.log(innerArray2);
    //         }
            
    //     }
        
    // }
    // function printNestedArray(arr) {
    //     arr.forEach((elem) => {
    //       if (Array.isArray(elem)) {
    //         printNestedArray(elem);
    //       } else {
    //         console.log(elem);
    //       }
    //     });
    //   }
      
    //   printNestedArray(nestedArray);

    const nestedArray = [
      [
        [1, 2],
        [3, 4]
      ],
      [
        [5, 6],
        [7, 8]
      ],
      [9,10,
          [11,
          [12
          ]
          ],
          [13,
          [14,
          [15,16
          ],
          [17,
          [18,
          [19,
          [20,
          [21,
          ]
          ]
         ]
         ]
         ]
         ]
         ]
         ]
         ,[23,24,[25,[26,27,[28,29,[30]]]]]
         ];
   


        //  console.log(nestedArray.flat(Infinity).reduce((a,b)=>a+ +b));



  

//     function accessNestedArray(array) {
//         let sum=0;
//       array.forEach(element => {
       
//          if (Array.isArray(element)) {
//            sum+= accessNestedArray(element)
//          } else{
//           sum+=element;
//          }
//         }
//         );
//         return sum
        
      
//     }

// console.log(accessNestedArray(nestedArray));