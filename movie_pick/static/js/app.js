var summarytable = d3.select("tbody");

d3.csv("../../../Output/data_to_filter_df.csv").then(function (moviedata) {
  console.log(moviedata);
  // var parseTime = d3.timeParse('%Y');

  moviedata.forEach(function (data) {
    // data.release_year = parseTime(data.release_year);
    data.runtime = +data.runtime;

    var row = summarytable.append("tr");
    Object.entries(data).forEach(function ([key, value]) {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});

// var button = d3.select('button');
// button.on("click", refreshTable);
var button = d3.selectAll('#button')
button.on("click", refreshPage);

function refreshPage() {
  location.reload();
};

// select the dropdowns
var form = d3.selectAll("select");

form.on("change", runEnter);

function runEnter() {
  d3.csv("../../../Output/data_to_filter_df.csv").then(function (moviedata) {
  
    // var moviefilter = Math.floor(Math.random() * moviedata.length);
    // console.log(moviedata[moviefilter]);
    // d3.event.preventDefault();
    // select input elements and property values
    var mood_input = d3.select("#inputGroupSelect01").property("value");
    var genre_input = d3.select("#inputGroupSelect02").property("value");
    var release_input = d3.select("#inputGroupSelect03").property("value");
    var runtime_input = d3.select("#inputGroupSelect04").property("value");

    //Empty table before appending results
    summarytable.html("");

    var filtered_data = moviedata.filter(table => (table.mood == mood_input || mood_input == "") ||
      (table.genre == genre_input || genre_input == "") ||
      (table.release_year == release_input || release_input == "") ||
      (table.runtime == runtime_input || runtime_input == "")
    );

    // var filtered_data = moviedata.filter(table => (table.genre == genre_input || genre_input == "")  
    // );
    // var filtered_data = moviedata.filter(table => (table.mood == mood_input || mood_input == ""));

    console.log(runtime_input);
    var mfilter =[];
    for (var i = 0; i <5; i++){
      mfilter.push(Math.floor(Math.random()* filtered_data.length));
    }
  // var mfilter = Math.floor(Math.random()* filtered_data.length);
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