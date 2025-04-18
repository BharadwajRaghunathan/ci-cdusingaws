document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (description && amount) {
        addExpense(description, amount);
        updateTotal();
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    }
});

function addExpense(description, amount) {
    const expenseList = document.getElementById('expense-list');
    const li = document.createElement('li');
    li.textContent = `${description}: $${amount.toFixed(2)}`;
    expenseList.appendChild(li);
}

function updateTotal() {
    const expenseList = document.getElementById('expense-list').children;
    let total = 0;
    for (let i = 0; i < expenseList.length; i++) {
        const amountText = expenseList[i].textContent.split('$')[1];
        total += parseFloat(amountText);
    }
    document.getElementById('total').textContent = total.toFixed(2);
}