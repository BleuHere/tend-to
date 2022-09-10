const connection = require('./connection')

function getPlotById(id, db = connection) {
  return db('plot').select().where('plot.id', id).first()
}

module.exports = {
  getPlotById,
}
