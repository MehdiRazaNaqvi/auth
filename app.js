sign = () => {
 
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    // console.log(`Email = ${email.value} Password = ${password.value}`)
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    window.location.href='wel.html'
    var user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });


}



let login = ()=>{
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
    console.log("Logged in")
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  });
}

