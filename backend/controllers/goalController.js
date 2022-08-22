const asyncHandler = require(asyncHandler)
//@desc Get Goals
// @ route GET /api/goals
//@accesss Private
const getGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message:'get goals'})
})
//@desc Set Goals
// @ route POST /api/goals
//@accesss Private
const setGoal =  asyncHandler (async (req, res) => {
    if(!req.body.text) {
    res.status(400)
    throw new Error('Please add a text field')    
    }
    
})

//@desc Update Goals
// @ route Put /api/goals/:id
//@accesss Private
const updateGoal = asyncHandler ( async (req, res) => {
    res.status(200).json({message : `update goal ${req.params.id}`})
})

//@desc Delete Goals
// @ route DELETE /api/goals/:id
//@accesss Private
const deleteGoal = asyncHandler (async (req, res) => {
    res.status(200).json({message : `delete goal ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}