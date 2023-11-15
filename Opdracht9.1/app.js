document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('myModal').style.display = 'block';
});
 
document.getElementById('submitAge').addEventListener('click', function() {
    let age = document.getElementById('ageInput').value;
 
    if (age >= 18) {
        window.location.href = "https://www.w3schools.com/howto/howto_css_modals.asp"
    }  
    else {
      underage.style.display = 'block';
    }
});