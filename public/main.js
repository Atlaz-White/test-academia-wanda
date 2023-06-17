function remScreenload() {
    const screenloadNode = document.querySelector('#screenload');
    setTimeout(function() {
        screenloadNode.style.transition = 'ease 1s';
        screenloadNode.style.opacity = '0';
        setTimeout(function() {
            screenloadNode.remove();
        }, 1000);
    }, 3000);
};

window.addEventListener('load', remScreenload);
