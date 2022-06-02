import {createPool} from "mysql2/promise";

export const pool = createPool({
    host: 'localhost',
    user: 'root',
    database: 'ads',
    // password: 'asasda'
    namedPlaceholders: true,
    decimalNumbers: true
})