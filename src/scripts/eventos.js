import list from './modules/list'

console.log(`Hello ${list[0]}`)

function slideToggle(myEvent) {
    myEvent.preventDefault();
  
    var myTarget = this.getAttribute('href');
    var theBlock = document.querySelector(myTarget);
    var finalHeight = theBlock.querySelector('.content-block').clientHeight;
    if (theBlock.classList.contains('is-open')) {
      theBlock.classList.remove('is-open');
      theBlock.style.maxHeight = 0;
    } else {
      theBlock.classList.add('is-open');
      theBlock.style.maxHeight = finalHeight + 'px';
    }
  }
  
  document.querySelectorAll('.trigger').forEach(function(myElement) {
    myElement.addEventListener('click', slideToggle);
  });
  