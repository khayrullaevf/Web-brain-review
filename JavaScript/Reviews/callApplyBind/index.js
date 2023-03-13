

// function checkPrime(num){
//    newNUm= (num**num)+num+41
//    console.log(`${newNUm} is Prime`);
// }

// checkPrime(2)












var people=[
    {id:1, name:'Fazliddin', status:"IT"},
    {id:2, name:'Dani', status:"Left-back"},
    {id:3, name:'Pique', status:"Right-back"},
    {id:4, name:'Aruojo', status:"Centre-back"},
    {id:5, name:'Busquets', status:"Midfielder"},
]


let goat={
    id:10,
    name:'Leo',
    surname:'Messi',
    helloGoat:function(){
        console.log(`Hello  ${this.name} ${this.surname}`);
    }
,}
 goat.helloGoat()

//   Object.freeze(goat)
Object.seal(goat)
// goat.age=36;
// goat.name='Lionel'

// console.log(goat);
// console.log(Object.keys(goat).findIndex(val=>val=='id'));
// console.log(Object.values(goat).findIndex(val=>val=='Leo'));

// console.log(Object.entries(goat).flat(Infinity).filter((val)=>{
//    return val!=='Messi'&&val!=='age'&&val!==36&&val!==10
// }));








const onSort=(arr)=>{
    return arr.sort((a,b)=>b.id-a.id)
}
// console.log(onSort(people));


function onAdd(name,status) {
    let user={
        id:people.length+1,
        name:name,
        status:status,

    }

  people=[...people, user]
    
  console.log(people);
}

// onAdd('Xavi','Boss')
// onAdd('CR7','Trash')






// var str='ACCCBDBBACC';
//terminal=>B

// var str ='Fazliddin'

// let str2=''
// for (let i = str.length-1; i >=0; i--) {
//    str2+=str[i]
    
// }
// console.log(str2);

// let arr=[];
// for (let i = 0; i < str.length; i++) {
    
//     if(arr.includes(str[i])) {
//        console.log(str[i]); break;
//     }

//     arr.push(str[i]);
    

    
// }




let nums=[2,3,[2,3,[2,3,[1,4,[2,3,[2,3,[4,1,2]]]]]]]


function findTotal(array) {
    let total=0;
  
    array.forEach(element => {
        if (Array.isArray(element)) {
            total+=findTotal(element)
        
        }else{
            total+=element;
        }
    })

    return total

}

//  console.log(findTotal(nums));










//  for (let i = 0; i < nums.length; i++) {
//    const inner1=nums[i]
//    if (Array.isArray(inner1)) {
//       for (let j = 0; j < inner1.length; j++) {
//         const inner2=inner1[i];
//         if (Array.isArray(inner2)) {
//             for (let k = 0; k < inner2.length; k++) {
//                 // sums+=inner2[k]
//                 const inner3=inner2[k]
//                 if (Array.isArray(inner3)) {
//                      for (let l = 0; l < inner3.length; l++) {
                        
//                         // //  console.log(inner3[l]); 
//                         //  total+=+inner3[l]
//                         //  console.log(total); 
//                           const inner4=inner3[l]
//                           if (Array.isArray(inner4)) {
//                              for (let m = 0; m < inner4.length; m++) {
//                                 console.log(inner4[m]);
//                                 total+=inner4[m]
                                
//                              }
//                           } else{
//                             console.log(inner4);
//                           }
//                      }
//                 } else{
//                     // console.log(inner3);
//                 }
//             }
//         } 
//         else{
//             // console.log(inner2);
//         }
//         }
//    }
//    else{
//     // console.log(inner1);
//    }
    
//  }
//  console.log(total);








let numbers=[2,5,3,5]
// for (const i of numbers) {
//     console.log(i);
// }
// console.log([...numbers, 6,7,8,9,10,true,undefined,null]);de 
// console.log(numbers.map((val,index)=>val*2));
// console.log(numbers.flatMap(val=>[val*2]));

// console.log(newNums);
// console.log(nums.flat(Infinity).reduce((a,b)=>a+  +b,0));


let me ={
    id:1,
    surname:'Khayrullaev',
    callMe:function(age){

        console.log(`Hello! your name is ${this.name} ${me.surname} , your id is ${me.id} ,your are ${age} years old, your status is ${this.status}`);
    }

}

// console.log('surname' in me);
for (const key in me) {
  
    //    console.log(`key :${key} , value:${me[key]}`); 
    
}

let my={
    name:'Fazliddin',
    status:'Freelancer',
}



 const introYou=me.callMe.bind(my);
//  introYou(20)
// me.callMe.bind(my,20)();


// let arr=[1,2,3,4];

// for (const key of arr) {
//     console.log(key);
// }

let str='F4az1lid2din3'
// for (const val in str) {
//     console.log(val);
// }


let sum=0;
for (let i = 0; i < str.length; i++) {
    if (str[i]==+str[i]) {
         sum+=+str[i]

    }
}
// console.log(sum) ;


// console.log(str.match(/[0-9]/g).reduce((a,b)=>a+ +b,0));

// function sumNestedArray(array) {
//     let sum = 0;
//     array.forEach(element => {
//       if (Array.isArray(element)) {
//         sum += sumNestedArray(element);
//       } else {
//         sum += element;
//       }
//     });
//     return sum;
//   }

//   console.log(sumNestedArray(nums));