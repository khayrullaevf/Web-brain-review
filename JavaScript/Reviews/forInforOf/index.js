





   
//   const keys=Object.keys(person)

//   function deleteItem(itemValue) {
//     for (let i = 0; i < keys.length; i++) {
   
//         // console.log(`keys:${keys[i]}, values: ${ person[keys[i]]}`);
//         // console.log(person[keys[i]]);
//     if (person[keys[i]]!==itemValue) {
//        console.log(person[keys[i]]);
 

        
//     }
        
//       }
//   }


//   deleteItem('John')

// function deleteItem(itemKey) {
    

//   for (const key in person) {
//     // console.log(`key : ${key},   value : ${person[key]}`);
//      if (key!==itemKey) {
//         console.log(key);
        
//      }

//   }
// }
//    deleteItem('age')
const person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
  };
  
  const entriesArray = Object.entries(person);
  
  const capitalizedEntries = entriesArray.map(([key, value]) => [key.toUpperCase(), String(value).toUpperCase()]);

  
  const capitalizedObject = Object.fromEntries(capitalizedEntries);
  
  console.log(capitalizedObject); // Output: { NAME: 'JOHN', AGE: '30', OCCUPATION: 'DEVELOPER' }
  



//  const properties=[];
// for (const i of  Object.values(person)) {
//     properties.push(i)
//     console.log(i);
// }

   // const key = keys[i];
    // console.log(keys[i]);
    // console.log(`${keys[i]} :  ${person[keys[i]]}`); 
    //   console.log(keys);