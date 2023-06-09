function abrirReproductor(event) {
    event.preventDefault();
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'block';
  }

  function cerrarReproductor() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
  }

document.addEventListener('DOMContentLoaded', function() {
    const noteForm = document.getElementById('note-form');
    const noteList = document.getElementById('note-list');
  
    noteForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const titleInput = document.getElementById('titulo');
      const contentInput = document.getElementById('contenido');
  
      const title = titleInput.value;
      const content = contentInput.value;
  
      if (title && content) {
        const note = { title, content };
  
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
  
        notes.push(note);
  
        localStorage.setItem('notes', JSON.stringify(notes));
  

        titleInput.value = '';
        contentInput.value = '';
  
        showNotes();
      } else {
        alert('Por favor, ingresa un título y contenido para la nota.');
      }
    });
  


    showNotes();
  
    function showNotes() {
      noteList.innerHTML = '';
  
      const notes = JSON.parse(localStorage.getItem('notes'));
  
      if (notes && notes.length > 0) {
        notes.forEach(function(note) {
          const title = note.title;
          const content = note.content;
  
          const noteItem = document.createElement('div');
          noteItem.innerHTML = `<h3>${title}</h3><p>${content}</p>`;
  
          noteList.appendChild(noteItem);
        });
      } else {
        noteList.innerHTML = 'No hay notas para mostrar.';
      }
    }
  });
  