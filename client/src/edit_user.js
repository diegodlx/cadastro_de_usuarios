import users from "./all_users.js";

const editButton = document.getElementById("edit-user");
const userId = document.getElementById("user-id");
const userName = document.getElementById("user-name");
const userAge = document.getElementById("user-age");
const userJob = document.getElementById("user-job");
const userRegister = document.getElementById("user-register");

window.onload = async function() {
  const urlParams = new URLSearchParams(window.location.search);
  const idParaEditar = urlParams.get('id');
  
  if (idParaEditar) {
    console.log("ID recebido para edição:", idParaEditar);
    userId.value = `${idParaEditar}`;
    const response = await fetch(`http://localhost:3000/api/users/id/${idParaEditar}`);
    const data = await response.json();
    const {id, name, age, job, register} = data[0];
    console.log(data.id, data.name, data.age, data.job, data.register);
    userId.value = `${id}`;
    userName.value = name;
    userAge.value = age;
    userJob.value = job;
    userRegister.value = register;
  }
};


editButton.addEventListener("click", async () => {
    const editUser = {
        id: userId.value,
        name: userName.value,
        age: userAge.value,
        job: userJob.value,
        register: userRegister.value
    };

    fetch(`http://localhost:3000/api/users/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(editUser),
    });
});