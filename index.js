const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonByEachTeam = require("./ipl/matchesWonByEachTeam");
const economyBowlers = require("./ipl/economyBowlers");
const  extraRunConcededByEachTeam = require("./ipl/extraRunConcededByEachTeam");
const totalMatchesCity = require("./ipl/totalMatchesCity");

const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH1 = "./public/data.json";
const JSON_OUTPUT_FILE_PATH2 = "./public/data1.json";
const JSON_OUTPUT_FILE_PATH3 = "./public/data2.json";
const JSON_OUTPUT_FILE_PATH4 = "./public/data3.json";
const JSON_OUTPUT_FILE_PATH5 = "./public/data4.json";

function main1() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let result = matchesPlayedPerYear(matches);
        console.log(matchesPlayedPerYear(matches));
      saveMatchesPlayedPerYear(result);
    });
}

function saveMatchesPlayedPerYear(result) {
  const jsonData = {
    matchesPlayedPerYear: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH1, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main1();  


function main2() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let res = matchesWonByEachTeam(matches);
      console.log(matchesWonByEachTeam(matches))
      saveMatchesWonByEachTeam(res);
    });
}

function saveMatchesWonByEachTeam(result) {
  const jsonData = {
    matchesWonByEachTeam: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH2, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main2();

//runs exceeded by each team

function main3() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
      let res = extraRunConcededByEachTeam(matches,deliveries);
      console.log(deliveries.slice(0,1));
      console.log(extraRunConcededByEachTeam(matches,deliveries))
      saveExtraRunConcededByEachTeam(res);
      })
      });
}

function saveExtraRunConcededByEachTeam(result) {
  const jsonData = {
    extraRunConcededByEachTeam: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH3, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main3();


//economical bowler

function main4() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      csv()
      .fromFile(DELIVERIES_FILE_PATH)
      .then(deliveries => {
      let res = economyBowlers(matches,deliveries);
      console.log(deliveries.slice(0,1));
      console.log(economyBowlers(matches,deliveries))
      saveEconomicalBowler(res);
      })
      });
}

function saveEconomicalBowler(result) {
  const jsonData = {
    economyBowlers: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH4, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main4();

//total matches played in city

function main5() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let res =totalMatchesCity(matches);
      console.log("last")
     console.log(totalMatchesCity(matches));
      saveTotalMatchesCity(res);
  
      });
}

function saveTotalMatchesCity(result) {
  const jsonData = {
    totalMatchesCity: result
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH5, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main5();