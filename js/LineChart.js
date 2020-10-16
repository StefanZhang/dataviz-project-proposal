var LineChart = {
    "width": 1000,
    "height": 300,
    "description": "Line Chart",
    "data": {"url": "tweets.csv"},
    "mark": {
    "type": "line",
        "point": {
        "filled": false,
            "fill": "white"
        }
    },
    "encoding": {
    "x": {"timeUnit": "hours", "field": "time"},
    "y": {"aggregate":"count", "field": "sentiment", "type": "quantitative"},
    "color": {
        "field": "sentiment",
        "type": "nominal",
        "scale": {
            "domain": ["NEGATIVE", "VERY_NEGATIVE", "NEUTRAL", "VERY_POSITIVE", "POSITIVE", "NOT_UNDERSTOOD"],
            "range": ["#c7c7c7", "#e7ba52", "#aec7e8", "#1f77b4", "#9467bd", "#FFFF00"]
            }
        }
    }
};
