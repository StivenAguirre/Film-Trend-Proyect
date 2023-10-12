import throttle from "lodash.throttle";

const emailInput = document.querySelector("input");
const messageTextarea = document.querySelector("textarea");
const feedbackForm = document.querySelector("form");

function saveToLocalStorage() {
  const feedback = {
    email: emailInput.value,
    message: messageTextarea.value,
  };

  localStorage.setItem("feedback-form-state", JSON.stringify(feedback));
}

emailInput.addEventListener("input", saveToLocalStorage);
messageTextarea.addEventListener("input", saveToLocalStorage);

function updateRepositorio(e){
  const getLocalStorage = JSON.parse(localStorage.getItem("feedback-form-state"));
  if(getLocalStorage === ""){
      emailInput.value = "";
      messageTextarea.value = "";
  } else {
      emailInput.value = getLocalStorage.email
      messageTextarea.value = getLocalStorage.message
  }
} 

window.addEventListener("load", updateRepositorio);

feedbackForm.addEventListener("submit", function (e) {
    const getLocalStorage = JSON.parse(localStorage.getItem("feedback-form-state"));
    const localStorageEmail = getLocalStorage.email
    feedbackForm.reset();
    e.preventDefault();
    console.log(`{email = ${getLocalStorage.email}
message = ${getLocalStorage.message}}`)
})

const updateRepositorioThrottle = () => throttle(updateRepositorio, 500); 


