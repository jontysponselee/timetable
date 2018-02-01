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
                <p>Starttijd: <span class="startTime">01:00</span></p>
                <p>duratie: <span class="duration">00:20</span></p>
                <p>Eindtijd:<span class="endTime">01:15</span></p>
            </div>
        </div>
        <div class="timetable-cell sortable">1</div>
        <div class="timetable-cell sortable">2</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:05</p></div>
        </div>
        <div class="timetable-cell sortable">3</div>
        <div class="timetable-cell sortable">4</div>
        <div class="timetable-cell sortable">5</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:10</p></div>
        </div>
        <div class="timetable-cell sortable">6</div>
        <div class="timetable-cell sortable">7</div>
        <div class="timetable-cell sortable">8</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:15</p></div>
        </div>
        <div class="timetable-cell sortable">9</div>
        <div class="timetable-cell sortable">10</div>
        <div class="timetable-cell sortable">1</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:20</p></div>
        </div>
        <div class="timetable-cell sortable">12</div>
        <div class="timetable-cell sortable">13</div>
        <div class="timetable-cell sortable">14</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:25</p></div>
        </div>
        <div class="timetable-cell sortable">15</div>
        <div class="timetable-cell sortable">16</div>
        <div class="timetable-cell sortable">17</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:30</p></div>
        </div>
        <div class="timetable-cell sortable">18</div>
        <div class="timetable-cell sortable">19</div>
        <div class="timetable-cell sortable">20</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:35</p></div>
        </div>
        <div class="timetable-cell sortable">21</div>
        <div class="timetable-cell sortable">22</div>
        <div class="timetable-cell sortable">23</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:40</p></div>
        </div>
        <div class="timetable-cell sortable">24</div>
        <div class="timetable-cell sortable">25</div>
        <div class="timetable-cell sortable">26</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:45</p></div>
        </div>
        <div class="timetable-cell sortable">24</div>
        <div class="timetable-cell sortable">25</div>
        <div class="timetable-cell sortable">26</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:50</p></div>
        </div>
        <div class="timetable-cell sortable">24</div>
        <div class="timetable-cell sortable">25</div>
        <div class="timetable-cell sortable">26</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>01:55</p></div>
        </div>
        <div class="timetable-cell sortable">24</div>
        <div class="timetable-cell sortable">25</div>
        <div class="timetable-cell sortable">26</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>02:00</p></div>
        </div>
        <div class="timetable-cell sortable">24</div>
        <div class="timetable-cell sortable">25</div>
        <div class="timetable-cell sortable">26</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>02:05</p></div>
        </div>
        <div class="timetable-cell sortable">24</div>
        <div class="timetable-cell sortable">25</div>
        <div class="timetable-cell sortable">26</div>
    </div>
    <div class="timetable-row">
        <div class="timetable-cell">
            <div class="timetable-cell-wrapper"><p>02:10</p></div>
        </div>
        <div class="timetable-cell sortable">24</div>
        <div class="timetable-cell sortable">25</div>
        <div class="timetable-cell sortable">26</div>
    </div>
</div>

<script src="jquery/external/jquery/jquery.js"></script>
<script src="jquery/jquery-ui.min.js"></script>
<script src="main.js"></script>
</body>
</html>
