require("express-async-errors");
const express = require("express");
const rotas = require("./rotas");
const cors = require("cors");

const app = express();
app.use((error, request, response, next) => {
  if(error instanceof AppError) {
    return response.json({
      message : error.message,
      statusCode : error.statusCode
    });
  }
  else {
    
  }
  console.error(error);
});
app.use(express.json());
app.use(cors());
app.use(rotas);

app.listen(3000);
