const express = require('express');
const router = express.Router();
const problemService = require('../services/problemService');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const nodeRestClient = require('node-rest-client').Client;
const restClient = new nodeRestClient();

EXECUTOR_SERVER_URL = 'http://localhost:5000/excution_result';

restClient.registerMethod('excution_result', EXECUTOR_SERVER_URL, 'POST');

//get problems  list
router.get('/problems', (req,res)=>{
    problemService.getProblems()
        .then(problems => res.json(problems));
          //  console.log(message);
        
});
//get problem

router.get('/problems/:id', (req, res) => {
    const id = req.params.id;
    problemService.getProblem(+id)
        .then(problem => res.json(problem));
})

//post problem

router.post('/problems', jsonParser, (req, res) => {
    problemService.addProblem(req.body)
        .then(problem => {
            res.json(problem);
        }, (error) => {
            res.status(400).send('Problem name already exists!');
        });
});

router.post('/excution_result', jsonParser, (req, res) => {
    const userCodes = req.body.userCodes;
    const lang = req.body.lang;
    console.log('lang: ', lang, 'usc', userCodes);
    //res.json({'text': 'hello from nodejs'});

    restClient.methods.excution_result(
        {
            data: {code: userCodes, lang: lang},
            headers: { 'Content-Type': 'application/json'}
        },
        (data, response) => {
            
            const text = `Build output: ${data['build']}. Execute Output: ${data['run']}`;
            data['text'] = text;
            res.json(data);
        }
    )
});




module.exports = router; // imported by restRouter in server.js
