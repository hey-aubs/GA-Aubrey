var moods = ["default", "gym", "sleep", "heart"];

document.addEventListener('DOMContentLoaded', function(event) {

  for(i=0;i<moods.length;i++) {
    let newOption = document.createElement('option');
    newOption.value =  moods[i];
    newOption.innerText =  moods[i];
    document.querySelector("moodType").appendChild(newOption);
  }

  document.querySelector("moodType").addEventListener('change', function(){
    var city = document.querySelector("moodType").value;
    if(moods == "default") {
      document.body.setAttribute('id','default');
    }
    else if (moods == "gym") {
      document.body.setAttribute('id','gym-rec');
    }
    else if (moods == "sleep") {
      document.body.setAttribute('id','sleep-rec');
    }
    else if (moods == "heart") {
      document.body.setAttribute('id','heart-rec');
    }
  });
})

  // If selector = "find your vibe:"
    //Hide sections gym, sleep, and heart
    
  // If selector = "to get me pumped for the gym"
      //Hide sections sleep and heart. Show section "gym"

      // Then change page background color to orange

      // And change text color to black

      // And show about text

      // And show playlist

  // If selector = "to lull me to sleep"
      //Hide sections gym and heart. Show section "sleep"

      // Then change page background color to blue

      // And show about text

      // And show playlist

  // If selector = "to soothe a broken heart"
      //Hide sections gym and heart. Show section "sleep"

      // Then change page background color to purple

      // And change text color to black

      // And show about text

      // And show playlist
