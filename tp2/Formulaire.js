function validation() {
    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const date = document.getElementById("date").value;
    const adress = document.getElementById("adress").value;
    const mail = document.getElementById("mail").value;
    console.log("nom", nom);
    console.log("prenom", prenom);
    console.log("date", date);
    console.log("adress", adress);
    console.log("mail", mail);

    document.getElementById("error").innerHTML = "";

    if (nom.length < 5) {
        document.getElementById("error").innerHTML = "La saisie du nom est obligatoire <br>";
    }
    if (prenom.length < 5) {
        document.getElementById("error").innerHTML += "La saisie du prénom est obligatoire <br>";
    }
    if (date.length < 5) {
        document.getElementById("error").innerHTML += "La saisie de la date de naissance est obligatoire <br>";
    }
    if (adress.length < 5) {
        document.getElementById("error").innerHTML += "La saisie de l'adresseest obligatoire <br>";
    }
    if (mail.length < 5) {
        document.getElementById("error").innerHTML += "La saisie du Mail est obligatoire";
    }
    if (document.getElementById("error").innerHTML == "") { document.getElementById("result").innerHTML = "Bienvenue " + document.querySelector("#nom").value; }


}