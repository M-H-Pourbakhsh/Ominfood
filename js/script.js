/////////////////Set Copyright's Year////////////////////////
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;
//////////////////////////////////////////////////////////

////////////// Make Mobile Navigation Work //////////////
const navBtn = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.main-header');
function navToggle() {
  header.classList.toggle('nav-open');
}
navBtn.addEventListener('click', navToggle);
/////////////////////////////////////////////////////////

/////////// Smooth Scrolling Animation//////////////////
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile naviagtion
    if (link.classList.contains('main-nav-link'))
      header.classList.toggle('nav-open');
  });
});
///////////////////////////////////////////////////

/////////////////// Fixed Navbar//////////////////
const sectionHero = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add('fixed');
    }

    if (ent.isIntersecting) {
      document.body.classList.remove('fixed');
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
  }
);
obs.observe(sectionHero);
/////////////////////////////////////////////////////

// Fixing flexbox gap property missing in some Safari versions//
function checkFlexGap() {
  var flex = document.createElement('div');
  flex.style.display = 'flex';
  flex.style.flexDirection = 'column';
  flex.style.rowGap = '1px';

  flex.appendChild(document.createElement('div'));
  flex.appendChild(document.createElement('div'));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add('no-flexbox-gap');
}
checkFlexGap();
//////////////////////////////////////////////////////
