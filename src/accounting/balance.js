class Account {
  constructor(initialBalance = 1000.00) {
    this.balance = initialBalance;
  }

  getBalance() {
    return this.balance;
  }

  credit(amount) {
    if (isNaN(amount) || amount <= 0) {
      throw new Error('Invalid amount.');
    }
    this.balance += amount;
    return this.balance;
  }

  debit(amount) {
    if (isNaN(amount) || amount <= 0) {
      throw new Error('Invalid amount.');
    }
    if (this.balance < amount) {
      throw new Error('Insufficient funds for this debit.');
    }
    this.balance -= amount;
    return this.balance;
  }
}

module.exports = Account;