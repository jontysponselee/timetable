//todo uitzoeken hoe ik de nieuwe tijd krijg
//lege cell switchen met gevulde cell(sortable)
// kijk waar die dropt en dan naar dichtbij zijnde tijd?

$(document).ready(function () {
    //todo perform blok, moet zogezegd grootte zijn van 1 cell, maar de look moet groote zijn gebaseerd op tijd

    var cellWidth = 150;//todo scaling
    var cellHeight = 45;//todo scaling
    var duration = 15;//Todo get from perform div
    var tableWidth = cellWidth * $(".timetable-header").children().length;
    var tableHeight = (cellHeight + 2) * $("#timetable-table").children('.timetable-row').length - 1;
    var containerWidth = tableWidth - cellWidth;
    var containerHeight = tableHeight;
    var performHeight = duration / 5 * (cellHeight + 1);

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


    $(".timetable-perform-wrapper").draggable({
        cursor: 'move',
        containment: $(".timetable-perform-container"),
        grid: [cellWidth, cellHeight + 1]
    });

    $('.sortable').droppable({
        accept: '.sortable',
        drop: function (event, ui) {
            var draggable = ui.draggable,
                dropable = $(this),
                dragPos = draggable.position(),
                dropPos = dropable.position();

            swap(draggable, dropable);
            // console.log(draggable);
            // console.log(dropable);
            // console.log(dragPos);
            // console.log(dropPos);
        }
    });

    // $.fn.swap = function (dragged) {
    //     dragged = jQuery(dragged)[0];
    //     var dropped = this[0];
    //
    //
    // };
    

    function swap(dragged, dropped) {
        console.log(dragged);
        console.log(dropped);

        var parent = $(dropped).parent();



        // var first = dragged[0];
        // var second= dropped[0];
        //
        // $(first).replaceWith(second);
        $(dropped[0]).replaceWith(dragged[0]);
        $(parent).prepend(dropped[0]);


        // var foo = $(dropped).replaceWith(dragged);
        //
        // $(foo).after(dragged);
        // console.log(foo);
    }
});