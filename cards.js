function tapCard1(){
    document.getElementById('one').style.backgroundColor='greenyellow'

}

function tapCard2(){
    document.getElementById('two').style.backgroundColor='blue'
}


function tapCard3(){
    document.getElementById('three').style.backgroundColor='orange'
}

function tapCard4(){
    document.getElementById('four').style.backgroundColor='greenyellow'
}

function tapCard5(){
    document.getElementById('five').style.backgroundColor='cyan'
}

function tapCard6(){
    document.getElementById('six').style.backgroundColor='blue'
}

function tapCard7(){
    document.getElementById('seven').style.backgroundColor='yellow'

}

function tapCard8(){
    document.getElementById('eight').style.backgroundColor='greenyellow'
    
}

function tapCard9(){
    document.getElementById('nine').style.backgroundColor='grey'
}

function tapCard10(){
    document.getElementById('10').style.backgroundColor='blue'
}

function tapCard11(){
    document.getElementById('11').style.backgroundColor='greenyellow'
   
}

function tapCard12(){
    document.getElementById('12').style.backgroundColor='maroon'
}

function tapCard13(){
    document.getElementById('13').style.backgroundColor='black'
}

function tapCard14(){
    document.getElementById('14').style.backgroundColor='cyan'
}

function tapCard15(){
    document.getElementById('15').style.backgroundColor='greenyellow'
}

function tapCard16(){
    document.getElementById('16').style.backgroundColor='yellow'
}

function awardPointsOnsameColorCards(samecolorcards) {
    let awardPoints = 0;
    for (let i = 0; i < samecolorcards.length; i++) { 
        let samecolorcards = samecolorcards[i];
        if (samecolorcards = 5) {
            awardPoints += 5;
        } else if (samecolorcards > 5) {
            awardPoints += 0; 
        }
    }
    return awardPoints; 
}


function displayMessage(message) {
    let messageDisplay = document.getElementById('message');
    messageDisplay.textContent = message;
    setTimeout(() => {
      messageDisplay.textContent = '';
    }, 2000);
  }
  
  
  
  