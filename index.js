document.getElementById("NO").addEventListener('mouseover', function (e) {
    document.getElementById("NO").style["top"] = Math.floor((Math.random() * 500) + 1) + 'px';
    document.getElementById("NO").style.setProperty("left", Math.floor((Math.random() * 600) + 1)) + 'px';
    console.log('clicked');
}
);


document.getElementById("YES").addEventListener('click', function (e) {
    document.getElementById("h1").innerText = "Thank you !!";
}
);