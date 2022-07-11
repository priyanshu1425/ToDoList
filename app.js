//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "The lake or the easy weekend is the desire to want to decorate it. He was always the creator, not the time of his life. Let's be honest of course, let's just be honest. Cartoon earth dwell in this. Then leave the lion or the hotel with a warm door. Until the vengeful keyboard bows, not the members nor the members. Mattis annoys me from the arrows but it was my kids The mountains will be born with great gods and a ridiculous mus will miss life's compensation. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. The vengeful life of the author eu augue to drink at the bed of the bow. I hate the memories at any one laughter but I hate the Olympics. Of course there was a lot of annoyance from the arrows at the kids.";
const aboutContent = "At this dwelling the street was said to be the entrance of the Zen, to the kids. It was said that the entrance to the world is to be delivered from the pain of the bears. Not a small boat but a porch. Each street is said to be pure arrows. But want to hang on to the price of laughter rather than the Olympic asset.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";
const app = express();

app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let posts=[];

app.get("/",function(req,res){
  res.render("home",{
    homeStarting : homeStartingContent,
    posts : posts
  });
  
});
app.get("/about",function(req,res){
  res.render("about",{aboutUs : aboutContent});
});
app.get("/contact",function(req,res){
  res.render("contact",{contacts : contactContent});
});
app.get("/compose",function(req,res){
  res.render("compose");
});

app.post("/compose",function(req,res){
  const post = {
    title: req.body.postTitle,    
    content: req.body.postBody
  };
  // Object to store key value pair
  posts.push(post);
  res.redirect("/");
});


app.get("/posts/:postName",function(req,res){
  const requestedTitle = _.lowerCase(req.params.postName);

  posts.forEach(function(post){
    const storedTitle = _.lowerCase(post.title);
    if(storedTitle === requestedTitle){
      res.render("post",{
        title : post.title,
        content : post.content 
      });
    }
  });
});



app.listen(3000, function() {
  console.log("Server started on port 3000");
});
