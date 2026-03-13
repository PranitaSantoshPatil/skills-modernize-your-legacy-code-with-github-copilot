const Account = require('../balance');

describe('Account Management System', () => {
  let account;

  beforeEach(() => {
    account = new Account();
  });

  test('TC01: View account balance', () => {
    expect(account.getBalance()).toBe(1000.00);
  });

  test('TC02: Credit account with valid amount', () => {
    const newBalance = account.credit(100);
    expect(newBalance).toBe(1100.00);
    expect(account.getBalance()).toBe(1100.00);
  });

  test('TC03: Credit account with invalid amount', () => {
    expect(() => account.credit(-50)).toThrow('Invalid amount.');
    expect(() => account.credit(0)).toThrow('Invalid amount.');
    expect(account.getBalance()).toBe(1000.00);
  });

  test('TC04: Debit account with valid amount', () => {
    const newBalance = account.debit(100);
    expect(newBalance).toBe(900.00);
    expect(account.getBalance()).toBe(900.00);
  });

  test('TC05: Debit account with overdraft attempt', () => {
    expect(() => account.debit(1500)).toThrow('Insufficient funds for this debit.');
    expect(account.getBalance()).toBe(1000.00);
  });

  test('TC06: Debit account with invalid amount', () => {
    expect(() => account.debit(-50)).toThrow('Invalid amount.');
    expect(() => account.debit(0)).toThrow('Invalid amount.');
    expect(account.getBalance()).toBe(1000.00);
  });

  // TC07: Exit application - This is for the CLI, not unit testable easily
});