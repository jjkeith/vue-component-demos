// FORM FUNCTIONS
// If the user hits 'tab' focus outlines appear
// Add .no-focus-outline to #app
// Corresponding CSS: 
// .no-focus-outline a:focus,
// .no-focus-outline input:focus,
// .no-focus-outline button:focus {
  //   outline: none;
  // }
function listenForTabbing() {
  document.body.addEventListener('keyup', function(e) {
    if (e.which === 9) /* tab */ {
      document.getElementById('app').classList.remove('no-focus-outline');
    }
  });
}



//  Validating/Sanitizing Functions

function sanitizeName(name) {
  return name.replace(/[^A-Za-z]/g, '');
}

function sanitizeEmail(name) {
  return name.replace(/ /g, '');
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
    // console.log(re.test(email));
}

function sanitizeInstagram(instagram) {
  return instagram.replace(/[^[A-za-z0-9._@]/g, '');
}