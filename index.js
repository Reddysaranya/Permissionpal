// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function save() {
  var name = document.getElementById("name").value;
  var rollno = document.getElementById("rollno").value;
  var age = document.getElementById("age").value;
  var date = document.getElementById("dob").value;
  var email = document.getElementById("email").value;
  var branch = document.getElementById("branch").value;
  var year = document.getElementById("year").value;
  var phoneno = document.getElementById("phoneno").value;
  var parentphoneno = document.getElementById("parentphoneno").value;

  var hostelname = document.getElementById("hostelname").value;
  var fdate = document.getElementById("fdate").value;
  var tdate = document.getElementById("tdate").value;
  var mode = document.getElementById("mode").value;
  var letter = document.getElementById("letter").value;
  var queries = document.getElementById("queries").value;
  var status = "None";
  var oid = "oid";

  database.ref("users/" + rollno).set({
    name: name,
    rollno: rollno,
    age: age,
    date: date,
    branch: branch,
    year: year,
    phoneno: phoneno,
    parentphoneno: parentphoneno,
    email: email,

    hostelname: hostelname,
    fdate: fdate,
    tdate: tdate,
    mode: mode,
    letter: letter,
    queries: queries,
    status: status,
    outpassid: oid + rollno,
  });
 alert("Application is submitted successfully! Status will be approved in mail")
 location.reload()
}

function get() {
  var rollno = document.getElementById("rollno").value;
  var user_ref = database.ref("users/" + rollno);

  user_ref.on("value", function (snapshot) {
    var data = snapshot.val();
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("rollno2").innerHTML = data.rollno;
    document.getElementById("branch").innerHTML = data.branch;
    document.getElementById("year").innerHTML = data.year;
    document.getElementById("phoneno").innerHTML = data.phoneno;
    document.getElementById("parentphoneno").innerHTML = data.parentphoneno;
    document.getElementById("email").innerHTML = data.email;
    document.getElementById("hostelname").innerHTML = data.hostelname;
    document.getElementById("fdate").innerHTML = data.fdate;
    document.getElementById("tdate").innerHTML = data.tdate;
    document.getElementById("mode").innerHTML = data.mode;
    document.getElementById("letter").innerHTML = data.letter;
    document.getElementById("queries").innerHTML = data.queries;
    alert(data.email);
  });
}

function update() {
  var rollno = document.getElementById("rollno").value;
  // var email  = document.getElementById('email').value
  // var password = document.getElementById('password').value
  var status = document.getElementById("status").value;
  alert(status);
  var updates = {
    // email :email,
    // password : password,
    status: status,
  };

  database.ref("users/" + rollno).update(updates);

  alert("updated");
}

function remove() {
  var username = document.getElementById("username").value;
  database.ref("users/" + rollno).remove();
  alert("deleted");
}

function status() {
  if (document.getElementById("status").value == "approved") {
    alert("approved");
    update();
  }
}

// function sendEmail() {
// Email.send({
// 	Host: "smtp.gmail.com",
// 	Username: "intelligentheistofficial@gmail.com",
// 	Password: "Heist@2077",
	// To: document.getElementById('email').value,
	// From: "intelligentheistofficial@gmail.com",
	// Subject: document.getElementById('name').value+" Your outpass is approved successfully!",
	// Body: "oid"+document.getElementById('rollno').value+" is your Outpass id"
// })
// 	.then(function (message) {
// 	alert("mail sent successfully")
// 	});
// }

function sendEmail() {
  var email = "";
  var name = "";
  var rollno = document.getElementById("rollno").value;
  var user_ref = database.ref("users/" + rollno);

  user_ref.on("value", function (snapshot) {
    var data = snapshot.val();
    email = data.email;
    name = data.name;
  });

  alert("Message sent to " + email);
  Email.send({
    Host: "smtp.gmail.com",
    Username: "intelligentheistofficial@gmail.com",
    Password: "Heist@2077",
    To: email,
    From: "intelligentheistofficial@gmail.com",
    Subject: name+" Your outpass is approved successfully!",
	Body: "oid"+rollno+" is your Outpass id"
  }).then((message) => alert("Mail sent successfully"));
}
