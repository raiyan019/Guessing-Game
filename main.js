
// player one info
document.addEventListener('DOMContentLoaded', () => {
    const errorHolder = document.querySelector('.errorHolder');
    const PlayerOneInput = document.querySelector('#PlayerOneInput');
    const Startbtn = document.querySelector('.Startbtn');
    const parent1 = document.querySelector('parent1');
    console.log("Error Holder:", errorHolder);
    console.log("Player One Input:", PlayerOneInput);
    console.log("Start Button:", Startbtn);

// Player two info
const parent2 = document.querySelector('parent2');
// Player two info

    if (!PlayerOneInput || !Startbtn) {
        console.error("One or more elements were not found. Check your HTML.");
        return;
      }
      

    let PlayerOneNumber;


    Startbtn.addEventListener('click', () => {
      PlayerOneNumber = parseInt(PlayerOneInput.value);
      
      if (isNaN(PlayerOneNumber)) {
          errorHolder.innerHTML = "Input can be 0–10";
          return;
      }
      
      if (PlayerOneNumber < 0 || PlayerOneNumber > 10) {
          errorHolder.innerHTML = "Input Range 0 to 10";
          errorHolder.style.color = "white";
          errorHolder.style.background = "red";
          errorHolder.style.display = "block";
          errorHolder.style.padding = "10px";
          return;
     
     
        }


             // If input is valid, proceed to Player Two's phase
             console.log("Player One Number:", PlayerOneNumber);
             parent1.style.display = "none"; // Hide Player One's input section
             parent2.style.display = "block"; // Show Player Two's guessing section
      
   
  });
  



 //   Startbtn.addEventListener('click', () => {
 //       PlayerOneNumber = PlayerOneInput.value;
 //       if (isNaN(PlayerOneNumber)) {
   //         errorHolder.innerHTML = "Input can be 0~10";
     //   }

       // if (parseInt(PlayerOneNumber) > 10) {
           
         //   errorHolder.innerHTML ="input Range 0 to 10";
         //   errorHolder.style.color ="white";
         //   errorHolder.style.background ="red";
         //   errorHolder.style.display ="block";
         //   errorHolder.style.padding ="10px";
      //  }
    //  else if (parseInt(PlayerOneNumber) < 0) {
       
    //    errorHolder.innerHTML ="input Range 0 to 10";
      //      errorHolder.style.color ="white";
     //       errorHolder.style.display ="block";
    //        errorHolder.style.background ="red";
      //      errorHolder.style.padding ="10px";
     // }

  //  });

    //PlayerOneInput function 
   //  if (PlayerOneNumber <= 10 && PlayerOneNumber >= 0) {
     //   console.log(PlayerOneNumber);
       // parent1.style.display = "none";
      //  parent2.style.display = "block";
     // }
   
     // PlayerOneInput.addEventListener('keyup', (e) => {
        if (isNaN(PlayerOneInput.value) || parseInt(PlayerOneInput.value) < 0 || parseInt(PlayerOneInput.value) > 10) {
          showError("Input range 0 to 10");
        } else {
          errorHolder.style.display = "none";
          
          PlayerOneNumber = parseInt(PlayerOneInput.value);
          console.log(PlayerOneNumber);
        }
     // }); 

});