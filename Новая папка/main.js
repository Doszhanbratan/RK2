// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB6Jhq5vu_bzq3jzg0BU5QuIrbM9cUM2MU",
    authDomain: "auth-form-5b759.firebaseapp.com",
    projectId: "auth-form-5b759",
    storageBucket: "auth-form-5b759.appspot.com",
    messagingSenderId: "35186821475",
    appId: "1:35186821475:web:afac4c078d70e8a222ab56"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            window.location.href = "http://127.0.0.1:5500/superhero-search-app-using-api-in-vanilla-js--master/index.html"
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}