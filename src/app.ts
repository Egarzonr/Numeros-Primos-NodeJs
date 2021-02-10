import express from "express";
import bodyParser from "body-parser";
import { validatePrime } from "./Logic/primeValidator";

export const app = express();
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.get("/prime", (req, res) => {
  const input = req.body.input;
  const onlyNumbers = /^[0-9]+$/.test(input);

  if (!input) {
    return res.status(500).json({
      ok: false,
      mensaje: "¡DATOS INCORRECTOS DEBE INGRESAR UN NUMERO!",
    });
  } else if (!onlyNumbers) {
    return res.status(500).json({
      ok: false,
      mensaje: "¡SOLO PUEDE INGRESAR NUMEROS!",
    });
  } else {
    res.json(validatePrime(input));
  }
});

app.listen(port, () =>
  console.log(`El servidor está escuchando por el puerto ${port}`)
);