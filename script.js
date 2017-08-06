var windowHeight = innerHeight - 50;
var windowWidth = innerWidth - 50;
var lineLength = 150;

var svg = d3.select("body")
    .append("svg")
    .attr("width", windowWidth)
    .attr("height", windowHeight);

var polygon = undefined;

function drawPolygon(angleCount) {
    if (polygon)
        polygon.remove();

    polygon = svg.append('g');
    angle = 360 / angleCount;
    angleRad = Math.PI * angle / 180;

    for (var i = 0; i < angleCount; i++) {
        polygon
            .append('line')
            .attr('stroke', '#ddd')
            .attr('x1', 0)
            .attr('y1', 0)
            .attr('x2', lineLength)
            .attr('y2', 0)
            .attr('transform', `rotate(${angle * i})`);

        polygon
            .append('line')
            .attr('stroke', 'black')
            .attr('x1', lineLength)
            .attr('y1', 0)
            .attr('x2', Math.cos(angleRad) * lineLength)
            .attr('y2', Math.sin(angleRad) * lineLength)
            .attr('transform', `rotate(${angle * i})`);
    }

    polygon
        .attr('transform', `translate(200, 200)`);
}

drawPolygon(10);