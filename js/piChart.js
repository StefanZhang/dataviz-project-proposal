


var Pos_count = 10;
var Neg_count = 10;
var Neu_count = 10;

var PieChart = {
    "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
    "description": "Pie Chart for Tweets sentiment.",
    "data": {
    "values": [
        {"Category": "Postitive", "value": Pos_count},
        {"Category": "Negative", "value": Neg_count},
        {"Category": "Neutrual", "value": Neu_count},
            ]
    },

    "mark": {"type": "arc", "innerRadius": 40},
    "encoding": {
    "theta": {"field": "value", "type": "quantitative"},
    "color": {"field": "Category", "type": "nominal"}
    },
    "view": {"stroke": null}
    };

