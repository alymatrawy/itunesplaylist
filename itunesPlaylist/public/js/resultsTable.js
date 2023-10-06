

function createResultsTable(songsInfo){

    let tableBody = document.getElementById("resultTable")

    tableBody.innerHTML=''

    for(let i=0; i<songsInfo.resultCount; i++){

        //adding results to table row by row
        let row = `<tr>
            <td><button type='button' id='addButton'>Add to Playlist</button></td>
            <td id='name'>${songsInfo.results[i].trackCensoredName}</td>
            <td id='artist'>${songsInfo.results[i].artistName}</td>
            <td><img src=${songsInfo.results[i].artworkUrl100} height='100' width='100'></td>
            <td id="img" style="display:none">${songsInfo.results[i].artworkUrl100}</td>

        </tr>`

        tableBody.innerHTML+= row
    }

}




function addSongToPlaylist(e){


    //getting row that button is sitting on
    const btn = e.target

    let newRow= btn.closest('tr')


    //getting data from that row
    let cells = newRow.getElementsByTagName('td')


    let songName = cells.name.textContent

    let songArtist = cells.artist.textContent

    let songArt = cells.img.textContent

    addRowToPlaylist(songName, songArtist, songArt)

}


function addRowToPlaylist(song, artist, imgUrl){

    let playListBody = document.getElementById("mySongs")


    //adding song to playlist

    let row = `<tr>
    <td><button type='button' id='removeButton'>Remove</button></td>
    <td id='n'>${song}</td>
    <td id='a'>${artist}</td>
    <td><img src=${imgUrl} height='100' width='100'></td>

</tr>`

playListBody.innerHTML+= row

}



function removeSong(e){

    //deleting row from table that button is sitting on
    const btn = e.target
    btn.closest('tr').remove()
}