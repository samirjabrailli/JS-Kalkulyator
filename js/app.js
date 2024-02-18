let display = document.getElementById("ekran")
function calc(reqem) {
        ekran.innerHTML += reqem
    }

function backspace() {
    ekran.innerHTML = ekran.innerHTML.slice(0,-1)
    }
    function clearDisplay(){
        ekran.innerHTML = ""
        console.log("temizleyir");
    }
    function hesabla(){   
        let cem = eval(ekran.innerHTML)
        ekran.innerHTML = cem
    }
    
