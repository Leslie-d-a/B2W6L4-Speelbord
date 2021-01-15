function check() {
    var guessWord = document.getElementById("guessWord").value
    var inputWord = document.getElementById("inputWord").value
    guessWord = guessWord.split("")
    inputWord = inputWord.split("")
    for (i = 0; i < guessWord.length; i++) {
        document.getElementById(i).innerHTML = inputWord[i];
        document.getElementById(i).style.backgroundColor = "white"
        if (guessWord[i] == inputWord[i]) {
            document.getElementById(i).style.backgroundColor = "green"
            guessWord[i] = ""
            inputWord[i] = ""
        }
    }
    for (a = 0; a < guessWord.length; a++) {
        for (b = 0; b < inputWord.length; b++) {
            if (guessWord[a] != "" && guessWord[a] == inputWord[b]) {
                document.getElementById(b).style.backgroundColor = "yellow"
                guessWord[a] = ""
                inputWord[b] = ""
            }
        }
    }
}