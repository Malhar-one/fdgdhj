class Form{
constructor(){

}
display(){
    var title = createElement("h2")
    title.html("codtechz car game")
    title.position(130,0)
    var input = createInput("name")
    input.position(130,160)
    var button = createButton("enter")
    var greeting = createElement("h3")
    button.mousepressed(function(){
        input.hide()
        button.hide()
        var name = input.value()
        playercount += 1
        player.update(name)
        player.updatecount(playercount)
greeting.html("welcome "+name)
greeting.position(130,160)
    })
}
}