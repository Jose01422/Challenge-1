const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const copyButton = document.getElementById('copyButton');

document.querySelector('.section.right h2').innerText = 'Resultado';
document.querySelector('.section.left .textarea').placeholder = 'Ingrese texto';
outputText.value = 'Ningún mensaje fue encontrado';

const encryptText = () => {
  const text = inputText.value.toLowerCase();
  const encryptedText = text
    .replace(/e/g,'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');

  outputText.value = encryptedText;
  inputText.value = '';
  copyButton.style.display = 'block';
  document.querySelector('.section.right h2').innerText = 'Texto encriptado';
  
};

const decryptText = () => {
  const text = outputText.value;
  const decryptedText = text
    .replace(/ober/g, 'r')
    .replace(/ufat/g, 'u')
    .replace(/ai/g, 'a')
    .replace(/imes/g, 'i')
    .replace(/enter/g, 'e');

  outputText.value = decryptedText;
  inputText.value = '';
  copyButton.style.display = 'none';
  document.querySelector('.section.right h2').innerText = 'Texto desencriptado';
  
};

const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(outputText.value);
    document.querySelector('.section.right h2').innerText = 'Texto copiado';
    copyButton.style.display = 'none';
  } catch (err) {
    document.querySelector('.section.right h2').innerText = 'Texto no copiado';
  }
};

inputText.addEventListener('input', () => {
  if (inputText.value) {
    encryptButton.removeAttribute('disabled');
  } else {
    encryptButton.setAttribute('disabled', '');
  }


  inputText.value = inputText.value.toLowerCase();

  
  inputText.value = inputText.value.replace(/[^a-z\s]/g, '');
});

outputText.addEventListener('input', () => {
  if (outputText.value) {
    decryptButton.removeAttribute('disabled');
  } else {
    decryptButton.setAttribute('disabled', '');
  }
});

encryptButton.addEventListener('click', encryptText);
decryptButton.addEventListener('click', decryptText);
copyButton.addEventListener('click', copyContent);