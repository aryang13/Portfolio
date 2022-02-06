export const onClickList = function(e) {
    _removeSelected(e.currentTarget);
    const my_element = document.getElementById(e.currentTarget.textContent.toLowerCase());
    my_element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
}

export const waypointScroller = function(id) {
    _removeSelected(document.getElementById(id));
};

function _removeSelected(val) {
    document.getElementsByClassName("selected")[0].classList.remove("selected");
    val.classList.add("selected");
}