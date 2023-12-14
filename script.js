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

  card.innerHTML = `  <img src=${photoUrl} class="card-img-top" alt=${destinationName} at ${locationName}>
<div class="card-body">
  <h5 class="card-title">${destinationName}</h5>
  <p class="card-text">${locationName}</p>
  ${descr && `<p class="card-text">${descr}.</p>`}
  <button class="btn btn-info> Edit </button>
  <button class="btn btn-danger> Delete </button>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;
}
