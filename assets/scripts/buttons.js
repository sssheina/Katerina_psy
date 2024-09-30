document.querySelectorAll('.button__primary').forEach(button => {
    button.addEventListener('click', function() {
      document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
    });
  });