window.addEventListener('DOMContentLoaded', appStart)

let audioRecorder = []
let lastSound = 0

function appStart()
{
  document.querySelector(`#playRecording`).addEventListener('click', playRecording)
  document.body.addEventListener('keydown', keyDown)
    
let btns = document.querySelectorAll(`.key`)
   
 btns.forEach((btn) => {
       btn.addEventListener('click', playAudio)
   }
  )  

}
function playAudio()
{       
    
    let audio = new Audio(`sounds/${this.dataset.id}.wav`)
    audio.play();
   
}

///to do 
function playRecording()
{
    
    let sound = audioRecorder.shift()
    setTimeout(
       ()=>{
           document.querySelector(`#${sound.audioId}`)
           audio.currentTime = 0
           audio.play()
           playRecording()
       } 
       ,sound.time
    )    
}



function keyDown(e)
{

    let key = document.querySelector(`[data-key="${e.keyCode}"]`);
    let audio = new Audio(`sounds/${key.dataset.id}.wav`)
    addRecord(audio.id)
    audio.play();
       
}


function addRecord(id)
{      
let timeDiff = Date.now()-lastSound
lastSound = Date.now()

   let sound = {
       audioId: id,
       time:  timeDiff
    } 

   audioRecorder.push(sound)
   console.log(audioRecorder)
}




