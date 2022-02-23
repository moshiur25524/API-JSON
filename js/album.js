function loadAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data))
}
loadAlbum();
function displayAlbums(albums){
    const albumContainer = document.getElementById('albums');
    for( const album of albums){
        const paragraph = document.createElement('p');
    paragraph.innerText = album.title;
    paragraph.style.textAlign = 'center';
    albumContainer.appendChild(paragraph);
    }
}