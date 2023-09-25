// console.log("Hello via Bun!");
/*
SELECT 
    m.*, d.name, d.country
FROM matchs m 
JOIN divisions d ON d.division == m.Div
where m.Div = "E0"
limit 10;
*/
const SQL1 = "SELECT m.*, d.name, d.country FROM matchs m JOIN divisions d ON d.division == m.Div where m.Div = 'E0' limit 5;";

import { Database } from "bun:sqlite";

const db = new Database("european_database.sqlite");

const query = db.query(SQL1);

// Use .all() to run a query and get back the results as an array of objects.
console.log(query.all());  
/**
 * [
    {
      Div: "E0",
      Date: "2020-09-12",
      HomeTeam: "Fulham",
      AwayTeam: "Arsenal",
      FTHG: 0,
      FTAG: 3,
      FTR: "A",
      season: 2021,
      name: "Premier League",
      country: "England"
    }, {
      Div: "E0",
      Date: "2020-09-12",
      HomeTeam: "Crystal Palace",
      AwayTeam: "Southampton",
      FTHG: 1,
      FTAG: 0,
      FTR: "H",
      season: 2021,
      name: "Premier League",
      country: "England"
    }, {
      Div: "E0",
      Date: "2020-09-12",
      HomeTeam: "Liverpool",
      AwayTeam: "Leeds",
      FTHG: 4,
      FTAG: 3,
      FTR: "H",
      season: 2021,
      name: "Premier League",
      country: "England"
    }, {
      Div: "E0",
      Date: "2020-09-12",
      HomeTeam: "West Ham",
      AwayTeam: "Newcastle",
      FTHG: 0,
      FTAG: 2,
      FTR: "A",
      season: 2021,
      name: "Premier League",
      country: "England"
    }, {
      Div: "E0",
      Date: "2020-09-13",
      HomeTeam: "West Brom",
      AwayTeam: "Leicester",
      FTHG: 0,
      FTAG: 3,
      FTR: "A",
      season: 2021,
      name: "Premier League",
      country: "England"
    }
  ]*/

// Use .get() to run a query and get back the first result as an object.
console.log(query.get());
/**
 * {
  Div: "E0",
  Date: "2020-09-12",
  HomeTeam: "Fulham",
  AwayTeam: "Arsenal",
  FTHG: 0,
  FTAG: 3,
  FTR: "A",
  season: 2021,
  name: "Premier League",
  country: "England"
}
 */

// Use values() to run a query and get back all results as an array of arrays.
console.log(query.values())
/**
 * [
  [ "E0", "2020-09-12", "Fulham", "Arsenal", 0, 3, "A", 2021, "Premier League", "England" ], [ "E0", "2020-09-12",
    "Crystal Palace", "Southampton", 1, 0, "H", 2021, "Premier League", "England" ], [ "E0", "2020-09-12",
    "Liverpool", "Leeds", 4, 3, "H", 2021, "Premier League", "England" ], [ "E0", "2020-09-12", "West Ham",
    "Newcastle", 0, 2, "A", 2021, "Premier League", "England" ], [ "E0", "2020-09-13", "West Brom", "Leicester",
    0, 3, "A", 2021, "Premier League", "England" ]
]
 */

// Use .finalize() to destroy a Statement and free any resources associated with it.
query.finalize();