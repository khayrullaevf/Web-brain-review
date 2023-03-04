


//  let me={
//     name:'Fazliddin',
//     surname:'Khayrullaev',
//     age:19,
//     pro:'IT',
//     status:'student',
//     myFunc:function(){
//         // console.log(this.name);
//         // console.log(this.surname);
//         // console.log(this.age);
//         // console.log(this.pro);
//         // console.log(this.status);
//         console.log(this);

//         //bu yerda this =>object ni uziga ya'ni  me ga teng boladi

//     }
//  }


//  const {name,surname,age,pro,enemy=['Love']}=me;



//  console.log(pro);
//  console.log(age);
//  console.log(surname);
//  console.log(enemy);



// const students=[

// {id:1,name:'Fazliddin' , work:'IT' ,age:19},
// {id:2,name:'Messi' , work:'GOAT' ,age:35},
// {id:3,name:'Lewa' , work:'Mr GOAL' ,age:34},
// {id:4,name:'Xavi' , work:'Boss' ,age:42},
// {id:5,name:'Busquetos' , work:'Mr Vision',age:35},

// ]

// let onSort=()=>{
//     return students.sort((a,b)=>a.name.localeCompare(b.name))


// }

// console.log(onSort());





// function onDeletet(ids) {

//  let newArr= students.filter(({id,name,work})=>{
   
//   if (id!==ids) {
    
//     return id

//      } 

//     })

//      console.log(newArr);
    
//    }
//  onDeletet(5)


// function onDelete(ids) {

//  return students.filter(({id,name,work})=>id!==ids)
   
 

// }
// console.log(onDelete(4));



// let onCreate=(name, work)=>{

// let newUser={
//     id:students.length+1,
//     name:name,
//     work:work
// }

//  console.log(...students, newUser);

// }
// onCreate('Shamsiddin', 'Player')





// students.map(({id,name,work})=>{

//     console.log(id + ' ---> ' + name +'--->  Your work is : ' +work);


// })








//  var name=me.name;
//  var surname=me.surname;
//  console.log(name);
//  console.log(surname);


//  me.myFunc();
//  console.log(this); eng katta urab turuvchu=> window , global window
//  console.log(this);
//  console.log(this);
//  console.log(this);



//  Object.freeze(me) muzlatib qoyadi
// Object.seal(me)  faqqat update ishlaydi , delete  va and ishlaymaydi

//  console.log(me.name);
//  console.log(me.surname='Khayrullaev');
//  console.log(me);

//  console.log(me['name']='EMINEM');
// //  console.log(Object.keys(me));
//  console.log(Object.keys(me).findIndex(v=>v=='name'));
// //  console.log(Object.values(me));
// //  console.log(Object.values(me));
// //  console.log(Object.values(me));

//  let a =Object.entries(me); //qiymat va key ni array ichida array qilib olib beradi
//  console.log(a);

//  console.log(Object.fromEntries(a));






// var str='AVCCAVBDBACC';
// let arr=[];


// for (let i = 0; i < str.length; i++) {
 

//     if (arr.includes(str[i])) {
//         console.log(str[i]); break
        
//     }

//     arr.push(str[i])

 
    
// }



// for (let i = 0; i < 10; i++) {
//      if (i===3) {
//         break
//      }
//      console.log(i);
// }


var arr =[2,3,[3,4,[3,4]]] //19
var str=['Fazliddin',['Shamsiddin',['Shahobiddin',['Rayhona']]]]

// console.log(arr.flat(Infinity).reduce((a,b)=>a+ +b));  //nested arrayni bitta arrayga utkazish uchun arr.flat(Infinity) ishlatiladi;
// console.log(str.flat(Infinity));


