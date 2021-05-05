const Transferencia = require('../models/Transferencia');



exports.crearTransferencia = async (req, res) => {
    try {
        let transferencia;

        transferencia = new Transferencia(req.body);

        await transferencia.save();
        res.send(transferencia);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Error, revisa y vuelve a intentar')
    }
}

exports.obtenerTransferencias = async (req, res) => {
    try {

        const transferencias = await Transferencia.find();
        res.json(transferencias);

    } catch (error) {

        console.log(error);
        res.status(500).send('Error, revisa y vuelve a intentar');

    }
} 