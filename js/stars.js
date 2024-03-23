function createStar() {
    let newStar = document.createElement('div');
    document.body.appendChild(newStar);
    newStar.className = "star";
    let newStarStyle = newStar.style;
    newStarStyle.width = "10px";
    newStarStyle.height = "10px";
    newStarStyle.borderRadius = "5px";
    newStarStyle.left = (Math.random() * 100) + "vw";
    newStarStyle.top = (Math.random() * 100) + "vh";
}
for(let i = 0; i < 30; i++) {
    createStar();
}
function getNumber(a,b){

}