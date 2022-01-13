window.onload = function () {   // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");
    // Y mettre le code Javascript pour valider tous les champs du formulaire

    var myModal = new bootstrap.Modal(document.getElementById('myModal'));

    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("form submitted!");
        const nom = document.getElementById("nom").value;
        const prenom = document.getElementById("prenom").value;
        const datedenaissance = document.getElementById("datedenaissance").value;
        const adresse = document.getElementById("adresse").value;
        const email = document.getElementById("email").value;
        console.log("nom", nom);
        console.log("prenom", prenom);
        console.log("datedenaissance", datedenaissance);
        console.log("adresse", adresse);
        console.log("email", email);

        


        if (nom.length < 5) {
            console.log("nom error");
            document.querySelector(".modal-title").textContent = "Erreur"

            document.querySelector(".modal-body").innerHTML = "Le champs Nom doit contenir au moins 5 caractère !";  
            myModal.show();

        }
    
    
        else if (prenom.length < 5) {
            console.log("prenom error");
            
            document.querySelector(".modal-title").textContent = "Erreur"

            document.querySelector(".modal-body").innerHTML = "Le champs Prénom doit contenir au moins 5 caractère !";  
            myModal.show();



        }
        else if (adresse.length < 5) {
            console.log("adresse error");
            
            document.querySelector(".modal-title").textContent = "Erreur"

            document.querySelector(".modal-body").innerHTML = "Le champs Adresse doit contenir au moins 5 caractère !";  
            myModal.show();



        }
        else if (validateDate(datedenaissance.value) == false) {
            console.log("Date error");
            document.querySelector(".modal-title").textContent = "Erreur";
            document.querySelector(".modal-body").textContent = "VOUS VENEZ DU FUTURE !!! Veuillez saisir une date de naissance valide";
            myModal.show();
        }
        else {
            
            console.log('OK');
            document.querySelector(".modal-title").textContent = " Bienvenue " + document.getElementById("prenom").value + " "+document.getElementById("nom").value;
            document.querySelector(".modal-body").innerHTML = " vous êtes nés le :" + document.getElementById("datedenaissance").value + " et vous habitez à ";
            document.querySelector(".modal-bodyi").innerHTML = '<a href="http://maps.google.com/maps?q=Paris"><img src="https://maps.googleapis.com/maps/api/staticmap?markers=Paris&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/> </a>';
              
            ontactStore.add(nom,prenom,datedenaissance,adresse, email);
              myModal.show();
            
        }


    });
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

function validateDate() {
    const inputDateDeNaissance = document.getElementById('datedenaissance').value;

    let dateNaissance = new Date(inputDateDeNaissance);
    let dateNaissanceTimestamp = dateNaissance.getTime();

    let nowTimestamp = Date.now();

    return (dateNaissanceTimestamp < nowTimestamp)



};
var x = document.getElementById("adresse");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
};

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
};
function calcNbChar(id) {
    document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length;
};


