const generateHTML=(manager)=>{

    return`<!DOCTYPE html>
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
            <h2>${manager.name}</h2>
            <h3>manager<h3>
            ${manager.id}
            ${manager.email}
            ${manager.office}
        </div>
    </body>            
    `;
};
module.exports=generateHTML;