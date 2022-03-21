const asyncHandler = require('express-async-handler')

// @desc    Get all professors
// @route   GET /v1/professors
// @access  Private
const getAllProfessors = asyncHandler(async (req, res) => {
    res.status(205).json({ message: 'All professors' })
})

// @desc    Get professor
// @route   GET /v1/professors/:id
// @access  Private
const getOneProfessors = asyncHandler(async (req, res) => {
    res.status(205).json({ message: `Professor with id: ${req.params.professorId}` })
})

// @desc    Create professor
// @route   POST /v1/professors
// @access  Private
const createProfessor = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(422)
        throw new Error(`Create Professor failed`)
    }

    res.status(205).json({ message: `Create Professor success` })
})

// @desc    Update professor
// @route   PUT /v1/professors/:id
// @access  Private
const updateProfessor = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(422)
        throw new Error(`Update Professor failed`)
    }

    res.status(205).json({ message: `Updated Professor with id: ${req.params.professorId}` })
})

// @desc    Remove professor
// @route   DELETE /v1/professors
// @access  Private
const deleteProfessor = asyncHandler(async (req, res) => {
    res.status(205).json({ message: `Deleted Professor with id: ${req.params.professorId}` })
})


module.exports = {
    getAllProfessors,
    getOneProfessors,
    createProfessor,
    updateProfessor,
    deleteProfessor,
}