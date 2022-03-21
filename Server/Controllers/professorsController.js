// @desc    Get all professors
// @route   GET /v1/professors
// @access  Private
const getAllProfessors = (req, res) => {
    res.status(205).json({ message: 'All professors' })
}

// @desc    Get professor
// @route   GET /v1/professors/:id
// @access  Private
const getOneProfessors = (req, res) => {
    res.status(205).json({ message: `Professor with id: ${req.params.professorId}` })
}

// @desc    Create professor
// @route   POST /v1/professors
// @access  Private
const createProfessor = (req, res) => {
    res.status(205).json({ message: `Created Professor` })
}

// @desc    Update professor
// @route   PUT /v1/professors/:id
// @access  Private
const updateProfessor = (req, res) => {
    res.status(205).json({ message: `Updated Professor with id: ${req.params.professorId}` })
}

// @desc    Remove professor
// @route   DELETE /v1/professors
// @access  Private
const deleteProfessor = (req, res) => {
    res.status(205).json({ message: `Deleted Professor with id: ${req.params.professorId}` })
}


module.exports = {
    getAllProfessors,
    getOneProfessors,
    createProfessor,
    updateProfessor,
    deleteProfessor,
}