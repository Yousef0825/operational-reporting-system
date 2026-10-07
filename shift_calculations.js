/**
 * Daily Clinic Operational & Attendance Automation Engine
 * Automates shift duration verification, variable schedules, and overtime computation.
 * Author: Yousef Tamer
 */

function calculateShiftMetrics(records) {
  return records.map(entry => {
    const checkIn = new Date(entry.checkInTime);
    const checkOut = new Date(entry.checkOutTime);
    const totalHours = (checkOut - checkIn) / (1000 * 60 * 60);

    // Standard shift duration baseline
    let standardShift = 6.0;

    // Differential schedule rules (e.g., Tuesday 5-hour schedule)
    if (entry.dayOfWeek === "Tuesday") {
      standardShift = 5.0;
    }

    // Overtime evaluation logic
    let overtime = 0.0;
    if (entry.dayOfWeek === "Thursday") {
      overtime = totalHours; // Dedicated duty day counted as complete overtime
    } else if (totalHours > standardShift) {
      overtime = totalHours - standardShift;
    }

    return {
      staffName: entry.staffName,
      day: entry.dayOfWeek,
      hoursWorked: parseFloat(totalHours.toFixed(2)),
      overtimeHours: parseFloat(overtime.toFixed(2)),
      shiftMet: totalHours >= standardShift
    };
  });
}
