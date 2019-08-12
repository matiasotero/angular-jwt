const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// jwt secret
const jwt_secret= 'my_awesome_secret_key';

// user test
let testUser = { name: 'Matias Otero', email:'motero@motero.com', password: '1234' };

app.get('/api/authenticate', (req, res) => {
    console.log(req.body);
    res.status(200).send({
        message: 'Warning, you came here by Post http'
    });
});

app.post('/api/authenticate', (req, res) => {
    if(req.body){
        let user = req.body;
        console.log(user);

        if(testUser.email === req.body.email && testUser.password === req.body.password){
            let token = jwt.sign(user, jwt_secret);
            res.status(200).send({
                signed_user: user,
                token: token
            });
        }
        else{
            res.status(403).send({
                errorMessage: 'Authorization required!'
            });
        }
    }
    else{
        res.status(403).send({
            errorMessage: 'Please provide email and password'
        });
    }
});

app.listen(5000, () => console.log('Server started at port 5000'));