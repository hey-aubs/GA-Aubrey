var moods = ["default", "gym", "sleep", "heart"];

document.addEventListener('DOMContentLoaded', function(event) {

  for(i=0;i<moods.length;i++) {
    let newOption = document.createElement('option');
    newOption.value =  moods[i];
    newOption.innerText =  moods[i];
    document.querySelector('#mood-type').appendChild(newOption);
  }

  document.querySelector('#mood-type').addEventListener('change', function(){
    var moods = document.querySelector('#mood-type').value;
    if (moods == 'default)')
    document.body.setAttribute('class','gym-off', 'sleep-off', 'heart-off');
  }
     else if (moods == 'gym') {
      document.body.setAttribute('class','gym-on');
    }
    else if (moods == 'sleep') {
      document.body.setAttribute('class','sleep-on');
    }
    else if (moods == 'heart') {
      document.body.setAttribute('class','heart-on');
    }
}