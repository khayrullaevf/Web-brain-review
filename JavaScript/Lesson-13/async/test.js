

let data={
    name:'Fazliddin',
    password:'123'
}


const register=(pass)=>{

    return new Promise ((response , rejected)=>{
       setTimeout(() => {
         if (data.password==pass) {
            response("LoggedIn")
            
         } else{
            rejected('try later!')
         }

       }, 2000);
    })
}

register('124').then((res)=>{
    console.log(res);
}).catch((rej)=>{
    console.log(rej);
})