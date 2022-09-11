/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('emails').del()
  await knex('emails').insert([
    {
      id: 1,
      subject: 'Thank you, and first steps',
      text: `Thanks so much for taking care of the garden. It means so much to me that you’d take care of my plot while I’m away. \n Your first task will be to prepare the soil. Double tap a plot to pull out the weeds. \n Kindest, \n Your Friend`,
    },
    {
      id: 2,
      subject: 'Amazing job! Now to fertilise',
      text: "Wow, that looks amazing. Thank you. \n Next you'll need to add compost to the garden. Compost is an earth-friendly way to reuse garden and kitchen waste, and it gives life to our soil. \n Drag along the plots to disperse the compost. \n Kindest, \n Your Friend",
    },
    { id: 3, subject: 'hello again', text: 'hello again' },
  ])
}
