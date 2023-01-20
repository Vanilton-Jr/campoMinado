function fimDeJogo() {
    var area = document.getElementsByClassName('minado')
    for (let i = 0; i < area.length; i++) {
        if (i % 2 == 0) {
            area[i].style.backgroundColor = 'orange'
        }
        else if (i % 2 != 0) {
            area[i].style.backgroundColor = 'rgb(255, 217, 0)';

        }
        area[i].style.backgroundImage = 'url(../img/mina.jpg)'
    }
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

}

let areas = [];
function check5(n) {
    if ([10,15,20].indexOf(n) != -1){
         areas = [

            areaSE = document.getElementById(`area${n - 6}`),
            areaSM = document.getElementById(`area${n - 5}`),
    
            areaCE = document.getElementById(`area${n - 1}`),
    
            areaIE = document.getElementById(`area${n + 4}`),
            areaIM = document.getElementById(`area${n + 5}`),
        ]
    }
    else if ([6,11,16].indexOf(n) != -1){
         areas = [

            areaSM = document.getElementById(`area${n - 5}`),
            areaSD = document.getElementById(`area${n - 4}`),
    
            areaCD = document.getElementById(`area${n + 1}`),
    
            areaIM = document.getElementById(`area${n + 5}`),
            areaID = document.getElementById(`area${n + 6}`),
    ]
}
else if ([2,3,4,5].indexOf(n) != -1){
     areas = [

        areaCE = document.getElementById(`area${n - 1}`),
        areaCD = document.getElementById(`area${n + 1}`),

        areaIE = document.getElementById(`area${n + 4}`),
        areaIM = document.getElementById(`area${n + 5}`),
        areaID = document.getElementById(`area${n + 6}`),
    ]
}

else if ([21,22,23,24].indexOf(n) != -1){
     areas = [

        areaSE = document.getElementById(`area${n - 6}`),
        areaSM = document.getElementById(`area${n - 5}`),
        areaSD = document.getElementById(`area${n - 4}`),

        areaCE = document.getElementById(`area${n - 1}`),
        areaCD = document.getElementById(`area${n + 1}`),
    ]
}

else if ([1].indexOf(n) != -1){
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
else{
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