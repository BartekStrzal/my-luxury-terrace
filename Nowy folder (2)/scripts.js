// Prosta walidacja formularza kontaktowego
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Dziękujemy za wiadomość! Skontaktujemy się z Tobą wkrótce.');
    this.reset();
});