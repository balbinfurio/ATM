class Bill
{
    constructor(v, a)
    {
        this.value = v;
        this.amount = a;
    }
}

function cashWithdrawal()
{
    for(let bi of cash)
    {
        if(money > 0)
        {
            div = Math.floor(money / bi.value);
            if(div > bi.amount)
            {
                paper = bi.amount;
            }
            else
            {
                paper = div;
            }

            withdrawn.push(new Bill(bi.value, paper));
        }
    }
}

let cash = [];
let withdrawn = [];
cash.push(new Bill(50, 3));
cash.push(new Bill(20, 2));
cash.push(new Bill(10, 3));

let money = 210;
let div = 0;
let paper = 0;

let b = document.getElementById("withdraw");
b.addEventListener("click", cashWithdrawal);


