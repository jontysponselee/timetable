<?php
/**
 * @author: Jonty Sponselee <jsponselee@student.scalda.nl>
 * @since: 26-1-2018
 */
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="jquery/jquery-ui.min.css">
    <link rel="stylesheet" href="style.css">
    <title>Title</title>
</head>
<body>
<div id="timetable-table">
    <div class="timetable-header">
        <div class="timetable-cell"></div>
        <div class="timetable-cell"><p>Podium 1</p></div>
        <div class="timetable-cell"><p>Podium 2</p></div>
        <div class="timetable-cell"><p>Podium 3</p></div>
    </div>
    <div class="timetable-perform-container">
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:00</p></div>
        </div>
        <div class="timetable-perform-wrapper sortable">
            <div class="timetable-cell timetable-perform">
                <b>Foo</b>
                <p>Starttijd: 01:00</p>
                <p>duratie: <span class="duration">00:15</span></p>
                <p>Eindtijd: 01:15</p>
            </div>
        </div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:05</p></div>
        </div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:10</p></div>
        </div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:15</p></div>
        </div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:20</p></div>
        </div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:25</p></div>
        </div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:30</p></div>
        </div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:35</p></div>
        </div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:40</p></div>
        </div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:45</p></div>
        </div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:50</p></div>
        </div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
        <div class="timetable-cell sortable">foo</div>
    </div>
</div>

<script src="jquery/external/jquery/jquery.js"></script>
<script src="jquery/jquery-ui.min.js"></script>
<script src="main.js"></script>
</body>
</html>
