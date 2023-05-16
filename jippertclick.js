let teller = 0;
const clockElement = document.getElementById("clock");
const tellerElement = document.getElementById("teller");

function increment() {
  teller += 1;
  tellerElement.innerHTML = teller;
}

function reset() {
  teller = 0;
  tellerElement.innerHTML = teller;
  tellerElement.onclick = "increment()"
}

async function clock(){
  for (let i = 1; i <= 10; i++) {
  
      clockElement.innerHTML = Number(i/10).toFixed(1);
      await new Promise(r => setTimeout( r, 100 ));
      
    }    
  }

clock().then(() => {
  tellerElement.onclick = '';
  cps = teller / 10;
  console.log(cps);
  clockElement.innerHTML = 'CPS = ' + cps;
});