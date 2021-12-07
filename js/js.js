window.addEventListener('load', function(){
    // alert(111);
    var contactForm = document.forms.contactForm;
    var btn = document.querySelector('#ajouter');
    btn.onclick = function(){
        // alert(222);
        if(contactForm.checkValidity()){
            ajouterToForm();
            return false;
        }else{
            alert("There is still an empty field");
        }
    }

    function ajouterToForm(){
      
        // alert(444);
        var nomRecu = document.getElementById('nomRecu');
        var adresseRecu = document.getElementById('adresseRecu');
        var phoneRecu = document.getElementById('phoneRecu');
        var emailRecu = document.getElementById('emailRecu');
        var sujetRecu = document.getElementById('sujetRecu');
        var messageRecu = document.getElementById('messageRecu');
        nomRecu.textContent+=" "+ contactForm.elements[name="nom"].value+" " +contactForm.elements[name="prenom"].value;
        adresseRecu.textContent+=" "+contactForm.elements[name="adresse"].value+" " + contactForm.elements[name="ville"].value;
        phoneRecu.textContent+=" "+contactForm.elements[name="tele"].value;
        emailRecu.textContent+=" "+contactForm.elements[name="email"].value;
        sujetRecu.textContent+=" "+contactForm.elements[name="sujet"].value;
        messageRecu.textContent+=" "+contactForm.elements[name="message"].value;

        
    }
    
    
});
