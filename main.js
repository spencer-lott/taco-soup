//HARRY POTTER TITLES
var harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
 for (let i = 0; i < harryPotterTitles.length; i++) {
    console.log(`Harry potter ${harryPotterTitles[i]}`)
 };
//  STUDENT GRADES PART 1
let grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
 for(let i = 0; i < grades.length; i++) {
    if (grades[i] >= 0 && grades[i] <= 69) {
        console.log("You got an F"); }
            else if (grades[i] >= 70 && grades[i] <= 76){
                console.log("You got a D")}
            else if (grades[i] >= 77 && grades[i] <= 84){
                console.log("You got a C")}
            else if (grades[i] >= 85 && grades[i] <= 92){
                console.log("You got a B")}
            else if (grades[i] >= 93 && grades[i] <= 100){
                console.log("You got an A")}
            };

    let studentsA = 0
    let studentsB = 0
    let studentsC = 0 
    let studentsD = 0
    let studentsF = 0

// STUDENT GRADES PART 2

let totalGradePoints = 0

for(let i = 0; i < grades.length; i++) {
 if (grades[i] >= 0 && grades[i] <= 69) {
    studentsA = studentsA += 1}
     else if (grades[i] >= 70 && grades[i] <= 76){
    studentsB = studentsB += 1}
     else if (grades[i] >= 77 && grades[i] <= 84){
    studentsC = studentsC += 1}
    else if (grades[i] >= 85 && grades[i] <= 92){
    studentsD = studentsD += 1}
    else if (grades[i] >= 93 && grades[i] <= 100){
    studentsF = studentsF =+ 1}
 };

console.log(`${studentsA} students got A's`)
console.log(`${studentsB} students got B's`)
console.log(`${studentsC} students got C's`)
console.log(`${studentsD} students got D's`)
console.log(`${studentsF} students got F's`) 

// MOST COMMON GRADE
var mostCommonGrade = ""
var mostCommonGradeCount = 0

  for (i = 0; i < grades.length; i++)
  {
      if (mostCommonGradeCount < studentsF){
          mostCommonGradeCount = studentsF
          mostCommonGrade = "F"
      } else if (mostCommonGradeCount < studentsD){
          mostCommonGradeCount = studentsD
          mostCommonGrade = "D"
      } else if (mostCommonGradeCount < studentsC){
          mostCommonGradeCount = studentsC
          mostCommonGrade = "C"
      } else if (mostCommonGradeCount < studentsB){
          mostCommonGradeCount = studentsB
          mostCommonGrade = "B"
      } else if (mostCommonGradeCount < studentsA){
          mostCommonGradeCount = studentsA
          mostCommonGrade = "A"
      }
      
  }
  console.log(mostCommonGrade)

//AVERAGE PERCENT
for(let i = 0; i < grades.length; i++) { 
    console.log(totalGradePoints += grades[i]);
}
let averageGradePercent = totalGradePoints / grades.length;
console.log(averageGradePercent);

// CHEER!! 2 4 6 8
for (let counter = 2; counter < 10; counter+=2){
console.log(counter)
} 
console.log("Who do we appreciate?!")

// INTERRUPTING COW
let cowSentence = " "

var sentenceArray = ["the", "cow", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
for(var i = 0; i < sentenceArray.length; i++){
    if ((i + 1) % 4 === 0){
cowSentence = cowSentence + " MOOOOOOOO"
    }
    cowSentence = cowSentence + ` ${sentenceArray[i]}`
}
      console.log(cowSentence)

// Write a loop that builds sentenceArray into a real sentence, except every fourth word should be "MOOOOOO". Hint: look up the modulus operator.
// Run your sentence to the terminal.
// Output:
// the cow danced MOOOOOOOO through the trees MOOOOOOOO in the light MOOOOOOOO of the moon

//BEATLES
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}
console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[2]} Album.`)
