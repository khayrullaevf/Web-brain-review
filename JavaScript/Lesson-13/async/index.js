



//Callback == funksiyani boshqa bir funkisya parametrida kelishi


//Promise
let data=
    {id:1, name:'Fazliddin' , pasword:'123'};


const register=(name,pasword)=>{



 return new Promise ((response, rejected)=>{
 
     if(data.name==name&&data.pasword==pasword){
        response('Logged  in')
 
     } else{
        rejected('Wrong data')
     }


});
};


register('Fazliddin' , '123').then((res)=>{
    // console.log(res);
    return (res+=data.name)
}).then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})


















// let data=[
//     {id:1 , name:'Fazliddin',status:'IT'},
//     {id:2 , name:'Messi' ,status:'GOAT'},
//     {id:3 , name:'CR7' ,status:'Penni'},
// ];


// const filterData=( registerGoat, king)=>{
//     let goat= data.filter((item)=>item.status==king)
//     let penni= data.filter((item)=>item.status=='Penni')
//     registerGoat(goat)

   
// } ;



// const registerGoat=(calling)=>{
//     console.log(calling);
// }

// filterData( registerGoat, 'GOAT' )






//const login=(func)=>{

    //     console.log(func());
    // }
    
    // login(register);
    
    
    // function register(){
     
    //     return true
    
    // }