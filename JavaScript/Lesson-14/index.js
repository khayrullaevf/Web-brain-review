

var user={
    name:'Anvar',
    age:17,
    child:{
        name:'Abdulaziz',
        age:10,
        child:{
            name:'Asror',
            age:30,
        }
    }
}
 
var sum=0;


function getAge(obj) {
   sum+=obj.age

    if (obj.child) {
        getAge(obj.child)
    }
    
}
 getAge(user)
 console.log(sum);
