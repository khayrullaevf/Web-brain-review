

let me={
    name:'Fazliddin',
    surname:'Khayrullaev',
    age:20,
    status:'freelancer',
    myFunc:function(hobby){
        console.log(`Hello!! My name is ${this.name} ${this.surname} , I'm   ${this.age} years old,  I like ${hobby}` );
    }
}

const{name,surname,age,status,my}=me
// console.log(name);
// console.log(surname);
// console.log(age);
// console.log(status);

// myFunc.call(me,'football')


const myFunc=me.myFunc;



// me.myFunc('footbal')


var people=[
    {id:1, name:'Fazliddin', status:"IT"},
    {id:2, name:'Dani', status:"Left-back"},
    {id:3, name:'Pique', status:"Right-back"},
    {id:4, name:'Aruojo', status:"Centre-back"},
    {id:5, name:'Busquets', status:"Midfielder"},
]


function onAdd(name,status) {
   let user={
    id:people.length+1,
    name:name,
    status:status,
   }
   people=[...people, user];
   console.log(people);
    
}
// onAdd('CR7', 'trash')
// onAdd('Messi', 'GOAT')
// onAdd('Iniest', 'Magician')






function onDelete(iD) {
    
    const updatedPeople=people.filter(({id,name,status})=>id!==iD)
    console.log(updatedPeople);

}
// onDelete(2)
const callPeople=people.map(({id,name,status}, index, array)=>{
    
    // console.log(status);
//    console.log(`id:${id}, name: ${name}, status: ${status}`);


})










// console.log(this);
// console.log(this);
// console.log(this);
// console.log(this);
// alert('Hi')
// prompt(me.myFunc())
// print('hello')
// Object.freeze(me)
// Object.seal(me)
// me.nickname='Fazik';
// me.age=21
// delete me.surname
// console.log(me);

// let leo=[['name','Leo'],['surname', 'Messi']]

// console.log(Object.fromEntries(leo));

// for (const key in me) {
//    console.log(`key) ${key} ,  --> value: ${me[key]} `);
// }


// console.log(Object.entries(me));

// console.log(Object.values(me).findIndex(val=>val=='freelancer'));

// console.log(Object.keys(me).findIndex(value=>value=='name'));
// console.log(Object.keys(me).findIndex(value=>value=='surname'));
// console.log(Object.keys(me).findIndex(value=>value=='age'));
// console.log(Object.keys(me).findIndex(value=>value=='status'));


// console.log(me.name);
// console.log(me['age']);