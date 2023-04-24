const modeText = document.querySelector('.mode')
const checkbox = document.querySelector("input[type=checkbox]");
const mode = document.querySelectorAll('.dark')

checkbox.addEventListener('change', function () {
    mode.forEach(element => {
        element.classList.toggle('light')
        element.classList.toggle('dark')
    });
    
    if (this.checked) {
        modeText.innerHTML = "Light Mode"
    } else {
        modeText.innerHTML = "Dark Mode"
    }
});