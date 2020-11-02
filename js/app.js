const accesKey = 'GkYqT5VGAzYol1pjIleAZ3Lb-oFP94kc5Q-rBfA6I3A';
const endPoint = 'https://api.unsplash.com/search/photos';

async function getImages(query) {
    let response = await fetch(endPoint + '?query=' + query + '&client_id=' + accesKey);
    let jsonResponse = await response.json();
    let imagesList = await jsonResponse.results;
    createImages(imagesList);
}

function createImages(imagesList) {
    const images_div = document.getElementById('images-div');
    for (let i = 0; i < imagesList.length; i++) {
        const image = document.createElement('img');
        image.src = imagesList[i].urls.thumb;
        images_div.appendChild(image);
    }
}

getImages('sneak');

function changeClass() {
    let siteNav = document.getElementById('site-nav');
    siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
    menuOpen.classList.toggle('menu-open');
}