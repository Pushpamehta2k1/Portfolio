
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !phone || !message) {
      alert("Please fill in all fields.");
      return;
    }
    if (!email.match(emailPattern)) {
      alert("Please enter a valid email.");
      return;
    }

    if (!phone.match(phonePattern)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    alert("Form submitted successfully!");
    this.reset();
  });
