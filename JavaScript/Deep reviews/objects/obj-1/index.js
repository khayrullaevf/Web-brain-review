




const me={
    id:1,
    name:'Fazliddin',
    surname:'Khayrullaev',
    hiMe:function(){
       
        console.log(`Hi ${me.name}  ${me.surname} ${this.dad}! you are  ${this.age}  years old!`);
    }
}

// var name=me.name;
// var surname=me.surname;
const{name,surname}=me;

const me2={
    dad:'Hasan ogli',
    age:20,
}
const {dad,age}=me2
// me.hiMe.call(me2);
// console.log(name);
// console.log(dad);
// console.log(age);



const people=[
    {id:1,name:"Fazliddin",surname:'Khayrullaev', status:'IT'},
    {id:2,name:"Dani",surname:'Alves', status:'Most Trophy'},
    {id:3,name:"Gerard",surname:'Pique', status:'Mr President'},
    {id:4,name:"Ronald",surname:'Araujo', status:'Gorilla'},
]


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