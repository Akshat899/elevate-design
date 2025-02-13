document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});
document.addEventListener('DOMContentLoaded', () => {
    console.log('Elevate Interior Design Studio Portfolio Loaded');

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        form.reset();
    });
});