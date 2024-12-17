document.addEventListener('DOMContentLoaded', function () {
    // Removes the 'studentGrade' key from Local Storage
    localStorage.removeItem('studentGrade');
    // Retrieve user goals from Local Storage
    const userData = JSON.parse(localStorage.getItem('userGoals'));

    if (userData) {
        // Render data on the page
        document.querySelector('#goalsDisplay').innerHTML = `
            <div class="text-center mt-5">
                <h2>Welcome, ${userData.firstName} ${userData.lastName}!</h2>
                <p><strong>Email:</strong> ${userData.email}</p>
                <p><strong>Current Weight:</strong> ${userData.currentWeight} lbs</p>
                <p><strong>Weight Goal:</strong> ${userData.weightGoal} lbs</p>
            </div>
        `;
    } else {
        // Display a fallback message if no data is found
        document.querySelector('#goalsDisplay').innerHTML = `
            <div class="text-center mt-5">
                <p>No goals set yet. Please go back and set your goals.</p>
                <a href="index.html" class="btn btn-primary">Go Back</a>
            </div>
        `;
    }
});