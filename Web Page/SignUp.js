//To validate username
function validate()
{
    var username =document.getElementById("uname").value;
    var regex=/E0/;
if(regex.test(username)){
    //alert("Valid username")
}
else{
    alert("Invalid Username")
}
}


  
//validate phone Number


/*function validatePhoneNumber() {
    const phoneNumberField = document.getElementById('phoneNumberField');
    const phoneNumber = phoneNumberField.value.trim();
  
    if (/^\d+$/.test(phoneNumber)) {
      
      //phoneNumberField.setCustomValidity('');
    } else {  
      phoneNumberField.setCustomValidity('Please enter a valid phone number.');
    }
  }*/
  

  
  

        //to select state and city

        function populateCities() {
            var stateDropdown = document.getElementById("state");
            var cityDropdown = document.getElementById("city");
            var selectedState = stateDropdown.value;
    
            
            cityDropdown.innerHTML = "";
    
          
            if (selectedState === "Andaman and Nicobar Islands") {
                var cities = ["Port Blair", "Car Nicobar", "Havelock Island"];
            } else if (selectedState === "Andhra Pradesh") {
                var cities = ["Hyderabad", "Visakhapatnam", "Vijayawada", "Guntur", "Tirupati"];
            } else if (selectedState === "Arunachal Pradesh") {
                var cities = ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Ziro"];
            } else if (selectedState === "Assam") {
                var cities = ["Guwahati", "Jorhat", "Silchar", "Dibrugarh", "Tezpur"];
            } else if (selectedState === "Bihar") {
                var cities = ["Patna", "Gaya", "Muzaffarpur", "Bhagalpur", "Darbhanga"];
            } else if (selectedState === "Chandigarh") {
                var cities = ["Chandigarh"];
            } else if (selectedState === "Chhattisgarh") {
                var cities = ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg"];
            } else if (selectedState === "Delhi") {
                var cities = ["New Delhi", "Gurgaon", "Noida", "Faridabad", "Ghaziabad"];
            } else if (selectedState === "Goa") {
                var cities = ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda"];
            }else if (selectedState === "Gujarat") {
                var cities = ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Navsari"];
            } else if (selectedState === "Haryana") {
                var cities = ["Gurgaon", "Faridabad", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Hisar", "Karnal", "Sonipat", "Panchkula"];
            } else if (selectedState === "Himachal Pradesh") {
            var cities = ["Shimla", "Manali", "Dharamshala", "Kullu", "Mandi"];
            } else if (selectedState === "Jammu and Kashmir") {
            var cities = ["Srinagar", "Jammu", "Leh", "Gulmarg", "Pahalgam"];
            } else if (selectedState === "Jharkhand") {
            var cities = ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh"];
            } else if (selectedState === "Karnataka") {
            var cities = ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum"];
            } else if (selectedState === "Kerala") {
            var cities = ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam"];
            } else if (selectedState === "Tamil Nadu") {
            var cities = ["Chennai", "Coimbatore", "Madurai", "Trichy", "Salem"];
            } else if (selectedState === "Maharashtra") {
                var cities = ["Mumbai", "Pune", "Nagpur", "Nashik", "Thane"];
            } else if (selectedState === "Ladakh") {
                var cities = ["Leh", "Kargil"];
            }  else if (selectedState === "Ladakh") {
                var cities =  ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"];

            } 

            
    
            for (var i = 0; i < cities.length; i++) {
                var option = document.createElement("option");
                option.text = cities[i];
                option.value = cities[i];
                cityDropdown.add(option);
            }
        }
   



 // Function to calculate age based on the date of birth
        function calculateAge() {
            var dob = document.getElementById("dob").value;
            var today = new Date();
            var birthDate = new Date(dob);
            var age = today.getFullYear() - birthDate.getFullYear();
            var monthDiff = today.getMonth() - birthDate.getMonth();
            
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--;
            }
            
            document.getElementById("age").value = age;
        }
    
        document.getElementById("dob").addEventListener("change", calculateAge);

        

//Remove future date
const dobInput = document.getElementById('dob');
const currentDate = new Date().toISOString().split('T')[0];
dobInput.setAttribute('max', currentDate);



