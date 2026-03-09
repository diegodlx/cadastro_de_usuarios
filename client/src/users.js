const showButton = document.getElementById("show-users");
const allUsers = document.getElementById("existing-users");
const userFilter = document.getElementById("user-filter");


showButton.addEventListener("click", () => {
  if (userFilter.value == ""){
    showAllUsers();
    } else {
      showFilteredUsers();
    }
  });


const showAllUsers = async () => {
  allUsers.innerHTML = "";
  const response = await fetch('http://localhost:3000/api/users/');
  const data = await response.json();
  console.log("Resposta do fetch: ", data);
  // user.forEach((user) => {
  data.forEach((user) => {
    allUsers.innerHTML+= `<div class="card" id="${user.id}">
    <p>Nome: ${user.name}</p>
    <p>Idade: ${user.age}</p>
    <div class="card-actions">
      <button type="button" class="card-btn card-btn-edit">Edit</button>
      <button type="button" class="card-btn card-btn-delete">Delete</button>
    </div>
    </div>`
  });
};

const showFilteredUsers = async () => {
  // const filteredUsers = user.filter((user) => user.name == userFilter.value)
  allUsers.innerHTML = "";
  const response = await fetch(`http://localhost:3000/api/users/name/${userFilter.value}`);
  const data = await response.json()
  console.log("Resposta do fetch: ", data);
   data.forEach((filterUser) => {
    allUsers.innerHTML+= `<div class="card" id="${filterUser.id}">
    <p>Nome: ${filterUser.name}</p>
    <p>Idade: ${filterUser.age}</p>
    <div class="card-actions">
      <button type="button" class="card-btn card-btn-edit">Edit</button>
      <button type="button" class="card-btn card-btn-delete">Delete</button>
    </div>
    </div>`
  });
};

allUsers.addEventListener("click", async (e) => {
  if (e.target.classList.contains('card-btn-edit')) {

    const id = e.target.closest('.card').id;
    window.location.href = `edit_user.html?id=${id}`;

  } else if (e.target.classList.contains('card-btn-delete')) {
    const id = e.target.closest('.card').id;
    await fetch(`http://localhost:3000/api/users/${id}`, {
      method: 'DELETE',
    });

    showButton.click;

  } else return
});

const findNameOnCard = (cardId) => {
  const filteredUser = user.find((user) => user.id == cardId);
  console.log(filteredUser);
  return filteredUser
}