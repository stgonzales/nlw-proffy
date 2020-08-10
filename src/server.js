const express = require('express')
const route = require('./routes');
const nunjucks = require('nunjucks');
const app = express()

const port = 3000

app.use(express.static("public"))

app.get("/", route.index)

app.get("/study", route.study)

app.get("/class", route.class)

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
})

nunjucks.configure('./src/views', {
    express: app,
    noCache: true
})