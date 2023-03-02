var i = 0;
var txt = `Hi, I'm Tim. I'm passionate about web development and creativity.
Please take a look around my site.
You'll find web development projects, photos, music and videos.`;
var txtmdrn = `您好，我 叫 Tim。我 觉得 网络 和 网络 发展 都 有 意思的很。请看到我的网站。你要发现 网络 工程， 音乐 和 录像。 `;

var speed = 60;

let greeting = document.getElementById('greeting');
let handwave = document.getElementById('wave');
// let langchange = document.getElementById('english').style.display = 'none';
let langButton = document.getElementById('langBtn');
let dropdown = document.getElementById('dropdown');
let langEng = document.getElementById('langEng');
let langZh = document.getElementById('langZh');
let mandarin = document.querySelectorAll('.mandarin');

function typeWriter() {
    if (i <= txt.length) {
        document.getElementById('greeting').style.display = "flex";
        document.getElementById('wave').style.fill = "black";
        document.getElementById('title').style.margin = "10px";
        document.getElementById('mySidenav').style.width = "0";
        document.getElementById('wind').style.display = "inherit";
        document.getElementById('introType').innerHTML+=txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);   
    } else {
        document.getElementById('mySidenav').style.width = "0";
        document.getElementById('wind').style.display = "inherit";
    }
}


function openNav() {
    document.getElementById('mySidenav').style.width = "200px";
    document.getElementById('wind').style.display = "none";
    document.getElementById('windOpen').style.display = "inherit";
}

function closeNav() {
    document.getElementById('mySidenav').style.width = "0";
    document.getElementById('wind').style.display = "inherit";
    document.getElementById('windOpen').style.display = "none";
}


langButton.addEventListener("click", function() {
    dropdown.style.display = "block";
});

// greeting.addEventListener("click", function() {
//     document.getElementById('greeting').style.display = "none";
//     document.getElementById('title').style.margin = "90px auto auto auto";
//   });

handwave.addEventListener("click", function(){
    typeWriter();
});

// langEng.addEventListener("click", function() {
//     document.querySelectorAll('.mandarin').style.display = 'none';
//     document.querySelectorAll('.english').style.display = 'inline';
// });

langZh.addEventListener("click", e => {
    document.getElementById('mandarin').style.display = 'inline';
});

console.log(mandarin);