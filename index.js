window.prompt('Do you head left or right?')//Your Code here

let answer = window.prompt("Do you head left or right?")
console.log (answer === "right")

if(answer === 'left'){
    let secondAnswer = window.prompt(`You come across a stray cat.
    It scampers off down a small hole, just large enough for you to crawl through. 
    Do you follow it, or continue on your path? Enter: follow or continue`)
} 
else if(answer === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Do you go past the dragon or away from the dragon?`)
}

switch (secondAnswer){
    case "follow": 
    let thirdAnswer = window.prompt (`You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.`)
break
    case "continue": 
    let thirdAnswer = window.prompt (`You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?`)
break
    case "past the dragon": 
    let thirdAnswer = window.prompt ('The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:')
break
    case "away from the dragon": 
    let thirdAnswer = window.prompt(`After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?`)
}

