const { Router } = require("express");

const indexRouter = Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages });
});

indexRouter.post("/new", (req, res) => {
    const newMessage = {
        text: req.body.message,
        user: req.body.name,
        added: new Date(),
    };
    messages.push(newMessage);
    res.redirect("/");
});

indexRouter.get("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    res.render("details", { message: messages[id] });
});

module.exports = indexRouter;
