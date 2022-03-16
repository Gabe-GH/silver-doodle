const express = require ('express')
const router = express.Router()

//////////////////////
// PROFESSOR ROUTES //
//////////////////////

router.get('/', (req,res) => {
    res
        .status(205)
        .json({message: 'All professors'})
})

router.get('/:professorId', (req,res) => {
    res
        .status(205)
        .json({message: `Professor with id: ${req.params.professorId}`})
})

router.post('/', (req,res) => {
    res
        .status(205)
        .json({message: `Created Professor`})
})

router.put('/:professorId', (req,res) => {
    res
        .status(205)
        .json({message: `Updated Professor with id: ${req.params.professorId}`})
})

router.delete('/:professorId', (req,res) => {
    res
        .status(205)
        .json({message: `Deleted Professor with id: ${req.params.professorId}`})
})


///////////////////
// REVIEW ROUTES //
///////////////////

router.get('/:professorId/reviews', (req,res) => {
    res
        .status(205)
        .json({message: `All reviews for professor with id: ${req.params.professorId}`})
})

router.get('/:professorId/reviews/:reviewId', (req,res) => {
    res
        .status(205)
        .json({message: `Comment with id: ${req.params.reviewId} for professor with id: ${req.params.professorId}`})
})

router.post('/:professorId/reviews', (req,res) => {
    res
        .status(205)
        .json({message: `Created review for professor with id: ${req.params.professorId}`})
})

router.put('/:professorId/reviews/:reviewId', (req,res) => {
    res
        .status(205)
        .json({message: `Updated review with id: ${req.params.reviewId} for professor with id: ${req.params.professorId}`})
})

router.delete('/:professorId/reviews/:reviewId', (req,res) => {
    res
        .status(205)
        .json({message: `Deleted review with id: ${req.params.reviewId} for professor with id: ${req.params.professorId}`})
})


module.exports = router