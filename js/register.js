const elForm = document.querySelector(".form");
const elUserName = elForm.querySelector(".form__user-input");
const elUserPassword = elForm.querySelector(".form__user-password");
const elUserPhone = elForm.querySelector(".form__user-phone");

const users = JSON.parse(localStorage.getItem("users") || "[]");
localStorage.setItem("users", JSON.stringify(users));


elForm.addEventListener("submit", (evt) => {
    evt.preventDefault();

    const userValue = elUserName.value.trim().toLowerCase();
    const passwordValue = elUserPassword.value.trim();
    const telValue = elUserPhone.value.trim();

    // Getting dates and times
    const newDate = new Date();
    const currentYear = newDate.getFullYear().toString();
    const currentMonth = (newDate.getMonth() + 1).toString().padStart(2, "0");
    const currentDay = newDate.getDate().toString().padStart(2, "0");
    const currentHour = newDate.getHours().toString().padStart(2, "0");
    const currentMinutes = newDate.getMinutes().toString().padStart(2, "0");

    // Conditions for form validation
    if(userValue.length <= 2) {
        alert("Name must contains at least 3 words");
        return;
    }

    if(userValue.length >= 20) {
        alert("Name cannot contain 20 words");
        return;
    }

    if(passwordValue.length < 8) {
        alert("Password must be eight numbers");
        return;
    }

    if(telValue.length <= 12 || telValue.length > 13) {
        alert("Phone number must be twelwe numbers");
        return;
    }

    const existedUser = users.find(item => item.user_phone == telValue);
    if(existedUser) {
        alert("This number has already signed in");
        return;
    }

    const new_user = {
        id: users.length ? users.length + 1 : 1,
        user_name: userValue,
        user_password: passwordValue,
        user_phone: telValue,
        user_orders: [],
        register_date: `${currentYear}/${currentMonth}/${currentDay}  ${currentHour}:${currentMinutes}`,
    };

    users.push(new_user);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("user_id", new_user.id);

    elUserName.value = "";
    elUserPassword.value = "";
    elUserPhone.value = "";

    window.location.href = '/index.html';
});