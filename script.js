document.getElementById('fetchDog').addEventListener('click', () => {   // Annotation -1 this is an event listener and it is used to make the button an event
            fetch('https://dog.ceo/api/breeds/image/random')   // Anno -2 fetches a random image of the dog 
                .then(response => response.json())
                .then(data => {
                    const imgElement = document.createElement('img');
                    imgElement.src = data.message;
                    imgElement.alt = 'Random Dog';
                    const dogImageDiv = document.getElementById('dogImage');
                    dogImageDiv.innerHTML = '';   // Annotation - 3 clears the image
                    dogImageDiv.appendChild(imgElement); // ann 4 - add a newly fetched image
                })
                .catch(error => console.error('Error:', error));
        });
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const nameError = "Name must be at least 3 characters long."
    const emailError = "Please enter a valid email address."
    const passwordError = "Password must be at least 8 characters long and contain both letters and numbers."
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if (name.length < 3) { // the length of the nme should be atleast 3 char
        alert(nameError);
        return
    }
    if (!emailPattern.test(email)) { // it needs to have all the requirements of an email address 
        alert(emailError)
        return
    }

    if (!passwordPattern.test(password)) { // password should atleast contain 8 letters and should include both the letters and characters 
        alert(passwordError)
        return
    }
    alert('Sign up successful!')
    document.getElementById('signupForm').reset()
});
