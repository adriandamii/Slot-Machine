function generateRandomNr() {
    return Math.floor(Math.random() * 3 + 1);
}

function checkWin() {
    var win = 0;
    totalAmount = parseInt(loadAmount());
    betAmount = parseInt(changeBet());
    if ((totalAmount < betAmount)) {
        document.getElementsByTagName("h3")[0].textContent ="Change the bet!";
    } else {
        for (var i = 0; i < 3; ++i) {
            var slot = document.getElementsByTagName("span")[i];
            slot.textContent = generateRandomNr();
            if (aux === slot.textContent) {
                ++win;
            }
            var aux = slot.textContent;
        }
        if (win === 2) {
            document.getElementById("amount").value = totalAmount + Math.floor(betAmount / 2);
            document.getElementsByTagName("h3")[0].textContent ="Very good!";
        } else {
            document.getElementsByTagName("h3")[0].textContent ="Keep trying!";
            if (totalAmount >= betAmount) {
                document.getElementById("amount").value = totalAmount - betAmount;
            }
        }
    }
}
    
function play() {
    var button = document.getElementById("turn");
    button.addEventListener("click", checkWin, false);
}

function loadAmount() {
    var loadButton = document.getElementById("load");
    var amountInputStart = document.getElementById("amount");
    loadButton.addEventListener("click", function() {
        amountInputStart.style.cursor = "auto";
        amountInputStart.readOnly = true; 
        loadButton.style.backgroundColor = "grey";
        document.getElementsByTagName("h3")[0].textContent ="Type a bet then save!";        
    })
    return amountInputStart.value;
}

function changeButtonState() {
    var buttonBet = document.getElementById("changeBet");
    var inputBet = document.getElementById("inputBet");
    if (buttonBet.textContent === "Change Bet") {
        document.getElementsByTagName("h3")[0].textContent ="Type a value and save!";
        inputBet.setAttribute("onfocus", "this.value=''");
        inputBet.readOnly = false;
        buttonBet.textContent = "Save Bet";
    } else if (buttonBet.textContent === "Save Bet") {
        document.getElementsByTagName("h3")[0].textContent ="Now play!";
        inputBet.removeAttribute("onfocus");
        inputBet.readOnly = true;
        buttonBet.textContent = "Change Bet";
    }
}

function changeBet() {
    var buttonBet = document.getElementById("changeBet");
    buttonBet.addEventListener("click", changeButtonState);
    return inputBet.value;
}

function game() {
    play();
    loadAmount();
    changeBet();
}

game();