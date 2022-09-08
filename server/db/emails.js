const connection = require('./connection')

function getEmailById(id, db = connection) {
  return db('emails').where('emails.id', id).select().first()
}

module.exports = {
  getEmailById,
}
