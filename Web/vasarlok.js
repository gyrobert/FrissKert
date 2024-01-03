

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";
import { child, get, onValue } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";

const firebaseConfig = {
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
const auth = getAuth(); 



        const dbRef = ref(getDatabase());
        const productsRef = child(dbRef, 'Products');
        const productsArray = [];
        let ar;
        
        
        onValue(productsRef, (snapshot) => {
        
            
                
            const productsData = snapshot.val(); 
        
            if (productsData) {
                // tömböt üritése
                productsArray.splice(0, productsArray.length);
                const productKeys = Object.keys(productsData);
                
        
                productKeys.forEach(key => {
                    const product = productsData[key];
                    productsArray.push(product);
                });
        
                console.log(productsArray);
        
                
                if (productsArray.length > 0) {
                    const firstProduct = productsArray[1];
                    ar = firstProduct.Email;  
                    console.log("Az első termék ára:", ar);
                    //document.getElementById("name").innerHTML = ar;
        
                } else {
                    console.log("Nincs rendelkezésre álló termék.");
                }
                
                
            } else {
                console.log("No data available");
            }
            createBoxes();

function createBoxes() {
    const container = document.getElementById('container');
    const boxCount = prompt('Adja meg a dobozok számát:');

    // Ellenőrizzük, hogy a megadott érték egy pozitív egész szám-e
    if (!isNaN(boxCount) && boxCount > 0 && Number.isInteger(parseFloat(boxCount))) {
        container.innerHTML = ''; // Ürítsük a konténert

        for (let i = 0; i < boxCount; i++) {
            let ar=i+1;
            let boxId = `box${i}`
            const newBox = document.createElement('div');
            newBox.classList.add('box_login');
            newBox.id = boxId;
            newBox.innerHTML = `
            <h2>${ar}</h2>
                <form action="#">
                    <div class="bemenet-box">
                        <input type="email" required>
                        <label>Email</label>
                    </div>
                    <div class="bemenet-box">
                        <input type="password" required>
                        <label>Jelszo</label>
                    </div>
                    <a href="vasarlok.html">
                        <button type="submit" id="bejelent" class="btnBejelentkezes">Bejelentkezes</button>
                    </a>
                    <div class="bejelentkezes-registracio">
                        <p>Nincs felhasználói fiókja? <a href="#" class="regisztracio-link">Regisztráció</a></p>
                    </div>
                </form>
            `;
            container.appendChild(newBox);
        }
    } else {
        alert('Kérjük, adjon meg egy érvényes pozitív egész számot.');
    }
}
        }, (error) => {
            console.error(error);
        });

    


          console.log(productsArray);
            console.log(productsArray.length);
          
          
          let name = "Feri";
        //document.getElementById("name").innerHTML = pro;

        
