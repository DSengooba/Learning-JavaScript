function changecolor(){
    document.getElementById('mydiv6') .style.backgroundColor= 'orange'
    setTimeout(() => {
  document.getElementById('mydiv5').style.backgroundColor= 'yellow'

}, 2000); // 2000 ms = 2 seconds

 setTimeout(() => {
  document.getElementById('mydiv4').style.backgroundColor= 'blue'

}, 4000); // 2000 ms = 4 seconds

}

