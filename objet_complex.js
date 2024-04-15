var my_object = {
    firstname: 'jean',
    lastname: 'dupon',
    options_name: 'OPtion',
    options:{
        name : 'options',
        testing: true
    }
}
var tab = ['lastname', 'firstname', 'options' ]
console.log( my_object['lastname'], my_object['firstname'])

var my_tree = {
    firstname :"jean",
    lastname :"Dupont",
    dateStart: 1910,
    dateEnd: 1943,
    children:[
        {
    firstname :"jean Junior",
    lastname :"Dupont",
    dateStart: 1910,
    dateEnd: 1943,
    children:[
        
    ]
}
    ]
    }
    my_tree.children.push ({
    firstname :"jean Junior 2 ",
    lastname :"Dupont 2 ",
    dateStart: 1935,
    dateEnd: 1979,
    children:[]
    }
    )

my_tree.children = []
console.log(my_tree.children)
console.log(my_tree.children)
console.log(my_tree.children.length)