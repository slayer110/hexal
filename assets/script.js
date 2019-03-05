document.addEventListener("DOMContentLoaded", ready);

function ready() {
    var links = document.getElementsByTagName("a");
    var points = document.getElementsByClassName("point");
// links = Array.prototype.slice.call(links); // теперь elems - массив
    links = document.getElementsByTagName("a");
    points = Array.prototype.slice.call(points);// теперь elems - массив
    links = Array.prototype.slice.call(links);// теперь elems - массив
    links.forEach(function (item) {
        item.addEventListener("click", function () {
           item.style.fontSize+="10px"
        })

    })
}

