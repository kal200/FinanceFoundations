 document.addEventListener('DOMContentLoaded', (event) => {
    console.log("DOM loads");
    document.getElementById("default-open").click();

    compoundInit()
    mortgageInit()
    loanInit();

    });
  
   

  //Define onclick function for tabs
  function openCalc(calcName) {
    let i, tabcontent;

    //hide all elements with class "tabname"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i=0; i < tabcontent.length; i++){
        tabcontent[i].style.display = "none";
    }

    document.getElementById(calcName).style.display = "block";   

}

//comma formatting for inputs
/*function commaFormat(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log("COMMA")
}*/

console.log("Script Running");

 //user inputs for LOAN CALCULATOR
 let loanAmountInput = document.querySelector(".loan-amount");
 let interestRateInput = document.querySelector(".interest-rate");
 let loanTermInput = document.querySelector(".loan-term");


 //user inputs for MORTGAGE CALCULATOR
 let homePriceInput = document.querySelector(".home-price");
 let downPayInput = document.querySelector(".down-pay");
 let mTermInput = document.querySelector(".m-term");
 let mInterestRateInput = document.querySelector(".m-interest");

 //user inputs for COMPOUND INTEREST CALCULATOR
 let depositInput = document.querySelector(".initial-deposit"); //initial investment
 let rateInput = document.querySelector(".est-ror");    //interest rate (still have to divide by 100)
 let yearsInput = document.querySelector(".years-save");   //number of years user saves for
 let addtlContInput = document.querySelector(".addtl-cont");     // amount of additional contributions
 //inputs from dropdowns
 let contFreqInput = document.getElementById("contfreq");  //how often to contribute? (w, m, a)
 let compFreqInput = document.querySelector("#compfreq");  //how often to compound? (m, a)

 let contFreqSelected = contFreqInput.value;
 let compFreqSelected = compFreqInput.value; 

 console.log("Cont Freq Selected:", contFreqSelected);
 console.log("Comp Freq Selected:", compFreqSelected);


 //output values for LOAN CALCULATOR
 let loanEMIValue = document.querySelector(".loanemi .value");
 let totalInterestValue = document.querySelector(".totalinterest .value");
 let totalAmountValue = document.querySelector(".totalamount .value");


 //output values for MORTGAGE CALCULATOR
 let monthlyPaymentValue = document.querySelector(".total-monthly .mvalue");
 let principalMonthlyValue = document.querySelector(".principal-monthly .mvalue");
 let interestMonthlyValue = document.querySelector(".interest-monthly .mvalue");

 //outputs for COMPOUND INTEREST CALCULATOR
 let futureValueOutput = document.querySelector(".future-value .cvalue");
 let totalContOutput = document.querySelector(".total-contributed .cvalue");
 let totalInterestOutput = document.querySelector(".interest-total .cvalue");

 //charts
 let loanChart;
 let mortgageChart; 
 let compoundChart;


 //Validate COMPOUND INTEREST inputs
 function checkCompoundValues() {
    console.log("Check Compound Called")
    let depositCheck = depositInput.value;
    let rateCheck = rateInput.value;
    let yearsCheck = yearsInput.value;
    let addtlContCheck = addtlContInput.value; 

    let validDeposit, validRate, validYears, validAddtlCont; 

    //regex
    let regexNumber = /^[0-9]+$/;
    let regexDecimalNumber = /^(\d*\.)?\d+$/;

    //check deposit
    if (!depositCheck.match(regexNumber)){
        console.log("Invalid deposit input");
        depositInput.value = 0;
    }
    else{
        validDeposit = parseFloat(depositCheck);
        console.log("Valid deposit:", validDeposit);
    }
    //check interest rate 
    if(!rateCheck.match(regexDecimalNumber)){
        console.log("Invalid interest rate input");
        rateInput.value = 0;
    }
    else{
        validRate = parseFloat(rateCheck);
        console.log("Valid Interest Rate:", validRate);
    }
    //check years input
    if(!yearsCheck.match(regexNumber)){
        console.log("Invalid year input");
        yearsInput.value = 0;
    }
    else{
        validYears = parseFloat(yearsCheck);
        console.log("Valid years:", validYears);
    }
    //check additional contribution
    if(!addtlContCheck.match(regexNumber)){
        console.log("Invalid additional contribution")
        addtlContInput.value = 0;
    }
    else{
        validAddtlCont = parseFloat(addtlContCheck);
        console.log("Valid additional contribution:", validAddtlCont);
    }

    return {validDeposit, validRate, validYears, validAddtlCont};
   
}


