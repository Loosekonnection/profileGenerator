// Obtain / Require Intern Class
const Manager = require('../lib/manager');

// Intern Class Constructor Jest test
describe('Manager', () => {
    it('Should set the office number using constructor', () => {
        const testVal = 10;
        const manager = new Manager('Manager', 1, 'email@test.co.uk', testVal);
        expect(manager.officeNumber).toBe(testVal);
    });
});

// getRole() Method Jest test
describe('getRole', () => {
    it('Should return \"Manager\" using getRole()', () => {
        const testVal = 'Manager';
        const manager = new Manager('Role', 1, 'email@test.co.uk', 10);
        expect(manager.getRole()).toBe(testVal);
    });
});

// getOfficeNumber() Method Jest test
describe('getOfficeNumber', () => {
    it('Should get the office number using getOffice()', () => {
        const testVal = 10;
        const manager = new Manager('Office', 1, 'email@test.co.uk', testVal);
        expect(manager.getOfficeNumber()).toBe(testVal);
    });
});