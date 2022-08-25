var summarytable = d3.select("tbody");

d3.csv("../../Output/movies_cleaned2.csv").then(function (moviedata) {
  console.log(moviedata);
  var parseTime = d3.timeParse('%Y');

  moviedata.forEach(function (data) {
    console.log(data);
    data.release_year = parseTime(data.release_year);
    data.runtime = +data.runtime;

    var row = summarytable.append("tr");
    Object.entries(data).forEach(function ([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});

// select the dropdowns
var form = d3.selectAll("select");

form.on("change", runEnter);

function runEnter() {
  d3.csv("../../Output/movies_cleaned2.csv").then(function (moviedata) {
    console.log(moviedata);
    //d3.event.preventDefault();
    // select input elements and property values
    var mood_input = d3.select("#inputGroupSelect01").property("value");
    var genre_input = d3.select("#inputGroupSelect02").property("value");
    var runtime_input = d3.select("#inputGroupSelect03").property("value");

    //Empty table before appending results
    summarytable.html("");

    // var filtered_data = moviedata.filter(table => (table.mood == mood_input || mood_input == "") &&
      // (table.genre == genre_input || genre_input == "") &&
      // (table.runtime == runtime_input || runtime_input == "")
    // );

    var filtered_data = moviedata.filter(table => (table.genre == genre_input || genre_input == "")  
    );
    console.log(genre_input);
    filtered_data.forEach((datachange) => {
      var row = summarytable.append("tr");
      Object.entries(datachange).forEach(([key, value]) => {
        var cell = summarytable.append("td");
        cell.text(value);
      });
    });
  })
}