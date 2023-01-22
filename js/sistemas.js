function fimDeJogo() {
    var areaM = document.getElementsByClassName('minado')
    var area = document.getElementsByClassName('area')
    for (let i = 0; i < areaM.length; i++) {
        if (i % 2 == 0) {
            areaM[i].style.backgroundColor = 'orange'
        }
        else if (i % 2 != 0) {
            areaM[i].style.backgroundColor = 'rgb(255, 217, 0)';

        }

        if (areaM[i].classList.contains("bandeira") == true) {
            areaM[i].style.backgroundImage = 'url(../img/bandeira.png)'
        }
        else if (areaM[i].classList.contains("bandeira") == false) {
            areaM[i].style.backgroundImage = 'url(../img/mina.jpg)'
        }
    }
    for (let i = 0; i < area.length; i++) {
        area[i].removeAttribute('onclick', `revelarNum(${i})`);
        area[i].removeAttribute('oncontextmenu', `bandeira(${i})`);
    }
    document.querySelector('#restart').style.top = "90px";
    document.querySelector('#restart').style.transition = ".8s";

}

function revelarNum(n) {
    area = document.getElementById(`area${n}`);

    check5(n)

    var qnt = 0;
    for (let i = 0; i < areas.length; i++) {
        if (areas[i].classList.contains('minado') == true) {
            qnt += 1;
        }

    }

    area.innerText = qnt;
    area.style.backgroundColor = "rgb(160, 207, 176)"
    area.style.outline = '1px solid black';
    area.classList.add('revelado')

}

let areas = [];
function check5(n) {
    if ([10, 15, 20].indexOf(n) != -1) {
        areas = [

            areaSE = document.getElementById(`area${n - 6}`),
            areaSM = document.getElementById(`area${n - 5}`),

            areaCE = document.getElementById(`area${n - 1}`),

            areaIE = document.getElementById(`area${n + 4}`),
            areaIM = document.getElementById(`area${n + 5}`),
        ]
    }
    else if ([6, 11, 16].indexOf(n) != -1) {
        areas = [

            areaSM = document.getElementById(`area${n - 5}`),
            areaSD = document.getElementById(`area${n - 4}`),

            areaCD = document.getElementById(`area${n + 1}`),

            areaIM = document.getElementById(`area${n + 5}`),
            areaID = document.getElementById(`area${n + 6}`),
        ]
    }
    else if ([2, 3, 4, 5].indexOf(n) != -1) {
        areas = [

            areaCE = document.getElementById(`area${n - 1}`),
            areaCD = document.getElementById(`area${n + 1}`),

            areaIE = document.getElementById(`area${n + 4}`),
            areaIM = document.getElementById(`area${n + 5}`),
            areaID = document.getElementById(`area${n + 6}`),
        ]
    }

    else if ([21, 22, 23, 24].indexOf(n) != -1) {
        areas = [

            areaSE = document.getElementById(`area${n - 6}`),
            areaSM = document.getElementById(`area${n - 5}`),
            areaSD = document.getElementById(`area${n - 4}`),

            areaCE = document.getElementById(`area${n - 1}`),
            areaCD = document.getElementById(`area${n + 1}`),
        ]
    }

    else if ([1].indexOf(n) != -1) {
        areas = [

            areaCD = document.getElementById(`area${n + 1}`),

            areaIM = document.getElementById(`area${n + 5}`),
            areaID = document.getElementById(`area${n + 6}`),
        ]
    }
    else if ([25].indexOf(n) != -1) {
        areas = [

            areaSE = document.getElementById(`area${n - 6}`),
            areaSM = document.getElementById(`area${n - 5}`),

            areaCE = document.getElementById(`area${n - 1}`),
        ]
    }
    else {
        areas = [

            areaSE = document.getElementById(`area${n - 6}`),
            areaSM = document.getElementById(`area${n - 5}`),
            areaSD = document.getElementById(`area${n - 4}`),

            areaCE = document.getElementById(`area${n - 1}`),
            areaCD = document.getElementById(`area${n + 1}`),

            areaIE = document.getElementById(`area${n + 4}`),
            areaIM = document.getElementById(`area${n + 5}`),
            areaID = document.getElementById(`area${n + 6}`),
        ]
    }

}
console.log(ban)

var ban = false;
var banN = [];

for (let i = 0; i <= 25; i++) {
    banN.push(`ban${i}`)
}

banN.fill(false)

console.log(banN)
function bandeira(i) {
    var area = document.getElementById(`area${i}`)
    var ban = banN[i];
    if (ban == true) {
        area.style.backgroundImage = '';
        if (area.classList.contains("minado") == true) {
            area.setAttribute('onclick', 'fimDeJogo()')
        }
        if (area.classList.contains("minado") == false) {
            area.setAttribute('onclick', `revelarNum(${i})`)
        }
        banN[i] = false;

        area.classList.remove("bandeira")
        console.log(ban)
    }
    else if (ban == false) {
        area.style.backgroundImage = 'url(../img/bandeira.png)';
        area.classList.add("bandeira")
        area.removeAttribute('onclick', 'fimDeJogo()')
        area.removeAttribute('onclick', `revelarNum(${i})`)
        console.log(ban, i)
        banN[i] = true;

    }

}
