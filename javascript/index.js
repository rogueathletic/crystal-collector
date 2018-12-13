var hberg1 = Math.floor((Math.random() * 12) + 1);
var hberg2 = Math.floor((Math.random() * 12) + 1);
var hberg3 = Math.floor((Math.random() * 12) + 1);
var hberg4 = Math.floor((Math.random() * 12) + 1);

var score = 0;
var win = 0;
var loss = 0;
var rand = Math.floor((Math.random() * 120) + 19);

update_score(0);

$('#rand').html(rand);
$('#win').html(win);
$('#loss').html(loss);

$('#hberg1').click(function () {
    update_score(hberg1);
    console.log(hberg1);
    
});
$('#hberg2').click(function () {
    update_score(hberg2);
    console.log(hberg2);
    
});
$('#hberg3').click(function () {
    update_score(hberg3);
    console.log(hberg3)
});
$('#hberg4').click(function () {
    update_score(hberg4);
    console.log(hberg4)
});

function update_score(s) {
    score = score + s;
    $('#score').html(score);
    /*if score is equals to random number than it will be win */
    if (rand == score) {
        set_win();
    } else if (rand < score) { /*if score is greater than to random number than it will be loss */
        set_loss();
    }
}
/* setting up win an loss */
function set_win() {
    win = win + 1;
    alert('You won');
    reset();
}

function set_loss() {
    loss = loss + 1;
    alert('you lost');
    reset();
    console.log(loss);
    
}
/* varable and information should be resetted after each game */
function reset() {
    hberg1 = Math.floor((Math.random() * 12) + 1);
    hberg2 = Math.floor((Math.random() * 12) + 1);
    hberg3 = Math.floor((Math.random() * 12) + 1);
    hberg4 = Math.floor((Math.random() * 12) + 1);

    score = 0;
    console.log(score);
    
    update_score(0);
    rand = Math.floor((Math.random() * 120) + 19);
    $('#rand').html(rand);
    $('#win').html(win);
    $('#loss').html(loss);
    console.log(rand);
    console.log(win);
    console.log(rand);   
}
