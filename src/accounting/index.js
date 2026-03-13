const readline = require('readline');
const Account = require('./balance');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const account = new Account();

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

async function viewBalance() {
  console.log(`Current balance: ${account.getBalance().toFixed(2)}`);
}

async function creditAccount() {
  const amountStr = await ask('Enter credit amount: ');
  const amount = parseFloat(amountStr);
  try {
    account.credit(amount);
    console.log(`Amount credited. New balance: ${account.getBalance().toFixed(2)}`);
  } catch (error) {
    console.log(error.message);
  }
}

async function debitAccount() {
  const amountStr = await ask('Enter debit amount: ');
  const amount = parseFloat(amountStr);
  try {
    account.debit(amount);
    console.log(`Amount debited. New balance: ${account.getBalance().toFixed(2)}`);
  } catch (error) {
    console.log(error.message);
  }
}

async function main() {
  let continueFlag = true;
  while (continueFlag) {
    console.log('--------------------------------');
    console.log('Account Management System');
    console.log('1. View Balance');
    console.log('2. Credit Account');
    console.log('3. Debit Account');
    console.log('4. Exit');
    console.log('--------------------------------');
    const choiceStr = await ask('Enter your choice (1-4): ');
    const choice = parseInt(choiceStr);

    switch (choice) {
      case 1:
        await viewBalance();
        break;
      case 2:
        await creditAccount();
        break;
      case 3:
        await debitAccount();
        break;
      case 4:
        continueFlag = false;
        break;
      default:
        console.log('Invalid choice, please select 1-4.');
    }
  }
  console.log('Exiting the program. Goodbye!');
  rl.close();
}

main();