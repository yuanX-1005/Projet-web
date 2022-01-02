// **** Navbar ****
// afficher et cacher la navbar en cliquant l'icon nav
var flag = false;
function afficherNavPhone() {
    flag = !flag;
    flag==false?document.getElementById("navPhoneContenu").style.display="block":document.getElementById("navPhoneContenu").style.display="none";
}

// selon le taille de l'écran  : cacher le menu de nav
window.addEventListener('resize', function(){
    if(window.outerWidth>=900){
        document.getElementById("navPhoneContenu").style.display="none";
    }    
});




// **** Page Categorie ****
// valeur de décalage pour le slide
var gauche=1;
var droite=5;

var varleurMaxDecalageGaucheGauche = 3;
var varleurMaxDecalageGaucheDroite = 7;
var varleurMaxDecalageDroiteGauche = 2;
var varleurMaxDecalageDroiteDroite = 6;


//changer les valeurs de décalages pour le slide selon le taille d'écran
window.addEventListener('load', function(){
    if(window.outerWidth<900){
        gauche=1;
        droite=1;
    }
});


// L'affichage des images de slide
function show(){
    for(i=gauche;i<=droite;i++)
    {
        document.getElementById("p"+i).style.display="inline-block";
    }
}

//Décaler les images vers la gauche
function decalageGauche(){
    if(window.outerWidth<900){
        varleurMaxDecalageGaucheGauche = 7;
        varleurMaxDecalageGaucheDroite = 7;
    }
    if (gauche <=varleurMaxDecalageGaucheGauche && droite<=varleurMaxDecalageGaucheDroite){
        document.getElementById("p"+gauche).style.display="none";
        gauche+=1;
        droite+=1;

        for(i=gauche;i<=droite;i++){
            document.getElementById("p"+i).style.display="inline-block";
        }
    }
    else
        return;
}

//Décaler les images vers la droite
function decalageDroite(){
    if(window.outerWidth<900){
        varleurMaxDecalageDroiteGauche = 2;
        varleurMaxDecalageDroiteDroite = 2;
    }
    if (gauche>=varleurMaxDecalageDroiteGauche && droite>=varleurMaxDecalageDroiteDroite){
        document.getElementById("p"+droite).style.display="none";
        gauche-=1;
        droite-=1;

        for(i=gauche;i<=droite;i++){
            document.getElementById("p"+i).style.display="inline-block";
        }
    }
    else
        return;
}





// **** Page Contacte ****
//Ajouter les données envoyées dans un tableau
function ajouterToForm(){
    // obtenir l'élément
    const newItem1 = document.createElement('tr')
    const nomTd = document.createElement('td')
    const newItem2 = document.createElement('tr')
    const adresseTd = document.createElement('td')
    const newItem3 = document.createElement('tr')
    const phoneTd = document.createElement('td')
    const emailTd = document.createElement('td')
    const newItem4 = document.createElement('tr')
    const sujetTd = document.createElement('td')
    const newItem5 = document.createElement('tr')
    const messageTd = document.createElement('td')

    // changer les données
    nomTd.textContent = "Nom Prénom : " + document.contactForm.nom.value
    nomTd.textContent += " "+ document.contactForm.prenom.value
    adresseTd.textContent = "Adresse : " + document.contactForm.adresse.value
    adresseTd.textContent += " "+ document.contactForm.ville.value
    phoneTd.textContent = "Téléphone : " + document.contactForm.tele.value
    emailTd.textContent = "E-mail : " +document.contactForm.email.value
    sujetTd.textContent = "Sujet : " +document.contactForm.sujet.value
    messageTd.textContent = "Message : "+ document.contactForm.message.value

    // ajouter le style
    nomTd.setAttribute("colspan","2")   
    adresseTd.setAttribute("colspan","2")
    sujetTd.setAttribute("colspan","2")
    messageTd.setAttribute("colspan","2")
    messageTd.setAttribute("class","colorVide")

    // ajouter les données
    newItem1.append(nomTd)
    newItem2.append(adresseTd)
    newItem3.append(phoneTd,emailTd)
    newItem4.append(sujetTd)
    newItem5.append(messageTd)

    // les affiches
    const tableMessage = document.querySelector('.tableMessage tbody')
    tableMessage.appendChild(newItem1)
    tableMessage.appendChild(newItem2)
    tableMessage.appendChild(newItem3)
    tableMessage.appendChild(newItem4)
    tableMessage.appendChild(newItem5)

}

// supprimer tous les messages envoyés
function supprimerMessage(){
    const tbody = document.querySelector('.tableMessage tbody' )
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild)
    }
}
   
// verifier si les chmaps de forma est-il remplir ou pas.
function validateForm(){
    var nom =document.forms["contactForm"]["nom"].value;
    var prenom =document.forms["contactForm"]["prenom"].value;
    var adresse =document.forms["contactForm"]["adresse"].value;
    var ville =document.forms["contactForm"]["ville"].value;
    var email =document.forms["contactForm"]["email"].value;
    var sujet =document.forms["contactForm"]["sujet"].value;
    var message =document.forms["contactForm"]["message"].value;

    if (nom==null || nom==""){
        alert("N'obliez pas de remplir votre nom.");
        return false;
    }

    if (prenom==null || prenom==""){
        alert("N'obliez pas de remplir votre prénom.");
        return false;
    }

    if (nom==null || nom==""){
        alert("N'obliez pas de remplir votre nom.");
        return false;
    }

    if (adresse==null || adresse==""){
        alert("N'obliez pas de remplir votre adresse.");
        return false;
    }

    if (ville==null || ville==""){
        alert("N'obliez pas de remplir votre ville.");
        return false;
    }

    if (email==null || email==""){
        alert("N'obliez pas de remplir votre email.");
        return false;
    }

    if (sujet==null || sujet==""){
        alert("N'obliez pas de remplir votre sujet.");
        return false;
    }

    if (message==null || message==""){
        alert("N'obliez pas de remplir les message.");
        return false;
    }

    ajouterToForm();
    return false;
}




// **** Page à propos ****

// revient en heut du page
function derouleVersHaut(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

