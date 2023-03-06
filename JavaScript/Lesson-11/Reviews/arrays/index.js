



var arr =['Fazliddin' , 'Shamsiddin' , 'Shahobiddin ','Raykhona'];
var str=['M','n','A' ,'C','B', 'E' ,'D'];
var nums=[23,1,45,32,2,5,3,2,1,6,8,6,9,11];
var names=['Fazliddin Khayrullaev','Hasan ogli'];

let newArrs=arr.concat(names);

let un=arr.forEach((v,i,a)=>{
    // console.log('index  :' + '  '+ i+ '   value  : '+v + '   array : '+a) ;
    // return 'hello ' +v +' !'
    console.log(i+' : '+v);

})

// console.log(un);



// arr.push("Messi")
// arr.push("Lionel")
// arr.shift() // shift()=>boshidan bitta item uchirib beradi
// arr.unshift('Iniesta') // unshift()=> boshidan bitta  qushib beradi


 
//console.log(arr);
// var number=879654321;

// console.log( + number.toString().split('').sort((a,b)=>b-a).join('')); //numberni oldin stringga keyin array ga utkazib sort qilish va yana oldin stringga keyin stringga qaytarib quyish





// console.log(name.split('')); //string ni array ga utkazib beradi
// console.log(name.split('').reverse());// reverse () array itemlarini teskarisiga ugirib beradi


// console.log(name.split('').reverse().join('')); join("") array itemlarini bir biriga qushib bittta string qilib beradi






// console.log(nums.length);
// console.log(str.length);
// console.log(arr.length);


// console.log(arr.slice(0,3));
// console.log(arr);
// console.log('=========');
// console.log(arr.splice(0,3));
// console.log(arr);




// console.log(str.concat(nums));
// console.log(nums.concat(56,65));
//concat ()=qushib beraid
// console.log(str.sort((x,y)=>x.localeCompare(y)).join(''));



//
//join('')=> arrayni stringga utkazib beradi;
// var lastWord=arr[arr.length-1]; //oxirgi item
// var lastLetter=lastWord[lastWord.length-1] //oxirgi item ning oxirgi harfi

// console.log(lastLetter);

//  nums.splice(13,1 ,'on bir'); kesib delete va add qilsa boladi
// console.log(nums.slice(3, 14));   3nchi index dan 14 nchi length gacha copy  qilib beradi;
// console.log(nums.splice(4,6));    4 nchi index dan  6 ta length qirqib beradi
//  console.log(nums);

// console.log(nums.sort((a,b)=>b-a)); numberlarni teskarisiga sort qilib beradi


// console.log(str.sort((a,b)=>a.localeCompare(b))); katta harflarni ham sort qilib beradi;


// arr.push('Zargul');
// arr.push('Hasan');  oxiridan bitta item qushib beradi;

// arr.pop() oxiridan bitta uchirb beradi


// console.log(arr);