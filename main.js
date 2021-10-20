function reSizeMe(idtags) {
    idtags.forEach(idtag => {
        document.getElementById(idtag).innerHTML = "Aumentei de tamanho!";
    });
}