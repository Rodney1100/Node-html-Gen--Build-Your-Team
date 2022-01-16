const Employee = require('../lib/Employee.js');


test('creates a employee object', () => {
    const employee = new Employee('Dave', 'rodney.plancher@yahoo.com', 5);

    expect(employee.name).toBe('Dave');
    expect(employee.email).toEqual(expect.stringContaining('@'))
    expect(employee.id).toEqual(expect.any(Number));

});