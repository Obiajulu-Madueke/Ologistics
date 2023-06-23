const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", function(Addition) {
  const trackingInput = document.getElementById("tracking-input");
  const trackingNumber = trackingInput.value;
  console.log("Tracking number submitted: ", trackingNumber);
});

// Add borders to footer
const footer = document.getElementById('footer');
footer.style.borderTop = '1px solid white';
footer.style.marginTop = '20px';

// Add social media icons
const socialIcons = document.createElement('div');
socialIcons.innerHTML = `
  <a href="#" target="_blank"><i class="fab fa-facebook fa-lg mx-3"></i></a>
  <a href="#" target="_blank"><i class="fab fa-twitter fa-lg mx-3"></i></a>
  <a href="#" target="_blank"><i class="fab fa-instagram fa-lg mx-3"></i></a>
  <a href="#" target="_blank"><i class="fab fa-mastodon fa-lg mx-3"></i></a>
`;
footer.appendChild(socialIcons);