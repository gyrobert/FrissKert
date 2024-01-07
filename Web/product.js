
document.getElementById('back').addEventListener('click', function () {
    window.location.href = 'vasarlok.html';
  });

  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
  import { getDatabase, push, ref } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
  

  const firebaseConfig = {
    // Firebase konfigurációs adatok
        apiKey: "AIzaSyAwzqR6MQGlhKIIeUOv54vy31-K4f64oug",
        authDomain: "frisskert-bc9e8.firebaseapp.com",
        databaseURL: "https://frisskert-bc9e8-default-rtdb.firebaseio.com",
        projectId: "frisskert-bc9e8",
        storageBucket: "frisskert-bc9e8.appspot.com",
        messagingSenderId: "148948687069",
        appId: "1:148948687069:web:c60335b3ee8fe1c7afa334"
  };

  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);

  document.getElementById('submitproduct').addEventListener('click', function () {
    //Beirt adatok átvétele 
    var email = document.getElementById('email').value;

    if (email.trim() === '') {
        alert("Irjon be egy email cimet!");
        return; // Ne folytassa a feltöltést, ha az email mező üres
    }     
      
    var tipus = document.getElementById('tipus').value;
    var nev = document.getElementById('nev').value;
    var ar = document.getElementById('ar').value;
    var mennyiseg = document.getElementById('mennyiseg').value;
    var megye = document.getElementById('megye').value;
    var telepules = document.getElementById('telepules').value;
    var utca = document.getElementById('utca').value;
    var hazszam = document.getElementById('hazszam').value;

    const emailKey = email.replace(/[.#$@[\]/]/g, '_'); // A Firebase kulcsnak megfelelővé alakítás

    push(ref(database, 'Product/' + emailKey), {
      email: email,
      tipus: tipus,
      nev: nev,
      ar: ar,
      mennyiseg: mennyiseg,
      megye: megye,
      telepules: telepules,
      utca: utca,
      hazszam: hazszam
    })
      .then(() => {
        alert("Termék sikeresen feltöltve'!");

        window.location.href = 'vasarlok.html';
        
      })
      .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                  
                alert('errorMessage');
      });
  });