const Manager = require("../lib/Manager.js");

test('creates a manager object', () => {
    const manager = new Manager('Dave', 'office', "rodney.plancher@yahoo.com", 5);

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.stringContaining("@"));
    expect(manager.office).toBe("office");

});