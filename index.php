<?php
//include 'export_csv.php';

?>

<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Trump Tweets Sentiment Analysis Dashboard</title>
    <link href="style.css" rel="stylesheet" type="text/css" />
    <script src="https://cdn.jsdelivr.net/npm/vega@5.16.1"></script>
    <script src="https://cdn.jsdelivr.net/npm/vega-lite@4.16.8"></script>
    <script src="https://cdn.jsdelivr.net/npm/vega-embed@6.12.2"></script>
    <script src="js/BarChart.js"></script>
    <script src="js/PiChart.js"></script>
    <script src="js/LineChart.js"></script>

</head>
<body>
    <div class="Title">
        <h1>Real-time Trump Tweets Sentiment Analysis Dashboard</h1>
    </div>


<!--    <div id="Bar"></div>-->
    <div id="Pie"></div>
    <div id="Line"></div>

    <script>

        // vegaEmbed('#Bar', BarChart); // Add BarChart
        vegaEmbed('#Pie', PiChart); // Add PieChart
        vegaEmbed('#Line', LineChart); // Add LineChart



    </script>
</body>
</html>