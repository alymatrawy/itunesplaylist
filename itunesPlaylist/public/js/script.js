function getSong() {

    let songTitle = document.getElementById('songTitleTextField').value.trim()
    console.log('songTitle: ' + songTitle)
    if(songTitle === '') {
        return alert('Please enter a Song Title')
    }

    let songsDiv = document.getElementById('songs_div')
    songsDiv.innerHTML = ''

    let resultsText = document.getElementById('resultsText')

    let xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            let response = JSON.parse(xhr.responseText)

      resultsText.innerHTML = " <h1>Songs Matching: "+ songTitle +"</h1>"

      createResultsTable(JSON.parse(xhr.responseText))
      }
    }
    xhr.open('GET', `/songs?title=${songTitle}`, true)
    xhr.send()
}


