const form = document.getElementById('user-form');
const submitButton = document.getElementById('submit-btn');

let timeout = null;

let errors = {
  nickName: true,
  Celular: true, // Agrega Celular al objeto de errores/^[a-zA-Z\s]*$/;
  DNI: true,
  email: true,
};

const mailformatRegex = /^[^@]+@\w+(\.\w+)+\w$/;
const numberFormatRegex = /^[0-9]+$/;

document.querySelectorAll('.form-box').forEach((box) => {
  const boxInput = box.querySelector('input');

  boxInput.addEventListener('keydown', (event) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(`Input ${boxInput.name} value: `, boxInput.value);

      validation(box, boxInput);
    }, 300);
  });
});

validation = (box, boxInput) => {
  if (boxInput.value == '') {
    showError(true, box, boxInput);
  } else {
    showError(false, box, boxInput);
  }

  if (boxInput.name === 'Celular') {
    if (!boxInput.value.match(numberFormatRegex)) {
      showError(true, box, boxInput);
    } else {
      showError(false, box, boxInput);
    }
  }



  if (boxInput.name == 'email') {
    if (!boxInput.value.match(mailformatRegex)) {
      showError(true, box, boxInput);
    } else {
      showError(false, box, boxInput);
    }
  }

 

  submitController();
};

showError = (check, box, boxInput) => {
  if (check) {
    box.classList.remove('form-success');
    box.classList.add('form-error');
    errors[boxInput.name] = true;
  } else {
    box.classList.remove('form-error');
    box.classList.add('form-success');
    errors[boxInput.name] = false;
  }
};

submitController = () => {
  console.log(errors);
  if (errors.nickName || errors.Celular||  errors.email ) {
    submitButton.toggleAttribute('disabled', true);
  } else {
    submitButton.toggleAttribute('disabled', false);
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  console.log([...formData]);
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});
