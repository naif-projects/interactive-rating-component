import './index.scss';

/**
 * @param {String} $el
 * @returns {HTMLElement}
 */
const el = ($el) => document.querySelector($el);

/**
 * @param {String} $el
 * @returns {NodeListOf<any>}
 */
const els = ($els) => document.querySelectorAll($els);

// state
let state = null;

// render thank card
const renderThankMessage = (state) => {
  // show rating thank card
  el('#rating-thank-card').classList.remove('hidden');

  el('#rating-label').textContent = state;

  // hide rating card
  el('#rating-card').classList.add('hidden');
};

// remove active btn
const removeActiveBtnState = () => {
  els('.js-btn-group button').forEach((btn) => {
    btn.classList.add('hover:bg-primary-light');

    btn.classList.remove('bg-secondary-base');
    btn.classList.remove('text-white');
  });
};

// button group
els('.js-btn-group button').forEach((btn) => {
  btn.addEventListener('click', (event) => {
    console.log(btn.getAttribute('data-btn-value'));

    // remove btn state bg
    removeActiveBtnState();

    btn.classList.remove('hover:bg-primary-light');

    btn.classList.add('bg-secondary-base');
    btn.classList.add('text-white');

    state = btn.getAttribute('data-btn-value');
  });
});

// submit btn
el('#submit-btn').addEventListener('click', (event) => {
  renderThankMessage(state);
});
