const express = require('express')
const router = express.Router()

// CONTROLLER IMPORTS
const {
    getAllProfessors,
    getOneProfessors,
    createProfessor,
    updateProfessor,
    deleteProfessor,
} = require('../Controllers/professorsController')

const {
    getAllReviews,
    getOneReview,
    createReview,
    updateReview,
    deleteReview,
} = require('../Controllers/reviewsController')


//////////////////////
// PROFESSOR ROUTES //
//////////////////////

router.route('/').get(getAllProfessors).post(createProfessor)
router.route('/:professorId').get(getOneProfessors).put(updateProfessor).delete(deleteProfessor)


///////////////////
// REVIEW ROUTES //
///////////////////

router.route('/:professorId/reviews').get(getAllReviews).post(createReview)
router.route('/:professorId/reviews/:reviewId').get(getOneReview).put(updateReview).delete(deleteReview)


module.exports = router