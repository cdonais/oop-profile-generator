const generateHTML=data =>{
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0'>
    </head>
    <body>
        <header>    
            <h1>My Team</h1>
        </header>    
        <div id=manager class=card>
            <h2>${data.manager.name}</h2>
            <h3>Manager<h3>
            ${data.manager.id}
            ${data.manager.email}
            ${data.manager.office}
        </div>
        <div class=card>
            <h2>${data.employee.name}</h2>
            <h3>${data.employee.role}</h3>
                ${data.employee.id}
                ${data.employee.email}
        </div>
    </body>            
    `;
};

module.exports=generateHTML;