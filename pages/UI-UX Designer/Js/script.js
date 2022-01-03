//debugger;
const siteText = {
  aboutTitleTextEng: 'About me',
  aboutTitleTextRu: 'Обо мне',

  infoTextEng: 'UX | UI designer <br> 16 years old, Gyumry',
  infoTextRu: 'UX | UI designer <br> 16 лет, Гюмри',

  aboutSubtitleText1Eng: 'I am Narek, a self-motivated, highly imaginative and enthusiastic web designer.',
  aboutSubtitleText2Eng: 'I am a multidisciplinary designer with a curious mind, I enjoy to meet new people and understand how they are solving problems, this is one of the reasons why I invest my time on meetups from product management to everything related to design and talking to people in general, as always can be an opportunity to learn something new.',
  aboutSubtitleText3Eng: 'I see it as a chance to improve myself as a professional and put things in practice when I’m creating my solutions. In all projects, I seek to simplify the relationship between people and the interactive products they use, taking into consideration business goals and technological constraints.',

  aboutSubtitleText1Ru: 'Я Нарек, целеустремленный, талантливый и увлеченный веб-дизайнер.',
  aboutSubtitleText2Ru: 'Я многопрофильный дизайнер с любопытным умом, мне нравится знакомиться с новыми людьми и понимать, как они решают проблемы, это одна из причин, почему я трачу свое время на встречи, от управления продуктами до всего, что связано с дизайном и общением с людьми в в общем как всегда может быть возможность узнать что-то новое.',
  aboutSubtitleText3Ru: 'Я вижу в этом шанс улучшить себя как профессионала и применять вещи на практике, когда я создаю свои решения. Во всех проектах я стремлюсь упростить отношения между людьми и интерактивными продуктами, которые они используют, с учетом бизнес-целей и технологических ограничений.',

  skillsTitleTextEng: 'Skills',
  skillsTitleTextRu: 'Навыки',

  skillsSubtitleTextEng: 'I work in such programs as',
  skillsSubtitleTextRu: 'Я работаю в таких программах как',

  portfolioTitleTextEng: 'Portfolio',
  portfolioTitleTextRu: 'Портфолио',

  contactTitleTextEng: 'Contacts',
  contactTitleTextRu: 'Контакты',

  contactSubtitleTextEng: 'Want to know more or just chat? <br> You are welcome!',
  contactSubitleTextRu: 'Хотите узнать больше или просто поболтать? <br> Пожалуйста!',
}

const langSwitchBtnRu = document.querySelectorAll('.ru');
const langSwitchBtnEng = document.querySelectorAll('.eng');

langSwitchBtnRu.forEach( function(element, index) {
  element.addEventListener('click',(e) => {
    element.style.opacity = '1';
    langSwitchBtnEng.forEach( function(element, index) {
      element.style.opacity = '0.5';
    });
    let h2 = document.querySelectorAll('h2');
    let p = document.querySelectorAll('p');
    p[1].innerHTML = siteText.infoTextRu
    p[3].innerHTML = siteText.aboutSubtitleText1Ru
    p[4].innerHTML = siteText.aboutSubtitleText2Ru
    p[5].innerHTML = siteText.aboutSubtitleText3Ru
    p[6].innerHTML = siteText.skillsSubtitleTextRu
    p[7].innerHTML = siteText.contactSubitleTextRu
    h2[0].innerHTML = siteText.aboutTitleTextRu
    h2[1].innerHTML = siteText.skillsTitleTextRu
    h2[2].innerHTML = siteText.portfolioTitleTextRu
    h2[3].innerHTML = siteText.contactTitleTextRu
  });
});

langSwitchBtnEng.forEach( function(element, index) {
  element.addEventListener('click',(e) => {
    element.style.opacity = '1'
    langSwitchBtnRu.forEach( function(element, index) {
      element.style.opacity = '0.5'
    });
    let h2 = document.querySelectorAll('h2')
    let p = document.querySelectorAll('p');
    p[1].innerHTML = siteText.infoTextEng
    p[3].innerHTML = siteText.aboutSubtitleText1Eng
    p[4].innerHTML = siteText.aboutSubtitleText2Eng
    p[5].innerHTML = siteText.aboutSubtitleText3Eng
    p[6].innerHTML = siteText.skillsSubtitleTextEng  
    p[7].innerHTML = siteText.contactSubtitleTextEng 
    h2[0].innerHTML = siteText.aboutTitleTextEng
    h2[1].innerHTML = siteText.skillsTitleTextEng
    h2[2].innerHTML = siteText.portfolioTitleTextEng
    h2[3].innerHTML = siteText.contactTitleTextEng
  });
});

const burgerMenu = document.querySelector('#burgerMenu');
const adaptMenu = document.querySelector('.adapt_menu');
const body = document.querySelector('body');

burgerMenu.addEventListener('click',(e) => {
	adaptMenu.classList.toggle('_active');
	burgerMenu.classList.toggle('_active');
	body.classList.toggle('_block');
});


$(function(){

  $('#toHome').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#home').offset().top }, 1000);
    e.preventDefault();
  });

  $('#toAboutMe').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#aboutMe').offset().top }, 1000);
    e.preventDefault();
  });

   $('#toSkills').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#skills').offset().top }, 1000);
    e.preventDefault();
  });

   $('#toPortfolio').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#portfolio').offset().top }, 1000);
    e.preventDefault();
  });

   $('#toContact').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#contact').offset().top }, 1000);
    e.preventDefault();
  });





   $('#toHomeAdapt').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#home').offset().top }, 1000);
    e.preventDefault();
    adaptMenu.classList.remove('_active');
    burgerMenu.classList.remove('_active');
    body.classList.remove('_block');
  });

  $('#aboutMeAdapt').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#aboutMe').offset().top }, 1000);
    e.preventDefault();
    adaptMenu.classList.remove('_active');
    burgerMenu.classList.remove('_active');
    body.classList.remove('_block');
  });

   $('#toSkillsAdapt').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#skills').offset().top }, 1000);
    e.preventDefault();
    adaptMenu.classList.remove('_active');
    burgerMenu.classList.remove('_active');
    body.classList.remove('_block');
  });

   $('#toPortfolioAdapt').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#portfolio').offset().top }, 1000);
    e.preventDefault();
    adaptMenu.classList.remove('_active');
    burgerMenu.classList.remove('_active');
    body.classList.remove('_block');
  });

   $('#toContactAdapt').on('click', function(e){
    $('html,body').stop().animate({ scrollTop: $('#contact').offset().top }, 1000);
    e.preventDefault();
    adaptMenu.classList.remove('_active');
    burgerMenu.classList.remove('_active');
    body.classList.remove('_block');
  });
});

