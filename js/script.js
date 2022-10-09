let playBtn = document.querySelectorAll('.playlist .box-container .box .play');
let musicPlayer = document.querySelector('.music-player');
let musicAlbum = musicPlayer.querySelector('.album');
let musicName = musicPlayer.querySelector('.name');
let musicArtist = musicPlayer.querySelector('.artist');
let music = musicPlayer.querySelector('.music');


playBtn.forEach(play => {
    play.onclick = () => {
        let src = play.getAttribute('data-src');
        let box = play.parentElement.parentElement;
        let album = box.querySelector('.album');
        let name = box.querySelector('.name');
        let artist = box.querySelector('.artist');

        musicAlbum.src = album.src;
        musicName.innerHTML = name.innerHTML;
        musicArtist.innerHTML = artist.innerHTML;
        music.src = src;

        music.play();

        musicPlayer.classList.add('active');
    }
});


document.querySelector('#close').onclick = () => {
    musicPlayer.classList.remove('active');
    music.pause();
}