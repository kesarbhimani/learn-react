//@desc  Get goals
//@route GET/api/goals
//@access Private
const getGoals = (req, res) => {
    res.status(200).json({ message: "Get goals" })
}

//@desc  Set goals
//@route POST/api/goals
//@access Private
const setGoals = (req, res) => {
    res.status(200).json({ message: "Set goals" })
}

//@desc  Update goals
//@route PUT/api/goals/:id
//@access Private
const updateGoals = (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
}

//@desc  Delete goals
//@route DELETE/api/goals/:id
//@access Private
const deleteGoals = (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
}

module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}