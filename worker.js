
setInterval(function(){

    window.localStorage.setItem('payload',new Date().toISOString());

},3999);

setInterval(function(){

    postMessage('worker emit:' +  window.localStorage.getItem('payload'));

}, 999);