
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
        import { getDatabase, update, ref} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
        import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries

        // Your web app's Firebase configuration
        // For Firebase JS SDK v7.20.0 and later, measurementId is optional
        const firebaseConfig = {
            apiKey: "AIzaSyAwzqR6MQGlhKIIeUOv54vy31-K4f64oug",
            authDomain: "frisskert-bc9e8.firebaseapp.com",
            databaseURL: "https://frisskert-bc9e8-default-rtdb.firebaseio.com",
            projectId: "frisskert-bc9e8",
            storageBucket: "frisskert-bc9e8.appspot.com",
            messagingSenderId: "148948687069",
            appId: "1:148948687069:web:c60335b3ee8fe1c7afa334"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);  
        const auth = getAuth(); 
        
        bejelent.addEventListener('click', (e) => {

            var email = document.getElementById('logemail').value;
            var password = document.getElementById('logpsw').value;

            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;

                    const dt = new Date();
                    update(ref(database, 'Login/' + user.uid),{
                        last_login: dt,
                    })

                    alert('User logged in!');
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                      
                    alert('errorMessage');
                });
           
        });