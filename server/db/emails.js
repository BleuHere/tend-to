const connection = require('./connection')

function getEmailById(id, db = connection) {
  return db('emails').select().where('emails.id', id).first()
}

module.exports = {
  getEmailById,
}
