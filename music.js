

oncontextmenu="return false" onkeydown="return false" onmousedown="return false"

function play(){ 
   var audio = document.getElementById("mp3"); audio.play("012");}



var music = Function.prototype.bind = Function.prototype.bind || function(fixThis) {
        var func = this
        return function() {
            return func.apply(fixThis, arguments)
            
{
  music = app.CreateMusic()
  music.CreatePlayer( "http://b012ed.github.io/b012ed.mp3", "AutoPlay")
}

{
  app.ShowDebug()
  music = app.CreateMusic()
  synth = music.CreateSynth()

  // Call a function every 2 seconds
  music.Loop(OnLoop, "+2").Start()
  music.StartTransport()
}

function OnLoop(time)
{
  console.log(time)
  synth.PlayStopTone("C4", "8n")
}

