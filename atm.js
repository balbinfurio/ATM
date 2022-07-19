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
    let t = document.getElementById("moneyTo")
    money = parseInt(t.value);
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
            money = money - (bi.value * paper);
        }
    }
    if(money > 0)
    {
        document.write("Im a poor ATM");
    }
    else
    {
        for(let w of withdrawn)
        {
            document.write(w.amount + " Bills of $" + w.value + "<br />");
        }
    }
}

let cash = [];
let withdrawn = [];
cash.push(new Bill(50, 10));
cash.push(new Bill(20, 30));
cash.push(new Bill(10, 10));

let money = 0;
let div = 0;
let paper = 0;

let b = document.getElementById("withdraw");
b.addEventListener("click", cashWithdrawal);


