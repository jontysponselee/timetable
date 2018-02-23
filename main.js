$(document).ready(function () {
    function getDuration(duration) {
        var pieces = duration.split(":");

        var hours = parseInt(pieces[0]),
            minutes = parseInt(pieces[1]),
            totalMinutes = hours * 60 + minutes;

        return totalMinutes;
    }

    function calculateTimetable(){
        var duration = $('.duration').text();
        duration = getDuration(duration);

        var height = $(".time-cell").height();
        var width = $("#podium").width();
        var timeCellWidth = $('.time-cell').width()

        var wrapperRowCount = $('.grid-container').children('.grid-x').length - 1;
        var wrapperColumnCount = $('.podium-row').children('.auto').length;

        var wrapperWidth = wrapperColumnCount * width;
        var wrapperHeight = wrapperRowCount * height;

        var performHeight = height * (duration / 5);

        $('.timetable-perform-wrapper').css({
            'height': wrapperHeight,
            'width':  wrapperWidth,
            'z-index': 0,
            'margin-top': height + 'px',
            'margin-left': timeCellWidth + 'px',
            'position': 'absolute'
        });

        $('.timetable-perform').css({
            'height': performHeight,
            'background-color': 'blue'
        });
    }

    $(window).resize(function() {
        calculateTimetable();
    });

    calculateTimetable();
});
