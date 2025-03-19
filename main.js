// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Ensure the modal exists
  const errorModal = document.getElementById("modal");
  if (errorModal) {
    errorModal.classList.add("hidden"); // Hide modal on page load
  }

  const hearts = document.querySelectorAll(".like-glyph");

  hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      mimicServerCall()
        .then(() => {
          heart.textContent = heart.textContent === "♡" ? "♥" : "♡";
          heart.classList.toggle("activated-heart");
        })
        .catch((error) => {
          if (errorModal) {
            errorModal.classList.remove("hidden");
            errorModal.querySelector("#modal-message").textContent = error;

            setTimeout(() => {
              errorModal.classList.add("hidden");
            }, 3000);
          }
        });
    });
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
