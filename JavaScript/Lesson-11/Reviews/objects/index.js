


// let nums=[32,21,45,14,78,65,45]

// let nums2=nums.filter(evenOdd);
// function evenOdd(x) {
//  return x%3==0||x%5==0
// }

// console.log(nums2);

// var str='64437';
// str=str.toString().split('')


// console.log(str.reduce((a,b)=>a+ +b,0));

// var total=0;

// for (let i = 0; i < str.length; i++) {
//    total+= +str[i]
    
// }

// console.log(total);


// var arr=['Messi','Ronaldo']

// var[Goat , Trash]=arr;
// console.log(Goat);
// console.log(Trash);



let me={
    name:'Fazliddin',
    surname:'Khayrullaev',
    age:20,
    status:'freelancer',
    pro:'IT',
    year:'2003',
    addNew:function (name,age) {
        console.log('Hello  '+name +' !!!'+' you are ' +age+ '  years old  ');




    }
}

// const{name,surname,age,pro,year ,addNew}=me


// addNew('Fazliddin',20)
// addNew('Daddy',44)
// // console.log(this);

me.weakness= 'Emotions';
me.strength='Diligence';
//  delete me.age

// console.log(me);


const arr=[

    {id:1, name:'Fazliddin'  ,status:'IT' ,age:20},
    {id:2, name:'Alves' ,status:'Most Trophy',age:42},
    {id:3, name:'Pique' ,status:'Mr Prezident' ,age:34},
    {id:4, name:'Araujo' ,status:'Gorilla' , age:25},


]


// const  onDelete=(ids)=>{
    
//     let newArr=arr.filter(({id})=>{
//         return ids!==id
//     })


//  console.log(newArr);
// }

// onDelete(1)


// const onSort=()=>{
 
//     console.log(arr.sort((a,b)=>b.age-a.age));

// }
// onSort()

//  const addNew=(name,status ,age)=>{
//    let newUser={
//     id:arr.length+1,
//     name:name,
//     status:status,
//     age:age,
//    }
//      console.log(...arr , newUser);
//  }
//   addNew('Messi' , 'GOAT', '36')
// const newMe=arr.map(({id,name,status})=>{

//       console.log(id +') ' +name +  '!  your status is : '+status);

// })



//  let mine=[['name','Fazliddin'],['best','sleep']]




// Object.seal(me)


//  Object.freeze(me) => muzlatib qoyadi , hech narsa ishlamaydi
//  me.age=23;

//  console.log(me);

//  console.log(Object.fromEntries(mine)); // arraydan object ga utkazish




 
//  console.log(Object.entries(me));


//  console.log(Object.values(me));  ==> key va value larini array ichida array qilib chiqarib beradi


//  console.log(Object.keys(me).findIndex((v)=>v=='pro'));// returns 3
//  console.log(Object.keys(me));

// Object.values()=> value larni olib beradi
 //Object.keys()= //keylarini olib beradi ,array ichiga olib beradi

// console.log(me.year);
// console.log(me['pro']);
// console.log(me['weakness']);
// console.log(me);



