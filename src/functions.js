export const onClickList = function(e) {
    // to remove Selected class
    //document.getElementsByClassName("selected");

    // add selected class to new clicked element
    e.currentTarget.text = "changed";
}