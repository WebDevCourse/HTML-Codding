function RemoveTask(parentTag, childTag) {
    if (document.getElementById(childTag)) {
        var child = document.getElementById(childTag);
        var parent = document.getElementById(parentTag);
        parent.removeChild(child);
    }
}