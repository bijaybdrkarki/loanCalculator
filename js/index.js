let calculate = document.getElementById("Calculate");

function loancalculation ()
{
    let loan = document.getElementById("amount").value; 
    let years = document.getElementById("years").value;
    console.log(loan ,years);
    const rate= 5;
    let numOfpayments = rate * 12;
    let monthlyInterest = 1 + (rate/100)/12;
    let calculation = 1 - Math.pow(monthlyInterest, -numOfpayments);
    
    let monthlyloan = loan * (monthlyInterest-1);
    
    let monthlyInstallment = monthlyloan/calculation;
    console.log(monthlyInstallment);
    document.getElementById("loan").innerHTML = loan;
    document.getElementById("rates").innerHTML += rate;
    document.getElementById("year").innerHTML += years;
    document.getElementById("installment").innerHTML += monthlyInstallment.toFixed(2);
}









calculate.addEventListener("click", loancalculation);