function generateSeating() {
    const rows = parseInt(document.getElementById('rows').value);
    const columns = parseInt(document.getElementById('columns').value);
    const students = parseInt(document.getElementById('students').value);

    if (isNaN(rows) || isNaN(columns) || isNaN(students)) {
        alert('Please enter valid numbers for rows, columns, and students.');
        return;
    }

    const seatingChart = document.getElementById('seating-chart');
    seatingChart.innerHTML = ''; // Clear the existing chart
    seatingChart.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;

    let studentCounter = 1;
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            const seat = document.createElement('div');
            seat.className = 'seat';
            // Only fill seats in odd-numbered columns (0-indexed: j % 2 === 0)
            if (j % 2 === 0 && studentCounter <= students) {
                seat.textContent = `S${studentCounter}`;
                seat.classList.add('occupied');
                studentCounter++;
            }
            seatingChart.appendChild(seat);
        }
    }
}
