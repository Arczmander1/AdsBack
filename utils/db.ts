import {createPool} from "mysql2/promise";   // pula połączeń wersja promisowa

export const pool = createPool({    // konfiguracja
    host: 'localhost',
    user: 'root',
    database: 'ads',     // baza danych z jaka sie laczymy
    // password: 'asasda'        // hasel tak nie przechowujemy, chyba ze dodamy do gitignore
    namedPlaceholders: true,    // uzywanie placeholderow czyli miejsc ktore pozwalaja nam bezpiecznieprzechowywac dane
    decimalNumbers: true       // liczby maja byc liczbami
})