// @desc    Get all reviews
// @route   GET /v1/professors
// @access  Private
const getAllReviews = (req, res) => {
    res.status(205).json({ message: `All reviews for professor with id: ${req.params.professorId}` })
}

// @desc    Get review
// @route   GET /v1/professors/:id
// @access  Private
const getOneReview = (req, res) => {
    res.status(205).json({ message: `Comment with id: ${req.params.reviewId} for professor with id: ${req.params.professorId}` })
}

// @desc    Create review
// @route   POST /v1/professors
// @access  Private
const createReview = (req, res) => {
    res.status(205).json({ message: `Created review for professor with id: ${req.params.professorId}` })
}

// @desc    Update review
// @route   PUT /v1/professors/:id
// @access  Private
const updateReview = (req, res) => {
    res.status(205).json({ message: `Updated review with id: ${req.params.reviewId} for professor with id: ${req.params.professorId}` })
}

// @desc    Remove review
// @route   DELETE /v1/professors
// @access  Private
const deleteReview = (req, res) => {
    res.status(205).json({ message: `Deleted review with id: ${req.params.reviewId} for professor with id: ${req.params.professorId}` })
}

module.exports = {
    getAllReviews,
    getOneReview,
    createReview,
    updateReview,
    deleteReview,
}
