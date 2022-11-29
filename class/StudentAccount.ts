import { BankAccount } from "./BankAccount"

export default class StudentAccount extends BankAccount {
    private static BONUS = 10;
    constructor(
		accountHolderName: string,
		accountNumber: number
		){
        super(accountHolderName, accountNumber);
    }

    deposit(amount: number) {
        super.deposit(amount);
    }

    bonusDeposit(amount: number){
        if(amount > 0){ 
            super.deposit(amount + StudentAccount.BONUS)
            console.log(`Your account privileges grant you an extra $${StudentAccount.BONUS} !`);
        } else {
			throw new Error("Deposit canceled due to invalid deposit amount.");
        }
    }
}