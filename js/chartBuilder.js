var dataCoding = {
    labels: ["C++", "Javascript", "Python", "Ruby", "HTML & CSS"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [1, 4, 5, 3, 8]
        }
    ]
};

var dataLang = {
    labels: ["Swedish", "English", "German", "Italian"],
    datasets: [
        {
            label: "My First dataset",
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: [10, 9, 4, 2]
        }
    ]
};


// get spider chart canvas
var coding = document.getElementById("skills-coding").getContext("2d");

// get spider chart canvas
var languages = document.getElementById("skills-lang").getContext("2d");
// draw spider chart
new Chart(coding).Radar(dataCoding);
// draw spider chart
new Chart(languages).Radar(dataLang);
