// when form is submitted grab users input and log it
user_input_form.addEventListener("submit", (e) => {
  // e is the event object
  // holds more information about the event that we are handling
  e.preventDefault();
  const PLACEHOLD_PHOTO_URL =
    "https://cavchronicle.org/wp-content/uploads/2018/03/top-travel-destination-for-visas-900x504.jpg";
  const destinationName = destination_name.value;
  const locationName = location_name.value;
  const photoUrl = photo_url.value || PLACEHOLD_PHOTO_URL;
  const descr = description.value;

  //   clear the form
  user_input_form.reset();

  const card = createCard({ destinationName, locationName, photoUrl, descr });
  cards_container.appendChild(card);
});

// when edit or delte buttons are clicked, handle them with delegation
cards_container.addEventListener("click", (e) => {
  // e.target tells us what element was clicked on
  const clickedElt = e.target;

  if (clickedElt.getAttribute("btn_type") === "delete") {
    clickedElt.parentElement.parentElement.remove();
  } else if (clickedElt.getAttribute("btn_type") === "edit") {
    handleEdit(clickedElt);
  }
});

function createCard({ destinationName, locationName, photoUrl, descr }) {
  /* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Destination</h5>
    <p class="card-text">location.</p>
    <p class="card-text">description if there is one.</p>
    <button class="btn btn-info> Edit </button>
    <button class="btn btn-danger> Delete </button>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */

  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("style", "width: 18rem;");

  card.innerHTML = `<img src=${photoUrl} class="card-img-top" alt=${destinationName} at ${locationName}>
<div class="card-body">
  <h5 class="card-title">${destinationName}</h5>
  <p class="card-text">${locationName}</p>
  ${descr && `<p class="card-text">${descr}.</p>`}
  <button type="button" btn_type="edit" class="btn btn-info">Edit</button>
  <button  type="button" btn_type="delete" class="btn btn-danger">Delete</button>
</div>`;

  return card;
}
function handleEdit(editBtn) {
  const cardBody = editBtn.parentElement;
  const oldDestName = cardBody.children[0].textContent;
  const oldLocName = cardBody.children[1].textContent;
  const oldPhotoUrl = cardBody.previousElementSibling.getAttribute("src");
  const oldDescr =
    cardBody.children[2].tagName === "P"
      ? cardBody.children[2].textContent
      : "";

  const newDestName = prompt("Enter new destination name", oldDestName);
  const newLocName = prompt("Enter new location name", oldLocName);
  const newPhotoUrl = prompt("Enter new photo url", oldPhotoUrl);
  const newDescr = prompt("Enter new description", oldDescr);
  if (newDestName && newDestName.trim() !== oldDestName) {
    cardBody.children[0].textContent = newDestName;
  }
  if (newLocName && newLocName.trim() !== oldLocName) {
    cardBody.children[0].textContent = newDestName;
  }
  if (newPhotoUrl && newPhotoUrl.trim() !== oldPhotoUrl) {
    cardBody.previousElementSibling.setAttribute("src", newPhotoUrl);
  }
  if (oldDescr && newDescr.trim() !== oldDescr) {
    cardBody.children[2].textContent = newDescr;
  } else if (oldDescr === "") {
    const newDescripElt = document.createElement("p");
    newDescripElt.textContent = newDescr;
    cardBody.insertBefore(newDescripElt, clickedElt);
  }
}
