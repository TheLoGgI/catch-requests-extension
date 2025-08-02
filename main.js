console.log('This is a popup!');


document.addEventListener('DOMContentLoaded', function() {
    const requestContent = localStorage.getItem('request');
    console.log('requestContent: ', requestContent);
    
    const input = document.querySelector('#request');
    input.addEventListener('change', function(event) {
        console.log('event: ', event);
        localStorage.setItem('request', event.target.value);
    })
});

