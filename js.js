window.addEventListener('load', () => {
    console.log("page chargée");

    let curseur = document.getElementById("cursor");
    let val = 0; let deplacement=1;

    setInterval(deplacerCurseur, 20);
    function deplacerCurseur() {
        curseur.style.marginLeft=val+"%";
        val=val+deplacement;
        if(val===100){
            deplacement=-1;
        }
        if (val===0){
            deplacement=1;
        }
    }

    let button = document.getElementById("btn");

    let streak = 0;
    let p = document.querySelector("p");
    //récupération de la zone cliquable
    let zone = document.getElementById("zone");
    let zoneStyle = zone.currentStyle || window.getComputedStyle(zone);

    let zoneL = parseInt(zoneStyle.marginLeft);
    let zoneR = zoneL + parseInt(zoneStyle.width);
    //let zoneR=zone.marginLeft + zone.offsetWidth;
    console.log(zoneL, zoneR);

    let curseurStyle = curseur.currentStyle || window.getComputedStyle(curseur); 
    
    button.addEventListener('mousedown', ()=>{
        zone = document.getElementById("zone");
        zoneStyle = zone.currentStyle || window.getComputedStyle(zone);

        zoneL = parseInt(zoneStyle.marginLeft);
        zoneR = zoneL + parseInt(zoneStyle.width);
        if (parseInt(curseurStyle.marginLeft)>=zoneL && parseInt(curseurStyle.marginLeft)<=zoneR){
            console.log("touché");
            streak++;
            zone.style.marginLeft=Math.random()*90+"%";
        }else{
            streak=0;
        }
        p.textContent="Streak : "+streak;
    });
});