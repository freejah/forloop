
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  let wrongBalance = [];
  for (let user of array){
    let depositBalance = 0;
    let withdrawalBalance = 0;
    if ( user.deposits){
      for (let deposit of user.deposits){
        depositBalance += +deposit;
      }
    }
    if ( user.withdrawals){
      for (let withdrawals of user.withdrawals){
        withdrawalBalance += +withdrawals;
      }
    }
    if (depositBalance - withdrawalBalance !== user.balance){
      wrongBalance.push(user);
    }
  }  
  return wrongBalance
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
