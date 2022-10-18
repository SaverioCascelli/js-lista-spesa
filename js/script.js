// Abbiamo un array di alimenti.
// Dobbiamo stampare in pagina una lista contenente tutti gli alimenti.
// Consegna:
// Stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo for e con un ciclo while (potete farlo nello stesso file o in due file separati).
// Consigli:
// - Ricordiamoci di inizializzare la variabile di contatore prima dell’inizio del ciclo while
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all’interno ciclo while


const shopList = ["mele", "pollo", "banane", "carote", "spinaci" , "percoche", "rape", ];
const scFor = document.querySelector(".sc-for");
const scWhile = document.querySelector(".sc-while");

for(let i = 0; i < shopList.length; i++){
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = shopList[i];
    scFor.append(li);
}

let j = 0;

while( j < shopList.length){
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerHTML = shopList[j];
    scWhile.append(li);
    j++
}