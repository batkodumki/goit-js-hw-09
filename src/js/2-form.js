let formData = {
    email: "",
    message: "",
}

const form = document.querySelector(".feedback-form");
const textarea = form.elements.message;
const input = form.elements.email;
const localStorageKey = "feedback-form-state";



form.addEventListener("input", () => {
    formData.email = input.value.trim();
    formData.message = textarea.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
});


const savedData = localStorage.getItem(localStorageKey);

if (savedData) {
  const parsedData = JSON.parse(savedData);
  input.value = parsedData.email || "";
  textarea.value = parsedData.message || "";
  formData = parsedData;
};


form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData = { email: "", message: "" };
    form.reset();
    
});