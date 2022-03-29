//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB6LYM6ShDcpOHnVXE5r_WhPa1-eet8LhE",
      authDomain: "kwitter-d15be.firebaseapp.com",
      databaseURL: "https://kwitter-d15be-default-rtdb.firebaseio.com",
      projectId: "kwitter-d15be",
      storageBucket: "kwitter-d15be.appspot.com",
      messagingSenderId: "185700944499",
      appId: "1:185700944499:web:49bbcd59ed1d4e0007f806"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
room_name=localStorage.getItem("room_name")
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
      msg=document.getElementById("msg").value 
firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
      like:0
})
document.getElementById("msg").value=""
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}