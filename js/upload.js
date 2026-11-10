let photo = document.getElementById("photo");
let preview = document.getElementById("preview");
let uploadText = document.getElementById("upload-text");
let confirm = document.getElementById("confirm");

photo.addEventListener("change", function() {
    let file = photo.files[0];

    if (file) {
        if (!file.type.startsWith("image/")) {
            preview.src = URL.createObjectURL(file);
            preview.style.display = "block";
            uploadText.style.display = "none";
        }

        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
        uploadText.style.display = "none";

        confirm.style.pointerEvents = "auto";
        confirm.style.opacity = "1";

        let reader = new FileReader();

        reader.onload = function() {
            localStorage.setItem("animePhoto", reader.result);
        };

        reader.readAsDataURL(file);
    }
});