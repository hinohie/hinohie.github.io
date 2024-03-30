function GalleryMoreClicked()
{
    //console.log("GalleryMoreClicked\n");
    window.open("./gallery_more.html");
}

function ModalOpen(image){
    modal.style.display = "block";

    var modalImg = document.getElementById("modalImage");
    var inputSrc = image.src;

    var outputSrc = inputSrc.replace("sz=w300&", "sz=w700&");

    console.log("Modal load image!" + outputSrc);

    modalImg.src = outputSrc;
}
