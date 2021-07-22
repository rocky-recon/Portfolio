// var $cards = $(".card-object"),
//   $faceButtons = $(".face");

// $faceButtons.on("click", flipCard);

// function flipCard(event) {
//   event.preventDefault();

//   var $btnFace = $(this),
//     $card = $btnFace.parent(".card-object");

//   if ($card.hasClass("flip-in")) {
//     closeCards();
//   } else {
//     closeCards();
//     openCard($card);
//   }
// }

// function closeCards() {
//   $cards.each(function () {
//     $(this)
//       .filter(".flip-in")
//       .removeClass("flip-in")
//       .queue(function () {
//         // Force reflow hack
//         var reflow = this.offsetHeight;
//         $(this).addClass("flip-out").dequeue();
//       });
//   });
// }

// function openCard($card) {
//   $card.removeClass("flip-out").queue(function () {
//     // Force reflow hack
//     var reflow = this.offsetHeight;
//     $(this).addClass("flip-in").dequeue();
//   });
// }

/* paste this line in verbatim */
window.formbutton =
  window.formbutton ||
  function () {
    (formbutton.q = formbutton.q || []).push(arguments);
  };

/* customize formbutton below*/
formbutton("create", {
  action: "https://formspree.io/f/xoqylyrv",
  title: "How can we help?",
  fields: [
    {
      type: "email",
      label: "Email:",
      name: "email",
      required: true,
      placeholder: "your@email.com",
    },
    {
      type: "textarea",
      label: "Message:",
      name: "message",
      placeholder: "What's on your mind?",
    },
    { type: "submit" },
  ],
  styles: {
    title: {
      backgroundColor: "gray",
    },
    button: {
      backgroundColor: "gray",
    },
  },
});
