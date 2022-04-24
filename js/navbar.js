document.addEventListener('DOMContentLoaded', () => {
  
  document.addEventListener('scroll', () => {

    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if (scrollTop > 70){
      document.getElementsByClassName('navbar')[0].style.backgroundColor = 'black';
    }
    else{
      document.getElementsByClassName('navbar')[0].style.backgroundColor = 'rgba(0, 0, 0, 0)';
    }
  })

})