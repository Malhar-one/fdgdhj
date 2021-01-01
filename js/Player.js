class Player{
    constructor(){

    }
    getcount(){
        var locofplayercount = database.ref("playercount")
        locofplayercount.on("value",function (data){
            playercount = data.val()
        })
    }
    updatecount(count){
        database.ref("/").update({
            gamestate:state
        })

    }
    update(name){
        var playernumber = "player"+playercount
        database.ref(playernumber).set({
            name:name
        })
    }

}