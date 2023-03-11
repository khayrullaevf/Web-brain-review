

let me={
    name:'Fazliddin',
    surname:'Khayrullaev',
    age:20,
    status:'freelancer',
  
}


// Object.freeze(me)
Object.seal(me)
me.nickname='Fazik';
me.age=21
delete me.surname
console.log(me);

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