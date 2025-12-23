// Employee Attendance Processing System

function calculateWorkHours(attendanceData) {
  const result = {
    employeeId: attendanceData?.employeeId || "UNKNOWN",
    date: attendanceData?.date || "UNKNOWN",
    status: "processing", // complete, incomplete, invalid, error
    totalWorkingMinutes: 0,
    overtimeMinutes: 0,
    note: "",
    errorMessage: null,
  };

  console.log(
    `Processing attendance for Employee: ${result.employeeId} on ${result.date}`
  );

  try {
    // --- 1. Validate Input Existence ---
    if (!attendanceData?.checkIn || !attendanceData?.checkOut) {
      result.status = "incomplete";
      result.note = "Missing check-in or check-out time.";
      return result; // make sure to return the result object
    }

    // --- 2. Time Parsing Helper ---
    function parseTime(timeStr) {
      if (!timeStr || typeof timeStr !== "string")
        throw new Error(`Invalid time format: ${timeStr}`);
      const parts = timeStr.split(":");
      if (parts.length !== 2)
        throw new Error(`Invalid time format: ${timeStr}`);
      const hours = parseInt(parts[0], 10);
      const minutes = parseInt(parts[1], 10);

      if (
        isNaN(hours) ||
        isNaN(minutes) ||
        hours < 0 ||
        hours > 23 ||
        minutes < 0 ||
        minutes > 59
      ) {
        throw new Error(`Invalid time value: ${timeStr}`);
      }
      return hours * 60 + minutes;
    }

    const checkInMinutes = parseTime(attendanceData.checkIn);
    const checkOutMinutes = parseTime(attendanceData.checkOut);

    // --- 3. Break Calculation
    let breakDuration = 0;

    const hasBreakStart =
      typeof attendanceData.breaksStart === "string" &&
      attendanceData.breaksStart.trim() !== "";

    const hasBreakEnd =
      typeof attendanceData.breaksEnd === "string" &&
      attendanceData.breaksEnd.trim() !== "";

    if (hasBreakStart) {
      if (!hasBreakEnd) {
        breakDuration += 30;
        result.note += "Default break applied (30m). ";
      } else {
        const startMins = parseTime(attendanceData.breaksStart);
        const endMins = parseTime(attendanceData.breaksEnd);
        let duration = endMins - startMins;
        if (duration < 0)
          throw new Error("Break end time is before start time");
        breakDuration += duration;
      }
    }

    // --- 4. Total Calculation ---
    let totalMinutes = checkOutMinutes - checkInMinutes - breakDuration;

    // --- 5. Validating Total Time ---
    if (totalMinutes < 0) {
      result.status = "invalid";
      result.totalWorkingMinutes = 0;
      result.note = "Calculated working time is negative.";
    } else {
      result.totalWorkingMinutes = totalMinutes;
      result.status = "complete";

      // --- 6. Overtime Calculation ---
      // Overtime if approved AND > 8 hours (480 minutes)
      if (attendanceData.overtimeApproved && totalMinutes > 480) {
        result.overtimeMinutes = totalMinutes - 480;
        result.note += `Overtime applied: ${result.overtimeMinutes} mins.`;
      } else {
        result.overtimeMinutes = 0;
      }
    }
  } catch (error) {
    // --- Catch Block ---
    result.status = "error";
    result.errorMessage = error.message;
    result.totalWorkingMinutes = 0;
    console.error("Error processing attendance:", error.message);
  } finally {
    // --- Finally Block ---
    if (!result.note) result.note = "Processed successfully.";
    console.log("Attendance processed successfully (Log message).");

    console.log("--- ATTENDANCE SUMMARY ---");
    console.log(result);
    console.log("--------------------------");
    return result; // returning for test validation if needed
  }
}

// --- TEST RUNNER ---
function runTests() {
  console.log("\n====== TEST CASE 1: Standard Day ======");
  calculateWorkHours({
    employeeId: "EMP001",
    date: "2023-10-25",
    checkIn: "09:00",
    checkOut: "17:00", // 8 hours = 480 mins
    breaksStart: "12:00",
    breaksEnd: "12:30", // 30 mins break
    overtimeApproved: false,
  });

  console.log("\n====== TEST CASE 2: Overtime & Default Break ======");
  calculateWorkHours({
    employeeId: "EMP002",
    date: "2023-10-25",
    checkIn: "08:00",
    checkOut: "18:00", // 10 hours = 600 mins
    breaksStart: "12:00",
    breaksEnd: "", // Missing end, should default to 30 mins
    overtimeApproved: true,
  });

  console.log("\n====== TEST CASE 3: Missing Check-Out (Incomplete) ======");
  calculateWorkHours({
    employeeId: "EMP003",
    date: "2023-10-25",
    checkIn: "09:00",
  });

  console.log("\n====== TEST CASE 4: Invalid Time (Error) ======");
  calculateWorkHours({
    employeeId: "EMP004",
    date: "2023-10-25",
    checkIn: "09:00",
    checkOut: "invalid-time",
  });

  console.log("\n====== TEST CASE 5: Negative Work Time (Invalid) ======");
  calculateWorkHours({
    employeeId: "EMP005",
    date: "2023-10-25",
    checkIn: "10:00",
    checkOut: "09:00",
  });
}

// Execute Tests
runTests();
