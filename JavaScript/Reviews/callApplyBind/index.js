


var people=[
    {id:1, name:'Fazliddin', status:"IT"},
    {id:2, name:'Dani', status:"Left-back"},
    {id:3, name:'Pique', status:"Right-back"},
    {id:4, name:'Aruojo', status:"Centre-back"},
    {id:5, name:'Busquets', status:"Midfielder"},
]









const onSort=(arr)=>{
    return arr.sort((a,b)=>b.id-a.id)
}
// console.log(onSort(people));


function onAdd(name,status) {
    let user={
        id:people.length+1,
        name:name,
        status:status
    }

  people=[...people, user]
    
  console.log(people);
}

// onAdd('Xavi','Boss')
// onAdd('CR7','Trash')






// var str='ACCCBDBBACC';
//terminal=>B

var str ='Fazliddin'

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




let nums=[2,3,[2,3,[2,3]]]

let numbers=[2,5,3,5]
// console.log(numbers.map((val,index)=>val*2));
console.log(numbers.flatMap(val=>[val*2]));

// console.log(newNums);
// console.log(nums.flat(Infinity).reduce((a,b)=>a+  +b,0));