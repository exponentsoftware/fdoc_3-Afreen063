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
    console.log(studentInfo.skills.frontEnd);
    console.log(result.skills.frontEnd);

}
copyAndEditObject(student);