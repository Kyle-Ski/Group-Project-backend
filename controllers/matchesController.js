const knex = require('../db/connection')


const getOne = (req, res, next) => {
    const id = req.params.id
    return knex('match')
        .select('*')
        .where({user_profile_2: id})
        .then(user => {
            if(!user.length){
                res.json({error: 'Please enter a user in the database.'})
            } else {
                res.json({match: user})
            }
        })
        .catch(err => console.error('ERROR: ', err))
}

const postMatch = (req, res, next) => {
    const userId = req.body.userId
    const matchId = req.body.matchId
    return knex('match')
        .insert(user_profile_2: user_profile_2:)
}

module.exports = getOne