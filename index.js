


function blurImages(imageBlurRate) {
    const images = document.querySelectorAll('img');
    images.forEach((image) => {
        image.style.filter = `blur(${imageBlurRate}px)`;
    });
}

function blurVideos(videoBlurRate) {
    const videos = document.querySelectorAll('video');
    videos.forEach((video) => {
        video.style.filter = `blur(${videoBlurRate}px)`;
    });
}

const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            // New elements have been added to the DOM
            // Check if they are images or videos and apply blur
            blurImages(imageBlurRate);
            blurVideos(videoBlurRate);
        }
    }
});

const imageBlurRate = 2;
const videoBlurRate = 2;

blurImages(imageBlurRate);
blurVideos(videoBlurRate);

const config = { childList: true, subtree: true };
observer.observe(document.body, config);


