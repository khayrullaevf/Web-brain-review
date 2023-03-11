


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


