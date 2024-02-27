let data = {
    sophia : {
        id : 30,
        study : [
            {
                primary : 
                [
                    {schoolName : 'ABC primary School'},
                    {location : 'savar'}
                ]
            },
            {
                secondary :
                [
                    {schoolName :"Plashbari"},
                    {location :"Plashbari"}
                ]
            }
        ]
    }
}

// console.log(data.sophia.study[1].secondary[1]);



let students = {
    2222 : {
        name :'jack',
        section : 'C',
        class : 'IX',
        address : {
            'building no' : 12,
            'street' : 'St .jonson',
            'city' : 'peterbug',
            'country' : 'Bangladesh'
        },
        3333 : {
            name:'Hearry',
            section : 'D',
            class : "X",
            address : {
                'building no' : 52,
                'street' : 'savar ka',
                'city' : 'kacha',
                'country' : 'Bangladesh' 
            }
        }
    }
}

console.log(students[2222].address['city'])
console.log(students[3333].name)