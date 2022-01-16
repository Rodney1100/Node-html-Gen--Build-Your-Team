const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, office, email, id) {
        super(name);
        this.office = office;
        this.email = email;
        this.id = id;
    }
}

module.exports = Manager;