const Engineer = require('../lib/Engineer.js');
test('create Engineering objects', () => {
    const engineer = new Engineer("Dave", "github", 'rodney.plancher@yahoo.com', 5);

    expect(engineer.name).toBe("Dave");
    expect(engineer.github).toBe("github");
    expect(engineer.email).toEqual(expect.stringContaining("@"));
    expect(engineer.id).toEqual(expect.any(Number));
});