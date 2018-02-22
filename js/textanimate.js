$.fn.retype = function(delay) {
    var el = this,
        t = el.text(),
        c = t.split(''),
        l = c.length,
        i = 0;
    delay = delay || 50;
    el.empty();     
        setInterval(function(){
        if(i < l) el.text(el.text() + c[i++]);
    }, delay);    
};