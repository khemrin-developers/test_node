import express from 'express';
import stuRoutes from './routes/stuRoutes.js';
import expressLayouts from 'express-ejs-layouts';
const app = express();
const PORT = process.env.PORT || 3000;
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("views", "./views");
app.use(express.static("public"));
app.use(express.json());
app.use("/",stuRoutes);
app.listen(PORT, ()=>{
  console.log('Server is running on port ' + PORT);
})