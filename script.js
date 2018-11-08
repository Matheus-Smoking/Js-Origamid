function iniTabNav() {

  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    tabContent.forEach((content) => {
      content.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }


  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}
iniTabNav();

const accordionList = document.querySelectorAll('.js-accordion dt');
accordionList[0].classList.add('ativo');
accordionList[0].nextElementSibling.classList.add('ativo');

function activeAccordion() {
  this.classList.toggle('ativo');
  this.nextElementSibling.classList.toggle('ativo')
}

accordionList.forEach((item) => {
  item.addEventListener('click', activeAccordion);
})


function initScrollSuave() {

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');


  function srollToSection(event) {

    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    })
    console.log(section)

  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', srollToSection)
  })
}
initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.6;
  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;

      if (isSectionVisible) {
        section.classList.add('ativo');
      }
    })
  }

  animaScroll();

  window.addEventListener('scroll', animaScroll);
}

initAnimacaoScroll();