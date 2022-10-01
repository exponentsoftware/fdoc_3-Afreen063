//const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
//console.log(name, skills, scores)
//console.log(jsScore, reactScore)


const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]
function convertArrayToObject(students)
{
    let result=[];
  for(let i=0;i<students.length;i++)
  {
   let {name,skill,scores}={
                                name : students[i][0],
                                skill : students[i][1],
                                scores : students[i][2]
                            }
                            result[i]={name,skill,scores};
  }
  //const newStudents = {...result};
  //result[0].name="Afreen";
  //console.log(result);
  //return console.log(newStudents); 
  //this is shallow copy, means when the value of result or newStudents changed the changes will appear in both.

 const newStudents =JSON.parse(JSON.stringify(result));//deep copy it means if we change newobject the result will not chnage
  newStudents[0].name="Afreen";
  result[0].name ="neah";
  console.log(result);
  console.log(newStudents);

  
  

}
convertArrayToObject(students)

// copy object without changing the original object

const student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

function copyAndEditObject(studentInfo)
{
    let result = JSON.parse(JSON.stringify(studentInfo));
    result.skills.frontEnd.push({skill:'BootStrap',level: 8})
    result.skills.backEnd.push({skill:'Express',level: 9})
    result.skills.dataBase.push({skill:'SQL',level: 8})
    result.skills.dataScience.push('SQL')
    console.log(studentInfo.skills);
    console.log(result.skills);


    //length of object keys
    let l=0
    Object.keys(result).forEach((e)=>{
    l++
   })
   console.log(l);

   //length of object value
   let value=0;
   Object.values(result).forEach(()=>{
    value++
   }
   )
   console.log(value);

   //length of skill object
   let length=0
   Object.keys(result.skills).forEach((e)=>{
    length++
   })
   console.log(length);

   //iterate key of object
   Object.keys(result).forEach((e)=>{
    console.log(e);
   })
}
copyAndEditObject(student);


// question 2

const users = [
    {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'17/05/2019 9:00 AM',
            isLoggedIn: false
    },
    {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'17/05/2019 9:30 AM',
            isLoggedIn: true
    },
    {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'17/05/2019 9:45 AM',
            isLoggedIn: true
    },
    {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'17/05/2019 9:50 AM',
            isLoggedIn: false
    },
    {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'17/05/2019 10:00 AM',
            isLoggedIn: false
    }
    ];

    const products = [
{
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
},
{
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
},
{
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
}
];


function signUp(username, email,password, createdAt)
{
    let check=0;
     for (let i=0;i<users.length;i++)
     {
        Object.values(users[i]).forEach((e)=>{
            if(e==username)
            {
                console.log("Username exists")
                check++;
            }
            else if(e==email)
            {
                console.log("email already registerd")
                check++;
            }
        })
     }
     if(check==0)
     {
        users.push({
            username: username,
            email: email,
            password: password,
            createdAt:createdAt,
            isLoggedIn: true
        })
        console.log(users)
     }
}

signUp("Afreen", "email","123443", "date")