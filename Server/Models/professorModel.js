const mongoose = require('mongoose')

const professorSchema = mongoose.Schema(
    {
        professorEmail: {
            type: String,
            required: [true, 'Please add an email']
        },
        professorName: {
            type: String,
            required: [true, `Please add a name`]
        },
        professorDepartment: {
            type: String,
            required: [true, `Please add a department`]
        },
        professorRating: {
            type: Number,
            default: 0
        },
    },
    {
        timestamps: true,
    }
)



module.exports = mongoose.model('Professor', professorSchema)