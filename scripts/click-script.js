function GalleryMoreClicked()
{
    //console.log("GalleryMoreClicked\n");
    window.open("./gallery_more.html");
}

function ModalOpen(image){
    modal.style.display = "flex";

    var modalImg = document.getElementById("modalImage");
    var inputSrc = image.src;

    var outputSrc = inputSrc.replace("sz=w300&", "sz=w700&");

    modalImg.src = outputSrc;
}
