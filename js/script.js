document.getElementById("paymentButton").addEventListener("click", function () {
  if (validateForm()) {
    fakePaymentAndRedirect();
  } else {
    alert("Please fill in all fields with valid information.");
  }
});

function validateForm() {
  var inputs = document.querySelectorAll(
    'input[type="text"], input[type="number"], select'
  );

  for (var i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      return false;
    }
  }

  // Validate email format
  var emailInput = document.getElementById("emailInput");
  if (!validateEmail(emailInput.value)) {
    return false;
  }

  return true;
}

function validateEmail(email) {
  // Simple email validation using a regular expression
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function fakePaymentAndRedirect() {
  alert("Payment successful!");

  // Close the window after 1 second
  setTimeout(function() {
    window.close();
  }, 1000);
}
