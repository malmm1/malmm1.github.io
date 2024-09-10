function updateVideo() {
    const videoSelection = document.getElementById('video-selection');
    const videoPlayer = document.getElementById('video-player');
    const videoSource = document.getElementById('video-source');

    const selectedValue = videoSelection.value;
    videoSource.src = selectedValue;
    videoPlayer.load();
}
