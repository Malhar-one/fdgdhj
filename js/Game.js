class Game{
    constructor(){

    }
    getstate(){
        var locofgamestate = database.ref("gamestate")
        locofgamestate.on("value",function (data){
            gamestate = data.val()
        })
    }
        update(state){
            database.ref("/").update({
                gamestate:state
            })
        }

        start(){
if(gamestate === 0){
    player=new Player()
    player.getcount()
    form = new Form()
    form.display()

}
}
    }