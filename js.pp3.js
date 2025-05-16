document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const message = this.message.value;
    document.getElementById('formResponse').innerText = `Дякуємо, ${name}! Ми зв’яжемося з вами за адресою ${email}.`;
    this.reset();
  });
  