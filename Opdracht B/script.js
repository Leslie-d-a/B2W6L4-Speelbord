function check(){
    var word = document.getElementById("woord").value
    var letter = document.getElementById("letter").value
    word = word.split("")
    for(i=0;i<word.length;i++){
        if(word[i]==letter){
            document.getElementById(i).innerHTML = letter;
        }
    }
}