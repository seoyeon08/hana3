import express from 'express';

const app = express();

// routing
// /는 path 부분이고, 뒷 부분은 callback 부분이라고 보면 된다.
app.all('/', (req, res) => {
    res.send(`<h1>Hello</h1><div id='root'></div>`);
});
app.get('/users/id', (req, res) => {
    const userId = req.params()
    res.json({id, name:"Hong"});
});

app.listen(3000, () => console.log('server started...'));

//http://localhost:3000/