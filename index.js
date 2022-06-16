const inquirer=require('inquirer');

const getManagerInfo=()=>{
    return inquirer.prompt([
        {
            type: 'text',
            name: 'managerName',
            message: 'What is the manager name?',
        },
        {
            type: 'text',
            name: 'managerID',
            message: 'What is the manager ID number?',
        },
        {
            type: 'text',
            name: 'managerEmail',
            message: 'What is the manager email address?',
        },
        {    
            type: 'text',
            name: 'managerOffice',
            message: 'What is the manager office number?',

        }        
    ])
    .then((data)=>{
        console.log(data);
        addEmployee();
    })
}
    const addEmployee=()=>{
        return inquirer.prompt({
        type: 'list',
        name: 'addEmployee',
        message: 'Would you like to add another employee?',
        choices:['Yes', 'No'],
        })
    
    .then((data)=>{
        if (data.addEmployee === 'Yes'){
            getEmployeeInfo();
        } else{
            generateHTML();
        }
    }
    )};   

const getEmployeeInfo=()=>{
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Is this employee an intern or an engineer?',
            choices: ['Intern', 'Engineer'],
        },
        {
            type: 'text',
            name: 'name',
            message: 'What is the employee name?',
        },
        {
            type:'text',
            name: 'id',
            message: 'What is the employee ID number?',
        },
        {    
            type: 'text',
            name: 'email',
            message: 'What is the employee email address?',
        }    
     
])


    .then((data)=>{
    if(data.role==='Engineer'){
        inquirer
            .prompt({
                type: 'text',
                name:'github',
                message: 'What is the employee github username?'
            },
            {
                type: 'list',
                name: 'addAnother',
                message: 'Would you like to add another employee?',
                choices: ['Yes','No']
            })
            .then((data)=>{
                if(data.addAnother==='Yes'){
                    getEmployeeInfo();
                } else {
                    generateHTML();
                }
            })
    } else {
        inquirer
            .prompt({
                type: 'text',
                name:'school',
                message:'What is the name of employee school?'
            },
            {
                type: 'list',
                name:'addAnother',
                message: 'Would you like to add another employee?'
            })
            .then((data)=>{
                if(data.addAnother==='Yes'){
                    getEmployeeInfo();
                }else{
                    generateHTML();
                }
            }
            )

    };
 })
};


getManagerInfo();