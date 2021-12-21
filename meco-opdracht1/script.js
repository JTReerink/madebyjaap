    "use strict"   
    let myText = document.getElementById('myText');
    let myImage = document.getElementById('myImage');
    let myButton = document.getElementById('myButton');
    let myReset = document.getElementById('myReset');

    myButton.addEventListener('click', function(){
        main();
    })

    myReset.addEventListener('click', function(){
        document.getElementById('myImage').src = "https://www.ma-web.nl/static/vector/Logo_blok.svg";
        document.getElementById('myText').innerHTML = "...";
    })


    function main(){
    let dezeTextWordtHet = makeThisSentence();
    myText.innerHTML = dezeTextWordtHet;
         sayItLoud(dezeTextWordtHet); // say something nice say it loud
         selectThisImage(); // show a nice image
    }
    
    
    
    function randomizer(range = 1){ 
        // Math.random geeft een waarde  0 <= waarde < 1 (dus exclusief 1)
        return Math.floor((Math.random() * range));
    }
    
    
    function makeThisSentence(){
        let index1 = randomizer(arrayLength);
        let woord1 = onderwerp[index1];
        let index2 = randomizer(arrayLength);
        let woord2 = werkwoord[index2];
        let index3 = randomizer(arrayLength);
        let woord3 = restwoord[index3];
        let outputString = woord1 + " " + woord2 + " " + woord3;
        return outputString;
    }
    
    function selectThisImage(){
        let index = randomizer(arrayLength);
        myImage.src = plaatjes[index]; 
    }
    
    function sayItLoud (textString) {
    let message = new SpeechSynthesisUtterance(textString);
    let voices = window.speechSynthesis.getVoices();
    message.voice = voices[1];
      message.pitch = 2; // range between 0 and 2
      message.rate = 0.7; // range between 0.1 (lowest) and 10 (highest) 
    window.speechSynthesis.speak(message);
    }
    
    
    
    const onderwerp = ["David", "John", "Mike"];
    const werkwoord = ["jumps", "twirls", "dances"];
    const restwoord = ["through the house", "through the streets", "during classes"];
        
    let plaatjes = ["./media/DSC_6288.jpg", 
    "./media/DSC_6496.jpg", 
    "./media/DSC_6555.jpg", 
    "./media/DSC_6557.jpg"]
    let arrayLength = onderwerp.length;
