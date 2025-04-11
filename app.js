document.addEventListener('DOMContentLoaded', function() {
    const balanceElement = document.querySelector('.balance');
    const positiveTransactionButton = document.querySelector('.primary-button');
    const negativeTransactionButton = document.querySelector('.secondary-button');
    const transactionList = document.querySelector('.transactions-list');

    let balance = 0;

    function updateBalance() {
        balanceElement.innerText = `${balance} SmartCoin`;
    }

    function addTransaction(amount, isPositive) {
        const transactionItem = document.createElement('div');
        transactionItem.classList.add('transaction-item');

        const transactionType = document.createElement('div');
        transactionType.classList.add('transaction-type');
        const icon = document.createElement('span');
        icon.classList.add('transaction-icon');
        icon.innerHTML = isPositive ? '⬆️' : '⬇️';
        transactionType.appendChild(icon);

        const amountElement = document.createElement('span');
        amountElement.classList.add('transaction-amount');
        amountElement.classList.add(isPositive ? 'positive' : 'negative');
        amountElement.innerText = `${isPositive ? '+' : '-'} ${amount}`;
        transactionType.appendChild(amountElement);

        transactionItem.appendChild(transactionType);

        transactionList.appendChild(transactionItem);
    }

    positiveTransactionButton.addEventListener('click', function() {
        balance += 10; // Add 10 SmartCoin for positive transaction
        updateBalance();
        addTransaction(10, true);
    });

    negativeTransactionButton.addEventListener('click', function() {
        balance -= 5; // Subtract 5 SmartCoin for negative transaction
        updateBalance();
        addTransaction(5, false);
    });

    // Initial balance update
    updateBalance();
});
