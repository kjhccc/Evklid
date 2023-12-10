window.addEventListener('DOMContentLoaded', function(){

  document.querySelectorAll('.btn-step').forEach(function(step){

    step.addEventListener('click', function(event){

      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.slider').forEach(function(slide){
        slide.classList.remove('slide-active')
      })

      document.querySelectorAll('.btn-step').forEach(function(btnActive){
        btnActive.classList.remove('active-step')
      })

      document.querySelector(`[data-target='${path}']`).classList.add('slide-active')
      document.querySelector(`[data-path='${path}']`).classList.add('active-step')
    })
  })

})
