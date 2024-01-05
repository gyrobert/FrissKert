

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
        const productsRef = child(dbRef, 'Product');
        const productsArray = [];
        let ar;
        
        
        onValue(productsRef, (snapshot) => {
        
            
                
            const productsData = snapshot.val(); 
        
            if (productsData) {
                // tömböt üritése
                productsArray.splice(0, productsArray.length);
                const productKeys = Object.keys(productsData);
                
        
                Object.values(productsData).forEach(productGroup => {
                    Object.values(productGroup).forEach(product => {
                        productsArray.push(product);
                    });
                });
        
                console.log(productsArray);
        
                
                if (productsArray.length > 0) {
                    const firstProduct = productsArray[1];
                    ar = firstProduct.ar;  
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
    //const boxCount = prompt('Adja meg a dobozok számát:');
    const boxCount=productsArray.length
    // Ellenőrizzük, hogy a megadott érték egy pozitív egész szám-e
    if (!isNaN(boxCount) && boxCount > 0 && Number.isInteger(parseFloat(boxCount))) {
        container.innerHTML = ''; // Ürítsük a konténert

        for (let i = 0; i < productsArray.length; i++) {
            const product = productsArray[i];
            let ar = product.nev;
           // let ar=i+1;
            let boxId = `box${i}`
            const newBox = document.createElement('div');
            newBox.classList.add('box_termek');
            newBox.id = boxId;
            newBox.innerHTML = `
            <img src="Card2.jpg" alt="" class="product_img">
            <h2 class="product_title">${product.nev}</h2>
            <span class="product_price">Ár/Kg:${product.ar} Lei</span><br>
            <span class="product_menyiseg">Elérhető menyiség:${product.mennyiseg} kg</span>
                
                <p>Mennyiség: ${product.mennyiseg}</p>
                <p>Tipus: ${product.tipus}</p>
                <p>Település: ${product.telepules}</p>
                <p>Megye: ${product.megye}</p>
                <p>Utca: ${product.utca}</p>
                <p>Házszám: ${product.hazszam}</p>
                <button class="btnLogin"><ion-icon name="star"></ion-icon></button>
                <button class="btn"><ion-icon name="cart"></ion-icon></button>
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

        
