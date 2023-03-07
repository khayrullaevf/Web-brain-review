

let data={
    name:'Fazliddin',
    password:'123'
}


const register=(name,pass)=>{

    return new Promise ((response , rejected)=>{
       setTimeout(() => {
         if (data.name==name&&data.password==pass) {
            response("LoggedIn")
            
         } else{
            rejected('try later!')
         }

       }, 2000);
    })
}

register('Fazliddin1','123').then((res)=>{
    console.log(res);
}).catch((rej)=>{
    console.log(rej);
})