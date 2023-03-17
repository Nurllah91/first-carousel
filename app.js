let index = 0;
const images = [
    'image/image-1.JPG',
    'image/image-7.JPG',
    'image/image-2.JPG',
    'image/image-3.JPG',
    'image/image-6.JPG',
    'image/image-4.JPG',
    'image/image-5.JPG',
    'image/image-8.JPG',
    'image/image-9.JPG',
    'image/image-10.JPG'
]



const image = document.getElementById('carouselImage')

setInterval(() =>{
    if(index === images.length){
        index = 0
    }
    const imageUrl = images[index];
   image.setAttribute('src', imageUrl);
    index++
},3000)