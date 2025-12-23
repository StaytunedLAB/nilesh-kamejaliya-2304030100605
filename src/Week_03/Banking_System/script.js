// Banking System - Transaction & Balance Validator

function processBankAccount(accountData) {
  // Audit log container
  const auditLog = [];

  // Result object
  const result = {
    accountNumber: accountData?.accountNumber || "UNKNOWN",
    accountHolder: accountData?.accountHolder || "UNKNOWN",
    currency: accountData?.currency || "UNKNOWN",
    initialBalance: 0,
    finalBalance: 0,
    appliedTransactions: [],
    rejectedTransactions: [],
    auditMessage: "",
  };

  console.log("Processing account for:", result.accountHolder);

  try {
    // --- 1. Validate & Convert Initial Balance ---
    let balance = accountData?.initialBalance;

    if (typeof balance === "string") {
      balance = parseFloat(balance);
    }

    if (typeof balance !== "number" || isNaN(balance)) {
      throw new Error(
        `Invalid initial balance: ${accountData?.initialBalance}`
      );
    }

    result.initialBalance = balance;
    result.finalBalance = balance;

    // --- 2. Process Transactions ---
    const transactions = accountData?.transactions || [];

    if (!Array.isArray(transactions)) {
      throw new Error("Transactions list is missing or invalid");
    }

    for (const tx of transactions) {
      let reason = null;
      let amount = tx?.amount;
      const type = tx?.type;

      try {
        if (typeof amount === "string") {
          amount = parseFloat(amount);
        }

        // --- Validation Rules ---

        if (typeof amount !== "number" || isNaN(amount)) {
          throw new Error("Transaction amount is invalid");
        }

        if (amount <= 0) {
          throw new Error("Transaction amount must be positive");
        }

        if (!type) {
          throw new Error("Transaction type is missing");
        }

        const normalizedType = type.toLowerCase();
        if (normalizedType !== "deposit" && normalizedType !== "withdraw") {
          throw new Error(`Unknown transaction type: ${type}`);
        }

        if (normalizedType === "withdraw" && amount > result.finalBalance) {
          throw new Error("Insufficient funds for withdrawal");
        }

        if (normalizedType === "deposit") {
          result.finalBalance += amount;
        } else if (normalizedType === "withdraw") {
          result.finalBalance -= amount;
        }

        result.appliedTransactions.push({
          type: type,
          amount: amount,
          date: new Date().toISOString(), // Simulating date
        });
      } catch (txError) {
        result.rejectedTransactions.push({
          transaction: tx,
          reason: txError.message,
        });
      }
    }
  } catch (systemError) {
    // --- Handle System-Level Errors ---
    console.error("System Error encountered:", systemError.message);
    auditLog.push(`System Error: ${systemError.message}`);
  } finally {
    // --- Final Audit Log ---
    result.auditMessage = "Transaction processing completed.";
    auditLog.push(result.auditMessage);

    console.log("--- FINAL REPORT ---");
    console.log(JSON.stringify(result, null, 2));
    console.log("Audit Log:", auditLog);
    console.log("--------------------");
  }
}

// --- TEST RUNNER ---

function runTests() {
  console.log("\n=== TEST CASE 1: Valid Data ======");
  processBankAccount({
    accountNumber: "123456789",
    accountHolder: "Nilesh Kamejaliya",
    initialBalance: 1000,
    currency: "USD",
    transactions: [
      { type: "deposit", amount: 500 },
      { type: "withdraw", amount: 200 },
    ],
  });

  console.log("\n=== TEST CASE 2: Mixed Invalid Data ======");
  processBankAccount({
    accountNumber: "987654321",
    accountHolder: "Test User",
    initialBalance: "5000", // String number
    currency: "EUR",
    transactions: [
      { type: "deposit", amount: "1000" }, // String amount
      { type: "withdraw", amount: 9000 }, // Insufficient funds
      { type: "withdraw", amount: -100 }, // Negative amount
      { type: "unknown", amount: 50 }, // Unknown type
      { amount: 500 }, // Missing type
      { type: "deposit", amount: "invalid" }, // Nan
    ],
  });

  console.log("\n====== TEST CASE 3: Critical System Error ======");
  processBankAccount({
    accountNumber: "000000",
    accountHolder: "Bad Data",
    initialBalance: "NotANumber",
    transactions: [],
  });
}

runTests();
