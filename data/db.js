import mongoose from "mongoose";
mongoose.Promise = global.Promise;
import { AvisoSchema } from "./database";

const url =
  "mongodb+srv://erickson01d:Erickson20@cluster0-q171i.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Aviso = mongoose.model("aviso", AvisoSchema);

export { Aviso };
