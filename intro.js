'use strict';


{

  //intersection Observer API
  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      }
      
      entry.target.classList.add('appear');
      obs.unobserve(entry.target)
    });
  }

  const options = {
    threshold: 0.3,
  }

  const observer = new IntersectionObserver(callback,options);
  const targets = document.querySelectorAll('.animation');

  targets.forEach(target => {
    observer.observe(target);
  })

  //QR-code
  const inst = document.getElementById('inst');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask = document.getElementById('mask');

  inst.addEventListener('click',() =>{
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });
  close.addEventListener('click',() =>{
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });
  mask.addEventListener('click',() =>{
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });
}



