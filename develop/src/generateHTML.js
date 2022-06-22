
const generateHTML=()=>{

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Team Profile</title>
    </head>
    <body>
        <header>    
            <h1>My Team</h1>
        </header>    
    </body> 
</html>           
    `;
};
const generateManager=(manager)=>{
    return `
    <div id=manager class=card>
            <h2>${manager.name}</h2>
            <h3>Manager<h3>
            ${manager.id}
            ${manager.email}
            ${manager.office}
        </div>
        `;    
};
const generateEngineer=(engineer)=>{
    return `
    <div id=engineer class=card>
    <h2>${engineer.name}</h2>
    <h3>Engineer</h3>
    ${engineer.id}
    ${engineer.email}
    ${engineer.github}
`;
};
const generateIntern=(intern)=>{
    return `
    <div id=intern class=card>
    <h2>${intern.name}<h/2>
    <h3>Intern</h3>
    ${intern.id}
    ${intern.email}
    ${intern.school}
    `;
};
generateManager();
generateEngineer();
generateIntern();
module.exports=generateHTML;