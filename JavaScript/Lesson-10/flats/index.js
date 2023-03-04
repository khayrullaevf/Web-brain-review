
// var arr =[2,3,[3,4,[3,4]]] //19
// var str=['Fazliddin',['Shamsiddin',['Shahobiddin',['Rayhona']]]];


// console.log(arr.flat(Infinity).reduce((a,b)=>a+ +b)); 19

// console.log(arr.flat(Infinity).map(value=>[value**2]));
// console.log(arr.flat(Infinity).map(value=>[value**2]));

// const arr1 = [1, 2, [3], [4, 5], 6, []];

// const flattened = arr1.flatMap(num =>{
//     return num**2
// } );
// console.log(flattened);



//Spread


// var arr=[1,2,3,4];

// var newArr=[...arr,"NewUser"]

// console.log( newArr);


var me={
    name:'Fazliddin',
    surname:'Khayrullaev',
    age:19,
    addNew:function(age){
        console.log(this.major ,age );
        console.log(this.health,age);
        console.log(this.id,age);
    }
}




var you={


    id:8,
    major:'IT',
    health:'Sick'
}

var newUser=me.addNew.bind(you);
newUser(20)



// me.addNew.call(you ,20);


// me.addNew.apply(you ,[20])  apply ning call dan  farqi argumentni [] array ichida qabul qiladi
// me.addNew.bind(you)(20)   bind ning  call va apply dan  farqi , uni chiqirish quyish kerak



// let newMe={...me,profession:'Developer'};
// console.log(newMe);






