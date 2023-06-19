const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer  = require('multer')


const {MongoMemoryServer} = require('mongodb-memory-server');

let setup = async () => {
    const mongod = await MongoMemoryServer.create();

    mongoose.connect(`${mongod.getUri()}tinder`).then( () => {
        const app = express();

        app.use(express.static('.'))

        app.use(express.json());

        app.use(cors());

        
        app.get("/flamengo", (req, res) => {
            res.send("flamengo e nada mais");
        });

        app.get("/teste", (req, res) => {
            res.send("Servidor funfando!");
        });

        // http://localhost:3000
        app.listen(3000,  () => {
            console.log("Servidor conectado e ligado!!!!!");
        })
        //Até aqui está conectado
    })
}

setup();