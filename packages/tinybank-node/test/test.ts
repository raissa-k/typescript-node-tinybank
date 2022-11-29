import { expect } from "chai";
import { BankAccount } from "../class/BankAccount";
import StudentAccount from "../class/StudentAccount";

describe("Initializes Student account and checks access to information.", () => {
	const studentAcc = new StudentAccount("Barbie", 1)
	it("Class is instance of BankAccount", () => {
		expect(studentAcc).to.be.instanceOf(BankAccount)
	})
	it("Initial account status is false", () => {
		expect(studentAcc.accountStatus).equal(true)
	})
	it("Can access account holder name", () => {
		expect(studentAcc.getAccountHolderName()).equal("Barbie")
	})
	it("Can access account number", () => {
		expect(studentAcc.getAccountNumber()).equal(1)
	})
	it("Can change account status", () => {
		studentAcc.changeStatus();
		expect(studentAcc.accountStatus).equal(false)
	})
})

describe("Verifies student transactions", () => {
	const studentAcc = new StudentAccount("Barbie", 1)
	it("Checks initial values for a balance of 0", () => {
		expect(studentAcc.getBalance()).equal(0)
	})
	it("Receives deposit bonus", () => {
		studentAcc.bonusDeposit(100)
		expect(studentAcc.getBalance()).to.be.a("number");
		expect(studentAcc.getBalance()).to.be.eq(110)
		studentAcc.bonusDeposit(1000)
		expect(studentAcc.getBalance()).equal(1120)
	})
	it("Amount deposited must be > 0", () => {
		expect(() => studentAcc.bonusDeposit(-1)).to.throw("Deposit canceled due to invalid deposit amount.")
		expect(() => studentAcc.bonusDeposit(0)).to.throw("Deposit canceled due to invalid deposit amount.")
	})
	it("Verifies regular deposit operation", ( ) => {
		studentAcc.deposit(1);
		expect(studentAcc.getBalance( )).to.be.a('number');
		expect(studentAcc.getBalance( )).to.be.eq(1121);
		studentAcc.deposit(10000);
		expect(studentAcc.getBalance( )).to.be.a('number');
		expect(studentAcc.getBalance( )).to.be.eq(11121);
	})
	it("Amount of regular deposit must be > 0", () => {
		expect(() => studentAcc.deposit(-10)).to.throw("Deposit canceled due to invalid deposit amount.")
		expect(() => studentAcc.deposit(0)).to.throw("Deposit canceled due to invalid deposit amount.")
	  });
	it("Amount of regular withdrawal must be > 0", () => {
		expect(() => studentAcc.withdraw(-10)).to.throw("You must withdraw a number higher 0.")
		expect(() => studentAcc.withdraw(0)).to.throw("You must withdraw a number higher 0.")
	  });
	it("Correctly subtracts amount withdrawn", () => {
		studentAcc.withdraw(10000)
		expect(studentAcc.getBalance()).to.equal(1121)
	  });
	it("Withdrawal may not send balance below 0", () => {
		expect(() => studentAcc.withdraw(10000)).to.throw("Requested amount unavailable")
	  });
	});