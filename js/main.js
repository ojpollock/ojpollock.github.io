
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}


let storytext = "The village was under attack so :insertx: went to protect their people. When they saw the destruction of :inserty:, they stared and couldn't believe their eyes. They let out a battle cry, chugged a soda and loaded up their :insertz: power. Pain saw the whole thing, and was not impressed. The Almighty Push is beyond the power of — :insertx: ...or at least he thought.";

let insertx = ["Naruto", "Monkey D Luffy", "Itachi" , "Gold Rodger"];

let inserty = ["Ichiraku Ramen", "The Thousand Sunny", "The Hidden Leaf"];

let insertz = ["Shadow Clone Jutsu", "Amaterasu", "3rd Gear Gum Gum Bazooka" , "Haki"];


randomize.addEventListener('click', result);

function result() {

    let newStory = storytext;

    const xItem = randomValueFromArray(insertx);
    const yItem = randomValueFromArray(inserty);
    const zItem = randomValueFromArray(insertz);

    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Pain', name);

  }

  if(document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
    newStory = newStory.replaceAll('soda' , 'tea');

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}