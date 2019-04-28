


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAUqzzYaZBWJFUIXMtdQ5ey5xJtRyeDGtM",
    authDomain: "my-1st-firebase-project-d0cf3.firebaseapp.com",
    databaseURL: "https://my-1st-firebase-project-d0cf3.firebaseio.com",
    projectId: "my-1st-firebase-project-d0cf3",
    storageBucket: "my-1st-firebase-project-d0cf3.appspot.com",
    messagingSenderId: "321087012524"
  };
  firebase.initializeApp(config);

	

document.getElementById('contactForm').addEventListener('submit', submitForm);

function getInputVal(id){
  return document.getElementById(id).value;
}
function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');
    document.getElementById('contactForm').reset();
    saveMessage(name, email, message);
    document.querySelector('.alert').style.display = 'block';
// Hide alert after 3 seconds
setTimeout(function(){
  document.querySelector('.alert').style.display = 'none';
},3000);
}

var messagesRef = firebase.database().ref('messages');

function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}




