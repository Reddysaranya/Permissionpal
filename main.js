// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAO8IHGhfvtkmfodYsT6zILg9iooG1iPNk",
    authDomain: "permissionpal-616d3.firebaseapp.com",
    databaseURL: "https://permissionpal-616d3-default-rtdb.firebaseio.com",
    projectId: "permissionpal-616d3",
    storageBucket: "permissionpal-616d3.appspot.com",
    messagingSenderId: "76674454119",
    appId: "1:76674454119:web:5db0e09fe4c115fa8e3ac2",
    measurementId: "G-1KK5YTGF42"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Function to handle form submission
  function updateStudentDetails(name, rollno, age, email, dob,year,phoneno,parentphoneno,hostelname,fdate,tdate,mode,letter,queries) {
    // Get a reference to the Firebase Realtime Database
    var database = firebase.database();
  
    // Generate a unique key for the student
    var studentKey = database.ref().child("students").push().key;
  
    // Create an object with the student details
    var studentData = {
      name: name,
      rollno: rollno,
      email: email, 
      age: age,
      dob: dob,
      year: year,
      phoneno: phoneno,
      parentphoneno: parentphoneno,
      hostelname: hostelname,
      fdate: fdate,
      tdate: tdate,
      mode: mode,
      letter: letter,
      queries: queries
    };
  
    // Update the student details in the database
    var updates = {};
    updates["/students/" + studentKey] = studentData;
    database
      .ref()
      .update(updates)
      .then(() => {
        // Database update successful
        console.log("Student details updated successfully!");
        // Additional actions or UI updates if needed
      })
      .catch((error) => {
        // Error occurred while updating the database
        console.error("Error updating student details:", error);
        // Handle the error or display an error message
      });
  }
  
  // Assuming you have a form with input fields for student details
  var form = document.getElementById("studentForm");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from submitting normally
  
    // Get the input field values
    var studentName = document.getElementById("studentName").value;
    var studentRollno= document.getElementById("studentRollno").value;
    var studentAge = document.getElementById("studentAge").value;
    var studentEmail = document.getElementById("studentEmail").value;
    var studentDOB = document.getElementById("studentDOB").value;
    var studentPhoneno = document.getElementById("studentPhoneno").value;
    var studentYear = document.getElementById("studentYear").value;
    var studentParentPhoneno = document.getElementById("studentParentPhoneno").value;
    var studentHostelno = document.getElementById("studentHostelno").value;
  
    // Call a function to update the database with the student details
    updateStudentDetails(studentName, studentRollno, studentAge, studentEmail, studentDOB, studentHostelno, studentParentPhoneno,studentPhoneno,studentYear);
  });
  