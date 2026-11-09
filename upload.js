let photo = document.getElementById("photo");
let preview = document.getElementById("preview");
let uploadText = document.getElementById("upload-text");
let confirm = document.getElementById("confirm");

photo.addEventListener("change", function() {
    let file = photo.files[0];

    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
        uploadText.style.display = "none";
    }
});