var summarytable = d3.select("tbody");

d3.json("/test").then(function (moviedata) {

  // Loop through the movie data
  for (var i = 0; i < Object.keys(moviedata).length; i++) {

    var row = summarytable.append("tr");
    Object.entries(moviedata[i]).forEach(function ([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  }
});

// select the dropdowns
var form = d3.selectAll("select");

form.on("change", runEnter);

function runEnter() {

  d3.json("/test").then(function (moviedata) {
    keys = Object.values(moviedata)

    // select input elements and property values
    var mood_input = d3.select("#inputGroupSelect01").property("value");
    var genre_input = d3.select("#inputGroupSelect02").property("value");
    var release_input = d3.select("#inputGroupSelect03").property("value");
    var runtime_input = d3.select("#inputGroupSelect04").property("value");

    //Empty table before appending results
    summarytable.html("");

    var filtered_data = keys.filter(table => (table.mood == mood_input || mood_input == "") ||
      (table.genre == genre_input || genre_input == "") ||
      (table.release_year == release_input || release_input == "") ||
      (table.runtime == parseFloat(runtime_input) || runtime_input == "")
    );

    
    var mfilter = [];
    for (var i = 0; i < 5; i++) {
      mfilter.push(Math.floor(Math.random() * filtered_data.length));
    }
    
    let result = mfilter.map(i => filtered_data[i])
    console.log(result);
    result.forEach((datachange) => {
      var row = summarytable.append("tr");
      Object.entries(datachange).forEach(([key, value]) => {
        var cell = summarytable.append("td");
        cell.text(value);

      });
    });
  })
}