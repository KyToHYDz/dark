document.getElementById('admission-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;

    if (name && email && phone && course) {
        alert(`Thank you, ${name}! You have successfully registered for the ${course} course.`);
        document.getElementById('admission-form').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
