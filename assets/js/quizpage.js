document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM Loads");
    const questionBanks = {

        pfterms: [
            {question: "_______ is the granting of money or something else of value in exchange for a promise of future repayment.", choices: ["Credit", "Overdraft", "Debt", "Income"], correctAnswer: "Credit"},
            {question: "When you earn interest on both the money you save and the interest you earn, that is called ________ ________", choices: ["Creditor", "High Yield Savings/Checking Account", "Compound Interest", "Debits"], correctAnswer: "Compound Interest"},
            {question: "A ________ is a person, financial institution, or other business that lends money.", choices: ["Loan", "Creditor", "Savings", "Interest"], correctAnswer: "Creditor"},
            {question: "A ______ ______ is a loan and bill payment history kept by a credit bureau and used by financial institutions and other potential creditors to determine the likelihood that a future debt will be repaid.", choices: ["Mortgage", "Debt-to-Income Ratio", "Credit Score", "Credit Report"], correctAnswer: "Credit Report"},
            {question: "A ______ _____ is a prediction of your credit behavior, such as how likely you are to pay a loan back on time.", choices: ["Overdraft", "Credit Score", "Debits", "Credit Report"], correctAnswer: "Credit Score"},
            {question: "An _________ occurs when you don't have enough money in your account to cover a transaction, but the bank pays the transaction anyway.", choices: ["Overdraft", "Regressive Tax", "Expenses", "Debt"], correctAnswer: "Overdraft"},
            {question: "______ are charges to or withdrawals from an account. They are subtracted from the balance in a bank account register.", choices: ["Credits", "Debits", "Loans", "Budgets"], correctAnswer: "Debits"},
            {question: "________ ________ are expenses, like bills, that are paid on a set schedule and generally cost the same amount. Examples include rent, car payments, and student loans.", choices: ["Debt", "Recurring expenses", "Variable expenses", "Fixed expenses"], correctAnswer: "Fixed expenses"},

            {question: "_________ ________ are expenses that you incur on a regular basis, usually on a set schedule (e.g. monthly). They can be fixed or variable.", choices: ["Fixed Expenses", "Debits", "Overdraft", "Recurring expenses"], correctAnswer: "Recurring expenses"},
            {question: "________ ________ are expenses that change in amount from one period to the next, such as month to month or week to week. Examples include utilities and groceries.", choices: ["Variable Expenses", "Debits", "Credit", "Budgets"], correctAnswer: "Variable Expenses"},
            {question: "_______ are money you have set aside in a secure place, such as in a bank account, that you can use for future emergencies or to make specific purchases.", choices: ["Credits", "Income", "Loans", "Savings"], correctAnswer: "Savings"},
            {question: "A _________ is an account that pays the customer a higher rate of interest (compared to a typical savings or checking account) and often requires the customer to meet certain conditions.", choices: ["401(k)", "High-Yield Savings Account", "Mortgage", "Roth IRA"], correctAnswer: "High-Yield Savings Account"},
            {question: "A ______ is a plan that outlines what money you expect to earn or receive (your income) and how you will save it or spend it (your expenses) for a given period of time.", choices: ["Budget", "High-Yield Savings Account", "Credit Report", "Debt-to-Income Ratio"], correctAnswer: "Budget"},
            {question: "______ is money earned or received such as wages or salaries, tips, commissions, and dividends on investments.", choices: ["Interest", "Debt", "Credit", "Income"], correctAnswer: "Income"},
            {question: "Take-home pay refers to _______ income, while total pay before taxes an other deductions refers to _______ income.", choices: ["Fixed; Net", "Fixed; Variable", "Net; Gross", "Gross; Net"], correctAnswer: "Net; Gross"},
            {question: "_________ is a fee charged by a lender, and paid by a borrower, for the use of money.", choices: ["Credit", "Interest", "Income", "Expense"], correctAnswer: "Interest"},
            {question: "A ______ is a payment of money from citizens to federal, state or local government to fund essential public goods or services meant to benefit the community as a whole.", choices: ["Tax", "Loan", "Credit", "Tax Credit"], correctAnswer: "Tax"},
            {question: "A ____________ ___ is a tax (e.g. excise tax or tariff) which takes a larger percentage of the income of lower-income groups than of higher-income groups.", choices: ["Progessive Tax", "Defined Contribution Plan", "Regressive Tax", "Tax Deduction"], correctAnswer: "Regressive Tax"},
            {question: "A ____________ ____ tax is a tax(e.g. income tax) which takes a larger percentage of the income of higher-income groups than of lower-income groups.", choices: ["Progessive Tax", "Defined Contribution Plan", "Regressive Tax", "Tax Deduction"], correctAnswer: "Progressive Tax"},
            {question: "___________ is a tax on money earned (e.g. salaries, wages, commissions) and money received from interest or dividend payments.", choices: ["Tariff", "Income Tax", "Regressive Tax", "Excise Tax"], correctAnswer: "Income Tax"},
            {question: "______________ are taxes on property, especially real estate, but also can be on boats, automobiles, recreational vehicles, and business inventories.", choices: ["Debits", "Mortgages", "Property Taxes", "Tax Exemptions"], correctAnswer: "Property Taxes"},
            {question: "A ____________ is an amount (often a personal or business expense) that reduces income subject to tax.", choices: ["Debit", "Tax Deduction", "Tax Credit", "Tax Exemption"], correctAnswer: "Tax Deduction"},
            {question: "A ______________ is a part of a person's income on which no tax is imposed.", choices: ["Overdraft", "Tax Deduction", "Tax Credit", "Tax Exemption"], correctAnswer: "Tax Exemption"},
            {question: "A ____________ is a dollar-for-dollar reduction in the tax that can be deducted directly from taxes owed.", choices: ["Property Tax", "Tax Deduction", "Tax Credit", "Tax Exemption"], correctAnswer: "Tax Credit"},

            {question: "_____ is Money owed in exchange for loans or for goods or services purchased with credit.", choices: ["Tax", "Interest", "Debt", "Expense"], correctAnswer: "Debt"},
            {question: "A ____ is a sum of money provided temporarily on the condition that the amount borrowed be repaid, usually with interest.", choices: ["Compound Interest", "Loan", "Defined Benefit Plan", "Social Security"], correctAnswer: "Loan"},
            {question: "A ________ is a loan for the purchase of a home or real estate.", choices: ["Tax Credit", "Property Tax", "Debit", "Mortgage"], correctAnswer: "Mortgage"},
            {question: "________ is the price of using someone else's money, for which the rate can be fixed or variable.", choices: ["Interest", "Credit", "Debit", "Debt-to-Income Ratio"], correctAnswer: "Interest"},
            {question: "Your ______________ is all your monthly debt payments divided by your gross monthly income. ", choices: ["Income Tax", "Compound Interest", "Credit Score", "Debt-to-Income Ratio"], correctAnswer: "Debt-to-Income Ratio"},

            {question: "A traditional pension plan is an example of a ____________, and  a 401(k) is an example of a ___________. ", choices: ["High-Yield Savings Account; Defined Contribution Plan", "Defined Benefit Plan; Defined Contribution Plan", "Health Savings Account; Roth IRA", "Defined Contribution Plan; Defined Benefit Plan"], correctAnswer: "Defined Benefit Plan; Defined Contribution Plan"},
            {question: "A __________________ is a set of options allowing employees to make contributions to retirement accounts, with contributions either tax-deductible or  not tax-deductible but with eventual withdrawals not included in taxable income.", choices: ["Health Savings Account", "Tax Exemption", "Credit Report", "Individual Retirement Arrangement (IRA)"], correctAnswer: "Individual Retirement Arrangement (IRA)"},
            {question: "A _________ is an account or plan for which contributions are made on an after-tax basis but with withdrawals generally not included in taxable income.", choices: ["Health Savings Account", "High-Yield Savings Account", "Credit Score", "Roth IRA"], correctAnswer: "Roth IRA"},
            {question: "A _________________ is an account into which an employee makes contributions on a pre-tax basis (excluded from current income) with withdrawals used to pay qualified healthcare expenses likewise not taxed.", choices: ["Health Savings Account", "401(k)", "Defined Contribution Plan", "Roth IRA"], correctAnswer: "Health Savings Account"},
            {question: "__________ is federal health insurance for people at least 65 years old.", choices: ["Health Savings Account", "Medicare", "Social Security", "Defined Benefit Plan"], correctAnswer: "Medicare"},
            {question: "_________________ is a federal retirement system which pays monthly benefit if a taxpayer is at least 62 years old and has paid in for at least 10 years of work.", choices: ["Defined Contribution Plan", "Individual Retirement Arrangement (IRA)", "Social Security", "Defined Benefit Plan"], correctAnswer: "Social Security"}

        ], 
        pfmath: [
            {question: "If your gross income is $3,500 and your total tax is $700, what is your net income?", choices: ["$2,600", "$2,800", "$3,500", "$2,600"], correctAnswer: "$2,800"},
            {question: "If you save $200 every month, how much will you have saved in a year?", choices: ["$2,000", "$1,400", "$1,200", "$2,400"], correctAnswer: "$2,400"},
            {question: "If you invest $1,000 at an annual interest rate of 5%, how much interest will you earn in one year?", choices: ["$25", "$50", "$60", "$1,050"], correctAnswer: "$50"},
            {question: "If your monthly expenses are $1,200 and your monthly income is $2,000, how much can you save each month?", choices: ["$800", "$9,600", "1,000", "$600"], correctAnswer: "$800"},
            {question: "If your loan amount is $10,000 and the interest rate is 3% annually, what is the interest you need to pay in the first year?", choices: ["$3,000", "$781", "$300", "$250"], correctAnswer: "$300"},
            {question: "If you spend $150 on groceries, $200 on utilities, and $100 on transportation, what are your total monthly expenses?", choices: ["$350", "$500", "$450", "$112.50"], correctAnswer: "$450"},
            {question: "If your mortgage payment is $1,500 per month, how much will you pay over a year?", choices: ["$18,000", "$30,000", "$24,000", "$12,000"], correctAnswer: "$18,000"},
            {question: "If you borrow $5,000 with a simple interest rate of 4% per year, how much interest will you pay in 3 years? (Simple Interest Formula: Principal * Interest Rate * Number of Time Periods)", choices: ["$1,200", "$450", "$600", "$624.32"], correctAnswer: "$600"},
            {question: "What is the original price of an item selling for $50 that is currently on sale for 20% off?", choices: ["$55", "$62.50", "$40", "$60"], correctAnswer: "$62.50"},
            {question: "If your monthly income is $3,000 and you spend 30% of it on rent, what is your monthly rent payment?", choices: ["$900", "$3,900", "$750", "$300"], correctAnswer: "$900"},
            {question: "If you deposit $500 into a savings account with a 2% annual interest rate, how much will you have after one year?", choices: ["$490", "$505", "$510", "$502"], correctAnswer: "$510"},
            {question: " If you owe $1,200 on a credit card and plan to pay off $100 per month, how many months will it take to pay off the debt?", choices: ["10", "12", "14", "52"], correctAnswer: "12"},
            {question: "If you spend $800 on rent, $200 on food, and $100 on transportation, what percentage of your $2,000 monthly income is spent on these expenses?", choices: ["50%", "45%", "55%", "60%"], correctAnswer: "55%"},
            {question: "If you earn $4,000 per month and allocate 50% to essentials, 20% to savings, and 30% to leisure, how much do you spend on each category?", choices: ["Essentials: $2,000; Savings: $800; Leisure: $1,200", "Essentials: $2,200; Savings: $700; Leisure: $1,100", "Essentials: $1,800; Savings: $800; Leisure: $1,400", "Essentials: $2,100; Savings: $600; Leisure: $1,300"], correctAnswer: "Essentials: $2,000; Savings: $800; Leisure: $1,200"},
            {question: "If your annual rent is $13,200, what is your monthly rent?", choices: ["$1,050", "$1,100", "$1,000", "1,200"], correctAnswer: "$1,100"}
        ],
        pfdecision: [
            {question: "You’re making a purchase of $200. Should you use a credit card with a 2% cashback reward or a debit card?", choices: ["Use the debit card", "Use the credit card", "Use cash", "No Difference"], correctAnswer: "Use the credit card"},
            {question: "You have the option to buy a home with a mortgage payment of $1,200 per month or rent a similar home for $1,100 per month. If you plan to stay for 5 years, which is likely the better financial decision?", choices: ["Renting the home", "Renting is always cheaper", "No difference", "Buying the home"], correctAnswer: "Buying the home"},
            {question: "You have $1,000 to pay off debt. Is the credit card with a 15% interest rate or a student loan with a 5% interest rate likely a higher priority to pay off?", choices: ["The credit card debt because it has a higher interest rate", "The student loan debt because you can pay the minimum payment for the credit card", "The student loan because it has a lower interest rate", "Both have the same priority"], correctAnswer: "The credit card debt because it has a higher interest rate"},
            {question: "You can either invest $5,000 in a 401(k) with a 5% annual return or in a regular savings account with a 2% annual return. Which will give you more money after 10 years?", choices: ["The savings account with 2% interest", "The 401(k) with 5% interest", "Both will give the same amount", "It depends on the bank"], correctAnswer: "The 401(k) with 5% interest"},
            {question: "You need to borrow $5,000. One loan offers a 7% interest rate for 3 years, and another offers a 6% interest rate for 5 years. Which loan will cost you less in total interest?", choices: ["The loan with 6% interest for 5 years", "The length of the loan doesn’t matter", "The loan with 7% interest for 3 year", "Both loans cost the same"], correctAnswer: "The loan with 6% interest for 5 years"},
            {question: "Your credit card has a balance of $1,500. You can either pay the minimum payment of $30 or pay $150 this month. Which option will reduce your debt faster?", choices: ["Paying the minimum payment of $30", "Both reduce the debt equally", "Paying $150", "Cancel the card"], correctAnswer: "Paying $150"},
            {question: "You have two loans: one with a 10% interest rate and a $5,000 balance, and another with a 5% interest rate and a $10,000 balance. If you have $2,000 to make an extra payment, where should you apply it to save the most on interest?", choices: ["Apply it to the loan with the 5% interest rate", "Apply it to the loan with the highest balance", "Applying it to either loan will save the same amount on interest", "Apply it to the loan with the 10% interest rate"], correctAnswer: "Apply it to the loan with the 10% interest rate"},
            {question: "You can buy a single item for $10 or 3 of the same item for $25. Which option is more cost-effective?", choices: ["Both options cost the same per item", "Buy the single item for $10", "Buy 3 items for $25", "Not enough information"], correctAnswer: "Buy 3 items for $25"},
            {question: "You're deciding between a traditional IRA and a Roth IRA. Which of the following statements is true about a Roth IRA?", choices: ["Withdrawals in retirement are tax-free", "Contributions are tax-deductible", "You must have withdrawn all funds by age 72", "Contributions are taxed when withdrawn"], correctAnswer: "Withdrawals in retirement are tax-free"},
            {question: "You’re planning your emergency fund. What is a commonly recommended guideline for how much money to keep in an emergency fund?", choices: ["The amount of your largest monthly bill", "Three to six months of living expenses", "The total amount of your annual income", "One month of salary"], correctAnswer: "Three to six months of living expenses"},
            {question: "You have multiple debts with varying interest rates. What is a recommended strategy for paying down these debts effectively?", choices: ["Pay off the smallest debts first", "Make equal payments on all debts", "Consolidate all debts into one loan", "Pay off the debts with the highest interest rates first"], correctAnswer: "Pay off the debts with the highest interest rates first"},
            {question: "How do tax brackets affect your income tax liability?", choices: ["All of your income is taxed at the highest rate", "Different portions of your income are taxed at different rates", "Tax brackets are used to calculate your gross income", "The tax bracket determines your total income"], correctAnswer: "Different portions of your income are taxed at different rates"},
            {question: "You’re planning to purchase a new car and are deciding between paying with a lump sum from your savings or financing the purchase. What is a key consideration when deciding between these options?", choices: ["The brand of the car", "How long you will keep the car for", "The cost of financing (interest rates) versus using your savings and depleting your emergency fund", "The length of the car’s warranty"], correctAnswer: "The cost of financing (interest rates) versus using your savings and depleting your emergency fund"},
            {question: "You’re comparing electricity plans and can choose between a fixed-rate plan or a variable-rate plan. What is a key consideration when choosing a fixed-rate plan?", choices: ["Predictability of monthly utility costs despite market fluctuations", "Flexibility to change plans easily", "Potential for lower rates if energy prices drop", "Availability of other energy sources/options"], correctAnswer: "Predictability of monthly utility costs despite market fluctuations"},
            {question: "You need a loan for a major purchase and are deciding between a secured loan (with collateral) and an unsecured loan (without collateral). What is a key advantage of a secured loan?", choices: ["No credit check required", "Typically lower interest rates due to reduced lender risk", "No down payment required", "There are no advantages to a secured loan"], correctAnswer: "Typically lower interest rates due to reduced lender risk"}
        ],
    
        invterms: [
            {question: "______________ includes buildings, tools, or equipment and _______________ includes assets or money, such as currency, debt or equity.", choices: ["Physical capital; financial capital", "Financial capital; Human capital", "Human capital; physical capital", "Financial capital; physical capital"], correctAnswer: "Physical capital; financial capital"},
            {question: "________ refers to an increase in value of any asset, while ________ refers to a decrease in value of any asset.", choices: ["Depreciation; Appreciation", "Capital gain; Capital loss", "Appreciation; Depreciation", "Capital loss; Capital gain"], correctAnswer: "Appreciation; Depreciation"},
            {question: "A _________ is the profit that comes from selling an investment for more than you paid for it.", choices: ["Depreciation", "Appreciation", "Capital gain", "Capital loss"], correctAnswer: "Capital Gain"},
            {question: "If you hold an asset for more than one year before you dispose of it, your capital gain/loss is ________. If you hold the asset for one year or less, your capital gain/loss is ________.", choices: ["short-term; long-term", "No difference", "unqualified; qualified", "long-term; short-term"], correctAnswer: "long-term; short-term"},
            {question: "A _____ bond is a certificate of indebtedness issued by a government or a corporation.", choices: ["Bond", "Dividend", "Exchange-Traded Fund (ETF)", "Mutual Fund"], correctAnswer: "Bond"},
            {question: "___________ is a type of security that represents an ownership interest—or equity—in a company. ", choices: ["Capital", "Common Stock", "Treasury Bill", "Dividend"], correctAnswer: "Common Stock"},
            {question: "The ___________ refers to the organized trading of stocks through exchanges, over-the-counter, and computerized trading venues.", choices: ["Financial Capital", "Common Stock", "Stock Market", "Exchange-Traded Fund (ETF)"], correctAnswer: "Stock Market"},

            {question: "A ______________ is a company that pools money from many investors and invests the money in securities such as stocks, bonds, and short-term debt. ", choices: ["Dividend", "Mutual Fund", "Bond", "Stock Market"], correctAnswer: "Mutual Fund"},
            {question: "A _________ is a portion of a company's profit paid to shareholders.", choices: ["Treasury Note", "Bond", "Dividend", "Common Stock"], correctAnswer: "Dividend"},
            {question: "A _______ is any person engaged in the business of buying or selling securities for the account of others. A _______ is any person engaged in the business of buying or selling securities, but for their own account.", choices: ["Dealer; Broker", "Broker; Investor", "No Difference", "Broker; Dealer"], correctAnswer: "Broker; Dealer"},
            {question: "____________ is an investment strategy to reduce the impact of any single loss by allocating investments across multiple asset classes, categories, sectors or companies.", choices: ["Dividend", "Diversification", "Appreciation", "Depreciation"], correctAnswer: "Diversification"},
            {question: "The __________ shows a company’s assets, liabilities, and shareholder’s equity at a specific point in time.", choices: ["Cash Flow Statement", "Income Statement", "Statement of Owner's Equity", "Balance Sheet"], correctAnswer: "Balance Sheet"},
            {question: "The ___________ includes a company’s revenue, expenses and net income (profit) for the period.", choices: ["Income Statement", "Balance Sheet", "Cash Flow Statement", "Statement of Owner's Equity"], correctAnswer: "Income Statement"},
            {question: "The ___________ measures how cash flows in and out during the period.", choices: ["Income Statement", "Statement of Owner's Equity", "Balance Sheet", "Cash Flow Statement"], correctAnswer: "Cash Flow Statement"},
            {question: "______ are things that a company owns that have value. Examples include factories, cash, and trademarks.", choices: ["Dividends", "Assets", "Shareholder's Equity", "Liabilities"], correctAnswer: "Assets"},
            {question: "_______ are amounts of money that a company owes to others. Examples include loans, rent, and payroll.", choices: ["Liabilities", "Shareholder's Equity", "Assets", "Price-Earnings"], correctAnswer: "Liabilities"},
            {question: "_________________ is the money that would be left if a company sold all of its assets and paid off all of its liabilities.", choices: ["Shareholder's Equity", "Physical Capital", "Bond", "Dividend"], correctAnswer: "Shareholder's Equity"},

            {question: "A company's  ________ is a way of gauging whether the stock price is high or low compared to the past or to other companies. It is calculated by dividing the current stock price by the current earnings per share.", choices: ["Sharpe Ratio", "Beta", "Price-Earnings (P/E) Ratio", "Current Ratio"], correctAnswer: "Price-Earnings (P/E) Ratio"},
            {question: "___________ is calcuated by subtracting the cost of goods sold (COGS) from revenue.", choices: ["Gross Profit", "Net Profit", "Operating Profit", "Net Earnings"], correctAnswer: "Gross Profit"},
            {question: "_____________ is the total value of a company, incorporating both equity and debt.", choices: ["Debt-to-Equity Ratio", "Market Capitalization", "Enterprise Value", "Gross Profit"], correctAnswer: "Enterprise Value"},
            {question: "The ___________ is calculated by dividing a company's current assets by its current liabilities.", choices: ["Price-Earnings (P/E) Ratio", "Quick Ratio", "Sharpe Ratio", "Current Ratio"], correctAnswer: "Current Ratio"},
            {question: "The ______________ measures a company's ability to meet short-term obligations (current liabilities), but using more liquid assets (assets that more quickly convert to cash).", choices: ["Current Ratio", "Quick Ratio", "Sharpe Ratio", "Debt-Equity Ratio"], correctAnswer: "Quick Ratio"},
            
            {question: "__________ is the degree of fluctuation or variation in a stock price. A stock with lower __________ has more stable prices.", choices: ["Sharpe Ratio", "Volatility", "Beta", "Rate of Return"], correctAnswer: "Volatility"},
            {question: "An investment's _______________ is the percentage change in the its value over a given period.", choices: ["Simple Moving Average", "Beta", "Rate of Return", "Volatility"], correctAnswer: "Rate of Return"},
            {question: "The _________ is used to measure the excess return an investor receives for holding a riskier asset compared to a risk-free asset, such as 1-year treasury bills.", choices: ["Sharpe Ratio", "Simple Moving Average", "Price-Earnings (P/E) Ratio", "Rate of Return"], correctAnswer: "Sharpe Ratio"},
            {question: "_______ is a measure of how volatile a stock is compared to a benchmark index (e.g. the S&P500). A stock with a ______above 1 tends to be more volatile than the benchmark index, and vice versa for stocks with ______ less than 1.", choices: ["Sharpe Ratio", "Rate of Return", "Beta", "Volatility"], correctAnswer: "Beta"},
            {question: "The _____________ is calculated by adding the closing prices of a stock over a given number of periods and dividing this sum by the number of periods. It is used to help smooth out short-term fluctuations and indicate underlying trends.", choices: ["Simple Moving Average", "Price-Earnings (P/E) Ratio", "Sharpe Ratio", "Rate of Return"], correctAnswer: "Simple Moving Average"}
        ],
        invmath: [
            {question: "If a portfolio has an average return of 8%, a risk-free rate of 2%, and a standard deviation of 10%, what is the Sharpe ratio?", choices: ["0.3", "0.6", "0.8", "1.0"], correctAnswer: "0.6"},
            {question: "A stock has a beta of 1.5. If the market goes up by 10%, what is the expected change in the stock's price?", choices: ["10% increase", "15% decrease", "5% increase", "15% increase"], correctAnswer: "15% increase"},
            {question: "If a mutual fund charges a 2% annual management fee and your investment is $10,000, how much will you pay in fees for the year?", choices: ["$200", "$100", "$1000", "$300"], correctAnswer: "$200"},
            {question: "You purchase 50 shares of a stock at $20 each and sell them when the price reaches $35. What is your total profit?", choices: ["$700", "$500", "$750", "$800"], correctAnswer: "$750"},
            {question: "You invest $1,200 in a stock that increases by 10% in the first year and by 5% in the second year. What is the value of your investment after two years?", choices: ["$1,386", "$1,320", "$1,350", "$1,400"], correctAnswer: "$1,386"},
            {question: "If a company has 1 million shares outstanding and its total earnings are $2 million, what is the EPS?", choices: ["$1", "$2", "$0.50", "$4"], correctAnswer: "$2"},
            {question: "A stock has a P/E ratio of 15 and an EPS of $6. What is the stock price?", choices: ["$90", "$60", "$120", "$150"], correctAnswer: "$90"},
            {question: "A company pays a quarterly dividend of $1 per share. What is the annual dividend per share?", choices: ["$3", "$2", "$4", "$1"], correctAnswer: "$4"},
            {question: "A stock is trading at $100 with a P/E ratio of 25. What is the earnings per share (EPS)?", choices: ["$25", "$2", "$4", "$5"], correctAnswer: "$4"},
            {question: "You buy a bond for $1,000 that pays $50 in interest annually. What is the bond’s yield (annual rate of return)?", choices: ["4%", "50%", "10%", "5%"], correctAnswer: "5%"},
            {question: "If a dividend of $1 per share is paid on a stock priced at $40, what is the dividend yield?", choices: ["2.5%", "5%", "2%", "6%"], correctAnswer: "2.5%"},
            {question: "A company has a share price of $50 and earnings per share (EPS) of $5. What is the price-to-earnings (P/E) ratio?", choices: ["15", "5", "10", "20"], correctAnswer: "10"},
            {question: "If a stock’s price drops from $40 to $32, what is the percentage decrease?", choices: ["30%", "10%", "25%", "20%"], correctAnswer: "20%"},
            {question: "You bought 10 shares of a stock at $20 each. If the price rises to $25 per share, what is the total value of your shares now?", choices: ["$350", "$250", "$300", "$50"], correctAnswer: "$250"},
            {question: "If you invest $1,000 in a bond that pays 3% interest per year, how much interest will you earn in the first year?", choices: ["$30", "$100", "$50", "$10"], correctAnswer: "$30"}
        ],
        invdecision: [
            {question: "A stock you own is up 50% in value. What should you consider before selling?", choices: ["Potential capital gains tax", "Market conditions", "Your investment goals", "All of the above"], correctAnswer: "All of the above"},
            {question: "If you want to minimize risk in your investment portfolio, which of the following should you avoid?", choices: ["Investing in a mutual fund", "Investing in bonds", "Putting all your money into one stock", "Diversifying your investments"], correctAnswer: "Putting all your money into one stock"},
            {question: "You’re interested in a company with a high P/E ratio. What does this indicate?", choices: ["The company is undervalued", "The company has no debt", "The company is possibly overvalued", "The company has high earnings"], correctAnswer: "The company is possibly overvalued"},
            {question: "You have $500 to invest and want a steady income stream. Which investment would be most suitable?", choices: ["Growth stocks", "Dividend-paying stocks", "Cryptocurrency", "Penny stocks"], correctAnswer: "Dividend-paying stocks"},
            {question: "You are evaluating a company and notice it has a high debt-to-equity ratio. What does this suggest?", choices: ["The company relies heavily on debt financing", "The company has strong equity", "The company is financially stable", "The company is a low-risk investment"], correctAnswer: "The company relies heavily on debt financing"},
            {question: "You are considering investing in a company with a negative cash flow. What is one risk?", choices: ["No growth potential", "High dividend payments", "The company may struggle to fund operations", "Overvaluation in the market"], correctAnswer: "The company may struggle to fund operations"},
            {question: "You want to invest in a mutual fund but are concerned about fees. What should you look for?", choices: ["High Sharpe ratio", "Low expense ratio", "High management fees", "High dividend yield"], correctAnswer: "Low expense ratio"},
            {question: "You are evaluating an investment in a startup. What is one key risk to consider?", choices: ["High potential for failure", "Established market presence", "Guaranteed returns", "No competition"], correctAnswer: "High potential for failure"},
            {question: "You want to invest in a company known for high volatility. What is one potential outcome?", choices: ["Stable and predictable returns", "No risk of loss", "Guaranteed capital preservation", "Large price swings that could lead to significant gains or losses"], correctAnswer: "Large price swings that could lead to significant gains or losses"},
            {question: "You are looking at an investment with a high Sharpe ratio. What does this imply?", choices: ["The investment has a good risk-adjusted return", "The investment has high risk and low return", "The investment is risk-free", "The investment has high volatility"], correctAnswer: "The investment has a good risk-adjusted return"},
            {question: "You’ve noticed that the price of a stock you own has risen sharply. What might be a prudent first step?", choices: ["Buy more shares immediately", "Ignore the price increase", "Review the company’s financials to see if the increase is justified", "Sell all of your shares immediately"], correctAnswer: "Review the company’s financials to see if the increase is justified"},
            {question: "What is one potential drawback of holding cash during inflationary periods?", choices: ["Loss of purchasing power", "Stable value", "High returns", "Increased purchasing power"], correctAnswer: "Loss of purchasing power"},
            {question: "If a company has a low current ratio, what does this indicate?", choices: ["The company is highly profitable", "The company may have liquidity issues and struggle to meet short-term obligations", "The company has high fixed asset investments", "The company has a high amount of cash reserves"], correctAnswer: "The company may have liquidity issues and struggle to meet short-term obligations"},
            {question: "What is one reason a company might choose to issue new stock shares?", choices: ["To prevent shareholder dilution", "To lower its operating costs", "To increase its dividend payout", "To raise capital for expansion or projects"], correctAnswer: "To raise capital for expansion or projects"},
            {question: "If you are evaluating two investments and one has a higher Sharpe ratio, what does that imply?", choices: ["The investment with the higher Sharpe ratio has lower returns", "The investment with the higher Sharpe ratio has higher fees", "The investment with the higher Sharpe ratio offers better risk-adjusted returns", "The investment with the higher Sharpe ratio is less volatile"], correctAnswer: "The investment with the higher Sharpe ratio offers better risk-adjusted returns"}
        ]
    }
    
    
    

    document.querySelector(".app").style.display = 'none';

    

    /* for random questions*/ 
    /* Shuffle with Fisher-Yates*/
    
    let quizId;

 
   
    document.getElementById("pfterms").addEventListener('click', () => {
       
        quizId = 'pfterms';
        console.log("Quiz ID:", quizId);
        document.querySelector(".app").style.display = 'block';
        allActions();
    });

    document.getElementById("pfmath").addEventListener('click', () => {
       
        quizId = 'pfmath';
        console.log("Quiz ID:", quizId);
        document.querySelector(".app").style.display = 'block';
        allActions();
    });

    
    document.getElementById("pfdecision").addEventListener('click', () => {
       
        quizId = 'pfdecision';
        console.log("Quiz ID:", quizId);
        document.querySelector(".app").style.display = 'block';
        allActions();
    });

    document.getElementById("invterms").addEventListener('click', () => {
       
        quizId = 'invterms';
        console.log("Quiz ID:", quizId);
        document.querySelector(".app").style.display = 'block';
        allActions();
    });

    document.getElementById("invmath").addEventListener('click', () => {
       
        quizId = 'invmath';
        console.log("Quiz ID:", quizId);
        document.querySelector(".app").style.display = 'block';
        allActions();
    });

    document.getElementById("invdecision").addEventListener('click', () => {
       
        quizId = 'invdecision';
        console.log("Quiz ID:", quizId);
        document.querySelector(".app").style.display = 'block';
        allActions();
    });

    

    function allActions() {

    

    if(typeof quizId !== 'undefined'){

        let questions; 
        let shuffled; 
        let totalQuestions;

        function shuffleQuestions(array) {
            for(let i = array.length - 1; i > 0; i--){
                let j = Math.floor(Math.random() * (i+1));
                [array[i], array[j]] = [array[j], array[i]]
            }
            return array; 
       
            
        }

        questions = questionBanks[quizId];
        shuffled = shuffleQuestions(questions).slice(0,7);
        totalQuestions = questions.length; 


        let currentQuestionIndex = 0;
        //mirror index
        let currentQuestionIndMirror = 0
        



       
     
    
    
    
    
   
    let score = 0;
    let quizCompleted = false; 
    
    const answerButtons = document.getElementById("answer-buttons");
    
    
    function resetState() {
        document.getElementById("next-btn").style.display = 'none'; 
        while(answerButtons.firstChild){
            answerButtons.removeChild(answerButtons.firstChild); 
        }
        
        
    }
    
    function restartQuiz() {
        console.log("Restart Quiz Called");
        resetState();
        currentQuestionIndex = 0;
        currentQuestionIndMirror = 0; 
        score = 0;
        console.log("Score Restart:", score);
        /*quizCompleted = false;*/
        quizCompleted = false;
        if(quizCompleted == false){
            document.getElementById("restart-btn").style.display = 'none'; 
            document.getElementById("exit-btn").style.display = 'none';

            document.getElementById("score-show").style.display = 'none';
            document.getElementById('score-message').style.display = 'none';
        }
        
        console.log("Quiz Status after restart:", quizCompleted)
        renderQuestions();
    }

    restartQuiz();


    function exitQuiz() {
        console.log("Exit Quiz Called")
        document.querySelector(".app").style.display = 'none'; 
    }
    
    
    
    function renderQuestions() {
        console.log("Render index:", currentQuestionIndex);
        resetState(); 
    
       if (!quizCompleted){
        
        console.log("Shuffled Questions:", shuffled)
    
        if (quizId == 'pfterms'){
            document.getElementById('quiz-title').innerHTML = "Personal Finance Terms Quiz";
        }

        if (quizId == 'pfmath'){
            document.getElementById('quiz-title').innerHTML = "Personal Finance Math";
        }

        if (quizId == 'pfdecision'){
            document.getElementById('quiz-title').innerHTML = "Personal Finance Decision-making";
        }

        if (quizId == 'invterms'){
            document.getElementById('quiz-title').innerHTML = "Investing Terms";
        }
       
        if (quizId == 'invmath'){
            document.getElementById('quiz-title').innerHTML = "Investing Math";
        }

        if (quizId == 'invdecision'){
            document.getElementById('quiz-title').innerHTML = "Investment Decision-making";
        }
       
    
        const nowQuestion = shuffled[currentQuestionIndex];
        document.getElementById('question').innerHTML = nowQuestion.question;
    
        
        answerButtons.innerHTML = '';
    
        const buttonArray = [];
    
        nowQuestion.choices.forEach(choice => {
            const button = document.createElement('button');
            const buttonClasses = button.classList;
            button.className = "btn";
            button.id = 'quiz-btn'; 
            button.innerText = choice;
           
            
            button.addEventListener('click', () => selectAnswer(choice, buttonClasses, buttonArray));
    
          
            answerButtons.appendChild(button); 
            buttonArray.push(button)
            
            
            
        });
    
        console.log("Button Array:", buttonArray)
       }
        
      
    }
    
    
    /*Answer evaluation*/
    
    function selectAnswer(selectedChoice, buttonClasses, buttonArray) {
        const correctAnswer = shuffled[currentQuestionIndex].correctAnswer;
    
        var i;
        for (i=0; i<buttonArray.length; i++){
            const button = buttonArray[i];
            if (button.innerText == correctAnswer){
                 button.classList.toggle("correct-answer");
            }
            button.disabled = true; 
            
             } 
    
        document.getElementById("next-btn").style.display = 'block'; 
    
       if(selectedChoice == correctAnswer){
        console.log("correct")
        score ++; 
        console.log("score:", score);
        buttonClasses.add("correct-answer");
        console.log("Button Class List:", buttonClasses)
       }
       else{
        console.log("Incorrect")
        buttonClasses.add("wrong-answer");
        }
    }
    
    
    
    
    
    
    /*Move between questions*/
    //currentQuestionIndex < 6 &&
    //currentQuestionIndex ==  6
    
    function showNextQuestion() {
        if(currentQuestionIndex < shuffled.length -1){
            currentQuestionIndex++;
            currentQuestionIndMirror++;
            console.log("Current Index:", currentQuestionIndex);
            renderQuestions();
        }
    
        if (currentQuestionIndex == shuffled.length - 1){

            currentQuestionIndMirror++;
            console.log("Current Index:", currentQuestionIndex);
            renderQuestions();
        }

        
        

        if (currentQuestionIndMirror == 8){
            resetState();
            quizCompleted = true; 
          
            console.log("quis status:", quizCompleted)
            document.getElementById("restart-btn").style.display = 'block'; 
            
            document.getElementById("exit-btn").style.display = 'block';
    
            const displayDone = document.getElementById('question'); 
            displayDone.style.display = 'block';
    
            const scoreScreenText = document.getElementById("score-show");
            scoreScreenText.style.display = 'block';
    
            const scoreScreenVariable = document.getElementById('score-message');
            scoreScreenVariable.style.display = 'block';
        
            displayDone.innerHTML = "Quiz Completed!";
            scoreScreenText.innerText = `Score: ${score}/${7}`;
        
            if(score == 7){
                scoreScreenVariable.innerText = "Perfect Score! Great Job!";
                confettiBurst();
            }
            else{
                scoreScreenVariable.innerText = "Good attempt! Keep Trying!";
            }
        }    
            
        }

        
       
        document.getElementById("restart-btn").addEventListener('click', restartQuiz); 

        document.getElementById("exit-btn").addEventListener('click', exitQuiz);
    }
    
    function confettiBurst() {
        const defaults = {
            spread: 360,
            ticks: 50,
            gravity: 0,
            decay: 0.94,
            startVelocity: 20,
            shapes: ["star"],
            colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
          };
          
          function shoot() {
            confetti({
              ...defaults,
              particleCount: 40,
              scalar: 1.2,
              shapes: ["star"],
            });
          
            confetti({
              ...defaults,
              particleCount: 10,
              scalar: 0.75,
              shapes: ["circle"],
            });
          }
          
          setTimeout(shoot, 0);
          setTimeout(shoot, 100);
          setTimeout(shoot, 200);
    }
    
    
    
    /*For next button*/
    
    
    
    
    document.getElementById("next-btn").addEventListener("click", showNextQuestion);
    
    //renderQuestions();

   
    }
})
