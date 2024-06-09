const express = require("express");
app = express();

app.set("view engine", "ejs");

app.use("/resources", express.static(__dirname+"/resources"));

app.get(["/","/index","/home"], function(req, res) {
    res.render("pages/index");
});

app.get("/*", function(req, res) {
    console.log(req.url);
    res.render("pages" + req.url, function(err, renderRes) {
        if(err) {
            if(err.message.startsWith("Failed to lookup view")) {
                res.render("pages/error_404");
            }
        }
        else {
            res.send(renderRes);
        }
    });
});

app.post('/submit-contact-form', (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received contact form submission: Name: ${name}, Email: ${email}, Message: ${message}`);
    
    // Redirect to a new page to display the submission details
    res.redirect(`/submission-success?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`);
});
app.get('/submission-success', (req, res) => {
    const { name, email, message } = req.query;
    if (!name || !email || !message) {
        return res.status(400).send('Missing required query parameters: name, email, or message.');
    }
    res.render('pages/submission_success', { name, email, message });
});

app.listen(8000);
console.log("Serverul a pornit!");
