//  Chiedi all'utente la sua email,
//  controlla che sia nella lista di chi può accedere,
//  stampa un messaggio appropriato sull'esito del controllo.



// creo una lista di email che possono accedere

const emails =["myemail@gmail.com", "gianni@gmail.com", "paolo@gmcil.com", "piero@gmail.com"]

// chiedo l'email all'utente

const userEmail = prompt("scrivi qui la tua email");

// controllo che l'email sia valida in quanto email

const isUserEmailValid = userEmail.includes("@") && userEmail.includes(".");

// SE l'emeil dell'utente è valida controllo che l'email dell'utente sia presente nella lista e mando un messaggio

if(isUserEmailValid){

    for (let i = 0; i < emails.length ; i ++){
        userEmail === emails[i];
        console.log("puoi accedere");
        alert("puoi accedere") 

       // SE l'email non è presente nell'elenco comunico all'utente che l'email non può accedere

        if(userEmail !== emails[i]){
            console.log("Non puoi accedere");
            alert("puoi accedere")     
        } 
    }
}
// ALTRIMENTI se l'email non è valida comunico all'utente che l'email non è valida 
else{
    console.log("Email non valida!");
    alert("Email non valida !")
}

