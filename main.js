$(function() {
    var $section = $('.parallax > div')
    $sectionInfo = [];

    $section.each(function() {
        var $this = $(this);
        $sectionInfo.push($this.offsec().top);
    })
    $section.css({ position: 'fixed' })
})