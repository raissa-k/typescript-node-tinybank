
# TypeScript-Node.js Tiny Bank

Practicing the use of TypeScript along Node.js

## Roadmap

- [x] Implement the deposit and withdrawal methods in the BankAccount class
	- Balance must change according to deposited value
	- Only accounts marked as "true" and a balance higher than the requested value can make withdrawals

- [ ]  Implement the method "loan" (getLoan) in the CompanyAccount class
	- The balance must change according to the amount entered for the loan
	- Only accounts marked as "true" can take loans

- [x]  Create a new account type from BankAccount
	- This account should not receive new attributes
	- This account will have a deposit method, which will add "10" more to amount stored in the account (i.e.: an initial deposit of "100" will add "110" to the balance)

- [ ]  All attributes of any account must be private

- [ ]  The attributes "name" and "accountNumber" must not be changed internally or externally

- [ ] Create instances of each of the account types in app.ts and execute the possible methods.

## Run Locally

Clone the project

```bash
git clone https://github.com/raissa-k/typescript-node-tinybank.git
```

Go to the project directory

```bash
cd typescript-node-tinybank
```

Install dependencies

```bash
npm install
```

Start the server

```bash
npm run dev
```

Run tests

```bash
npm test
```

