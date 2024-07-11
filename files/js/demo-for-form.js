document.addEventListener('DOMContentLoaded', function() {
   const demoForms = document.querySelectorAll('.demo-form');
   
   demoForms.forEach(form => {
      form.addEventListener('submit', function(event) {
         event.preventDefault();
         window.location.href = 'thank-you-page.html';
      });
   });
});