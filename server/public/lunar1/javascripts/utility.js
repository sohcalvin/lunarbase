/**
 * 
 */

var SvgUtil = function() {
	
	var addPattern  = function (svg, patternName, picUrl, width, height  ){
		var defs = svg.append('svg:defs');
		defs.append("svg:pattern")
		    .attr("id", patternName)
		    .attr("width", width)
		    .attr("height", height)
		    .attr("patternUnits", "userSpaceOnUse")
		    //.attr("patternUnits", "objectBoundingBox") // this is the default
		    .append("svg:image")
		    .attr("xlink:href", picUrl)
		    .attr("width", width)
		    .attr("height", height)
		    .attr("x", 0)
		    .attr("y", 0);
	};
	
	return {
		"addPattern" : addPattern
		
	};
}();