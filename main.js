//todo starttijd vernieuwen
//todo eindtijd vernieuwen



function getDuration(duration) {
    var pieces = duration.split(":");

    var hours = parseInt(pieces[0]),
        minutes = parseInt(pieces[1]),
        totalMinutes = hours * 60 + minutes;

    return totalMinutes;
}

function changeTimeFields(dragged, duration){
    var startTime = changeStartTime(dragged);
    changeEndTime(startTime, duration);
}

function changeStartTime(dragged){
    var parent = $(dragged[0]).parent(),
        timeCell = $(parent).find(":first-child"),
        timeText = $(timeCell)[2],
        time =  $(timeText).text();

    $(".startTime").html(time);

    return time;
}

function changeEndTime(startTime, duratie) {
    //todo wanneer over tijd genereer nieuwe rijen gebaseerd op duratie
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

    $(".endTime").html(endTime);
}

function swap(dragged, dropped) {
    var draggedPrev = $(dragged).prev();
    var droppedPrev = $(dropped).prev();

    $(draggedPrev).after(dropped);
    $(droppedPrev).after(dragged);
}

$(document).ready(function () {
    var cellWidth = 150;//todo scaling
    var cellHeight = 45;//todo scaling
    var duration = $(".duration").text();
    var tableWidth = cellWidth * $(".timetable-header").children().length;
    var tableHeight = (cellHeight + 2) * $("#timetable-table").children('.timetable-row').length - 1;
    var containerWidth = tableWidth - cellWidth;
    var containerHeight = tableHeight;

    duration = getDuration(duration);

    var performHeight = duration / 5 * (cellHeight + 1);



    console.log(duration);

    $(".timetable-perform-container").css({
        "width": containerWidth,
        "height": containerHeight,
        "margin-left": cellWidth + "px",
        "margin-top": -1 + "px",
        "position": "absolute"
    });

    $(".timetable-perform").css({
        "height": performHeight + "px",
        "width": cellWidth + "px"
    });


    $(".timetable-perform-wrapper").draggable({
        cursor: 'move',
        containment: $(".timetable-perform-container"),
        grid: [cellWidth, cellHeight + 1]
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
});