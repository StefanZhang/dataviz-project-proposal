var PiChart = {
    "width": 200,
    "height": 200,
    "description": "Donut chart with embedded data.",
    "data": {"url": "tweets.csv"},
    "mark": {"type": "arc", "innerRadius": 50},
    "encoding": {
        "theta": {"aggregate": "count", "field": "id"},
        "color": {
            "field": "sentiment",
            "type": "nominal",
            "scale": {
                "domain": ["NEGATIVE", "VERY_NEGATIVE", "NEUTRAL", "VERY_POSITIVE", "POSITIVE", "NOT_UNDERSTOOD"],
                "range": ["#c7c7c7", "#e7ba52", "#aec7e8", "#1f77b4", "#9467bd", "#FFFF00"]
            },
        }
    },
    "view": {"stroke": null}
    };
