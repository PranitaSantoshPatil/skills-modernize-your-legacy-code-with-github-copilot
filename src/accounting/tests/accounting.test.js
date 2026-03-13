// tests/accounting.test.js
// Unit tests for Node.js Student Account Management System

const { AccountingApp } = require('./index');

describe('Student Account Management System', () => {
  let app;

  beforeEach(() => {
    app = new AccountingApp(1000.00); // Start with default balance
  });

  test('TC01: View account balance', () => {
    expect(app.getBalance()).toBe(1000.00);
  });

  test('TC02: Credit account with valid amount', () => {
    app.credit(500);
    expect(app.getBalance()).toBe(1500.00);
  });

  test('TC03: Credit account with invalid amount', () => {
    expect(app.credit(-100)).toBe(false);
    expect(app.credit(0)).toBe(false);
    expect(app.getBalance()).toBe(1000.00);
  });

  test('TC04: Debit account with valid amount', () => {
    app.debit(200);
    expect(app.getBalance()).toBe(800.00);
  });

  test('TC05: Debit account with overdraft attempt', () => {
    expect(app.debit(2000)).toBe(false);
    expect(app.getBalance()).toBe(1000.00);
  });

  test('TC06: Debit account with invalid amount', () => {
    expect(app.debit(-50)).toBe(false);
    expect(app.debit(0)).toBe(false);
    expect(app.getBalance()).toBe(1000.00);
  });

  test('TC07: Exit application', () => {
    expect(app.exit()).toBe('Exiting application.');
  });
});
