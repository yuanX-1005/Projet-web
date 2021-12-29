window.addEventListener('load', function(){
    // alert(111);
    // var contactForm = document.forms.contactForm;
    var btnAjouter = document.querySelector('#ajouter');
    var btnSupprimer = document.querySelector('#supprimer');
    btnAjouter.onclick = function(){
        ajouterToForm();
        return false;
    }


    btnSupprimer.onclick = function(){
        supprimerMessage()
    }

    //Ajouter les données envoyées dans un tableau
    function ajouterToForm(){
        // alert(444);
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

        // alert(555)
        nomTd.textContent = "Nom Prénom : " + document.contactForm.nom.value
        nomTd.textContent += " "+ document.contactForm.prenom.value
        adresseTd.textContent = "Adresse : " + document.contactForm.adresse.value
        adresseTd.textContent += " "+ document.contactForm.ville.value
        phoneTd.textContent = "Téléphone : " + document.contactForm.tele.value
        emailTd.textContent = "E-mail : " +document.contactForm.email.value
        sujetTd.textContent = "Sujet : " +document.contactForm.sujet.value
        messageTd.textContent = "Message : "+ document.contactForm.message.value

        // alert(666)
        nomTd.setAttribute("colspan","2")   
        adresseTd.setAttribute("colspan","2")
        sujetTd.setAttribute("colspan","2")
        messageTd.setAttribute("colspan","2")
        messageTd.setAttribute("class","colorVide")

        newItem1.append(nomTd)
        newItem2.append(adresseTd)
        newItem3.append(phoneTd,emailTd)
        newItem4.append(sujetTd)
        newItem5.append(messageTd)

        if (!document.contactForm.nom.checkValidity() ||
        !document.contactForm.prenom.checkValidity() ||
        !document.contactForm.adresse.checkValidity() ||
        !document.contactForm.email.checkValidity() ||
        !document.contactForm.tele.checkValidity() 
       ) {
            alert("erreur de saisir")
            return
      }

        const tableMessage = document.querySelector('.tableMessage tbody')
        tableMessage.appendChild(newItem1)
        tableMessage.appendChild(newItem2)
        tableMessage.appendChild(newItem3)
        tableMessage.appendChild(newItem4)
        tableMessage.appendChild(newItem5)

       
    }

    function supprimerMessage(){
        const tbody = document.querySelector('.tableMessage tbody' )
        while (tbody.firstChild) {
          tbody.removeChild(tbody.firstChild)
        }
    }

    $(document).ready(function() {
        $('#autoWidth').lightSlider({
            autoWidth:true,
            loop:true,
            onSliderLoad: function() {
                $('#autoWidth').removeClass('cS-hidden');
            } 
        });  
    });

    //Décaler les images 
    // var left = 1;
    // var right = 5;

    function show(){
        for(i=left;i<=right;i++)
        {
            document.getElementById("p1").style.display="inline-block";
        }
    }
    //Décaler les images vers la gauche
    // function moveleft(){
    //     document.getElementById("p"+i).style.display="none";
    //     left+=1;
    //     right+=1;

    //     for(i=left;i<=right;i++){
    //         document.getElementById("p"+i).style.display="inline-block";
    //     }
    // }
    
    
});
