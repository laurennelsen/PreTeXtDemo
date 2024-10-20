var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-manually-authored-problems",
  "level": "1",
  "url": "sec-manually-authored-problems.html",
  "type": "Section",
  "number": "1.1",
  "title": "Manually-Authored Problems",
  "body": " Manually-Authored Problems  In this section we'll examples of manually-authored problems in PreTeXt.  Algebra Practice Solve the equation for . Try factoring the left-hand side of the equation.  "
},
{
  "id": "sec-manually-authored-problems-3",
  "level": "2",
  "url": "sec-manually-authored-problems.html#sec-manually-authored-problems-3",
  "type": "Checkpoint",
  "number": "1.1.1",
  "title": "Algebra Practice.",
  "body": "Algebra Practice Solve the equation for . Try factoring the left-hand side of the equation. "
},
{
  "id": "sec-embedded-problems",
  "level": "1",
  "url": "sec-embedded-problems.html",
  "type": "Section",
  "number": "1.2",
  "title": "Embedded Problems",
  "body": " Embedded Problems  We can embed interactives from Desmos and GeoGebra into PreTeXt.   Exponential Distribution (Made in GeoGebra by Steve Phelps)     Exponential Distribution (Made in GeoGebra by John Ulbright)     Tangent Line powered by Desmos    "
},
{
  "id": "figure-geogebra-tattoo-simulation",
  "level": "2",
  "url": "sec-embedded-problems.html#figure-geogebra-tattoo-simulation",
  "type": "Figure",
  "number": "1.2.1",
  "title": "",
  "body": " Exponential Distribution (Made in GeoGebra by Steve Phelps)   "
},
{
  "id": "figure-dollar",
  "level": "2",
  "url": "sec-embedded-problems.html#figure-dollar",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " Exponential Distribution (Made in GeoGebra by John Ulbright)   "
},
{
  "id": "sec-embedded-problems-5",
  "level": "2",
  "url": "sec-embedded-problems.html#sec-embedded-problems-5",
  "type": "Figure",
  "number": "1.2.3",
  "title": "",
  "body": " Tangent Line powered by Desmos   "
},
{
  "id": "sec-runestone-questions",
  "level": "1",
  "url": "sec-runestone-questions.html",
  "type": "Section",
  "number": "1.3",
  "title": "Runestone-Powered Questions",
  "body": " Runestone-Powered Questions  Text of section.  Runestone-powered True\/False Question  UCCS was founded in 1965.   Oops, try again!   Runestone-powered Multiple Choice Problem  Which of the following are mascots for a University of Colorado campus?    Clyde the Mountain Lion    Milo the Lynx    Chip the Buffalo    Roger the Rhinocerous    Tomato the Turtle    Runestone-powered Parsons Problem  The following program should figure out the cost per person for a dinner including the tip. But the blocks have been mixed up. Drag the blocks from the left and put them in the correct order on the right. Click the Check Me button to check your solution.    bill = 89.23    tip = bill * 0.20    total = bill + tip    numPeople = 3 perPersonCost = total \/ numPeople    print(perPersonCost)    Runestone-powered Matching Problem  Match the letters with their order in the alphabet    A  1    B  2    C  3    "
},
{
  "id": "true-false",
  "level": "2",
  "url": "sec-runestone-questions.html#true-false",
  "type": "Checkpoint",
  "number": "1.3.1",
  "title": "Runestone-powered True\/False Question.",
  "body": "Runestone-powered True\/False Question  UCCS was founded in 1965.   Oops, try again!  "
},
{
  "id": "some-matching",
  "level": "2",
  "url": "sec-runestone-questions.html#some-matching",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "Runestone-powered Multiple Choice Problem.",
  "body": "Runestone-powered Multiple Choice Problem  Which of the following are mascots for a University of Colorado campus?    Clyde the Mountain Lion    Milo the Lynx    Chip the Buffalo    Roger the Rhinocerous    Tomato the Turtle   "
},
{
  "id": "parsons-problem",
  "level": "2",
  "url": "sec-runestone-questions.html#parsons-problem",
  "type": "Checkpoint",
  "number": "1.3.3",
  "title": "Runestone-powered Parsons Problem.",
  "body": "Runestone-powered Parsons Problem  The following program should figure out the cost per person for a dinner including the tip. But the blocks have been mixed up. Drag the blocks from the left and put them in the correct order on the right. Click the Check Me button to check your solution.    bill = 89.23    tip = bill * 0.20    total = bill + tip    numPeople = 3 perPersonCost = total \/ numPeople    print(perPersonCost)   "
},
{
  "id": "matching",
  "level": "2",
  "url": "sec-runestone-questions.html#matching",
  "type": "Checkpoint",
  "number": "1.3.4",
  "title": "Runestone-powered Matching Problem.",
  "body": "Runestone-powered Matching Problem  Match the letters with their order in the alphabet    A  1    B  2    C  3   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
