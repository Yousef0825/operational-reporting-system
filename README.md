# 📋 Clinic Operational Workflow & Shift Management System

A dynamic administrative tracking and operational analytics system built using Google Sheets advanced dynamic formulas and Google Apps Script to eliminate calculation discrepancies in staff shifts and administrative receptionist logs.

## 📌 Business Need & Impact
- **Problem:** Variable shift lengths and complex overtime rules caused manual entry discrepancies and extended end-of-month payroll auditing.
- **Solution:** Engineered automated calculation pipelines handling non-standard shifts (standard 6-hour vs. differential 5-hour shifts) and scheduled rotating rotations.
- **Impact:** Cut monthly administrative auditing and timesheet reconciliation time by **70%** while ensuring 100% calculation accuracy.

## ⚙️ Key Technical Features
- **Dynamic Shift Logic:** Automated detection of actual hours worked versus scheduled baseline.
- **Overtime Engine:** Automated calculation of dedicated overtime days (e.g., full-day duty shifts) and excess operational hours.
- **Reporting Interface:** Streamlined reporting views designed for management decision-making.

## 🛠️ Tech Stack
- Google Sheets (Advanced Formulas: `QUERY`, `ARRAYFORMULA`, `VLOOKUP`, `IFS`)
- Google Apps Script (JavaScript)
- Google Forms (Data Ingestion)
