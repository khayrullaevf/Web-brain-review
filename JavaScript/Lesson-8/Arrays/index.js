


// console.log('Meee');

// let me=['Fazliddin', 'Khayrullaev', 'HasanOgli'];



// var lastWord=me[me.length-1];


// var lastLetter=lastWord[lastWord.length-1];
// console.log(lastLetter);







// Array=>massiv

//sort , slice , splice, join , concat , push shift unshift






// let arr=[1,2,3,2,8,2,9,4,100,56] ; 
// console.log(arr.sort((a,b)=>b-a));  // teskari sort

// console.log(arr.sort((a,b)=>a-b)); //sorting bigger numbers


// console.log(arr.join(''));


let names=['fazliddin','raykona','shamsiddin','shahobiddin','hasan','zargul'];


let firstName=names[0]
// console.log(firstName);
let lastName=names[names.length-1];
// console.log(lastName);  

let lastWord=lastName[lastName.length-1];
lastWord+='!'
// console.log(lastWord); // returns !n

let middleName=names[Math.floor(names.length/2)];
// console.log(middleName);  //returns shahobddin

let letters=['a','d','m','r','n','b','A','C'];
// console.log(letters.sort((a,b)=>b.localeCompare(a)));
// console.log(letters.sort((v,w)=>v.localeCompare(w)).join('**')); 


let me='FazojidhhiHKJoiqd';
// console.log(me.match(/[a-z]/g).join(''));

// console.log(me.match(/[A-Z]/g).join(''));

// console.log(letters.concat('FUCK YOU','Suck'));

//concat qushib beradi;


// const cities = ["Tokyo","Cairo","Los Angeles","Paris","Seattle"];
// //   cities.splice(0,4);
// cities.slice(0,4)

//   console.log(cities);

// const newCityArr = cities.slice(2); // agar index berilmasa nol dan hisoblaydi

// console.log("Original: ", cities)
// console.log("New: ", newCityArr)
// console.log(letters.slice(2,4));
// console.log(letters);
// console.log(letters.splice(2,4));
// console.log(letters);


// var food = ['pizza', 'cake', 'salad', 'cookie'];
// // console.log(food[food.length-1].split('').reverse().join(''));
//   for (let i = 0; i < food.length; i++) {
//    console.log( food[i] .split('').reverse().join(''));
    
//   }

// // food.splice(1,0,"burrito")
// // console.log(food);
//  console.log(food.splice(1,2));

// food.splice(0,2); //salad, cookie
// food.splice(0,1)
// console.log(food);

// var str='Fazliddin'
// console.log(str.split('').reverse().join('').toLowerCase());

// let num=156238798;
// let sortNum=+num.toString().split('').sort((a,b)=>a-b).join('');
// // sortNum= +sortNum
// console.log( `sorted num:  ${  sortNum} `);
// console.log('original: ' +num);

// console.log(typeof sortNum);



let arr=['olma','gilos','behi','nok']
// arr.push('behi','nok');
// arr.pop()
// arr.unshift('banana')
// arr.concat('me') 
// console.log(arr.concat('me', 'you' ,'we'));
// arr.splice(1,2 , 'we');
// console.log(arr);

// let newarr= arr.forEach((value,index,array)=>{
// // console.log('array :' +index);
// // console.log( value);
// // console.log( index);
// // console.log( array);
// return 'hello'



// });

// arr.forEach(element => {
//      console.log(element);
// });
// console.log(newarr);
 //arr[i]=value;
 //index=i;
 //arr=array

for (let i = 0; i < arr.length; i++) {
    // console.log(arr); //===array; =['olma','gilos','behi','nok']
//                                    ['olma','gilos','behi','nok']
//                                    ['olma','gilos','behi','nok']
//                                    ['olma','gilos','behi','nok']

// console.log('i love you');


    // console.log(arr[i]); //===value; olma , gilos , behi , nok
    // console.log(i); //===index;  0, 1, 2, 3
    
}



// let nums=[12,4,4,55,77,45,65,34,6,64,70]


// let newNum=nums.find((value ,index,array )=>{

//     // console.log(array);
//     return value!==51;
// }

        
// )

// console.log(newNum);