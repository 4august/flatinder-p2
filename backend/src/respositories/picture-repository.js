const Picture = require('../models/user-model');

exports.createPhoto = async (namePhoto, srcPhoto) => {
    try {
        const picture = new Picture({
            namePhoto,
            srcPhoto
        });

        await picture.save();

        return picture;
    } catch (error) {
        throw new Error("Erro ao salvar imagem");
    }
};
