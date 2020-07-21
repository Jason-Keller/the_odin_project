const search = document.querySelector("input");

search.addEventListener("keydown", function() {
    const keyPress = event.keyCode;
    if (keyPress === 13) {
        alert("You found the secret!");
       const name = prompt("Okay, now tell me your name");
       const age = prompt("Hello " + name + ", how old are you?");
       if (age >= 21) {
           alert("Okay, you're old enough");
       } else {
           if (age < 21) {
               alert("Get outta here " + name + ", this is no place for children");
           }
       }
    }
});