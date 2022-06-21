const Employee=require("./Employee");

class Manager{
    constructor(name,id,email,office){
        this.name=name;
        this.id=id;
        this.email=email;
        this.office=office;
        this.role='Manager';
    }
    getOfficeNumber(){
        return this.office;
    }
}
module.exports=Manager;