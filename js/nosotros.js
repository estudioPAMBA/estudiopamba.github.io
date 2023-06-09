document.addEventListener('DOMContentLoaded', function() {
    let equipoGridItems = document.querySelectorAll('.equipo-grid-item');
   
    for (let i = 0; i < equipoGridItems.length; i++) {
      equipoGridItems[i].addEventListener('click', function() {
        this.classList.toggle('mostrar');
        console.log(equipoGridItems[i]);
      });
    }
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    let links = document.querySelectorAll('a[target="_blank"]');
  
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(event) {
        event.preventDefault();
        let confirmMessage = 'Estás saliendo del sitio';
        if (confirm(confirmMessage)) {
          window.open(this.href, '_blank');
        } 
      });
    }
  });
  
  
  