import StudentAccount from "./packages/tinybank-node/class/StudentAccount"
import { BankAccount } from "./packages/tinybank-node/class/BankAccount"


// Display use cases
const studentAcc: StudentAccount = new StudentAccount('Alexandra', 999)
console.log(studentAcc)
studentAcc.deposit(100)
studentAcc.withdraw(50)
studentAcc.withdraw(10)
studentAcc.bonusDeposit(10)
studentAcc.getAccountHolderName()
console.log(studentAcc)
