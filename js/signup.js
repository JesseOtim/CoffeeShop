const Validate = (event) => {
    let error = 0;
  
    event.preventDefault();
    // pick inputs
    let firstname = document.getElementById("firstname");
    let lastname = document.getElementById("lastname");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let confirmpassword = document.getElementById("confirmpassword");
  
    // pick error sections
    let firstnameError = document.getElementById("firstnameErr");
    let lastnameError = document.getElementById("lastnameErr");
    let emailError = document.getElementById("emailErr");
    let passwordError = document.getElementById("passwordErr");
    let confirmpasswordError = document.getElementById("confirmpasswordErr");
  
    // validating first name input emptiness
    if (firstname.value == "") {
      firstname.style.border = "2px solid red";
      firstnameError.innerHTML = "Please first name can not be empty";
      firstnameError.style =
        "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
      error++;
    }
    // validating first name for minimum length
    else if (firstname.value.length < 3) {
      firstname.style.border = "2px solid red";
      firstnameError.innerHTML =
        "Please the first name must be atleast 3 letters";
      firstnameError.style =
        "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
      error++;
    }
    // validating first name for maximum length
    else if (firstname.value.length > 14) {
      firstname.style.border = "2px solid red";
      firstnameError.innerHTML =
        "Please the first name must be less than 14 letters";
      firstnameError.style =
        "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
      error++;
    } else {
      firstname.style.border = "2px solid green";
      firstnameError.innerHTML = "";
    }
  
    // Last name Validation
    if (lastname.value == "") {
      lastname.style.border = "2px solid red";
      lastnameError.innerHTML = "Please fill in the last name";
      lastnameError.style =
        "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
      error++;
    } else if (lastname.value.length < 3) {
      lastname.style.border = "2px solid red";
      lastnameError.innerHTML = "Please the last name must be atleast 3 letters";
      lastnameError.style =
        "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
      error++;
    } else if (lastname.value.length > 50) {
      lastname.style.border = "2px solid red";
      lastnameError.innerHTML =
        "Please the last name must be less than 50 letters";
      lastnameError.style =
        "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
      error++;
    } else {
      lastname.style.border = "2px solid green";
      lastnameError.innerHTML = "";
    }
  
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
  
    // Confirm password
  
    if (confirmpassword.value == "") {
      confirmpassword.style.border = "2px solid red";
      confirmpasswordError.innerHTML = "Password can't be blank";
      confirmpasswordError.style =
        "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
      error++;
    } else if (confirmpassword.value !== password.value) {
      confirmpassword.style.border = "2px solid red";
      confirmpasswordError.textContent = "Passwords don't match";
      confirmpasswordError.style =
        "color: red; font-size:14px; font-family:Arial, Helvetica, sans-serif;";
      error++;
    } else {
      confirmpassword.style.border = "2px solid darkgreen";
      confirmpasswordError.innerHTML = "";
    }
  
  };
  
  //   // // Get references to the input field and search button
  //   // const searchInput = document.getElementById('searchInput');
  //   // const searchButton = document.getElementById('searchButton');
  
  //   // // Add a click event listener to the search button
  //   // searchButton.addEventListener('click', function() {
  //   //     // Get the value of the input field
  //   //     const searchTerm = searchInput.value.trim(); // trim removes leading/trailing whitespace
  
  //   //     // Check if the input is empty
  //   //     if (searchTerm === '') {
  //   //         alert('Please enter a search term.'); // You can replace this with your preferred validation method
  //   //     } else {
  //   //         // Perform the search or other action here
  //   //         alert(`Searching for: ${searchTerm}`);
  //   //         // Replace the alert with the actual search logic
  //   //     }
  //   // });
  
  // //   document.getElementById('liveAlertBtn').addEventListener('click', function () {
  // //     const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
  // //     const alertHTML = `
  // //     <div class="alert alert-success alert-dismissible fade show" role="alert">
  // //         This is a live Bootstrap alert! You can customize its content.
  // //         <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  // //             <span aria-hidden="true">&times;</span>
  // //         </button>
  // //     </div>
  // //     `;
  
  // //     // Clear any existing alerts
  // //     alertPlaceholder.innerHTML = '';
  
  // //     // Insert the new alert
  // //     alertPlaceholder.insertAdjacentHTML('beforeend', alertHTML);
  
  // //     // You can also use Bootstrap's JavaScript functions to initialize the alert (optional)
  // //     // For example, to close the alert after a few seconds:
  // //     const alertElement = document.querySelector('.alert');
  // //     if (alertElement) {
  // //         const bsAlert = new bootstrap.Alert(alertElement);
  // //         setTimeout(function () {
  // //             bsAlert.close();
  // //         }, 5000); // Close the alert after 5 seconds
  // //     }
  // // });
  
  // // document.getElementById('liveAlertBtn').addEventListener('click', function () {
  // //   const alertPlaceholder = document.getElementById('liveAlertPlaceholder');
  // //   const alertHTML = `
  // //   <div class="alert alert-success alert-dismissible fade show" role="alert">
  // //       This is a live Bootstrap alert! You can customize its content.
  // //       <button type="button" class="close" data-dismiss="alert" aria-label="Close">
  // //           <span aria-hidden="true">&times;</span>
  // //       </button>
  // //   </div>
  // //   `;
  
  // //   // Clear any existing alerts
  // //   alertPlaceholder.innerHTML = '';
  
  // //   // Insert the new alert
  // //   alertPlaceholder.insertAdjacentHTML('beforeend', alertHTML);
  
  // //   // You can also use Bootstrap's JavaScript functions to initialize the alert (optional)
  // //   // For example, to close the alert after a few seconds:
  // //   const alertElement = document.querySelector('.alert');
  // //   if (alertElement) {
  // //       const bsAlert = new bootstrap.Alert(alertElement);
  // //       setTimeout(function () {
  // //           bsAlert.close();
  // //       }, 5000); // Close the alert after 5 seconds
  // //   }
  // // });
  // const ValidatePassword = (password) => {
  //   const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
  //   if (password === "") {
  //       return {
  //           isValid: false,
  //           errorMessage: "Password can't be blank",
  //       };
  //   } else if (!password.match(passwordRegex)) {
  //       return {
  //           isValid: false,
  //           errorMessage: "Please put in the correct password",
  //       };
  //   } else {
  //       return {
  //           isValid: true,
  //       };
  //   }
  // };
  
  // const ValidateEmail = (email) => {
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  //   if (email === "") {
  //       return {
  //           isValid: false,
  //           errorMessage: "Email can't be blank",
  //       };
  //   } else if (!email.match(emailRegex)) {
  //       return {
  //           isValid: false,
  //           errorMessage: "Please enter a valid email address",
  //       };
  //   } else {
  //       return {
  //           isValid: true,
  //       };
  //   }
  // };
  
  // const passwordInput = document.getElementById("password");
  // const emailInput = document.getElementById("email");
  // const passwordError = document.getElementById("passwordErr");
  // const emailError = document.getElementById("emailErr");
  
  // passwordInput.addEventListener("input", () => {
  //   const password = passwordInput.value.trim();
  //   const validationResult = ValidatePassword(password);
  
  //   if (validationResult.isValid) {
  //       passwordInput.style.border = "2px solid green";
  //       passwordError.innerHTML = "";
  //   } else {
  //       passwordInput.style.border = "";
  //       passwordError.innerHTML = validationResult.errorMessage;
  //   }
  // });
  
  // emailInput.addEventListener("input", () => {
  //   const email = emailInput.value.trim();
  //   const validationResult = ValidateEmail(email);
  
  //   if (validationResult.isValid) {
  //       emailInput.style.border = "2px solid green";
  //       emailError.innerHTML = "";
  //   } else {
  //       emailInput.style.border = "";
  //       emailError.innerHTML = validationResult.errorMessage;
  //   }
  // });
  
  var baseUrl = "http://localhost:4000/api/auth/";
  
  
  
  const submitButton = document.getElementById("submitbutton");
  submitButton.addEventListener("click", newSignup);
  
  async function newSignup(event) {
    event.preventDefault();
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
  
    try {
      console.log(email);
      const response = await fetch(baseUrl + "signup", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          confirmpassword: confirmpassword,
        }),
      });
      const data = await response.json();
      if (data.status == 201) {
        console.log(data.data.role, ">>>>>>>>>");
        // alert(data.message)
        setTimeout(function () {
          location.href = "/auth/index.html";
        }, 500);
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  // var baseUrl = "http://localhost:4000/api/auth/";

  // const submitButton = document.getElementById("submitbutton");
  // submitButton.addEventListener("click", (event) => {
  //   const error = Validate(event);
  
  //   if (error === 0) {
  //     newSignup(event);
  //   }
  // });
  
  // async function newSignup(event) {
  //   event.preventDefault();
  //   let firstname = document.getElementById("firstname").value;
  //   let lastname = document.getElementById("lastname").value;
  //   let email = document.getElementById("email").value;
  //   let password = document.getElementById("password").value;
  //   let confirmpassword = document.getElementById("confirmpassword").value;
  
  //   try {
  //     console.log(email);
  //     const response = await fetch(baseUrl + "signup", {
  //       method: "POST",
  //       headers: {
  //         "content-type": "application/json",
  //       },
  //       mode: "cors",
  //       body: JSON.stringify({
  //         firstname: firstname,
  //         lastname: lastname,
  //         email: email,
  //         password: password,
  //         confirmpassword: confirmpassword,
  //       }),
  //     });
  //     const data = await response.json();
  //     if (data.status == 200) {
  //       console.log(data.data.role, ">>>>>>>>>");
  //       // alert(data.message)
  //       setTimeout(function () {
  //         location.href = "/auth/login.html";
  //       }, 500);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
  // function Validate(event) {
  //   let error = 0;
  
  //   event.preventDefault();
  //   // Rest of your validation code...
  
  //   return error;
  // }
  
