window.addEventListener('load', function(){
    alert(111);
    var newForm = document.forms.contactForm;
    var btn = document.querySelector('#ajouter');
    btn.onclick = function(){
        ajouterToForm();
        return false;
    }
    
});

function ajouterToForm(){
    const nom = document.getElementById('nomRecu');
    nom.innerHTML+=document.newForm.nom;

    // const newItem = document.createElement('tr')
    // const nomTd = document.createElement('td')
    // const adresseTd = document.createElement('td')
    // const modeLivraisonTd = document.createElement('td')
    // const entreeTd = document.createElement('td')
    // const platTd = document.createElement('td')
    // const desserTd = document.createElement('td')
    // nomTd.textContent = document.newCommand.nom.value
    // adresseTd.textContent = document.newCommand.adresse.value
    // modeLivraisonTd.textContent = document.newCommand.livraison.value
    // entreeTd.textContent = document.newCommand.entree.value
    // platTd.textContent = document.newCommand.plat.value
    // desserTd.textContent = document.newCommand.dessert.value
}



// alert(11111);
// // var btn = document.querySelector("button");

// // function random(number){
// //     return Math.floor(Math.random()*(number + 1));
// // }

// // btn.onclick = function color(){
// //     var rndCol = 'rgb(' + random(255) + ',' +random(255) + ','+ random(255) +')';
// //     document.body.style.backgroundColor = rndCol;
// // }

// // window.addEventListener('load', init); 

// alert(11111);


// form.addEventListener("submit", (ev) => {
//     ev.preventDefault();
// })


// var btn = document.getElementById("submit");
// btn.οnclick=function(){
//     alert("hello world");
// }


// alert(11111);

// function lancer(){
//     alert(2222);
//     var nom = document.getElementsByName('name').value;
//     alert(nom);
//     var prenom = document.getElementsByName('prenom').value;
//     var adresse = document.getElementsByName('adresse').value,
//     var tele = document.getElementsByName('tele').value;
//     var email = document.getElementsByName('email').value;
//     var sujet = document.getElementsByName('sujet').value;
//     var message = document.getElementsByName('message').value;

   
//     // var prenom = document.getElementById('prenom').innerHTML;
//     // var adresse = document.getElementById('adresse').innerHTML;
//     // var ville = document.getElementById('ville').innerHTML;
//     // var tele = document.getElementById('tele').innerHTML;
//     // var email = document.getElementById('email').innerHTML;
//     // var sujet = document.getElementById('sujet').innerHTML;
//     // var message = document.getElementById('message').innerHTML;
   
//     alert(prenom + adresse + ville + tele + email + sujet + message);

//     document.getElementById("nom-prenomEnvoye").innerHTML= nom + prenom;
//     document.getElementById("adresseEnvoye").innerHTML= adresse + ville;
//     document.getElementById("telephoneEnvoye").innerHTML= tele;
//     document.getElementById("sujetEnvoye").innerHTML= sujet;
//     document.getElementById("nom-prenomEnvoye").innerHTML= email;
//     document.body.style.backgroundColor = "#000000";
// }