




const me={
    id:1,
    name:'Fazliddin',
    surname:'Khayrullaev',
    hiMe:function(){
       
        console.log(`Hi ${me.name}  ${me.surname} ${this.dad}! you are  ${this.age}  years old!`);
    }
}

// me.hiMe.call(me2);
// var name=me.name;
// var surname=me.surname;
// const{name,surname}=me;

const me2={
    dad:'Hasan ogli',
    age:20,
}
// const {dad,age}=me2
// me.hiMe.bind(me2)();
// console.log(name);
// console.log(dad);
// console.log(age);



const people=[
    {id:1,name:"Fazliddin",surname:'Khayrullaev', status:'IT'},
    {id:2,name:"Dani",surname:'Alves', status:'Most Trophy'},
    {id:3,name:"Gerard",surname:'Pique', status:'Mr President'},
    {id:4,name:"Ronald",surname:'Araujo', status:'Gorilla'},
]

function onSearchName(search) {
  for (let i = 0; i < people.length; i++) {
    if (people[i].name.includes(search.toLowerCase())||people[i].name.includes(search.toUpperCase())) {
        console.log(people[i]);
    }
    
  }

    
}

// onSearchName('g')




function onAdd(name,surname,status) {
    let player={
        id:people.length+1,
        name:name,
        surname:surname,
        status:status,
    }
    console.log([...people,player]);
}
// onAdd('sergio','Busquets','Maestro')








function onSort(array) {
    const sortedPeople=array.sort((a,b)=>b.id-a.id)
    console.log(sortedPeople);
}

// onSort(people)





function onDelete(Id) {

    const updatedPeople=people.filter(({id})=>{
        return id!==Id
    })
    console.log(updatedPeople);
}

// onDelete(2)
// onDelete(4)

// const players=people.map(({id,name,surname,status})=>{

//     console.log(`${id}) ${name} ${surname} , your status is ${status}`);
// })

let arr =[2,3,[2,3,[2,3,[2,3,[2,3,[2,3,[2,3,[2,3,[2,3]]]]]]]]]
// console.log(nums.map(val=>[val*2]));
// const nonEmptyArrays = arr.flatMap(array => array.length ? array : []);
// console.log(nonEmptyArrays);

// let newArr=arr.flat(Infinity).reduce((a,b)=>a+ +b,0)

// console.log(newArr);

function findSum(arrs) {
    var sum=0;
   arrs.forEach(value => {
        if (Array.isArray(value)) {
            sum+=findSum(value)
        } else{
            sum+=value
               
        }
     });

     return sum
  

}
// console.log(findSum(arr));
// findSum(arr)
// let str='A1!1C!ABDBACC'
// let arr=[];


// for (let i = 0; i < str.length; i++) {
//     // console.log(arr, str[i]);
//     // console.log(arr.includes(str[i]));
//     if (arr.includes(str[i])) {
//         console.log(str[i]); break;
//     }
    
//     arr.push(str[i])
   
// }



let nums=[2,3,4,5]

// nums=[...nums, 'hello', true, undefined];
// for (const i of nums) {
//     console.log(i);
// }


// console.log(nums.map(val=>[val*2]));
// console.log(nums.map(val=>[val*2]).flat(Infinity));
// console.log(nums.flatMap(val=>[val**2]));


