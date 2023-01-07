const formEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector('[type="email"]');
const PasswordEmailEl = document.querySelector('[type="password"]');


formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const dataObject = {};

    dataObject.email = event.currentTarget.elements.email.value;
    dataObject.password = event.currentTarget.elements.password.value;


    if (dataObject.email !== "" && dataObject.password !== "") {
        console.log(dataObject);
    } else {
        alert('все поля должны быть заполнены');
    }

    event.currentTarget.reset()

    // console.dir(event.currentTarget.elements);
    // console.dir(event.currentTarget);
};
