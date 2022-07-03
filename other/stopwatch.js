
var flag=0,rt=0,ss,mss;
var    clsStopwatch = function() {
        var    startAt    = 0;    
        var    lapTime    = 0;   
        var    now    = function() {
                return (new Date()).getTime(); 
            }; 
        this.start = function() {
                startAt    = startAt ? startAt : now();
            };
        this.stop = function() {
                lapTime    = startAt ? lapTime + now() - startAt : lapTime;
                startAt    = 0; 
            };
        this.reset = function() {
                lapTime = startAt = 0;
            };
        this.time = function() {
                return lapTime + (startAt ? now() - startAt : 0); 
            };
    };
var x = new clsStopwatch();
var timer = document.getElementById('timer');
var clocktimer;

function pad(num, size) {
    var s = "0000" + num;
    return s.substr(s.length - size);
}

function formatTime(time) {
    var h = m = s = ms = mss = ss = 0;
    var newTime = '';

    h = Math.floor( time / (60 * 60 * 1000) );
    time = time % (60 * 60 * 1000);
    m = Math.floor( time / (60 * 1000) );
    time = time % (60 * 1000);
    s = Math.floor( time / 1000 );
    ms = time % 1000;
    ss = s;mss = ms;
    newTime = pad(m, 2) + ':' + pad(s, 2) + '.' + pad(ms, 3);
    return newTime;
}

function show() {
    timer = document.getElementById('timer');
    update();
}

function update() {
    timer.innerHTML = formatTime(x.time());
}

function start() {
    flag++;
    if(flag%2!=0){
        clocktimer = setInterval("update()", 1);
        x.start();}
    else{
        x.stop();
        clearInterval(clocktimer);}
}
var lc=0;
function lr() {
    if(flag%2!=0){
    lc++;
    document.getElementById('lbox').innerHTML=lc+' '+timer.innerHTML+"<br>"+document.getElementById('lbox').innerHTML;}
    else{
    lc=0;
    stop();
    x.reset();
    update();
    document.getElementById('lbox').innerHTML='Laps';
    }
}