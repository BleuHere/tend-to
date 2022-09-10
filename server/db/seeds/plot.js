/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('plot').del()
  await knex('plot').insert([
    { id: 1, name: 'weed' },
    { id: 2, name: 'weed' },
    { id: 3, name: 'weed' },
    { id: 4, name: 'soil' },
    { id: 5, name: 'soil' },
    { id: 6, name: 'unsure' },
    { id: 7, name: 'unsure' },
  ])
}
