document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }

    // Modals

    var rootEl = document.documentElement;
    var $modals = Array.prototype.slice.call(document.querySelectorAll('.modal'));
    var $modalButtons = Array.prototype.slice.call(document.querySelectorAll('.modal-button'));
    var $modalCloses = Array.prototype.slice.call(document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button'));

    if ($modalButtons.length > 0) {
      $modalButtons.forEach(function ($el) {
        $el.addEventListener('click', function () {
          var target = $el.dataset.target;
          openModal(target);
        });
      });
    }

    if ($modalCloses.length > 0) {
      $modalCloses.forEach(function ($el) {
        $el.addEventListener('click', function () {
          closeModals();
        });
      });
    }

    function openModal(target) {
      var $target = document.getElementById(target);
      rootEl.classList.add('is-clipped');
      $target.classList.add('is-active');
    }

    function closeModals() {
      rootEl.classList.remove('is-clipped');
      $modals.forEach(function ($el) {
        $el.classList.remove('is-active');
      });
    }

    document.addEventListener('keydown', function (event) {
      var e = event || window.event;
      if (e.keyCode === 27) {
        closeModals();
        closeDropdowns();
      }
    });
  });
