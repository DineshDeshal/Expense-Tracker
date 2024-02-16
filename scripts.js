document.getElementById('expense-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = document.getElementById('expense-amount').value;
    const date = document.getElementById('expense-date').value;
    const category = document.getElementById('expense-category').value;

    // Add expense to the table
    const table = document.getElementById('expenses-table');
    const row = table.insertRow(-1);
    const cells = [];

    cells.push(row.insertCell(0));
    cells[0].textContent = amount;

    cells.push(row.insertCell(1));
    cells[1].textContent = date;

    cells.push(row.insertCell(2));
    cells[2].textContent = category;

    cells.push(row.insertCell(3));
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        table.deleteRow(row.rowIndex);
    });
    cells[3].appendChild(deleteButton);
});