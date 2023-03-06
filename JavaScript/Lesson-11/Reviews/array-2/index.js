



//Review

// var str='Hello'
// console.log({...str});



let names=['Fazliddin', 'Lionel', 'Cristiano' , 'Luka'];



// names.pop() ---> orqasidan bitta uchirib beradi;
// names.push('Isco') ---> orqasidan bitta item qoshib beradi
// names.unshift('Ramos');  --->boshidan bitta item qushib beradi
// names.shift() --->boshidan bitta item uchirib tashlaydi
// names.shift()
// console.log(names);

// names.map((v,i,a)=>{


//     // console.log(a); array ni 4 marta qayta chiqarib beradi;
// // console.log(v);  == names[i] ga teng , valuelarini loop qilib beradi
// // console.log(i); === i ni oziga teng va faqat indexlarini chiqarib beradi;

// })

   var newNames=names.map((v,i,a)=>{

   return 'Hello'
   })

   console.log(newNames);

// console.log(names);
// console.log(names.slice(1,4)); //


// names.slice(1,3)  ==  shunchaki copy qiladi
// console.log(names);

// names.splice(1,3); ==  kesib tashlaydi
// console.log(names);

// console.log(names.concat('Xavi'));
// console.log(names.concat('Villa')); concat bitta item qushhib beradi


// // console.log(...names[2]);  //Cristiano

// let lastWord=names[names.length-1];
// let lastLetter=lastWord[lastWord.length-1]

// console.log(lastLetter);


let nums=[8,4,3,6,5,2,7,8,1,9,200,100,211,344];

let num=613281243;


// nums.push(num);
// console.log(nums);


// console.log( + num.toString().split('').sort((a,b)=>a-b).join(''));
// console.log(nums.sort((a,b)=>b-a));


let letters=['c','a','d','A','b','e','C' ,'FF','DD' ];
//  console.log(letters.splice(2,6));
//  console.log(letters);
// console.log(letters.sort((a,b)=>a.localeCompare(b)));