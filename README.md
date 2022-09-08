# Tend Game 

A gardening game for adults that intends to inspire sweet, soft feelings, educate on the importance of gardening and friendship, and encourage kindness to humans and pachamama. 

## MVP

A simple level with three phases - garden bed prep, seed sowing and harvest. 

### Essential Setup

- [x] Create a landing/home page for our user 
- [ ] Home page needs a button that takes the player to the game
- [x] Create a garden (grid of divs)
- [ ] CSS-ify the garden area
- [ ] Find plant graphics at different phases of growth 
- [ ] Find tool graphics (not essential for MVP, but highly desireable) 
- [x] Find weed graphic

### Phase 1
-----------

The game will open with a story - an email from a friend. It's vague, but we can guess that the friend has left their home on urgent business, and it's unclear when they will return. 

We've taken on the task of tending their garden while they're away. 

The email guides us to the first phase - clearing the weedy, poor soil quality vegetable garden bed and preparing it for planting. 

- [x] Event handler on each div - double click removes weeds
- [ ] Reward for clearing weeds - you find a weeding tool that's really efficient and you can now clear two divs (if next to each other) - not essential MVP
- [ ] When all divs are 'clean' state, phase pauses. Email is shown 
- [x] Add compost (dragover) - change state to 'fertilised'
- [ ] Add draggable compost receptical

### Phase 2
-----------

At the end of phase one, you may get points, or something? 

You get another email from your friend - wow, great job! Here's how you plant seeds. Some advice on planting a variety etc. 

- [ ] Drag start, drag, drop to plant seeds - one seed per div. Changes state to 'sown' and maybe shows a mound of soil? 
- [ ] Water the plants - each plant may differ but this could be how they mature? Ie. tomatoes need lots of water 
- [ ] Seed packet graphic - could be a component in itself? Get by ID to show details, but exists in an array in a flexbox? 
- [ ] Points given for biodiversity 

### Phase 3
-----------

At the end of phase two, you may get a pollinator bonus point, or a tool or new heritage seed or something! 

You may also get a biodiversity bonus - maybe it's some worm juice for your next fertilizer run because your soil is thriving. 

Now, you get another email - wow! It looks so amazing! Now it's time to harvest. Here's how, etc. 

- [ ] Drag fruits/flowers into a basket - state changes to fruitless or something
- [ ] Basket fills with fruits based on the id? Maybe? 
- [ ] At end of phase your 'fruits' are displayed and you get points on how much food you made, how many bunches of flowers etc. 
- [ ] If you have enough tomatoes (for example) you can make a tomato sauce - not MVP but would be cute AF

End of phase three, you get a final email from your friend. More clues as to why they are away, but still vague. 



