document.addEventListener('DOMContentLoaded', function () {
  const typingEffect = document.getElementById('typing-effect');
  console.log('typingEffect element:', typingEffect);
  const texts = ['Kajol','Web Developer', 'Designer', 'Coder','Ethical Hacker']; // Removed leading spaces
  let textIndex = 0; // Current text index at start
  let charIndex = 0; // Current character index at start

  function type() {
    if (charIndex < texts[textIndex].length) {
      typingEffect.textContent += texts[textIndex].charAt(charIndex);
      charIndex++; //increment
      setTimeout(type, 50); // Speed of typing
    } else {
      setTimeout(erase, 1000); // Pause before erasing
    }
  }
  function erase() {
    if (charIndex > 0) {
      typingEffect.textContent = texts[textIndex].substring(0, charIndex - 1);
      charIndex--; //decrement
      setTimeout(erase, 50); // Speed of erasing
    } else {
      textIndex = (textIndex + 1) % texts.length; // Move to next text
      setTimeout(type, 500); // Pause before typing next text
    }
  }
  // Start the typing effect
  type();
});
