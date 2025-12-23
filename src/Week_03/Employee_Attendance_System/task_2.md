# ✅ TASK 2

## Employee Attendance Processing System

### 🎯 Objective

You will build a small system that calculates an employee’s **working hours for one day** using check-in time, check-out time, and break details.
The system must be **safe, reliable, and must handle errors using `try`, `catch`, and `finally`.**

This simulates a **real HR software module** used in companies.

---

### 🗂 Input Description

You will receive:

* Employee ID
* Date
* Check-in time
* Check-out time
* Break details (optional)
* Overtime approval flag (true/false)

⚠️ Notes:

* Some values may be **missing**
* Some values may be **invalid**
* Break end time may be **missing**
* Your program must **never crash**

---

### ✅ What Your Program Must Do

1. Calculate **total working time** using:

   * Check-out time − Check-in time − Break duration
2. If **check-in or check-out is missing**:

   * Mark the day as **Incomplete**
   * Working time must be **0**
3. If a break **does not have an end time**:

   * Assume a **default break of 30 minutes**
4. If total working time becomes **negative**:

   * Mark the day as **Invalid**
   * Working time must be **0**
5. If **overtime is approved** and working time is more than **8 hours**:

   * Calculate **overtime minutes**
6. The **original input data must not be changed**

---

### ❗ Mandatory Error Handling

You **must use**:

* `try` → All conversions and calculations
* `catch` → To handle:

  * Wrong time formats
  * Missing values
  * Unexpected runtime errors
* `finally` → To:

  * Log a message like
    **“Attendance processed successfully”**

Your program must **not stop or crash under any condition**.

---

### 📤 Expected Output

Your program must return a **summary object** that includes:

* Employee ID
* Date
* Status (`complete`, `incomplete`, `invalid`, or `error`)
* Total working minutes
* Overtime minutes (if applicable)
* A short note about processing
* Error message (only if an error occurred)

---

### 📋 What You Need to Submit

* One JavaScript file
* One main function that processes the attendance
* Helper functions if required
* Output should be displayed clearly in the console

---

### 🎓 What This Assignment Evaluates

* Ability to solve **real-world problems**
* Proper use of **`try`, `catch`, `finally`**
* Safe handling of **wrong or missing data**
* Logical thinking
* Clean and readable JavaScript code