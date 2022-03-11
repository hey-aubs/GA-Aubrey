

function selectMood(moodType){
  let thisMoodData = moodData[moodType];

  // If selector = "find your vibe:"
    //Hide sections gym, sleep, and heart
    document.getElementByValue('default').classList.remove('section')
    
  // If selector = "to get me pumped for the gym"
      //Hide sections sleep and heart. Show section "gym"

      // Then change page background color to orange

      // And change text color to black

      // And show about text

      // And show playlist

  // If selector = "to lull me to sleep"
      //Hide sections gym and heart. Show section "sleep"

      // Then change page background color to blue

      // And change text color to black

      // And show about text

      // And show playlist

  // If selector = "to soothe a broken heart"
      //Hide sections gym and heart. Show section "sleep"

      // Then change page background color to purple

      // And change text color to black

      // And show about text

      // And show playlist
}