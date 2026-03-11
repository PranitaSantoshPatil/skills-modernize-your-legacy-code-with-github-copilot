# Student Account System Test Plan

This test plan covers the business logic implemented in the COBOL application for student account management. It is intended for validation with business stakeholders and will be used as a basis for future unit and integration tests in the Node.js transformation.

| Test Case ID | Test Case Description                | Pre-conditions                  | Test Steps                                                                 | Expected Result                                 | Actual Result | Status (Pass/Fail) | Comments           |
|--------------|--------------------------------------|---------------------------------|----------------------------------------------------------------------------|-------------------------------------------------|--------------|--------------------|--------------------|
| TC01         | View account balance                 | Account exists                  | 1. Start app<br>2. Select 'View Balance'                                   | Current balance is displayed                    |              |                    |                    |
| TC02         | Credit account with valid amount     | Account exists                  | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter valid amount        | Balance increases by entered amount             |              |                    |                    |
| TC03         | Credit account with invalid amount   | Account exists                  | 1. Start app<br>2. Select 'Credit Account'<br>3. Enter negative/zero amount| Error message shown; balance unchanged          |              |                    |                    |
| TC04         | Debit account with valid amount      | Account exists; sufficient funds| 1. Start app<br>2. Select 'Debit Account'<br>3. Enter valid amount         | Balance decreases by entered amount             |              |                    |                    |
| TC05         | Debit account with overdraft attempt | Account exists; insufficient funds| 1. Start app<br>2. Select 'Debit Account'<br>3. Enter amount > balance   | Error message shown; balance unchanged          |              |                    |                    |
| TC06         | Debit account with invalid amount    | Account exists                  | 1. Start app<br>2. Select 'Debit Account'<br>3. Enter negative/zero amount| Error message shown; balance unchanged          |              |                    |                    |
| TC07         | Exit application                     | Account exists                  | 1. Start app<br>2. Select 'Exit'                                            | Application exits gracefully                    |              |                    |                    |

> Add more test cases as business rules evolve or new features are implemented.
