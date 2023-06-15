document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get the entered username and password
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Perform simple validation (you can add more complex validation if needed)
    if (username === "21251A3645" && password === "21251A3645") {
      // Hide the login form
      document.getElementById("loginForm").style.display = "none";
  
      // Display the user details container
      document.getElementById("userDetailsContainer").style.display = "block";
  
      // Display the username and email
      document.getElementById("displayUsername").textContent = "Saba Nazneen";
      document.getElementById("displayEmail").textContent = "abc@gmail.com";
      document.getElementById("displaybatch").textContent = "2021-2025";
      document.getElementById("displayfname").textContent = "Father name";
      document.getElementById("displaymname").textContent = "Mother name";
      document.getElementById("displayaddress").textContent = "street-12,kurnool,Andhra Pradesh,India.";
    } 
    else if(username === "21251A3642" && password === "21251A3642")
    {
        document.getElementById("loginForm").style.display = "none";
  
      // Display the user details container
      document.getElementById("userDetailsContainer").style.display = "block";
  
      // Display the username and email
      document.getElementById("displayUsername").textContent = "Akhila";
      document.getElementById("displayEmail").textContent = "hello@gmail.com";
      document.getElementById("displaybatch").textContent = "2021-2025";
      document.getElementById("displayfname").textContent = "Father name";
      document.getElementById("displaymname").textContent = "Mother name";
      document.getElementById("displayaddress").textContent = "Champapet,Hyderabad,Telangana,India.";
    }
    else if(username === "21251A3611" && password === "21251A3611")
    {
        document.getElementById("loginForm").style.display = "none";
  
      // Display the user details container
      document.getElementById("userDetailsContainer").style.display = "block";
  
      // Display the username and email
      document.getElementById("displayUsername").textContent = "Saranya";
      document.getElementById("displayEmail").textContent = "hi@gmail.com";
      document.getElementById("displaybatch").textContent = "2021-2025";
      document.getElementById("displayfname").textContent = "Father name";
      document.getElementById("displaymname").textContent = "Mother name";
      document.getElementById("displayaddress").textContent = "Miyapur,Hyderabad,Telangana,India.";
    }
    else {
      alert("Invalid username or password. Please try again.");
    }
    document.getElementById("generalLeaveBtn").addEventListener("click", function() {
        alert("You have requested General Leave.");
        document.getElementById("leaveForm").style.display = "block";
      });
   
    document.getElementById("logoutBtn").addEventListener("click", function() {
        // Clear the user details from local storage
        localStorage.removeItem("userDetails");
    
        // Redirect back to the login page
        window.location.href = "first.html";
      });
      // Leave form submit event listener
  document.getElementById("leaveForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the uploaded document and paragraph content
    var documentFile = document.getElementById("document").files[0];
    var paragraphContent = document.getElementById("paragraph").value;

    // Perform additional validation if needed

    // Simulate sending the SMS (client-side functionality)
    var phoneNumber = "9502248767";
    var smsContent = "Leave Application: " + paragraphContent;

    // Display a success message (replace with actual SMS sending logic)
    alert("Leave application submitted successfully!\n\nSMS content:\nTo: " + phoneNumber + "\n\nMessage:\n" + smsContent);

    // Reset the form
    document.getElementById("leaveForm").reset();
    document.getElementById("leaveForm").style.display = "none";
  });

     
  });
