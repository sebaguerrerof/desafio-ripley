const mongoose = require('mongoose');

const DestinatarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    rut: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    banco: {
        type: String,
        required: true
    },
    tipo_cuenta: {
        type: String,
        required: true
    },
    num_cuenta: {
        type: Number,
        required: true
    },
    fechaRealizada: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Destinatario', DestinatarioSchema);