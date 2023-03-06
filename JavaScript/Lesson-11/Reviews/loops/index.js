



let arr1 =['Fazliddin','Messi', 'Neymar','Suarez','Iniesta' ,'Xavi' ,'Lewa'];

// let arr2=arr1.map((v,i,a)=>{

//     return v +" : " +"Barca  Num: " +i
// })

// console.log(arr2);
// arr1.forEach((v,i,a)=>{  
// console.log(a);
// })

// map()=> har bir elemnt ga nisbatan shart bajaradi; loop qilib beradi ; update qilsa boladi;
//forEach()=> faqat loop qilish uchun ishlatiladi , return ga ega emas
//filter ()=>array ning ma'lum bir elemntlarini  sort qilish uchun ,  yani faqat true xolatlarini chiqaradi



let nums=[25,56,34,65,44]
let empytArr=[]

let newNums=nums.filter((v,i)=>{
   
    return v<45
    
});

console.log(newNums);



