$(document).ready(function () {
    function changeTimeFields(dragged, duration){
        var startTime = changeStartTime(dragged);

        changeEndTime(startTime, duration, dragged);
    }

    function changeStartTime(dragged){
        var parent = $(dragged[0]).parent(),
            timeCell = $(parent).children(":first-child"),
            time =  $(timeCell).text();

        $(".startTime").html(time);

        return time;
    }

    function timeWithDuration(startTime, duratie){
        var pieces = startTime.split(":");

        var startTimeHours = parseInt(pieces[0]),
            startTimeMinutes = parseInt(pieces[1]);

        var totalMinutes = startTimeHours * 60 + startTimeMinutes + duratie;
        var hours = Math.floor(totalMinutes / 60).toString();
        var minutes = totalMinutes % 60;
        minutes = minutes.toString();

        if(hours.length < 2){
            hours = "0" + hours;
        }

        if(minutes.length < 2){
            minutes = "0" + minutes;
        }

        var endTime = hours + ':' + minutes;

        return endTime;
    }

    function changeEndTime(startTime, duratie) {
        var endTime = timeWithDuration(startTime, duratie);

        $(".endTime").html(endTime);

        calculateTimetable();
    }

    function getDuration(duration) {
        var pieces = duration.split(":");

        var hours = parseInt(pieces[0]),
            minutes = parseInt(pieces[1]),
            totalMinutes = hours * 60 + minutes;

        return totalMinutes;
    }

    function swap(dragged, dropped) {
        var draggedPrev = $(dragged).prev();
        var droppedPrev = $(dropped).prev();

        $(draggedPrev).after(dropped);
        $(droppedPrev).after(dragged);

        $(dragged).css({
            'top': '0px',
            'left': '0px'
        });
    }

    function calculateTimetable(){
        $('.timetable-perform').fadeIn('fast');

        var duration = $('.duration').text();
        duration = getDuration(duration);

        var height = $(".time-cell").height();
        var width = $('.podium-row').children(':nth-child(2)').width();
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
            'margin-top': (height -1)  + 'px',
            'margin-left': (timeCellWidth - 1) + 'px',
            'position': 'absolute'
        });

        $('.timetable-perform').css({
            'height': performHeight,
            'width': width + 2
        });

        $(".timetable-perform-cell").draggable({
            cursor: 'move',
            containment: $(".timetable-perform-wrapper"),
            grid: [width + 0.75, height]
        });

        $('.sortable').droppable({
            accept: '.sortable',
            drop: function (event, ui) {
                var dragged = ui.draggable,
                    dropped = $(this);

                swap(dragged, dropped);
                changeTimeFields(dragged, duration);
            }
        });
    }

    $(window).resize(function() {
        calculateTimetable();
    });

    calculateTimetable();
});
