// Node.js Student Account Management System
// Preserves COBOL business logic, data integrity, and menu options

const readline = require('readline');

class AccountingApp {
  constructor(initialBalance = 1000.00) {
    this.balance = initialBalance;
  }

  getBalance() {
    return this.balance;
  }

  credit(amount) {
    const amt = parseFloat(amount);
    if (amt > 0) {
      this.balance += amt;
      return true;
    }
    return false;
  }

  debit(amount) {
    const amt = parseFloat(amount);
    if (amt > 0 && amt <= this.balance) {
      this.balance -= amt;
      return true;
    }
    return false;
  }

  exit() {
    return 'Exiting application.';
  }
}

// CLI logic
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const app = new AccountingApp();

function showMenu() {
  console.log('--------------------------------');
  console.log('Account Management System');
  console.log('1. View Balance');
  console.log('2. Credit Account');
  console.log('3. Debit Account');
  console.log('4. Exit');
  console.log('--------------------------------');
  rl.question('Enter your choice (1-4): ', handleMenu);
}

function handleMenu(choice) {
  switch (choice.trim()) {
    case '1':
      viewBalance();
      break;
    case '2':
      creditAccount();
      break;
    case '3':
      debitAccount();
      break;
    case '4':
      exitApp();
      break;
    default:
      console.log('Invalid choice. Please try again.');
      showMenu();
  }
}

function viewBalance() {
  console.log(`Current balance: ${app.getBalance().toFixed(2).padStart(9, '0')}`);
  showMenu();
}

function creditAccount() {
  rl.question('Enter amount to credit: ', (amount) => {
    if (app.credit(amount)) {
      console.log('Account credited successfully.');
    } else {
      console.log('Invalid amount. Must be positive.');
    }
    showMenu();
  });
}

function debitAccount() {
  rl.question('Enter amount to debit: ', (amount) => {
    if (app.debit(amount)) {
      console.log('Account debited successfully.');
    } else if (parseFloat(amount) > app.getBalance()) {
      console.log('Insufficient funds.');
    } else {
      console.log('Invalid amount. Must be positive.');
    }
    showMenu();
  });
}

function exitApp() {
  console.log(app.exit());
  rl.close();
}

showMenu();

module.exports = { AccountingApp };
