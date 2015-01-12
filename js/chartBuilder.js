// pie chart data
var dataSE = [
    {
        value: 49,
        color:"#337ab7",
        highlight: "#3b87c8",
        label: "Swedish"
    },
    {
        value: 48,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "English"
    },
    {
        value: 3,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Italian"
    }
]
// pie chart options
var pieOptions = {
	//Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : false,

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