const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require('multer')


const formInterests = require("./collections/Interests")
const formSex = require("./collections/Sex");

const finalForm = require("./collections/FinalForm")

const { MongoMemoryServer } = require('mongodb-memory-server');

let setup = async () => {
    const mongod = await MongoMemoryServer.create();

    mongoose.connect(`${mongod.getUri()}tinder`).then(() => {
        const app = express();

        app.use(express.static('.'))

        app.use(express.json());

        app.use(cors());

        app.post("/cadaster/whoAmI", async (req, res) => {
            const { sex } = req.body;

            const newForm = await formSex.create({ sex })

            res.send(newForm);
        });
        app.get("/cadaster/whoAmI", async (req, res) => {
            const sex = await formSex.find({});

            res.send(sex)
        });

        app.post("/cadaster/interests", async (req, res) => {
            const { interests } = req.body;

            const newForm = await formInterests.create({ interests })

            res.send(newForm);
        });
        app.get("/cadaster/interests", async (req, res) => {
            const interests = await formInterests.find({});

            res.send(interests)
        });


        app.post("/cadaster", async (req, res) => {
            const {sex, interests } = req.body;

            const newForm = await finalForm.create({sex, interests })

            res.send(newForm);
        });
        app.get("/cadaster", async (req, res) => {
            const interests = await finalForm.find({});

            res.send(interests)
        });


        app.get("/teste", (req, res) => {
            res.send("Servidor funfando!");
        });

        // http://localhost:3000
        app.listen(3000, () => {
            console.log("Servidor conectado e ligado!!!!!");
        })
        //Até aqui está conectado
    })
}

setup();