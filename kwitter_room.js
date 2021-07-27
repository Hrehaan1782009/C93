
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC9DJYmfmSIMn2kUjokrzRh6aoIYqpj4Hw",
      authDomain: "kwitter-app-65270.firebaseapp.com",
      projectId: "kwitter-app-65270",
      storageBucket: "kwitter-app-65270.appspot.com",
      messagingSenderId: "416753147045",
      appId: "1:416753147045:web:3edf5371fed9a224ccc14c",
      measurementId: "G-FX1PYQDHWE"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
