const elForm = document.querySelector(".form");
const elUserPassword = elForm.querySelector(".form__user-password");
const elUserPhone = elForm.querySelector(".form__user-phone");

const users = JSON.parse(localStorage.getItem('users') || '[]');

elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const passwordValue = elUserPassword.value.trim().toLowerCase();
    const telValue = elUserPhone.value.trim();

    const registeredUser = users.find((item) => item.user_phone == telValue);
    console.log(registeredUser.id);

    if(registeredUser?.user_password == passwordValue) {
        window.location.href = "/index.html";
    } else {
        alert("User has not existed");
        return;
    }

    localStorage.setItem("user_id", registeredUser?.id);
});