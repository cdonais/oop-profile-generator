
const generateManager=(manager)=>{
    return `
    <div id="manager" class="card">
            <h2>${manager.name}</h2>
            <h3>Manager<i class="fa-solid fa-mug-hot"></i><h3>
            <p>Employee ID:${manager.id}</p>
            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p>Office Number:${manager.office}</p>
        </div>
        `;    
};
const generateEngineer=(engineer)=>{
    return `
    <div id=engineer class=card>
        <h2>${engineer.name}</h2>
        <h3>Engineer<i class="fa-solid fa-laptop-code"></i></h3>
        <p>Employee ID:${engineer.id}</p>
        <p>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p>Github:<a href="https://www.github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
    </div>
`;
};
const generateIntern=(intern)=>{
    return `
    <div id=intern class=card>
        <h2>${intern.name}</h2>
        <h3>Intern<i class="fa-solid fa-graduation-cap"></i></h3>
        <p>Employee ID:${intern.id}</p>
        <p>Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
        <p>School:${intern.school}</p>
    </div>
    `;
};
generateHTML=(employeeArray)=>{
    teamArray=[];

    for(let i=0; i<employeeArray.length;i++){
        const employee=employeeArray[i];

        if(employee.role==='Manager'){
            const managerCard=generateManager(employee);
            teamArray.push(managerCard);
        }
        if(employee.role==='Engineer'){
            const engineerCard=generateEngineer(employee);
            teamArray.push(engineerCard);
        }
        if(employee.role==='Intern'){
            const internCard=generateIntern(employee);
            teamArray.push(internCard);
        }

    }
    const teamCards=teamArray.join('')
    const generateTeam=generatePage(teamCards);
    return generateTeam;
}
const generatePage=teamCards=>{

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Team Profile</title>
        <link rel="stylesheet" href="../src/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
    </head>
    <body>
        <header>    
            <h1>My Team</h1>
        </header>
        <div id="team-cards">
            ${teamCards}
        </div>        
    </body> 
</html>           
    `;
};

module.exports=generateHTML;