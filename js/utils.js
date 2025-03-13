const tabButtons = document.querySelectorAll('.tab__button');
const tabContents = document.querySelectorAll('.tab__content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    // add active class to clicked button and content
    button.classList.add('active');
    const targetContent = document.querySelector(button.dataset.target);
    targetContent.classList.add('active');
  });
});
