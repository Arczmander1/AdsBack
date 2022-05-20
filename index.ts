import express from "express";   // import expressa
import cors from "cors";    // w celu komunikacji z frontem
import 'express-async-errors';   //

const app = express();    // tworzenie apki ekspresowej


app.use(cors({   // importowanie w celu korzystania z modulów, ktore zaimportowalismy
    origin: 'http://localhost:3000'  // ustawieniea korsa: origin - z jakiego miejsca ma sie odpalac react
}));
app.use(express.json());   // rozkodowanie komunikacji jsonowej miedzy FE i BE

app.listen(3001, '0.0.0.0', ()=>{
    console.log('listening on port http://localhost:3001')
})  // uruchomienie apki - port 3000, a nie 3001, poniewaz 3001 jest zajety przez reacta