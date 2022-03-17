var moods = ["default", "gym", "sleep", "heart"];

document.addEventListener('DOMContentLoaded', function(event) {
  Object.entries(moodData).forEach((entry) => {
    const [key, value] = entry;
    let newOption = document.createElement('option');
    newOption.value =  key;
    newOption.innerText =  value.option;
    document.querySelector("#mood-selector").appendChild(newOption);
  });

  for(i=0;i<moods.length;i++) {
  }

  document.querySelector("#mood-selector").addEventListener('change', function(){
    var mood = document.querySelector("#mood-selector").value;
    
  // Set play-block's H2
   if (mood == "default")    {
    document.querySelector("#play-block").style.    display="none";
    document.querySelector("#play-block .playlist").setAttribute("src","");
  }
  else {
    document.querySelector("#play-block h2").innerText = moodData[mood].about;

  // Set the iframe's source
   document.querySelector("#play-block .playlist").setAttribute("src",moodData[mood].playlist);
 
  // Set play-block's theme class
    document.querySelector("#play-block").setAttribute("class",moodData[mood].theme);

  // Show the play-block
   document.querySelector("#play-block").style.display="block";
} 


});
})