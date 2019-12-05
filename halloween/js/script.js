
var counter = 1;
var name = "";
function change () {
    
    switch (counter) {
        case 1:
            document.getElementById("bubbleChat").innerHTML = "Let me introduce myself... I'm Peter and you?";
            counter++;
            break;
        case 2:
            document.getElementById("bubbleChat").innerHTML = "... Nice to meet you " + name + " I haven't talked to anyone since I died.";
            counter++;
            break;
        case 3:
            document.getElementById("bubbleChat").innerHTML = "By the way do you want me to tell you the story about how I died?"; 
            counter++;
            break;
        case 4:
            document.getElementById("bubbleChat").innerHTML = "It all starts 3 years ago... me and my family were on vacation";
            counter++;
            break;

        case 5:
            document.getElementById("bubbleChat").innerHTML = "One sunny and beatiful day we were in our car in our way to chicago";
            counter++;
            break;

        case 6:
            document.getElementById("bubbleChat").innerHTML = "When suddenly I heard an horrifying scream coming from my wife...";
            counter++;
            break;

        case 7:
            document.getElementById("bubbleChat").innerHTML = "then a giant truck crashed with us and all turned black...";
            counter++;
             break;

         case 8:
            document.getElementById("bubbleChat").innerHTML = "And here I am... well stop being dramatic I have a task for you " + name;
            counter++;
             break;     

        case 9:
            document.getElementById("bubbleChat").innerHTML = "I miss so much my cat Simba and I think he is around here. Try to find him";
            document.getElementById("continue").style.visibility ="hidden";
            document.getElementById("cat").style.visibility ="visible";
            counter++;
            
            break;

        case 10:
            document.getElementById("bubbleChat").innerHTML = "Simba!... for obvious reasons it seems like he can`t recognize me...";
            document.getElementById("continue").style.visibility ="visible";
            document.getElementById("cat").style.visibility ="hidden";
            counter++;
            
            break;

        case 11:
            document.getElementById("bubbleChat").innerHTML = "Do you want to meet my family? they are buried here with me";
            
            counter++;
            
            break;
            
        case 12:
             document.getElementById("bubbleChat").innerHTML = "Try to guess my daughter's tomb... she is adorable.";
             document.getElementById("daughterRect").style.visibility ="visible"; 
             document.getElementById("continue").style.visibility ="hidden";  
             counter++;
                
                break;
                
         case 13:
           document.getElementById("bubbleChat").innerHTML = "well... I swear to you she was adorable... ";
           document.getElementById("daughterRect").style.visibility ="hidden";
           document.getElementById("continue").style.visibility ="visible";    
           counter++;
           break;

         case 14:
           document.getElementById("bubbleChat").innerHTML = "Now my beloved wife... find her tomb";
           document.getElementById("continue").style.visibility ="hidden"; 
           document.getElementById("wifeRect").style.visibility ="visible";   
           counter++;
           break;

        case 15:
           document.getElementById("bubbleChat").innerHTML = "Sorry for the screamer :-D. It never gets old.";
           document.getElementById("continue").style.visibility ="visible"; 
           
           counter++;  
                       
        break; 
        
        case 16:
           document.getElementById("bubbleChat").innerHTML = "Im done with you for today...";
           counter++;
           break;

        case 17:
            document.getElementById("bubbleChat").innerHTML = "HAPPY HALLOWEEN " + name;
            
            document.getElementById("skeleton").style.opacity= 0;
            document.getElementById("continue").style.visibility ="hidden";
            
            break;
        default:
            break;
    }
    
    
}

function show(element) {
    document.getElementById(element).style.visibility = "visible";    
}

function sound (element) {
    document.getElementById(element).play();
}


function start () {
    name = document.getElementById("nameText").value;
    document.getElementById("startMenu").style.visibility = "hidden";
    document.getElementById("wrapper").style.transition = "ease-in 10s";
    document.getElementById("wrapper").style.opacity = "1";
    document.getElementById("continue").style.visibility = "visible";
    
}

function screamer (element) {
    document.getElementById(element).style.visibility = "visible";
    setInterval(function(){
        document.getElementById("wife").style.visibility= "hidden";      
    },2000);

}
    
