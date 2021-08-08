class Account {
  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  getBalance() {
    return this.transactions.reduce((a,b) => a + b, 0);
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {
  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  isAllowed() {
    if (this.account.getBalance() + this.value > 0) {
      return true;
    } else {
      return false;
    }
  }

  commit() {
    if (this.isAllowed()) {
      this.time = new Date();
      this.account.addTransaction(this.value);
      return "✅Transaction is Approved";
    }
    return "❌ Insufficient funds";
  }
}

class Withdrawal extends Transaction {
  get value() {
    return -this.amount;
  }
}

class Deposit extends Transaction {
  get value() {
    return this.amount;
  }
}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account("noor-account");

let t1 = new Withdrawal(50.25, myAccount);
console.log(t1.commit());
console.log('Transaction 1:', t1);

let t2 = new Withdrawal(120, myAccount);
console.log(t2.commit());
console.log('Transaction 2:', t2);

console.log('Balance:', myAccount.getBalance());

let t3 = new Deposit(120, myAccount);
console.log(t3.commit());
console.log('Transaction 3:', t3);

console.log("Balance:", myAccount.getBalance());
