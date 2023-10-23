// Function to show the popup with submitted data
function showPopup(formData) {
  const popup = document.getElementById("popup");
  const popupContent = document.getElementById("popupContent");

  popupContent.innerHTML = "<h2>Submitted Data:</h2>";
  for (const key in formData) {
    popupContent.innerHTML += `<p><strong>${key}:</strong> ${formData[key]}</p>`;
  }

  popup.classList.remove("hidden");
}

// Function to reset the form
function resetForm() {
  document.getElementById("surveyForm").reset();
}

// Handle form submission
document.getElementById("submitBtn").addEventListener("click", function () {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const dob = document.getElementById("dob").value;
  const country = document.getElementById("country").value;
  const gender = [
    ...document.querySelectorAll('input[name="gender"]:checked'),
  ].map((el) => el.value);
  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mobile").value;

  // Validation: Check if all required fields are filled
  if (
    !firstName ||
    !lastName ||
    !dob ||
    !country ||
    gender.length === 0 ||
    !profession ||
    !email ||
    !mobile
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  const formData = {
    "First Name": firstName,
    "Last Name": lastName,
    "Date of Birth": dob,
    Country: country,
    Gender: gender.join(", "),
    Profession: profession,
    Email: email,
    "Mobile Number": mobile,
  };

  showPopup(formData);
});

// Handle form reset
document.getElementById("resetBtn").addEventListener("click", function () {
  resetForm();
});

// Close the popup
document.getElementById("closePopup").addEventListener("click", function () {
  document.getElementById("popup").classList.add("hidden");
});
