function openModal() {
    // show image modal
    document.getElementById("image-modal-container").style.visibility = "visible";
}

function closeModal() {
    // hide image modal
    document.getElementById("image-modal-container").style.visibility = "hidden";
}

function showImage(event, index) {
    // convenience variable
    let img = document.getElementById("current-image");
    // display image-modal-container
    openModal();
    // set the url of the current-image element
    switch (index) {
        case 0:
            img.setAttribute("src", "images/thumb/thumb1.jpg");
            break;
        case 1:
            img.setAttribute("src", "images/thumb/thumb2.jpg");
            break;
        case 2:
            img.setAttribute("src", "images/thumb/thumb3.jpg");
            break;
        case 3:
            img.setAttribute("src", "images/thumb/thumb4.jpg");
            break;
        case 4:
            img.setAttribute("src", "images/thumb/thumb5.jpg");
            break;
        case 5:
            img.setAttribute("src", "images/thumb/thumb6.jpg");
            break;
        case 6:
            img.setAttribute("src", "images/thumb/thumb7.jpg");
            break;
        case 7:
            img.setAttribute("src", "images/thumb/thumb8.jpg");
            break;
        case 8:
            img.setAttribute("src", "images/thumb/thumb9.jpg");
            break;
    }
    // prevent the event from triggering the onclick function (closeModal) from the image-modal-container
    event.stopPropagation();
}