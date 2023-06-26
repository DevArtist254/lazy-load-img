//ffmpeg -i mehran-biabani-qhQYMeLtqrw-unsplash.jpg -vf scale=20:-1 mehran-small.jpg

//init images = images from the dom
const images = [...document.querySelectorAll("img")]

images.forEach(el => {
    el.addEventListener("load", () =>{
        el.parentElement.classList.remove("cover")
        el.parentElement.classList.remove("cover::before")
        el.parentElement.style.backgroundImage = "none";
    })
})