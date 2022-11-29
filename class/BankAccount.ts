export abstract class DioAccount {
	private balance: number = 0
	private _status: boolean = true

	constructor(private readonly name: string, private readonly accountNumber: number) {
		//// 
	}

	getAccountHolderName() {
		return this.name
	}

	getAccountNumber() {
		return this.accountNumber;
	}

	get accountStatus() {
		return this._status;
	}

	set accountStatus(stat: boolean) {
		this._status = stat;
	}

	changeStatus() {
		this._status = !this._status;
	}

	deposit(amount: number) {
		if (amount > 0) {
			if (this.validateStatus()) {
				this.balance += amount;
				console.log(`You have deposited ${amount}`)
			} else {
				console.log('Invalid amount for deposit.');
			}
		}
	}

	withdraw(amount: number) {
		if (amount <= 0) {
			console.log("You must withdraw a positive number.");
			return;
		}
		if (this.balance >= amount) {
			this.balance -= amount
			this.accountStatus ? 
			console.log(`You have withdrawn ${amount}`) 
			: console.log("Invalid account status.");
		} else {
			console.log("Requested amount unavailable.");
		}
	}

	getBalance(){
		return this.balance
	}

	private validateStatus(): boolean {
		if (this.accountStatus) {
			return this.accountStatus
		}
		throw new Error('Invalid account.')
	}
}
