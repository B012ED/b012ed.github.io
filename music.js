
var music = Function.prototype.bind = Function.prototype.bind || function(fixThis) {
        var func = this
        return function() {
            return func.apply(fixThis, arguments)
            
{
  music = app.CreateMusic()
  music.CreatePlayer( "/Docs/Music/Snd/gong.mp3", "AutoPlay")
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

