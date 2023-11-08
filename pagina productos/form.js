const form = document.getElementById('user-form');
const submitButton = document.getElementById('submit-btn');


let timeout = null;

let errors = {
  Nombre: true,
  email: true,
  DNI: true,
  fechadenacimiento: true, // Agrega Celular al objeto de errores/^[a-zA-Z\s]*$/;
  Codigopostal: true,
  Comentario: true,
};

const mailformatRegex = /^[^@]+@\w+(\.\w+)+\w$/;
const numberFormatRegex = /^[0-9]+$/;
const sololetras = /^[a-zA-Z]+$/;

document.querySelectorAll('.form-box').forEach((box) => {
  const boxInput = box.querySelector('input');

  boxInput.addEventListener('input', (event) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      console.log(`Input ${boxInput.name} value: `, boxInput.value);

      validation(box, boxInput);
    }, 300);
  });
});

validation = (box, boxInput) => {
  if (boxInput.value === '') {
      showError(true, box, boxInput);
    } else {
      showError(false, box, boxInput);
    }
  


  if (boxInput.name === 'Nombre') {
    if (!boxInput.value.match(sololetras)) {
      showError(true, box, boxInput);
    } else {
      showError(false, box, boxInput);
    }
  }



  if (boxInput.name === 'email') {
    if (!boxInput.value.match(mailformatRegex)) {
      showError(true, box, boxInput);
    } else {
      showError(false, box, boxInput);
    }
  }

  if (boxInput.name === 'DNI') {
    if (!boxInput.value.match(numberFormatRegex)) {
      showError(true, box, boxInput);
    } else {
      showError(false, box, boxInput);
    }
  }

if (boxInput.name === 'fecha de nacimiento') {
    if (!boxInput.value.match(numberFormatRegex)) {
      showError(true, box, boxInput);
    } else {
      showError(false, box, boxInput);
    }
  }

  if (boxInput.name === 'codigo postal') {
    if (!boxInput.value.match(numberFormatRegex)) {
      showError(true, box, boxInput);
    } else {
      showError(false, box, boxInput);
    }
  }

  
  if (boxInput.name === 'Comentario') {
    if (!boxInput.value.match(sololetras)) {
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
  if (errors.Nombre || errors.email || errors.Celular|| errors.DNI||errors.Codigopostal|| errors.Comentario) {
    submitButton.setAttribute('disabled', 'true');
  } else {
    submitButton.removeAttribute('disabled');
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