const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyCOHl40h1_yh-tQ4SWjwTqLNJF54HKAons"

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google API
}

form.addEventListener("submit", searchAddressHandler);
