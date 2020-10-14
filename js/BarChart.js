var BarChart = {

    "data": {
        "url": "tweets.csv"
        // "format": {
        //     "parse": {"date": "%Y/%M/%D %H:%M"}
        // }
    },
    "mark": "bar",
    "encoding": {
        "x": {
            "timeUnit": "minutes",
            "field": "date",
            "type": "ordinal",
            "title": "Date"
        },

        "y": {
            "aggregate": "count",
            "type": "quantitative"
        },
        "color": {
            "field": "sentiment",
            "type": "nominal",
            "scale": {
                "domain": ["NEGATIVE", "VERY_NEGATIVE", "NEUTRAL", "VERY_POSITIVE", "POSITIVE"],
                "range": ["#e7ba52", "#c7c7c7", "#aec7e8", "#1f77b4", "#9467bd"]
            },
            "title": "Count"
        }
    }

    };
