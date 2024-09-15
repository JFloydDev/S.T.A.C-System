document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Capture the form data
    const firstname = document.getElementById("firstname").value;
    const middleI = document.getElementById("middleI").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const birthday = document.getElementById("birthday").value;
    const gender = document.getElementById("gender").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const address = document.getElementById("address").value;
    const country = document.getElementById("country").value;

    // Perform validation or send data to the server
    console.log({
        firstname,
        middleI,
        lastname,
        email,
        birthday,
        gender,
        phoneNumber,
        address,
        country
    });

    alert("Form submitted successfully!");
});