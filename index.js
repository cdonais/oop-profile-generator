const generateHTML=require('./develop/generateHTML')
const inquirer=require('inquirer');
const fs=require('fs');

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
    .then(data=>{
        let managerData=(data.name,data.id,data.email,data.office)
        console.log(managerData);

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
            console.log('engineer running')
            getEngineer();
        } else if(data.role==='Intern'){
            console.log('intern running')
            getIntern();
        } else {
            writeToFile();
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

};
        
function writeToFile(fileName, data){
    fs.writeFile(fileName,data,err =>{
        err ? console.error(err) : console.log("Your HTML file has been created")
    });
}

getManagerInfo()
    .then(addEmployee)
    // .then(data=>{
    //     const teamInfo=generateHTML(data);
    //     writeToFile('./dist/team.html', teamInfo);
    // });