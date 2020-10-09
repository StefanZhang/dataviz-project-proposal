<?php
include 'export_csv.php';

?>

<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Trump Tweets Sentiment Analysis Dashboard</title>
    <style>
        .container {
            width: 60%;
            margin: 10% auto 0;
            background-color: #f0f0f0;
            padding: 2% 5%;
            border-radius: 10px
        }

        ul {
            padding-left: 20px;
        }

            ul li {
                line-height: 2.3
            }

        a {
            color: #20a53a
        }

    </style>
    <script src="https://unpkg.com/vega@5.4.0/build/vega.min.js"></script>
    <script src="https://unpkg.com/vega-lite@4.0.0-beta.1/build/vega-lite.min.js"></script>
    <script src="https://unpkg.com/vega-lite-api@0.1.0/build/vega-lite-api.min.js"></script>
    <script src="https://unpkg.com/vega-tooltip@0.19.1/build/vega-tooltip.min.js"></script>
    <script src="https://unpkg.com/d3@5.11.0/dist/d3.min.js"></script>
</head>
<body>
    <div class="container">
        <h1>Real-time Trump Tweets Sentiment Analysis Dashboard</h1>
    </div>
    <div id="vis"></div>
</body>
</html>