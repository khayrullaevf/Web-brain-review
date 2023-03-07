



//Synchronous---> xohlagancha request bera olmaymiz , bitta request ning response kelsa keyingi request junata olamiz
//Asynchronous---> xohlagancha request junatamiz 


//Callback hell


// const users=[
//     {name:'Fazliddin' ,surname:'Khayrullaev'},
//     {name:'Lionel' ,surname:'Messi'},
//     {name:'Cristiano' ,surname:'Ronaldo'},
//     {name:'Ronald' ,surname:'Araujo'},
// ]

// function getUsers(){
//     setTimeout(() => {
        
//      let result= '';
//       users.forEach((user)=>{
//       result+=`<li> ${user.name}  ${user.surname} </li>`

//         })

//         document.body.innerHTML=result


//     }, 3000);
// }

// getUsers()


// function addUser(user,callback){
//    setTimeout(() => {
    
//     users.push(user);

//     callback()

//    }, 2000);
// }

// addUser({name:'Toshmat' , surname:'eshmatov'},getUsers);


// const users=[
//     {name:'Fazliddin' ,surname:'Khayrullaev'},
//     {name:'Lionel' ,surname:'Messi'},
//     {name:'Cristiano' ,surname:'Ronaldo'},
//     {name:'Ronald' ,surname:'Araujo'},
// ]

// function getUsers(){
//     setTimeout(() => {
        
//      let result= '';
//       users.forEach((user)=>{
//       result+=`<li> ${user.name}  ${user.surname} </li>`

//         })

//         document.body.innerHTML=result


//     }, 3000);
// }



// function addUser(user){

//     return new Promise((resolve , rejected)=>{

//         setTimeout(() => {
    
//             users.push(user);
        
//             const error =false;
//              if(!error){
//                 resolve()
//              } else {
//                 rejected( 'something`s wrong')
//              }
        
//            }, 2000);
//     })
  
// }

// addUser({name:'Toshmat' , surname:'eshmatov'})
// .then(getUsers).catch((err)=>{

//     console.log('error bor');
// })
const users=[
        {name:'Fazliddin' ,surname:'Khayrullaev'},
        {name:'Lionel' ,surname:'Messi'},
        {name:'Cristiano' ,surname:'Ronaldo'},
        {name:'Ronald' ,surname:'Araujo'},
    ]
    
    function getUsers(){
        setTimeout(() => {
            
         let result= '';
          users.forEach((user)=>{
          result+=`<li> ${user.name}  ${user.surname} </li>`
    
            })
    
            document.body.innerHTML=result
    
    
        }, 3000);
    }
    
    
    
    function addUser(user){
    
        return new Promise((resolve , rejected)=>{
    
            setTimeout(() => {
        
                users.push(user);
            
                const error =false;
                 if(!error){
                    resolve()
                 } else {
                    rejected( 'something`s wrong')
                 }
            
               }, 2000);
        })
      
    }
    
    // addUser({name:'Toshmat' , surname:'eshmatov'})
    // .then(getUsers).catch((err)=>{
    
    //     console.log('error bor');
    // })



   async function result(){
     await addUser({name:'Toshmat' , surname:'eshmatov'})
    //  await getAges()
     getUsers()
    }

    result()