import mongoose from "mongoose";
mongoose.Promise = global.Promise;
import { AvisoSchema } from "./database";

const url = "mongodb://localhost/github";
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const Aviso = mongoose.model("aviso", AvisoSchema);

export { Aviso };
