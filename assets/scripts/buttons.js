document.querySelectorAll('.scroll').forEach(button => {
    button.addEventListener('click', function() {
      document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
    });
  });