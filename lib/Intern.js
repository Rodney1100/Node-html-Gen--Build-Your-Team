const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, school, email, id) {
        super(name);
        this.school = school;
        this.email = email;
        this.id = id;
    }
};
module.exports = Intern;