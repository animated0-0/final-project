document.querySelector('.form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!');
    location.reload();
    console.log('Form submitted!');
});


