import "./pages/variables.css";
import "./pages/index.css";


document.addEventListener('DOMContentLoaded', function () {
  const maxSelection = 4;
  let selectedCount = 0;

  const artifactButtons = document.querySelectorAll('.button--artefact');

  artifactButtons.forEach(button => {
    button.addEventListener('click', function (e) {
      e.preventDefault();

      const isPressed = this.getAttribute('aria-pressed') === 'true';
      const parentItem = this.closest('.item');

      if (isPressed) {
        this.setAttribute('aria-pressed', 'false');
        selectedCount--;

        updateDisabledState();
      } else {
        if (selectedCount < maxSelection) {

          this.setAttribute('aria-pressed', 'true');
          selectedCount++;


          updateDisabledState();
        }
      }
    });
  });

  function updateDisabledState() {
    artifactButtons.forEach(button => {
      const parentItem = button.closest('.item');
      const isPressed = button.getAttribute('aria-pressed') === 'true';

      if (selectedCount >= maxSelection && !isPressed) {

        parentItem.classList.add('disabled');
        button.setAttribute('disabled', 'true');
      } else {

        parentItem.classList.remove('disabled');
        button.removeAttribute('disabled');
      }
    });
  }
});