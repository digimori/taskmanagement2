// Initialisation for Materialize navbar

document.addEventListener('DOMContentLoaded', function() {
    // sidenav initialisation:
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
  });


/* Initialisation for navbar, if using jQuery instead:
$(document).ready(function(){
    $('.sidenav').sidenav();
  });
*/