const Employee = require('./employee')

class Engineer extends Employee {
    constructor(name, id, email, gitUser) {
        super(name, id, email);
        this.gitUser = gitUser
    }
}

module.exports = Engineer;