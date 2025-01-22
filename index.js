import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from 'uuid';


const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

let blogtext = '';
var blogarr= [];
var titlearr= [];
var blogarrlen = blogarr.length;
app.listen(port,()=>{
    console.log("Server Listening on Port "+port);
});

app.get("/",(req,res)=>{
    res.render("index.ejs",{arrayOfBlogs : blogarr});
});

app.get("/new",(req,res)=>{
    
    res.render("new.ejs");
});

app.post("/submit", (req, res) => {
    const {textinput, titleinput} = req.body;
    if(blogarr){
      
      blogarr.push({textinput, titleinput}); // Add the new blog to the array
      
    }
    res.redirect("/"); // Redirect to the home page to display blogs
  });




/*app.post("/submit",(req,res)=>{
    blogtext = req.body["textinput"];
    blogarr.push(blogtext);
    console.log(blogarr);
    res.render("index.ejs",{
        blog:blogtext,
        arrayOfBlogs : blogarr
    });
});*/
    


