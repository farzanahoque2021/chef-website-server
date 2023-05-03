const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const chef = require('./data/chef.json');
const category = require('./data/category.json');

app.get('/', (req, res) => {
    res.send('Server is running')
});

app.get('/chef', (req, res) => {
    res.send(chef);
})

app.get('/category', (req, res) => {
    res.send(category);
})

app.get('/chef/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedChef = chef.find(chef => parseInt(chef.id) === id);
    res.send(selectedChef);
})

app.get('/category/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const selectedCategory = chef.filter(chef => parseInt(chef.category_id) === id);
    res.send(selectedCategory);
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})