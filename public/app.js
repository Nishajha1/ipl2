//taking user input 
let year;
const form = document.querySelector('form');
  // if(year<2008 ||year>2019)
  //   {
  //   alert(`Error:Please Enter the year between 2008 to 2019`);
     
  //   }
    
 
form.addEventListener('submit', (e)=>{
  year = form.elements.year.value;
  e.preventDefault()
  fetch(`/eco?year=${year}`)
    .then(data => data.json())
    .then(visualizeData4Dyn)
})

function visualizeData4Dyn(data)
{
  document.querySelector("#dynamic-economy-bowlers").innerHTML="", visualizeEconomyBowlersDynamic(data, year)
  return;
}

function visualizeEconomyBowlersDynamic(data, year)
{
  Highcharts.chart("dynamic-economy-bowlers", {
    chart: {
      type: "column"
    },
    title: {
      text: ` Top 10 economical bowlers of ${year}`
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy Rate"
      }
    },
    series: [
      {
        name: "Economy",
        data: data
      }
    ]
  });
}


//matchesPlayedPerYear
function fetchAndVisualizeData1() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData1);
}

fetchAndVisualizeData1();

function visualizeData1(data) {
  visualizeMatchesPlayedPerYear1(data.matchesPlayedPerYear);
  return;
}

function visualizeMatchesPlayedPerYear1(matchesPlayedPerYear) {
  const seriesData1 = [];
  for (let year in matchesPlayedPerYear) {
    seriesData1.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: " Number of Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: WorldClimate.com'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData1
      }
    ]
  });
}   

//matches won by each team
function fetchAndVisualizeData2() {
  fetch("./data1.json")
    .then(r => r.json())
    .then(visualizeData2);
}

fetchAndVisualizeData2();

function visualizeData2(data) {
  visualizeMatchesWonByEachTeam2(data.matchesWonByEachTeam);
  return;
}

function visualizeMatchesWonByEachTeam2(matchesWonByEachTeam) {
  const seriesData2 = [];
  for (let team in matchesWonByEachTeam) {
    seriesData2.push([team, matchesWonByEachTeam[team]]);
  }

  Highcharts.chart("matches-won-by-each-team", {
    chart: {
      type: "column"
    },
    title: {
      text: "Number of Matches Won By Each Team"
    },
    subtitle: {
      text:
        'Source: Wikipedia'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches Won"
      }
    },
    series: [
      {
        name: "Team Names",
        data: seriesData2
      }
    ]
  });
} 

//extraRun

function fetchAndVisualizeData3() {
  fetch("./data2.json")
    .then(r => r.json())
    .then(visualizeData3);
}

fetchAndVisualizeData3();

function visualizeData3(data) {
  visualizeExtraRun(data.extraRunConcededByEachTeam);
  return;
}

function visualizeExtraRun(extraRunConcededByEachTeam) {
  const seriesData3 = [];
  for (let team in extraRunConcededByEachTeam) {
    seriesData3.push([team,extraRunConcededByEachTeam[team]]);
  }
  // console.log(seriesData3);

  Highcharts.chart("extra-run-conceded-by-each-team", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra Run Conceded By Each Team"
    },
    subtitle: {
      text:
        'Source: Wikipedia'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Extra Runs"
      }
    },
    series: [
      {
        name: "team",
        data: seriesData3
      }
    ]
  });
} 


//economicalBowler
function fetchAndVisualizeData4() {
  fetch("./data3.json")
    .then(r => r.json())
    .then(visualizeData4);
}
fetchAndVisualizeData4();
function visualizeData4(data)
{
  visualizeEconomyBowlers(data.economyBowlers[2015]);
  return;
}
function visualizeEconomyBowlers(data)
{
  Highcharts.chart('economy-bowlers', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Top 10 economical bowlers of 2015'
    },
    subtitle: {
        text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Economy'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    },
    series: [{
      name: "Economy",
      data: data,
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}',
            y: 10,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
} 

//total matches in city
function fetchAndVisualizeData5() {
  fetch("./data4.json")
    .then(r => r.json())
    .then(visualizeData5);
}

fetchAndVisualizeData5();

function visualizeData5(data) {
  visualizeTotalMatchesCity(data.totalMatchesCity);
  return;
}

function visualizeTotalMatchesCity(totalMatchesCity) {
  const seriesData5 = [];

  for (let city in totalMatchesCity) {
    seriesData5.push([city, totalMatchesCity[city]]);
  }

  Highcharts.chart("matches-in-cities", {
    chart: {
      type: "column"
    },
    title: {
      text: " Total Matches In City"
    },
    subtitle: {
      text:
        'Source: WorldClimate.com'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Number Of Matches"
      }
    },
    series: [
      {
        name: "City",
        data: seriesData5
      }
    ]
  });
}   
