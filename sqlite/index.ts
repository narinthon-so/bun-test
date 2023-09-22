// console.log("Hello via Bun!");
/*
SELECT 
    m.*, d.name, d.country
FROM matchs m 
JOIN divisions d ON d.division == m.Div
where m.Div = "E0"
limit 10;
*/
const SQL1 = "SELECT m.*, d.name, d.country FROM matchs m JOIN divisions d ON d.division == m.Div where m.Div = 'E0' limit 10";

import { Database } from "bun:sqlite";

const db = new Database("european_database.sqlite");