//Validate Loan Inputs
function checkValues() {
    console.log("CV called")
    let loanAmountCheck = loanAmountInput.value;
    let interestRateCheck = interestRateInput.value;
    let loanTermCheck = loanTermInput.value; 

    console.log("Loan Amount Check:", loanAmountCheck);
    console.log("Interest Rate Check:", interestRateCheck);
    console.log("Loan Term Check:", loanTermCheck);

    let validLoanAmount, validIntRate, validLoanTerm; 

    let regexNumber = /^[0-9]+$/;  //^ starts string, [0-9] matches digits 0-9, + ensures there are 1 or more digits, $ asserts end of string
    let regexDecimalNumber = /^(\d*\.)?\d+$/;  // \d* matches 0 or more digits, \. matches decimal, ? makes preceding \d*\. optional, 
                                               // \d+ matches one or more digits (so makes sure there are digits after decimal pt or just digits if no point)                             
    //validate and format input
    if(!loanAmountCheck.match(regexNumber)){
        loanAmountInput.value = '0';

        console.log("loan amount issue")
    }
    else{
        validLoanAmount = parseFloat(loanAmountCheck);
        //loanAmountInput.value = commaFormat(validLoanAmount);
    }

    if(!interestRateCheck.match(regexDecimalNumber)){
        interestRateInput.value = '0';

        console.log("interest rate issue")
    }
    else{
        validIntRate = parseFloat(interestRateCheck);
    }

    if(!loanTermCheck.match(regexNumber)){
        loanTermInput.value = '0';

        console.log("Loan term issue")
    }
    else{
        validLoanTerm = parseFloat(loanTermCheck);
       // loanTermInput.value = commaFormat(validLoanTerm);
    }

    return {validLoanAmount, validIntRate, validLoanTerm};

}

//Validate Mortgage Inputs
function checkMortgageValues() {
    console.log("CM Called");
    homePriceCheck = homePriceInput.value;
    downPayCheck = downPayInput.value; 
    mTermCheck = mTermInput.value;
    mInterestRateCheck = mInterestRateInput.value;

    console.log("HPC:", homePriceCheck);
    console.log("DPC:", downPayCheck);
    console.log("TPC:", mTermCheck);
    console.log("IPC:", mInterestRateCheck);

    let validHomePrice, validDownPay, validMTerm, validMInterestRate; 

    //regex
    let regexNumber = /^[0-9]+$/;
    let regexDecimalNumber = /^(\d*\.)?\d+$/;

    if (!homePriceCheck.match(regexNumber)){
        console.log("Home Price Check Issue");
        //alert("Invalid Input")
        homePriceInput.value = 0;
    }
    else{
        console.log("Home Price Valid")
        validHomePrice = parseFloat(homePriceCheck);
        console.log("Valid Home Price:", validHomePrice);
    }
    if (!downPayCheck.match(regexNumber)){
        console.log("Down Payment Check Issue");
        //alert("Invalid Input")
        downPayInput.value = 0;
    }
    else{
        console.log("Down Payment Valid")
        validDownPay = parseFloat(downPayCheck);
        console.log("Down Pay Valid:",validDownPay);
    }
    if (!mTermCheck.match(regexNumber)){
        console.log("Mortgage Term Check Issue");
        //alert("Invalid Input")
        mTermInput.value = 0;
    }
    else{
        console.log("M Term Valid");
        validMTerm = parseFloat(mTermCheck); 
        console.log("Valid M Term", validMTerm);
    }
    if (!mInterestRateCheck.match(regexDecimalNumber)){
        console.log("M Interest Rate Check Issue")
        //alert("Invalid Input")
        mInterestRateInput.value = 0;
    }
    else{
        console.log("M Interest Valid");
        validMInterestRate = parseFloat(mInterestRateCheck);
        console.log("Valid M Rate", validMInterestRate)
    }

    return {validHomePrice, validDownPay, validMTerm, validMInterestRate};

}

console.log("Return from CM", checkMortgageValues())

function calculateMortgageResults() {
    let {validHomePrice, validDownPay, validMTerm, validMInterestRate} = checkMortgageValues();
    console.log("calculate called");
    //console.log(checkMortgageValues());
    let mortgagePrincipal = validHomePrice - validDownPay;
    console.log(mortgagePrincipal);
    let monthlyRate = validMInterestRate /12 /100;
    //monthly payment calculation
    let monthlyPayment = mortgagePrincipal * monthlyRate * 
                    (Math.pow(1 + monthlyRate, validMTerm * 12))/ ((Math.pow(1 + monthlyRate, validMTerm * 12))-1);

    let monthlyInterest = (mortgagePrincipal/12) * monthlyRate;
    let monthlyPrincipal = monthlyPayment - monthlyInterest; 

    return {monthlyPayment, monthlyInterest, monthlyPrincipal};
}

