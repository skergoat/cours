class Anchor {
    // empty constructor 
    constructor() {
    }
    // scroll
    smoothScrool(entity) {
        // get anchor 
        var the_id = $(entity).attr("href");
        // if there is no empty, then stop 
        if (the_id === '#') {
            return;
        }
        // else : go to the position top of the anchor
        // on the page 
        $('html, body').animate({
            scrollTop:$(the_id).offset().top
        }, 'slow');
        // then stop the programme 
        return false;
    } 
}