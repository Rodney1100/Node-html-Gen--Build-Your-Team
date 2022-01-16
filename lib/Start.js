const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");
const generatePage = require("../src/page-template");


class Start {
    constructor() {
        this.engineer;
        this.intern;
        this.manager;
    };

    promptEmployee = teamData => {
        if (!teamData) {
            teamData = [];
        }
        return inquirer
            .prompt({
                type: "list",
                message: "What type of Employee would you like to enter?",
                name: "action",
                choices: ["manager", "engineer", "intern"],
            }).then(({ action }) => {
                if (action === "manager") {
                    return inquirer
                        .prompt([{
                            type: "input",
                            name: "name",
                            message: "What is managers name? (Required)",
                            validate: (nameInput) => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter your name!");
                                    return false;
                                }
                            },
                        }, {
                            type: "input",
                            name: "office",
                            message: "Enter managers Office number (Required)",
                            validate: (officeInput) => {
                                if (officeInput) {
                                    return true;
                                } else {
                                    console.log("Please enter managers Office number!");
                                    return false;
                                }
                            },
                        }, {
                            type: "input",
                            name: "email",
                            message: "Enter managers email (Required)",
                            validate: (officeInput) => {
                                if (officeInput) {
                                    return true;
                                } else {
                                    console.log("Please enter managers email!");
                                    return false;
                                }
                            },
                        }, {
                            type: "input",
                            name: "id",
                            message: "What is the Employee number (required)",
                            validate: (idInput) => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("please enter a valid Id number!");
                                    return false;

                                }
                            },
                        }, {
                            type: "confirm",
                            name: "confirmAddTeammate",
                            message: "Would you like to add another team member   (default is No)",
                            default: false,
                        }]).then(({ name, office, email, id, confirmAddTeammate }) => {
                            this.manager = new Manager(name, office, email, id);
                            teamData.push(this.manager);
                            if (confirmAddTeammate) {
                                this.promptEmployee(teamData);
                            } else {
                                const PageHTML = generatePage(teamData);
                                fs.writeFile("./index.html", PageHTML, (err) => {
                                    if (err) throw new Error(err);
                                    console.log("Page was generated");
                                });
                            }
                        })

                } else if (action === "engineer") {
                    return inquirer
                        .prompt([{
                                type: "input",
                                name: "name",
                                message: "What is Engineer name? (Required)",
                                validate: (nameInput) => {
                                    if (nameInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter Engineer name!");
                                        return false;
                                    }
                                },
                            },
                            {
                                type: "input",
                                name: "github",
                                message: "Enter Engineer GitHub Username (Required)",
                                validate: (githubInput) => {
                                    if (githubInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter Engineer GitHub username!");
                                        return false;
                                    }
                                },
                            },
                            {
                                type: "input",
                                name: "email",
                                message: "Enter Engineer email (Required)",
                                validate: (officeInput) => {
                                    if (officeInput) {
                                        return true;
                                    } else {
                                        console.log("Please enter Engineer email!");
                                        return false;
                                    }
                                },
                            },
                            {
                                type: "input",
                                name: "id",
                                message: "What is the Engineer ID number (required)",
                                validate: (idInput) => {
                                    if (idInput) {
                                        return true;
                                    } else {
                                        console.log("please enter a valid Id number!");
                                        return false;
                                    }
                                },
                            },
                            {
                                type: "confirm",
                                name: "confirmAddTeammate",
                                message: "Would you like to add another team member   (default is No)",
                                default: false,
                            },
                        ]).then(({ name, github, email, id, confirmAddTeammate }) => {
                            this.engineer = new Engineer(name, github, email, id);
                            teamData.push(this.engineer);
                            if (confirmAddTeammate) {
                                this.promptEmployee(teamData);
                            } else {
                                const PageHTML = generatePage(teamData);
                                fs.writeFile("./index.html", PageHTML, (err) => {
                                    if (err) throw new Error(err);
                                    console.log("Page was generated");
                                });
                            }
                        })
                } else {
                    return inquirer
                        .prompt([{
                            type: "input",
                            name: "name",
                            message: "What is Intern name? (Required)",
                            validate: (nameInput) => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter Intern name!");
                                    return false;
                                }
                            },
                        }, {
                            type: "input",
                            name: "school",
                            message: "Enter Intern school (Required)",
                            validate: (githubInput) => {
                                if (githubInput) {
                                    return true;
                                } else {
                                    console.log("Please enter Intern school!");
                                    return false;
                                }
                            },
                        }, {
                            type: "input",
                            name: "email",
                            message: "Enter Intern email (Required)",
                            validate: (officeInput) => {
                                if (officeInput) {
                                    return true;
                                } else {
                                    console.log("Please enter Intern email!");
                                    return false;
                                }
                            },
                        }, {
                            type: "input",
                            name: "id",
                            message: "What is the Intern ID number (required)",
                            validate: (idInput) => {
                                if (idInput) {
                                    return true;
                                } else {
                                    console.log("please enter a valid Id number!");
                                    return true;
                                }
                            },
                        }, {
                            type: "confirm",
                            name: "confirmAddTeammate",
                            message: "Would you like to add another team member   (default is No)",
                            default: false,
                        }]).then(({ name, school, email, id, confirmAddTeammate }) => {
                            this.intern = new Intern(name, school, email, id);
                            teamData.push(this.intern);
                            if (confirmAddTeammate) {
                                this.promptEmployee(teamData);
                            } else {
                                const PageHTML = generatePage(teamData);
                                fs.writeFile("./index.html", PageHTML, (err) => {
                                    if (err) throw new Error(err);
                                    console.log("Page was generated");
                                });
                            }
                        })
                };
            })
    };
};
module.exports = Start;