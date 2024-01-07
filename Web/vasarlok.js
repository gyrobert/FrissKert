/*Popup */
document.getElementById('showPopup').addEventListener('click', function () {

    var popup = document.getElementById("popup");
    popup.style.display = "block";
});

document.getElementById('closePopup').addEventListener('click', function () {

    var popup = document.getElementById("popup");
    popup.style.display = "none";
});

document.getElementById('newproduct').addEventListener('click', function () {

    window.location.href = 'product.html';
});

const btn = document.querySelector('.btnLogin');
btn.addEventListener('click', () => {
    getValue();
    sortProduct(selectedValue);
});


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import {getDatabase, ref,  child,  onValue } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js";
import { getAuth,signOut } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

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

document.getElementById('signout').addEventListener('click', function () {


    signOut(auth).then(() => {
        // Sign-out successful.
         // An error happened.
         const errorCode = error.code;
         const errorMessage = error.message;
           
         alert('errorMessage');
        
      }).catch((error) => {
        // An error happened.
        alert('Sikeres kijelentkezés');
        window.location.href = 'login2.html';
      });
  
      
    });


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
        
                
        
                
                if (productsArray.length > 0) {
                    const firstProduct = productsArray[1];
                    ar = firstProduct.ar;  
                    console.log("Az első termék ára:", ar);
                    
        
                } else {
                    console.log("Nincs rendelkezésre álló termék.");
                }
                
                
            } else {
                console.log("No data available");
            }

            
            createBoxes();

            

        }, (error) => {
            console.error(error);
        });

    


          console.log(productsArray);
            console.log(productsArray.length);
          
          
          
        

        function getValue() {
            
            selectedValue = document.getElementById("tipus").value;
        
        }
        var selectedValue;

        function sortProduct(x){
            if(x=='osszes'){
                console.log(productsArray); 
                createBoxes(); 
            }
            else {
                let sortArray = [];
                for (let i = 0; i < productsArray.length; i++) {
                    const product = productsArray[i];
                    if(product.tipus==x){
                        console.log(product)
                        sortArray.push(product)
                        
                    }
                }
                createBoxesSort(sortArray);
            }

        }


        function createBoxes() {
            const container = document.getElementById('container');
            
            const boxCount=productsArray.length
            // Ellenőrizzük, hogy a megadott érték egy pozitív egész szám-e
            if (!isNaN(boxCount) && boxCount > 0 && Number.isInteger(parseFloat(boxCount))) {
                container.innerHTML = ''; // Ürítsük a konténert
        
                for (let i = 0; i < productsArray.length; i++) {
                    const product = productsArray[i];
                    if(product.tipus==selectedValue){
                        continue;
                    }
                    let ar = product.nev;
                   
                    let boxId = `box${i}`
                    const newBox = document.createElement('div');
                    newBox.classList.add('box_termek');
                    newBox.id = boxId;
                    newBox.innerHTML = `
                    <img src="Card2.jpg" alt="" class="product_img">
                    <h2 class="product_title">${product.nev}</h2>
                    <span class="product_price">Ár/Kg:${product.ar} Lei</span><br>
                    <span class="product_menyiseg">Elérhető menyiség:${product.mennyiseg} kg</span>
                        
                        
                        <p>Tipus: ${product.tipus}</p>
                        <p>Település: ${product.telepules}</p>
                        <p>Megye: ${product.megye}</p>
                        <p>Utca: ${product.utca}</p>
                        <p>Házszám: ${product.hazszam}</p>
                        <p>Kontakt: ${product.email}</p>
                    `;
                    container.appendChild(newBox);
                }
            } 
        }

        function createBox(product) {
            const container = document.getElementById('container');
            const boxCount = productsArray.length;
        
            // Ellenőrizzük, hogy a megadott érték egy pozitív egész szám-e
            if (!isNaN(boxCount) && boxCount > 0 && Number.isInteger(parseFloat(boxCount))) {
               // container.innerHTML = ''; // Ürítsük a konténert
        
                let ar = product.nev;
                const newBox = document.createElement('div');
                newBox.classList.add('box_termek');
                newBox.id = boxId;
                newBox.innerHTML = `
                    <img src="Card2.jpg" alt="" class="product_img">
                    <h2 class="product_title">${product.nev}</h2>
                    <span class="product_price">Ár/Kg:${product.ar} Lei</span><br>
                    <span class="product_menyiseg">Elérhető menyiség:${product.mennyiseg} kg</span>
                    
                    <p>Tipus: ${product.tipus}</p>
                    <p>Település: ${product.telepules}</p>
                    <p>Megye: ${product.megye}</p>
                    <p>Utca: ${product.utca}</p>
                    <p>Házszám: ${product.hazszam}</p>
                    <p>Kontakt: ${product.email}</p>
                `;
                container.appendChild(newBox);
            } 
        }

        function createBoxesSort(prodArray) {
            const container = document.getElementById('container');
        
            const boxCount=prodArray.length
            // Ellenőrizzük, hogy a megadott érték egy pozitív egész szám-e
            if (!isNaN(boxCount) && boxCount > 0 && Number.isInteger(parseFloat(boxCount))) {
                container.innerHTML = ''; // Ürítsük a konténert
        
                for (let i = 0; i < prodArray.length; i++) {
                    const product = prodArray[i];
                    
                    let ar = product.nev;
                   
                    let boxId = `box${i}`
                    const newBox = document.createElement('div');
                    newBox.classList.add('box_termek');
                    newBox.id = boxId;
                    newBox.innerHTML = `
                    <img src="Card2.jpg" alt="" class="product_img">
                    <h2 class="product_title">${product.nev}</h2>
                    <span class="product_price">Ár/Kg:${product.ar} Lei</span><br>
                    <span class="product_menyiseg">Elérhető menyiség:${product.mennyiseg} kg</span>
                        
                        
                        <p>Tipus: ${product.tipus}</p>
                        <p>Település: ${product.telepules}</p>
                        <p>Megye: ${product.megye}</p>
                        <p>Utca: ${product.utca}</p>
                        <p>Házszám: ${product.hazszam}</p>
                        <p>Kontakt: ${product.email}</p>
                    `;
                    container.appendChild(newBox);
                }
            } 
        }