function checkAnswers(event) {
   event.preventDefault();

   let marks = 0;

   
   const kingAlternateName = document.querySelector('input[name="King"]:checked');
   if (kingAlternateName && kingAlternateName.value === "வீர சதய வர்ம பராக்கிரம பாண்டியன்") {
        marks += 1;
   }

   const capitalName = document.querySelector('input[name="Capital Name"]:checked');
   if (capitalName && capitalName.value === "விந்தன் கோட்டை") {
       marks += 1;
   }     

   const period = document.querySelector('input[name="Period"]:checked');
   if (period && period.value === "13 ஆம் நூற்றாண்டு") {
      marks += 1;
   }

   const ancestor = document.querySelector('input[name="Ancestor"]:checked');
   if (ancestor && ancestor.value === "சுந்தர பாண்டியன்") {
      marks += 1;
   }

   const year = document.querySelector('input[name="Year"]:checked');
   if (year && year.value === "1311") {
      marks += 1;
   }

   alert("You Scored " + marks + " Out of 5");
}

