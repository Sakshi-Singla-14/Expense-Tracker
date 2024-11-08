let total = 0;

function addExpense() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    if (description && !isNaN(amount)) {
        const date = new Date(); // Get the current date
        const formattedDate = formatDate(date);

        const list = document.getElementById('expenseList');
        const listItem = document.createElement('li');

        listItem.innerHTML = `${description} - ${category} - ${formattedDate}: ₹${amount.toFixed(2)} 
            <button class="delete-btn" onclick="deleteExpense(this, ${amount})">Delete</button>`;

        list.appendChild(listItem);

        total += amount;
        document.getElementById('total').textContent = `Total: ₹${total.toFixed(2)}`;

        // Clear input fields
        document.getElementById('description').value = '';
        document.getElementById('amount').value = '';
    }
}

function deleteExpense(button, amount) {
    const listItem = button.parentElement;
    listItem.remove();

    total -= amount;
    document.getElementById('total').textContent = `Total: ₹${total.toFixed(2)}`;
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}
