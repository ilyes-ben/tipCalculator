
window.addEventListener('DOMContentLoaded',()=>{
    
    const bill = document.getElementById("bill");
    const tip = document.getElementById("tip");
    const button = document.getElementById("button");
    const total = document.getElementById("total");

    button.onclick = () => {
        const billValue = parseInt(bill.value);
        const tipPercent = parseInt(tip.value);
        const totalValue = billValue * (1 + tipPercent / 100);
        total.textContent = "total : " + totalValue.toString();
    };

})


