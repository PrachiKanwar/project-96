
//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("user_name").innerHTML="welcome "+user_name+"!"
function addRoom(){
      room_name=document.getElementById("room_name").value 
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name "
      })
     localStorage.setItem("room_name",room_name) 
     window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname: "+Room_names)
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();
function redirectToRoomName(name){
console.log(name)
localStorage.setItem("room_name",name)
window.location="kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}
