const playButtonAnimation = (button, beginStateNode, endStateNode) => {
    button.innerHTML = endStateNode;
    setTimeout(() => {
        button.innerHTML = beginStateNode;
        console.log(`Times's up`);
    }, 1500);
};

export default playButtonAnimation;
