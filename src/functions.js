export const onClickList = function(e) {
    relocateSelected(e.currentTarget);
    const my_element = document.getElementById(e.currentTarget.textContent.toLowerCase());
    my_element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
}

export const waypointScroller = function(id) {
    relocateSelected(document.getElementById(id));
};

export const removeSelected = function() {
    const selectedElement = document.getElementsByClassName("selected")[0];
    if(selectedElement) {
        selectedElement.classList.remove("selected");
    }
}

export const clickHandler = function(id) {
    const my_element = document.getElementById(id);
    my_element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
    });
}

export const relocateSelected = function(val) {
    removeSelected();
    val.classList.add("selected");
}