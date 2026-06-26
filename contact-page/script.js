// 1. Wait for the browser to completely load the HTML content
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is successfully connected!");

    // 2. Find the form element in the HTML
    const contactForm = document.querySelector("form");

    // 3. Listen for when the user clicks the "SEND VIA WHATSAPP" button (Submits the form)
    contactForm.addEventListener("submit", (event) => {
        // Stop the form from refreshing the page automatically
        event.preventDefault();

        // 4. Grab the values that the user typed into the input fields
        // We select the inputs based on their parent class names
        const fullName = document.querySelector(".form-group-name input").value;
        const email = document.querySelector(".form-group-email input").value;
        const subject = document.querySelector(".subject input").value;
        const message = document.querySelector(".message textarea").value;

        // 5. Test if we successfully captured the data by printing it in the browser console
        console.log("Form Submitted by:", fullName);
        console.log("Email:", email);

        // 6. Pop up a helpful alert box on the user's screen
        alert(`Hello ${fullName}! Thank you for your message about "${subject}".`);
    });
});
