const redesSociales = document.getElementById('redes-sociales');
const urlContainer = document.getElementById('url-container');
const urlLink = document.getElementById('url-link');


redesSociales.addEventListener('change', function() {

  let selectedOption = redesSociales.value;

  urlLink.href = selectedOption;
  urlLink.textContent = selectedOption;

  if (selectedOption) {
    urlContainer.style.display = 'block';
  } else {
    urlContainer.style.display = 'none';
  }
});
