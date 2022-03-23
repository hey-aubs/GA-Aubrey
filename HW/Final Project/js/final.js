// Define the different moods available for selection

var moods = ["default", "gym", "sleep", "heart"];

document.addEventListener('DOMContentLoaded', function(event) {
  Object.entries(moodData).forEach((entry) => {
    const [key, value] = entry;
    let newOption = document.createElement('option');
    newOption.value =  key;
    newOption.innerText =  value.option;
    document.querySelector("#mood-selector").appendChild(newOption);
  });

  // Each time a change is made to the selector, serve up corresponding information
  document.querySelector("#mood-selector").addEventListener('change', function(){
    var mood = document.querySelector("#mood-selector").value;
    console.log(mood)

  // DEFAULT VIEW
   if (mood == "default")    {
    // Hide play-block content
    document.querySelector("#play-block").style.  display="none";  
    document.body.style.color="white";
    document.querySelector("#play-block .playlist").setAttribute("src","");
  }

  // SLEEP
  else if (mood==="sleep") {
    // Replace background image with color
    document.body.style.backgroundImage="url('')"
    document.body.style.backgroundColor="#00208a"
    document.body.style.color="white"
    console.log(moodData[mood])
    console.log(document.body.style.backgroundColor)
    // Set h2
    document.querySelector("#play-block h2").innerText = moodData[mood].about;
    console.log(moodData[mood].about)
    // Set iframe source
    document.querySelector("#play-block .playlist").setAttribute("src",moodData[mood].playlist);
    console.log(moodData[mood])
    // Show play-block content 
    document.querySelector("#play-block").style.display="block";
  }

  // GYM
  else if (mood==="gym") {
  // Replace background image with color
  document.body.style.backgroundImage="url('')"
  document.body.style.backgroundColor="#eb9c00"
  document.body.style.color="black"
  console.log(moodData[mood])
  console.log(document.body.style.backgroundColor)
  // Set h2
  document.querySelector("#play-block h2").innerText = moodData[mood].about;
  console.log(moodData[mood].about)
  // Set iframe source
  document.querySelector("#play-block .playlist").setAttribute("src",moodData[mood].playlist);
  console.log(moodData[mood])
  // Show play-block content 
  document.querySelector("#play-block").style.display="block";
  }

  // HEART
  else if (mood==="heart") {
 // Replace background image with color 
  document.body.style.backgroundImage="url('')"
  document.body.style.backgroundColor="#806c94"
  document.body.style.color="white"
  console.log(moodData[mood])
  console.log(document.body.style.backgroundColor)
  // Set h2
  document.querySelector("#play-block h2").innerText = moodData[mood].about;
  console.log(moodData[mood].about)
  // Set iframe source
  document.querySelector("#play-block .playlist").setAttribute("src",moodData[mood].playlist);
  console.log(moodData[mood])
  // Show play-block content 
  document.querySelector("#play-block").style.display="block";
  }
});
})