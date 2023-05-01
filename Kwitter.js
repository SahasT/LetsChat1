const firebaseConfig = {
    apiKey: "AIzaSyCuYZk665sTj45vQ-1kaGq0RiahcgPxptw",
    authDomain: "kwitter-66b3a.firebaseapp.com",
    databaseURL: "https://kwitter-66b3a-default-rtdb.firebaseio.com",
    projectId: "kwitter-66b3a",
    storageBucket: "kwitter-66b3a.appspot.com",
    messagingSenderId: "197799259583",
    appId: "1:197799259583:web:20f5ff26eaa03ca1fec50a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  function addUser(){
    username = document.getElementById("username").value
    localStorage.setItem = username
    window.location = "kwitter_room.html"
  }