//CALCULATE COMPOUND INTEREST
function calculateCompoundInterest() {
    let {validDeposit, validRate, validYears, validAddtlCont} = checkCompoundValues();

    let nCont;
    let nComp; 

    switch (contFreqInput.value){
        case 'contweekly':
            nCont = 52;
            break;
        case 'contmonthly':
            nCont = 12;
            break;
        case 'contannually':
            nCont = 1;
            break;
    }
     console.log(`Contribution Frequency ${nCont}`);

     switch (compFreqInput.value){
        case 'compmonthly':
            nComp= 12;
            break;
        case 'compannually':
            nComp = 1;
            break;
    }
     console.log(`Compounding Frequency ${nComp}`);

     //formulas for Aprincipal and Acontribution

     //formula inputs (both)
     let principal = validDeposit;
     let estRor = validRate/100;
     let saveYears = validYears;
     let pmt = validAddtlCont;


     let futureValuePrincipal, futureValueContribution, totalSaved, totalCont;

     totalCont = (pmt * nCont * saveYears) + validDeposit;
     console.log("Total Contribution:", totalCont);

     const years = [];
     const amountSaved = [];

     for(let year = 0; year <= saveYears; year++) {
        years.push(year);

        //Aprincipal
        futureValuePrincipal = principal * Math.pow(1 + (estRor / nComp), nComp * year);
        //Acontribution
        futureValueContribution = pmt * (Math.pow(1 + (estRor / nComp), nComp * year) - 1) / (estRor / nCont);

        totalSaved = futureValuePrincipal + futureValueContribution;


        amountSaved.push(totalSaved);
     }
     console.log("Years Array:", years)
     console.log("Amount Saved Array:", amountSaved)

     return {years, amountSaved, totalCont};
}

const displayCompoundChart = () => {
    // Ensure the canvas element is available
    const ctx = document.getElementById('compoundChart').getContext('2d');
    let {years, amountSaved} = calculateCompoundInterest();

    // Check if ctx is not null (canvas might not be found)
    if (!ctx) {
        console.error('Canvas element with id compoundChart" not found.');
        return;
    }

    // Create the chart
    //
    compoundChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: years, //array of year labels
            datasets: [{
                label: 'Amount Saved',
                data: amountSaved, //array of amount saved values corresponding to each year
                backgroundColor: "rgba(227, 57, 70, 0.2)", 
                borderColor: "#4eaae3", 
                borderWidth: 2 
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Years'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Amount Saved'
                    }
                }
            }
        }
    });
};

const updateCompoundChart = (yearArray, amountArray) => {
    compoundChart.data.labels = yearArray;
    compoundChart.data.datasets[0].data = amountArray;
    compoundChart.update(); 
}

function updateCompoundResults(yearArray, amountArray, totalCont) {

 let futureValueFormatted =  Number(amountArray[amountArray.length - 1].toFixed(2));
 futureValueOutput.innerHTML = futureValueFormatted.toLocaleString();
 console.log("Formatted Future Value:", futureValueFormatted)

 //let totalContFormatted = Number
 totalContOutput.innerHTML = totalCont.toLocaleString(); 
 console.log("Total Cont for display",totalCont);

 let totalInterestDisplay = amountArray[amountArray.length - 1] - totalCont;
 let totalInterestDisplayFormatted = Number(totalInterestDisplay.toFixed(2));
 totalInterestOutput.innerHTML = totalInterestDisplayFormatted.toLocaleString(); 
 console.log("Total interest for display", totalInterestDisplay);

 if(compoundChart){
    updateCompoundChart(yearArray, amountArray)
 }
 else{
    displayCompoundChart();
 }

}

function compoundInit() {
    checkCompoundValues();
    let compoundArrays = calculateCompoundInterest();
    updateCompoundResults(compoundArrays.years, compoundArrays.amountSaved, compoundArrays.totalCont)

}

