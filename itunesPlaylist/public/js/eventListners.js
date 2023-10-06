//Attach Enter-key Handler
const ENTER=13



function handleKeyUp(event) {
event.preventDefault()
   if (event.keyCode === ENTER) {
      document.getElementById("submit_button").click()
  }
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submit_button').addEventListener('click', getSong)

  //addbutton
  document.getElementById("searchResults").addEventListener('click',addSongToPlaylist)

//deletebutton
  document.getElementById("myPlaylist").addEventListener('click',removeSong)

  //add key handler for the document as a whole, not separate elements.
  document.addEventListener('keyup', handleKeyUp)
  
})