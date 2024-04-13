document.addEventListener('DOMContentLoaded', function() {
    const ageInput = document.getElementById('age');
    const incomeInput = document.getElementById('income');
    const extraIncomeInput = document.getElementById('extraIncome');
    const deductionsInput = document.getElementById('deductions');
    const calculateBtn = document.getElementById('calculateBtn');
    const ageErrorIcon = document.getElementById('ageErrorIcon');
    const incomeErrorIcon = document.getElementById('incomeErrorIcon');
    const extraIncomeErrorIcon = document.getElementById('extraIncomeErrorIcon');
    const deductionsErrorIcon = document.getElementById('deductionsErrorIcon');
    const resultModal = document.getElementById('resultModal');
    const taxResult = document.getElementById('taxResult');
  
    calculateBtn.addEventListener('click', function() {
      const age = ageInput.value;
      const income = parseFloat(incomeInput.value);
      const extraIncome = parseFloat(extraIncomeInput.value);
      const deductions = parseFloat(deductionsInput.value);
  
      let isError = false;
  
   
      if (!age) {
        isError = true;
        ageErrorIcon.style.display = 'inline';
      } else {
        ageErrorIcon.style.display = 'none';
      }
  
      if (isNaN(income) || isNaN(extraIncome) || isNaN(deductions)) {
        isError = true;
        incomeErrorIcon.style.display = 'inline';
        extraIncomeErrorIcon.style.display = 'inline';
        deductionsErrorIcon.style.display = 'inline';
      } else {
        incomeErrorIcon.style.display = 'none';
        extraIncomeErrorIcon.style.display = 'none';
        deductionsErrorIcon.style.display = 'none';
      }
  
      if (!isError) {
     
        let tax = 0;
        const incomeAfterDeductions = income + extraIncome - deductions;
        if (incomeAfterDeductions <= 800000) {
          tax = 0;
        } else {
          const taxableAmount = incomeAfterDeductions - 800000;
          if (age === '<40') {
            tax = 0.3 * taxableAmount;
          } else if (age === '>=40&<60') {
            tax = 0.4 * taxableAmount;
          } else if (age === '>=60') {
            tax = 0.1 * taxableAmount;
          }
        }

        taxResult.textContent = `Tax: ${tax} Lakhs`;
        resultModal.style.display = 'block';
      }
    });
  
  
    window.addEventListener('click', function(event) {
      if (event.target == resultModal) {
        resultModal.style.display = 'none';
      }
    });
  });
  

 
  
