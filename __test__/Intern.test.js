const { string } = require('yargs');
const Intern = require('../lib/Intern.js');


test('create a intern object', () => {
    const intern = new Intern('Dave', 'school', "rodney.plancher@yahoo.com", 5);

    expect(intern.name).toBe('Dave');
    expect(intern.school).toBe('school');
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.id).toEqual(expect.any(Number));
});