var GalleryCenter = document.getElementById('GalleryCenter');
var count = 0;

window.addEventListener('wheel',function(event){
    if(event.deltaY < 0){
        count -= 10;
        console.log(count);
        GalleryCenter.style.transform = 'translate(-50%, -50%) perspective(1000px) rotateY('+count+'deg)'

    }else if(event.deltaY < 0)
        count += 10;
        console.log(count);
});