const displayMortgageChart = (monthlyInterest, monthlyPrincipal) => {
    // Ensure the canvas element is available
    const ctx = document.getElementById('mortgageChart').getContext('2d');

    // Check if ctx is not null (canvas might not be found)
    if (!ctx) {
        console.error('Canvas element with id mortgageChart" not found.');
        return;
    }

    // Create the chart
     mortgageChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Interest', 'Principal'],
            datasets: [{
                data: [monthlyInterest,  monthlyPrincipal],
                backgroundColor: ["#c3f8ffbd", "#14213d"],
                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: 'black', // Change the color to your desired color
                        font: {
                            size: 16 // Change the size to your desired size
                        }
                    }
                }
            }
        }
    });
};

const updateChart = (interestPortion, principalPortion, currentChart) => {
    console.log("update chart called");
    currentChart.data.datasets[0].data[0] = interestPortion;
    currentChart.data.datasets[0].data[1] = principalPortion;
    currentChart.update();
    console.log("Update Chart called for:", currentChart)
};

function updateMortgageResults (monthlyPayment, monthlyInterest, monthlyPrincipal) {

    monthlyPaymentValue.innerHTML = Math.round(monthlyPayment).toLocaleString();
    console.log("Monthly Payment Value", monthlyPayment);

    interestMonthlyValue.innerHTML = Math.round(monthlyInterest).toLocaleString();
    console.log("Monthly Interest Value", monthlyInterest);

    principalMonthlyValue.innerHTML = Math.round(monthlyPrincipal).toLocaleString();
    console.log("Monthly Principal Value", monthlyPrincipal);

    if(mortgageChart){
        updateChart(monthlyInterest, monthlyPrincipal, mortgageChart);
    }
    else{
        displayMortgageChart(monthlyInterest, monthlyPrincipal); 
    }
}

function mortgageInit() {
    checkMortgageValues(); 
    let mortgageValues = calculateMortgageResults();
    updateMortgageResults(mortgageValues.monthlyPayment, mortgageValues.monthlyInterest, mortgageValues.monthlyPrincipal);
}


const displayLoanChart = (totalInterestPayment, totalLoanAmount) => {
    // Ensure the canvas element is available
    const ctx = document.getElementById('loanChart').getContext('2d');

    // Check if ctx is not null (canvas might not be found)
    if (!ctx) {
        console.error('Canvas element with id "loanChart" not found.');
        return;
    }

 

    // Create the chart
     loanChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Total Interest', 'Principal'],
            datasets: [{
                data: [totalInterestPayment, totalLoanAmount],
                backgroundColor: ["#c3f8ffbd", "#14213d"],
                borderWidth: 0
            }]
        },
        options: {
            plugins: {
                legend: {
                    labels: {
                        color: 'black', // Change the color to your desired color
                        font: {
                            size: 16 // Change the size to your desired size
                        }
                    }
                }
            }
        }
    });
};



function calculateEMI() {
    //formula components
    console.log("CEMI called")
    let {validLoanAmount, validIntRate, validLoanTerm} = checkValues();

    //calculate EMI
    let monIntRate = validIntRate/12/100; //monthly interest rate
        
    let emi = validLoanAmount * monIntRate * 
                  (Math.pow(1 + monIntRate, validLoanTerm))/ ((Math.pow(1 + monIntRate, validLoanTerm))-1);

                  console.log("EMI:", emi)
                  console.log("AMT:", validLoanAmount)
                  console.log("INT:", validIntRate)
                  console.log("TERM:", validLoanTerm)
    return {emi, validLoanAmount, validIntRate, validLoanTerm};
   

    //return null;
    }
    
    


function updateLoanResult(emi, validLoanAmount, validLoanTerm) {
    loanEMIValue.innerHTML = Math.round(emi).toLocaleString();

    let totalLoanAmount = Math.round(emi * validLoanTerm);
    totalAmountValue.innerHTML = totalLoanAmount.toLocaleString();
    console.log("TotalLoan:", totalLoanAmount);
    console.log("ValidLoan", validLoanAmount);

    console.log("WTF", totalLoanAmount - validLoanAmount)
    let totalInterestPayment = totalLoanAmount - validLoanAmount;
    console.log("TotalInterest", totalInterestPayment);
    totalInterestValue.innerHTML = totalInterestPayment.toLocaleString();

    if (loanChart) {  
        updateChart(totalInterestPayment, validLoanAmount, loanChart);    //if chart has already been created we will update chart, otherwise we can just call displayChart()
    } else {
        displayLoanChart(totalInterestPayment, validLoanAmount);

    }

}



function loanInit() {
    checkValues();
    let loanValues = calculateEMI();
    updateLoanResult(loanValues.emi, loanValues.validLoanAmount, loanValues.validLoanTerm);
    

}

//loanInit();
