const netInput = document.querySelector(".netSalary");
const salaryButton = document.querySelector(".calcSalary");
let taxRateInfo = document.querySelector(".taxRateInfo");
let nhifInfo = document.querySelector(".nhifInfo");
let nssfInfo = document.querySelector(".nssfInfo");
let totalInfo = document.querySelector(".toalInfo");
let grossSalaryInfo = document.querySelector(".grossSalary");
let totalDeductionsInfo = document.querySelector(".totalDeductions");
let netSalaryInfo = document.querySelector(".netSalaryInfo");

let basicSalary = netInput.value;
let insuranceRelief = 2400;
let pension = 2400;
let housing = 2400;
let personalRelief = 2400;
let totalDeductions = nhif() + tax() + pension;

function grossSalary() {
  let totalSalary = parseInt(
    personalRelief + insuranceRelief + housing + basicSalary
  );
  return totalSalary;
}

function tax() {
  if (basicSalary <= 24000) {
    return basicSalary * (10 / 100);
  } else if (basicSalary > 24000 && basicSalary <= 32333) {
    return basicSalary * (25 / 100);
  } else if (basicSalary > 32333 && basicSalary <= 500000) {
    return basicSalary * (30 / 100);
  } else if (basicSalary > 500000 && basicSalary <= 800000) {
    return basicSalary * (32.5 / 100);
  } else if (basicSalary > 800000) {
    return basicSalary * (35 / 100);
  }
}

function nhif() {
  if (basicSalary <= 5999) {
    return 150;
  } else if (basicSalary >= 6000 && basicSalary < 8000) {
    return 300;
  } else if (basicSalary >= 8000 && basicSalary < 12000) {
    return 400;
  } else if (basicSalary >= 12000 && basicSalary < 15000) {
    return 500;
  } else if (basicSalary >= 15000 && basicSalary < 20000) {
    return 600;
  } else if (basicSalary >= 20000 && basicSalary < 25000) {
    return 750;
  } else if (basicSalary >= 25000 && basicSalary < 30000) {
    return 850;
  } else if (basicSalary >= 30000 && basicSalary < 35000) {
    return 900;
  } else if (basicSalary >= 35000 && basicSalary < 40000) {
    return 950;
  } else if (basicSalary >= 40000 && basicSalary < 45000) {
    return 1000;
  } else if (basicSalary >= 45000 && basicSalary < 50000) {
    return 1100;
  } else if (basicSalary >= 50000 && basicSalary < 60000) {
    return 1200;
  } else if (basicSalary >= 60000 && basicSalary < 70000) {
    return 1300;
  } else if (basicSalary >= 70000 && basicSalary < 80000) {
    return 1400;
  } else if (basicSalary >= 80000 && basicSalary < 90000) {
    return 1500;
  } else if (basicSalary >= 90000 && basicSalary < 100000) {
    return 1600;
  } else if (basicSalary >= 100000) {
    return 1700;
  }
}

let nssfDeductions = parseInt(basicSalary * (6 / 100));

function nssfRate() {
  if (basicSalary <= 100000) {
    return nssfDeductions;
  } else if (basicSalary > 100000 && nssfDeductions < 18000) {
    return nssfDeductions;
  } else if (basicSalary > 100000 && nssfDeductions >= 18000) {
    return 18000;
  }
}

function netSalary() {
  let totalSalary = parseInt(grossSalary() - totalDeductions);
  return totalSalary;
}

salaryButton.addEventListener("click", () => {
  taxRateInfo.innerHTML = `Basic salary = Ksh ${netInput.value}`;
  nhifInfo.innerHTML = `NHIF contribution = Ksh ` + nhif();
  nssfInfo.innerHTML = `NSSF contribution = ksh ` + nssfRate();
  // totalInfo.innerHTML = `Total Tax = Ksh ` + tax(basicSalary);
  grossSalaryInfo.innerHTML = `Gross Salary = Ksh ` + grossSalary();
  totalDeductionsInfo.innerHTML = `Total Deductions = Ksh ${totalDeductions}`;
  netSalaryInfo.innerHTML = `Net Salary = Ksh ` + netSalary();
});
