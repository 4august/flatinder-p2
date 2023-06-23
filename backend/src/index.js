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

        app.post("/cadaster", async (req, res) => {
            const {
                image_profile,
                first_name,
                last_name,
                date_birth,
                sex,
                interests 
            } = req.body;

            const newForm = await finalForm.create({
                image_profile,
                first_name,
                last_name,
                date_birth,
                sex,
                interests 
            });

            res.send(newForm);
        });
        app.get("/cadaster", async (req, res) => {
            const user = await finalForm.find({});

            res.send(user)
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