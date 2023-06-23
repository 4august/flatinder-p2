const multer = require('multer')

const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); //originalname = extensao do arquivo, extname = extensao q ta no nome do arquivo -> dasdasda.jpg
    }
})

const upload = multer({ storage });

module.exports = upload;