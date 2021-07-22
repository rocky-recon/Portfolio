// $(document).ready(() => {
//   $(".nav-item").on("click", (e) => {
//     if ($(".active").length) {
//       $($(".active")[0]).removeClass("active");
//     }

//     $($(e.target).parent()[0]).addClass("active");
//   });

// document
//   .getElementById("contacts")
//   .addEventListener("click", handleSubmitContactForm);

// function handleSubmitContactForm(event) {}

// posFilterBar($(".filter").first());

// $(".filter").click(function () {
//   posFilterBar(this);
// });

// function posFilterBar(elem) {
//   var origin = $(elem).parent().offset().left;
//   var pos = $(elem).offset().left;
//   $(".float-bar").css({
//     left: pos - origin,
//     width: $(elem).innerWidth(),
//   });
//   $(".float-bar .row").css("left", (pos - origin) * -1);
// }

// // GALLERY
// $("#gallery").mixItUp({});

// function mixClear() {
//   setTimeout(function () {
//     $("#gallery").removeClass("waypoint");
//   }, 2000);
// }

// // CONTACT FORM
// $('#contact-form').submit(function(e) {
//   e.preventDefault();

//   $.ajax({
//       url: 'https://formspree.io/mattwilliams85@gmail.com',
//       method: 'POST',
//       data: { message: $('form').serialize() },
//       dataType: 'json'
//     }).done(function(response) {
//       $('#success').addClass('expand');
//       $('#contact-form')
//         .find('input[type=text], input[type=email], textarea')
//         .val('');
//     });
//   });

//   $('#close').click(function() {
//     $('#success').removeClass('expand');
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
