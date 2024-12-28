
function checkAnswers(event) {
    event.preventDefault(); 

    let marks = 0;

  
 
    const authorAnswer = document.querySelector('input[name="author"]:checked');
    if (authorAnswer && authorAnswer.value === "ஔவையார்") {
        marks += 1;
    }

   
    const alternateNameAnswer = document.querySelector('input[name="Alternate name"]:checked');
    if (alternateNameAnswer && alternateNameAnswer.value === "அறிவுரை காப்பியம்") {
        marks += 1;
    }

   
    const countAnswer = document.querySelector('input[name="Count"]:checked');
    if (countAnswer && countAnswer.value === "653") {
        marks += 1;
    }

  
    const cityNameAnswer = document.querySelector('input[name="City name"]:checked');
    if (cityNameAnswer && cityNameAnswer.value === "பரணிக்குளம்") {
        marks += 1;
    }

    
    const authorNameAnswer = document.querySelector('input[name="Author name"]:checked');
    if (authorNameAnswer && authorNameAnswer.value === "திருஞானசம்பந்தர்") {
        marks += 1;
    }

   
    alert("You scored " + marks + " out of 5.");
}

