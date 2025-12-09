# ✅ TASK 1

## Banking System – Transaction & Balance Validator

### 🎯 Objective

You will develop a small **bank account processing system** that:

* Reads an account’s opening balance
* Applies multiple transactions
* Rejects invalid transactions
* Produces a **final account summary**

This simulates logic used in **real banking software systems**.

---

### 🗂 Input Description

You will receive:

* Account number
* Account holder name
* Initial balance (may be a string or number)
* Currency
* A list of transactions (Deposit / Withdraw)

⚠️ Important:

* Some transactions may contain **invalid data**
* Some fields may be **missing**
* Some values may be **negative or incorrect**
* Your program must **never crash**

---

### ✅ What Your Program Must Do

1. Convert the **initial balance** into a valid number safely.
2. For each transaction:

   * Convert transaction amount into a number safely
   * Validate the transaction type
3. Apply rules:

   * **Deposit** → Add amount to balance
   * **Withdraw** → Subtract only if enough balance is available
4. Reject a transaction if:

   * Amount is not a valid number
   * Amount is zero or negative
   * Transaction type is missing
   * Transaction type is unknown
   * Withdrawal amount is greater than available balance
5. Maintain two separate records:

   * Applied transactions
   * Rejected transactions with proper reason
6. The **original input data must not be modified**

---

### ❗ Mandatory Error Handling

You **must use `try`, `catch`, and `finally`**:

* `try` → All transaction processing logic
* `catch` → Handle:

  * Invalid number conversions
  * Missing fields
  * Unexpected runtime errors
  * Such cases must be marked as **System Error**
* `finally` → Must always:

  * Generate a processing log
  * Display a completion message

Your program must **never crash**, even with corrupted input.

---

### 📤 Expected Output

Your output must contain:

* Account number
* Account holder name
* Currency
* Initial balance
* Final balance
* List of applied transactions
* List of rejected transactions with reason
* One audit log message generated in `finally`

---

### 📋 What You Need to Submit

* One JavaScript file
* One main processing function
* Helper validation functions (if required)
* Output displayed clearly in the console

---

### 🎓 What This Task Evaluates

* Understanding of **financial transaction logic**
* Proper data validation
* Correct use of **`try`, `catch`, `finally`**
* Safe numerical calculations
* Clean and modular JavaScript design
* Industry-level defensive programming approach

