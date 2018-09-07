$(() => {

  const $navLink = $('.navLink');
  const $heroName = $('#heroName');
  const $heroHover = $('.hover');

  const idArray = ['index','recent','about','contact'];
  const initialLanding = window.location.href.split('#').pop();

  function sectionToggler(target){
    if (target !== 'index'){
      $(`#${target}`).removeClass('hide');
      $(`#${target}`).hide().fadeIn('slow');
      $('nav').removeClass('navbar').addClass('contentActiveNavbar');
      console.log(target, 'got here');
    } else {
      $(`#${target}`).removeClass('hide');
      $(`#${target}`).hide().fadeIn('slow');
      $('nav').removeClass('contentActiveNavbar').addClass('navbar');
    }
    $(`a[href="#${target}"]`).addClass('active');
    const filteredList = idArray.filter( item => item !== target);
    filteredList.forEach(item => {
      $(`a[href="#${item}"]`).removeClass('active');
      $(`#${item}`).addClass('hide');
    });
  }

  $heroName.mouseover( () => {
    $heroHover.css({
      'opacity': '1',
      'transition': 'opacity .2s ease-in'
    });
  });

  $heroName.mouseout(()=>{
    $heroHover.css({
      'opacity': '0',
      'transition': 'opacity .2s ease-out'
    });
  });

  $navLink.click( (e) => {
    const clickTarget = e.target.href.split('#').pop();
    sectionToggler(clickTarget);
  });

  sectionToggler(initialLanding);
});
