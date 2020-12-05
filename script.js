let FramePrice = 300000;
let price = 300000;
let EnginePrice = 0;
var TransPrice = 0;
var TotalPrice = 0;
let currentColor = "img/black.png";
let airCondition = 0;
let cruiseControl = 0;
let xenon = 0;

$(window).on("load", function () {
    document.getElementById("carPrice").innerHTML = price;
})

$("#whiteButton").hover(function () {
    let img = document.getElementById("carImg");
    img.setAttribute("src", "img/white.png");
    console.log("Белая машина");
}, function () {
    let img = document.getElementById("carImg");
    img.setAttribute("src", currentColor);
})

// $("#whiteButton").click(function(){


// })

$("#blackButton").hover(function () {

    let img = document.getElementById("carImg");
    img.setAttribute("src", "img/black.png");
    console.log("Черная машина");
}, function () {
    let img = document.getElementById("carImg");
    img.setAttribute("src", currentColor);
})

$("#redButton").hover(function () {
    let img = document.getElementById("carImg");
    img.setAttribute("src", "img/red.png");
    console.log("Белая машина");
}, function () {
    let img = document.getElementById("carImg");
    img.setAttribute("src", currentColor);
})

$('#whiteButton').on("click", function () {
    currentColor = "img/white.png";
    SetColor();
})

$('#blackButton').on("click", function () {
    currentColor = "img/black.png";
    SetColor();
})

$('#redButton').on("click", function () {
    currentColor = "img/red.png";
    SetColor();
})

//Функция установки текущего цвета
function SetColor() {
    let newImg = document.getElementById("carImg");
    newImg.setAttribute("src", currentColor);
}

// обрабатываем изменение радиобаттон трансимиссия
$("body").on("change", '[name = "transmissionRadio"]', function () {
    TransPrice = $('input[name=transmissionRadio]:checked').val();
    console.log(TransPrice);
    calculatePrice();
})

//обрабатываем изменение радиобаттон двигатель
$("body").on("change", '[name = "engineRadio"]', function () {
    EnginePrice = $('input[name=engineRadio]:checked').val();
    console.log(EnginePrice);
    calculatePrice();
})
// обрабатываем чек-бокс ксенон
$('body').on('change', '[name = "xenonLights"]', function () {
    if ($(this).is(':checked')) {
        xenon = $('input[name=xenonLights]:checked').val();
    } else {
        xenon = 0;
    }
    calculatePrice();
})

// обрабатываем чек-бокс круиз-контроль
$('body').on('change', '[name = "cruiseControl"]', function () {
    if ($(this).is(':checked')) {
        cruiseControl = $('input[name=cruiseControl]:checked').val();
    } else {
        cruiseControl = 0;
    }
    calculatePrice();
})

$('body').on('change', '[name = "airCondition"]', function () {
    if ($(this).is(':checked')) {
        airCondition = $('input[name=airCondition]:checked').val();
    } else {
        airCondition = 0;
    }
    calculatePrice();
})



function calculatePrice() {
    TotalPrice = parseInt(FramePrice) + parseInt(EnginePrice) + parseInt(TransPrice) + parseInt(xenon) + parseInt(cruiseControl) + parseInt(airCondition);
    document.getElementById("carPrice").innerHTML = TotalPrice;
}
