const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, github, email, id) {
        super(name);
        this.github = github;
        this.email = email;
        this.id = id;
    }
};

module.exports = Engineer;