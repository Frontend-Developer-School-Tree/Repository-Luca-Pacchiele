/* TOMBOLA FOR BEGINNERS
genera tabellone e cartellina casuale e ti dice quanti valori sono stati indovinati */

    let min = 1;
    let max = 90;
    let numeri_tot=10; //numeri totali su ogni cartellina
    const tab = []; //tabellone
    const cart = []; //cartellina
    let index;
    let res=[]; //array dei risultati, conterrà gli elementi in comune tra i due array)
    
    //genero l'array tab con valori casuali (senza duplicati*)
    let i=0;
    do{
      numRand = Math.floor(Math.random()*(max - min)) + min;
      //*senza duplicati, verifico qui se il numero generato è già presente nell'array
      if(!tab.includes(numRand)){ 
        tab.push(numRand)
        i++;
      }
    }while(i<numeri_tot);

    //genero l'array cart con valori casuali (senza duplicati)
    i=0;
    do{
      numRand = Math.floor(Math.random()*(max - min)) + min;
      if(!cart.includes(numRand)){
        cart.push(numRand)
        i++;
      }
    }while(i<numeri_tot);
    
    //ordino i due array in ordine crescente (non necessario, ma per stamparli a video dopo
    //risulta comodo per un confronto visivo)
    tab.sort(); 
    cart.sort();
    
    cart.forEach( elem => {
        //se trovo una ricorrenza, ottengo il relativo indice, altrimenti -1
        //non mi preoccupo se la funzione indexOf restituisce solamente la prima ricorrenza di elem nell'array
        //poichè sono sicuro che che ne sarà solamente una per come ho generato i due array
      index=tab.indexOf(elem); 
      if ( index != -1 ){
        res.push(elem);
      }
    })

    //in base alla dimensione dell'array res conosco quanti elementi ho indovinato
    //(ovvero quanti valori ho in comune tra tabellone e cartellina)
    let risp;
    switch (res.length) {
      case 0:
        risp="Hai perso!"
        break;
      case 1:
        risp="Hai perso!"
        break;
      case 2:
        risp="Ambo!"
        break;
      case 3:
        risp="Terna!"
        break;
      case 4:
        risp="Quaterna!"
        break;
      case 5:
        risp="Cinquina!"
        break;
      case numeri_tot:
        risp="Tombola!"
        break;
      default:
        risp="Cinquina!"
        break;
    }

    console.log(`\nTabellone: ${tab}`);
    console.log(`Cartella:  ${cart}`);
    console.log(`Match: ${res}`);
    console.log(`\n`,risp);
    console.log(`\nBuon natale \n`);