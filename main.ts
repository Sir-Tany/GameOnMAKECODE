/*
Read Me:
    Press A to jump
    Press B to move forward
    Press AB to reset but only in the death screen or
else it will break the game
    Your score will go up more the closer you are to
the monster spawn
    Try to get over 100!
    This game is made in Make Code that is very limited
so bear with me.
*/
let y = 4 //y movement of the player
let x = 2 //x movement of the player
let m = 5 //x movement of the monster
let a = 0 //stoping everything
let score = 0 //score
function monster() { //monster's function
    led.unplot(m, 4) //unploting the monster to move it
    m-=0.05 //monsters speed
    led.plot(m, 4) //ploting the monster after unploting
    if (m < -1){//looping the monster
        m=5 //resetting the monsters x 
        monster()//making sure the death trigger doesn't trigger
        if (x==2){
        score+=1 //adding to the score
        }
        if (x == 3) {
            score += 2 //adding to the score
        }
        if (x == 4) {
            score += 3 //adding to the score
        }
    }
}
function death(){//testing and putting out the death effect
    if (led.point(0, 0) == false, led.point(0, 1) == false && led.point(0, 2) == false && led.point(0, 3) == false && led.point(0, 4) == false && led.point(1, 0) == false && led.point(1, 1) == false && led.point(1, 2) == false && led.point(1, 3) == false && led.point(1, 4) == false && led.point(2, 0) == false && led.point(2, 1) == false && led.point(2, 2) == false && led.point(2, 3) == false && led.point(2, 4) == true && led.point(3, 0) == false && led.point(3, 1) == false && led.point(3, 2) == false && led.point(3, 3) == false && led.point(3, 4) == false && led.point(4, 0) == false && led.point(4, 1) == false && led.point(4, 2) == false && led.point(4, 3) == false && led.point(4, 4) == false){
    //up above is the way to long death check
    a=1 //stopping everthing
    //clearing the screen down below
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
    //saying you died, down below
    basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
    pause(1000)//waiting
    //clearing the screen again, down below
    basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
    pause(500)//waiting
    basic.showNumber(score)//showing the score
    input.onButtonPressed(Button.AB, function(){
        basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
        a = 0
        x = 2
        m = 4
    })
    }
    if (led.point(0, 0) == false, led.point(0, 1) == false && led.point(0, 2) == false && led.point(0, 3) == false && led.point(0, 4) == false && led.point(1, 0) == false && led.point(1, 1) == false && led.point(1, 2) == false && led.point(1, 3) == false && led.point(1, 4) == false && led.point(2, 0) == false && led.point(2, 1) == false && led.point(2, 2) == false && led.point(2, 3) == false && led.point(2, 4) == false && led.point(3, 0) == false && led.point(3, 1) == false && led.point(3, 2) == false && led.point(3, 3) == false && led.point(3, 4) == true && led.point(4, 0) == false && led.point(4, 1) == false && led.point(4, 2) == false && led.point(4, 3) == false && led.point(4, 4) == false) {
        //up above is the way to long death check
        a = 1 //stopping everthing
        //clearing the screen down below
        basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
        //saying you died, down below
        basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
        pause(1000)//waiting
        //clearing the screen again, down below
        basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
        pause(500)//waiting
        basic.showNumber(score)//showing the score
        input.onButtonPressed(Button.AB, function () {
            basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
            a = 0
            x = 2
            m = 4
        })
    }
    if (led.point(0, 0) == false, led.point(0, 1) == false && led.point(0, 2) == false && led.point(0, 3) == false && led.point(0, 4) == false && led.point(1, 0) == false && led.point(1, 1) == false && led.point(1, 2) == false && led.point(1, 3) == false && led.point(1, 4) == false && led.point(2, 0) == false && led.point(2, 1) == false && led.point(2, 2) == false && led.point(2, 3) == false && led.point(2, 4) == false && led.point(3, 0) == false && led.point(3, 1) == false && led.point(3, 2) == false && led.point(3, 3) == false && led.point(3, 4) == false && led.point(4, 0) == false && led.point(4, 1) == false && led.point(4, 2) == false && led.point(4, 3) == false && led.point(4, 4) == true) {
        //up above is the way to long death check
        a = 1 //stopping everthing
        //clearing the screen down below
        basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
        //saying you died, down below
        basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
        pause(1000)//waiting
        //clearing the screen again, down below
        basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
        pause(500)//waiting
        basic.showNumber(score)//showing the score
        input.onButtonPressed(Button.AB, function () {
            basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
            a = 0
            x = 2
            m = 4
        })
    }
}
function all() { //all the juicey stuff
    led.plot(x, y)//making the player
    input.onButtonPressed(Button.A, function () { //taking the button input
        led.unplot(x, y)//unplotting the player to move it
        y -= 2 //jumping up
        if (y > 0 && y < 4) { //if its in bounds
            pause(500)//wait
            led.unplot(x, y)//unplot to move
            y += 1 //fall down
            pause(500) //wait
            led.unplot(x, y) //unplot to move
            y += 1 //fall down
            pause(500) //preventing double jump
        }
    })
    input.onButtonPressed(Button.B, function(){
        led.unplot(x,y)
        x++
        led.plot(x,y)
        if (x>4){
            x=4
        }
    })
}

basic.forever(function () {
    if (a==0){ //making sure we are dead
        all() //running everthing about the player
        monster() //running everthing about the monster
    }
    death() //checking for death
})