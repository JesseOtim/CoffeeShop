// const form = document.getElementById("regForm"); // Replace with your form's actual ID
// form.addEventListener("submit", Validate);

let error = 0;

const Validate = (event) => {
  //   const form = document.getElementById("regForm"); // Replace with your form's actual ID
  //   form.addEventListener("submit", Validate);
  event.preventDefault();
  // pick inputs

  let password = document.getElementById("password");
  let email = document.getElementById("email");

  // pick error sections

  let passwordError = document.getElementById("passwordErr");
  let emailError = document.getElementById("emailErr");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  emailInput.addEventListener("input", () => {
    if (emailInput.value.trim() !== "") {
      emailInput.style.border = "2px solid green";
    } else {
      emailInput.style.border = "2px solid red";
    }
  });

  passwordInput.addEventListener("input", () => {
    if (passwordInput.value.trim() !== "") {
      passwordInput.style.border = "2px solid green";
    } else {
      passwordInput.style.border = "2px solid red";
    }
  });

//   if (/* your email validation logic fails */) {
//   email.style.border = "2px solid red";
//   emailError.innerHTML = "Email is invalid"; // Set the error message
//   emailError.style = "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
//   error++;
// } else {
//   email.style.border = "2px solid green";
//   emailError.innerHTML = "";
// }

  // validating email input emptiness
  if (email.value == "") {
    email.style.border = "2px solid red";
    emailError.innerHTML = "Email can not be empty";
    emailError.style =
      "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
    error++;
  }
  // validating email for minimum length
  else if (email.value.length < 3) {
    email.style.border = "2px solid red";
    emailError.innerHTML = "Email must be atleast 3 characters";
    emailError.style =
      "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
    error++;
  }
  // validating email for maximum length
  else if (email.value.length > 50) {
    email.style.border = "2px solid red";
    emailError.innerHTML = "Email must be less than 50 characters";
    emailError.style =
      "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
    error++;
  } else {
    email.style.border = "2px solid green";
    emailError.innerHTML = "";
  }

  // password validation
  const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (password.value == "") {
    password.style.border = "2px solid red";
    passwordError.innerHTML = "Password can't be blank";
    passwordError.style =
      "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
    error++;
  } else if (!password.value.match(passwordregex)) {
    password.style.border = "2px solid red";
    passwordError.textContent = "Please put in the correct password";
    passwordError.style =
      "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
    error++;
  } else {
    password.style.border = "2px solid darkgreen";
    passwordError.innerHTML = "";
  }
};

// JavaScript code
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

// Function to perform the search
function performSearch() {
  // Get the search query from the input field
  const query = searchInput.value.toLowerCase();

  // Perform your search logic here (e.g., filtering a list of items)
  // Replace this with your actual search logic
  const items = ["Coffee", "Tea", "Cappucino", "Cocoa"];
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(query)
  );

  // Display the search results
  const resultsHTML = filteredItems.map((item) => `<p>${item}</p>`).join("");
  searchResults.innerHTML = resultsHTML;
}

// Add a click event listener to the search button
searchButton.addEventListener("click", performSearch);

// Optionally, you can also trigger the search when the user presses Enter in the input field
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    performSearch();
  }
});

const baseUrl = "http://localhost:4000/api/auth/";

if (error === 0) {

  newLogin(click);
}
const submitButton = document.getElementById("submitbutton");
submitButton.addEventListener("click", newLogin);

async function newLogin(event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  try {
    console.log(email);
    const response = await fetch (baseUrl + 'login', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    if (data.status == 200) {
      console.log(data.data.role, ">>>>>>>>>");
      // alert(data.message)
      setTimeout(function () {
        if (data.data.role === "user") {
          location.href = "/pages/products.html";
        }
      }, 500);
    }
  } catch (error) {
    console.log(error);
  }
}
