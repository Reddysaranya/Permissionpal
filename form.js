


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optionalPermissionPal/hodform.js
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

 
    

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
}


//signOut

function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        var email = user.email;
        alert("Active user "+email);
        var input = prompt("Press 1 to go to outpas portal!")
        if (input == '1' || input == 1 )
        {
        window.location.href = "studentportal.html"
        }

    }else{
      alert("No Active user Found")
    }
  })