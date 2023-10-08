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

window.addEventListener("load", function (e) {
    const getLocalStorage = JSON.parse(localStorage.getItem("feedback-form-state"));

if(getLocalStorage){
    emailInput.value = getLocalStorage.email
    messageTextarea.value = getLocalStorage.message
}
});

feedbackForm.addEventListener("submit", function (e) {
    const getLocalStorage = JSON.parse(localStorage.getItem("feedback-form-state"));

    if(getLocalStorage){
        localStorage.removeItem("feedback-form-state")
        emailInput.value = "";
        messageTextarea.value = "";
    }
})



