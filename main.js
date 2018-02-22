function getDuration(duration) {
    var pieces = duration.split(":");

    var hours = parseInt(pieces[0]),
        minutes = parseInt(pieces[1]),
        totalMinutes = hours * 60 + minutes;

    return totalMinutes;
}

var duration = $('.duration').text();
duration = getDuration(duration);

var height = $(".time-cell").css("height")
height = height.replace('px', '');

var performHeight = height * (duration / 5);


$('.timetable-perform').css({
    'height': performHeight,
    'background-color': 'blue'
});

$('.grid-container').fadeIn('slow');