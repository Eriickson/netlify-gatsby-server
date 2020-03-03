import mongoose from "mongoose";
mongoose.Promise = global.Promise;
import { AvisoSchema } from "./database";

const url =
  "mongodb+srv://erickson01d:123456789Erickson@cluster0-q171i.mongodb.net/test?retryWrites=true&w=majority";
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conectada");
  })
  .catch(err => {
    console.log("Error al conectar: ", err);
  });
const Aviso = mongoose.model("aviso", AvisoSchema);

export { Aviso };
