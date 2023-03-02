




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



let obj={
    name:'Fazliddin',
    surname:'Khayrullaev',
    addnew:function(){
        console.log("FUCK YOU!!!");
    }
}

obj.addnew();