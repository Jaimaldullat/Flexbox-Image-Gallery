(function() {
    var panels = document.querySelectorAll('.panel');

    function toggleActive(e) {
        this.classList.toggle('active');
    }


    function toggleOpenActive(e) {
        console.log(e);
        if (e.propertyName.includes('flex')) this.classList.toggle('open-active');
    }
    panels.forEach(panel => panel.addEventListener('click', toggleActive));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));

}());