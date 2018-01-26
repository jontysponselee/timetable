//todo uitzoeken hoe ik de nieuwe tijd krijg
//lege cell switchen met gevulde cell(sortable)
// kijk waar die dropt en dan naar dichtbij zijnde tijd?

$(document).ready(function () {
    //todo perform blok, moet zogezegd grootte zijn van 1 cell, maar de look moet groote zijn gebaseerd op tijd

    //todo first cell is broken fix this

    var cellWidth = 150;//todo scaling
    var cellHeight = 45;//todo scaling
    var duration = 25;//Todo get from perform div
    var tableWidth = cellWidth * $(".timetable-header").children().length;
    var tableHeight = (cellHeight + 2) * $("#timetable-table").children('.timetable-row').length - 1;
    var containerWidth = tableWidth - cellWidth;
    var containerHeight = tableHeight;
    var performHeight = duration / 5 * (cellHeight + 2);

    // console.log(cellHeight);

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

    console.log(performHeight);

    $(".timetable-perform-wrapper").draggable({
        cursor: 'move',
        containment: $(".timetable-perform-container"),
        grid: [cellWidth, cellHeight + 1.6],
    });

    $('.sortable').droppable({
        accept: '.sortable',
        drop: function (event, ui) {
            var draggable = ui.draggable,
                dropable = $(this),
                dragPos = draggable.position(),
                dropPos = dropable.position();

            console.log(draggable);
            console.log(dropable);
            console.log(dragPos);
            console.log(dropPos);
        }
    });
});