//validate phone Number

      /*var phoneNumberInput = document.getElementById("phoneNumberField");
      
        
        phoneNumberInput.addEventListener("blur", function() {
          var phoneNumber = phoneNumberInput.value;
          
          
          if (!Number.isInteger(Number(phoneNumber))) {
            var errorSpan = phoneNumberInput.parentElement.querySelector("span");
            errorSpan.textContent = "Please enter only integer values";
            phoneNumberInput.classList.add("error"); 
          } else {
           
            var errorSpan = phoneNumberInput.parentElement.querySelector("span");
            //errorSpan.textContent = "";
            phoneNumberInput.classList.remove("error");
          }
        });
*/

          //to check valid email id
     /*  let input=document.getElementById('email')
     

       input.onblur=function(){
         if(!input.value.includes("@")){
           input.classList.add("invalid")
           alert("Please enter a valid Email address")
         
         }
       }
*/

const input = document.getElementById('email');
const errorMessage2 = document.getElementById('email-error');

input.onblur = function() {
    if (!input.value.includes("@")) {
        input.classList.add("invalid");
        errorMessage2.textContent = "Please enter a valid email address";
        errorMessage2.style.display = "block"; // Show the error message
    } else {
        input.classList.remove("invalid");
        errorMessage2.textContent = ""; // Clear the error message
        errorMessage2.style.display = "none"; // Hide the error message
    }
};


     
   // Get references to the password and confirm password input fields
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const errorMessage = document.getElementById("error-message");

// Add an input event listener to the confirm password field
confirmPasswordInput.addEventListener("input", function() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    // Check if the passwords match
    if (password === confirmPassword) {
        // Passwords match
        confirmPasswordInput.style.borderColor = "green";
        errorMessage.textContent = ""; // Clear error message if previously displayed
    } else {
        // Passwords don't match
        confirmPasswordInput.style.borderColor = "red";
        errorMessage.textContent = "Passwords do not match"; // Display error message
    }
});





//TO validate only alphbets allowed in Name field

function validateNameInput(input) {
    const inputValue = input.value.trim();
    const isValid = /^[a-zA-Z]+$/.test(inputValue);

    const errorSpan = input.nextElementSibling;
    if (isValid) {
      errorSpan.textContent = '';
      errorSpan.classList.remove('error-message3');
    } else {
      errorSpan.textContent = 'Only alphabetic characters are allowed.';
      errorSpan.classList.add('error-message3');
    }

    checkFields();
  }


var phoneNumberInput = document.getElementById("phoneNumberField");

phoneNumberInput.addEventListener("blur", function() {
  var phoneNumber = phoneNumberInput.value;
  var errorSpan = phoneNumberInput.parentElement.querySelector("span");

  if (!Number.isInteger(Number(phoneNumber))) {
    errorSpan.textContent = "Please enter only integer values";
    phoneNumberInput.classList.add("error");
    errorSpan.classList.add("error-message5"); // Add the error message class
  } else {
    errorSpan.textContent = "";
    phoneNumberInput.classList.remove("error");
    errorSpan.classList.remove("error-message5"); // Remove the error message class
  }
});




// Function to check if any field is empty
function checkFields() {
    const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], select');
    let isEmpty = false;

    inputs.forEach((input) => {
      if (input.value.trim() === '') {
        isEmpty = true;
      }
    });

    // Enable or disable the register button based on field values
    const registerButton = document.getElementById('register-button');
    if (isEmpty) {
      registerButton.disabled = true;
    } else {
      registerButton.disabled = false;
    }
  }

  // Call checkFields() function whenever the input fields change
  const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], select');
  inputs.forEach((input) => {
    input.addEventListener('input', checkFields);
  });

  // Function to validate inputs on focus
  function validateInput(input) {
    input.addEventListener('input', checkFields);
  }

  // Function to validate the form before submission
  function validate() {
    checkFields();

    // Additional validation logic if needed

    // Submit the form if all validations pass
    if (!document.getElementById('register-button').disabled) {
      document.querySelector('form').submit();
    }
  }