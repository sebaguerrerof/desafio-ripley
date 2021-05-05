const mongoose = require('mongoose');

const TransferenciaSchema = mongoose.Schema({
    destinatario: {
        type: String,
        required: true
    },
    monto: {
        type: Number,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    rut: {
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
    fechaRealizada: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Transferencia', TransferenciaSchema);