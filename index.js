const generateHTML=require('./develop/src/generateHTML')
const inquirer=require('inquirer');
const fs=require('fs');
const Manager=require('./develop/lib/Manager')
const Engineer=require('./develop/lib/Engineer')
const Intern=require('./develop/lib/Intern')


const employeeArray=[];

const getManagerInfo=()=>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's ID number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email address?",
        },
        {    
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?",

        } 
    ])
    .then(managerData=>{
        let {name,id,email,office}=managerData;
        const manager=new Manager(name,id,email,office);

        employeeArray.push(manager);
        console.log(employeeArray);
        return employeeArray;

    })
}

const addEmployee=()=>{
    return inquirer.prompt([        
        {
            type: 'list',
            name: 'role',
            message: 'Would you like to add an Engineer or Intern?',
            choices:['Engineer', 'Intern', 'No, create team page.']
        }
    ])
   
    .then((data)=>{
        if(data.role==='Engineer'){
            getEngineer();
        } else if(data.role==='Intern'){
            getIntern();
        } else {
            const htmlContent=generateHTML(employeeArray)
            console.log(htmlContent);
            writeFile('./develop/dist/team.html', htmlContent);
    
        }
        })
    };
const getEngineer=()=>{
    
    return  inquirer.prompt([
    {
        type:'input',
        name:'name',
        message: "What is the engineer's name?"
    },
    {
        type:'input',
        name:'id',
        message:"What is the engineer's ID number?"
    },
    {
        type:'input',
        name:'email',
        message:"What is the engineer's email?"
    }, 
    {
        type: 'input',
        name:'github',
        message: "What is the engineer's github username?"
    },
])
.then(engineerData=>{
    let {name,id,email,github}=engineerData;
    const engineer=new Engineer(name,id,email,github);

    employeeArray.push(engineer);
    console.log(employeeArray);
    addEmployee();
    return employeeArray;

    
})
}



const getIntern=()=>{
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type:'input',
            name: 'id',
            message: "What is the intern's ID number?",
        },
        {    
            type: 'input',
            name: 'email',
            message: "What is the intern's email address?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What school does the intern attend?"
        }
     
])
.then(internData=>{
    let {name,id,email,school}=internData;
    const intern=new Intern(name,id,email,school);

    employeeArray.push(intern);
    console.log(employeeArray);
    addEmployee();
    return employeeArray;

})
};

        
function writeFile(fileName, data){
    fs.writeFile(fileName,data, err =>{
        err ? console.error(err) : console.log("Your HTML file has been created")
    });
}

getManagerInfo()
.then(addEmployee)
