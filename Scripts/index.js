$(document).ready(() => {
  $(".nav-item").on("click", (e) => {
    if ($(".active").length) {
      $($(".active")[0]).removeClass("active");
    }

    $($(e.target).parent()[0]).addClass("active");
  });
});

document
  .getElementById("contacts")
  .addEventListener("click", handleSubmitContactForm);

function handleSubmitContactForm(event) {}
