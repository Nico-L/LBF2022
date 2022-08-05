function selectionTag(obj) {
    console.log('obj', window.location)
    if (obj.value=="tous") {
        
    } else {
        window.location.assign(window.location.origin + "/galerie/tags/" + obj.value + "/")
    }
}