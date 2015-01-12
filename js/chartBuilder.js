// pie chart data
var dataSE = [
    {
        value: 100,
        color:"#004890",
        highlight: "#F0C000",
        label: "Swedish"
    },
    {
        value: 0,
        color: "#ccc",
        highlight: "#ccc",
        label: "None"
    }
]
// pie chart options
var pieOptions = {
	//Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#F0C000",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,
     animateScale : true
}
// get pie chart canvas

var swedish= document.getElementById("english").getContext("2d");
// draw pie chart
new Chart(swedish).Doughnut(dataSE,pieOptions);