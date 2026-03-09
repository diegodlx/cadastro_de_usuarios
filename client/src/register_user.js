import users from "./all_users.js";

const newUserName = document.getElementById("user_name");
const newUserAge = document.getElementById("user_age");
const newUserJob = document.getElementById("user_job");
const newUserregister = document.getElementById("user_register");
const registerBtn = document.getElementById("register_btn");

registerBtn.addEventListener("click", () => {
    const newUser = {
        id: 4,
        name: newUserName.value,
        age:newUserAge.value,
        job:newUserJob.value,
        register: newUserregister.value
    };

    fetch(`http://localhost:3000/api/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newUser),
    });
});