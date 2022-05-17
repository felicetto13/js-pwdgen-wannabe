
alert("Ciao! Ora ti compariranno dei popup utili per creare la tua password. Inserisci tutti i tuoi dati con cura e ricordati di segnare da qualche parte la password in quanto al momento io non riesco a memorizzarla nella cache! :')");

const nomeUtente = prompt("Ciao! Inserisci il tuo nome:");
const cognomeUtente = prompt("Ciao! Inserisci il tuo cognome:");
const coloreUtente = prompt("Ciao! Inserisci il tuo colore preferito");

alert("Grazie per aver inserito tutti i tuoi dati! Nel passaggio successivo troverai la tua password in grassetto! MEMORIZZALA!");
document.getElementById("password-utente").innerHTML = `La tua password è: <strong class="text-lowercase">${nomeUtente}${cognomeUtente}${coloreUtente}22</strong> !`;