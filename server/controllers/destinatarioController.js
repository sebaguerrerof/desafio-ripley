const Destinatario = require('../models/destinatario');

exports.crearDestinatario = async (req, res) => {
    try {
        let destinatario;

        destinatario = new Destinatario(req.body);

        await destinatario.save();
        res.send(destinatario);
        
    } catch (error) {

        console.log(error);
        res.status(500).send('Error, revisa y vuelve a intentar');

    }
}

exports.obtenerDestinatarios = async (req, res) => {
    try {

        const destinatarios = await Destinatario.find();
        res.json(destinatarios);

    } catch (error) {

        console.log(error);
        res.status(500).send('Error, revisa y vuelve a intentar');

    }
}

exports.obtenerDestinatario = async (req, res) =>{
    try {
        let destinatario = await Destinatario.findById(req.params.id);

        if(!destinatario){
            res.status(404).json({ msg: 'No existe el destinatario' });
        }
        res.json(destinatario);
        
    } catch (error) {

        console.log(error);
        res.status(500).send('Error, revisa y vuelve a intentar');

    }
}