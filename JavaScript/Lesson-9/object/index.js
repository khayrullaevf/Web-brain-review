




//Object => non-primitive;



// var str='abror'
//  var str2;
// str2==str;


// let arr=[1,2,3,4,5];
//  let arr2=[1,2,3,4,5];
// console.log(arr!==arr2);


// console.log(null<0);
// console.log(null>0);
// console.log(null>=0);
// console.log(null<=0);

// let me={
//     name:'Fazliddin',
//     sur_name:'Khayrullaev',
//     age:20,
//     year:2003,
//     date:11,
//     pro:'programmer'
// }



// me.name='death'

// me.status='noone'

// console.log(me['sur_name']);
// console.log(me.sur_name);
// console.log(me.age);
// console.log(me.year);
// console.log(me.date);
// console.log(me.pro);
// console.log(me.name);

// console.log(me);

// console.log(Object.keys(me));// keylarini olib beradi, array qaytarardi
// console.log(Object.keys(me).findIndex(value=>value=='name'));

// console.log(Object.values(me)); // value larini olib beradi , array ichida


// console.log( Object.entries(me)); // array ichida array
//freeze=muzlatib quyadi
// let arr=[['name','Fazliddin'] , ['surname', 'Khayrullaev'],['profession','software engineer']];

// let newarr=Object.fromEntries(arr); //arrayni object ga convert qilib beradi
//  delete newarr.name=> delete uchirib beradi

// Object.freeze(newarr)

// newarr.name='Men';


// console.log(newarr);

//Object.seal(object_name) => faqat update boladi;



// let obj={
//     name:'Fazliddin',
//     surname:'Khayrullaev',
//     addnew:function(your_name,your_surname){
//         console.log("What's your name?  -->  " +your_name +' '+your_surname);
//         console.log(this.name);
//     }
// }

// obj.addnew('Fazliddin','Khayrullaev');
// obj.addnew('Fazliddin','Khayrullaev');
// obj.addnew('Fazliddin','Khayrullaev');

// console.log(this);



// var hero={
//     name:'Simba',
//     realName:'Lion'
// }

// var name=hero.name;
// var realName=hero.realName;


// const {name,realName , surname=['joker']}=hero;
// console.log(name);
// console.log(realName);
// console.log(surname);

//Destructuring array da , xohlagan nomdagi variable dan foydalana olamiz , object da faqat key orqali destructure qilamiz


const arr=[
    {id:1,name:'Abror' , status:'Mentor'},
    {id:2,name:'Fazliddin', status:'IT'},
    {id:3,name:'Rayhona' , status:'CEFR'},
    {id:4,name:'Shahobiddin'  , status:'Game'},
    {id:5,name:'Shamsiddin' , status:'Football'},
]


const names=arr.map(({id,name,status})=>{
    console.log(id+ ' ) ' +name + ' --> ' + status);
   
   
})