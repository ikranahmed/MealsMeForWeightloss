// Event listener for "Save Changes" button
document.querySelector('#saveChanges').addEventListener('click', function () {
    // Get form data
    const firstName = document.querySelector('#startherefirstName').value;
    const lastName = document.querySelector('#startherelastName').value;
    const email = document.querySelector('#starthereEmail').value;
    const currentWeight = document.querySelector('#startherecurrentWeight').value;
    const weightGoal = document.querySelector('#starthereweightGoal').value;

    // Validate inputs
    if (!firstName || !lastName || !email || !currentWeight || !weightGoal) {
        alert('Please fill out all fields!');
        return;
    }

    // Store data in local storage
    const userData = {
        firstName,
        lastName,
        email,
        currentWeight,
        weightGoal
    };
    localStorage.setItem('userGoals', JSON.stringify(userData));

    // Notify user
    alert('Your goals have been saved!');

    // Redirect to the "Goals" page
    window.location.href = 'goals.html';
});
