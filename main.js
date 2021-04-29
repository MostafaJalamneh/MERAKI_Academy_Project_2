const body = $("body");
const header = $("#header");
const input = $("#search")
const nav = $("#divnav")
const divmain = $("#divmain")
const divP = $("#divP")
const divShB = $("#divShB")
const divSho = $("#divSho")
const divkitc = $("#divkitc")
const divKit = $("#divKit")
const divpro = $("#divpro")
const protab = $("#protab") //the table
const lapEve = $(".lapEve")
const imgg = $("<img src='./images/hp.jpg' >")
const mobEve = $(".mobEve")
const heEve = $(".heEve")
const mevEVE = $(".mevEVE")
const womenEVE = $(".womenEVE")
const babyEVE = $(".babyEVE")


const subMain = $("#subMain")
const eleHead = $("#eleHead")
const cloHead = $("#cloHead")
const decHead = $("#decHead")
const bagHead = $("#bagHead")
const kitHead = $("#kitHead")
const divElTa = $("#divElTa")
const divClot = $("#divClot")
const divClo = $("#divClo")
const divDeco = $("#divDeco")
const divDe = $("#divDe")

const elecTa = $("#elecTa")
const td1 = $("#td1")
const divElec = $("#divElec")

header.css("color", "#CCCCCC");
td1.css("background-image", "url(./images/HP.png)")

header.text("E-Commerce Website")
eleHead.text("Electronic")
cloHead.text("Clothes")
decHead.text("Decor")
bagHead.text("Shoes and bags")
kitHead.text("kitchen")
divElTa.hide();
divClot.hide()
divDeco.hide()
divShB.hide()
divkitc.hide()
protab.hide()

let eCount = 0;
let cCount = 0;
let dCount = 0
let sCount = 0;
let kCount = 0;
let arr = []
let arrL = [{ name: "HP", price: 250, pic: './images/hp.jpg' }, { name: "DELL", price: 200, pic: './images/dell.jpg' }, { name: "Apple", price: 500, pic: './images/apple.jpg' }]
let arrM = [{ name: "Samsung Note 20", price: 450, pic: './images/samsung.jpg' }, { name: "IPhone 12", price: 600, pic: './images/iphone.png' }, { name: "Huawei Nova", price: 200, pic: './images/huawei.jpg' }]
let arrH = [{ name: "Sennheiser", price: 125, pic: './images/sennheiser.jpg' }, { name: "JBL", price: 90, pic: './images/jbl.jpg' }, { name: "Sony", price: 150, pic: './images/sony.jpg' }]
let arrCM = [{ name: "polo", price: 18, pic: './images/polo.png' }, { name: "Levi's", price: 14, pic: './images/Levis.jpg' }, { name: "Buck Mason", price: 12, pic: './images/buck-mason.jpg' }]
let arrCW = [{ name: "Everlane", price: 42, pic: './images/Everlane.jpg' }, { name: "Pact", price: 25, pic: './images/Pact.jpg' }, { name: "Cuyana", price: 30, pic: './images/Cuyana.png' }]
let arrCB = [{ name: "Hanna Andersson", price: 17, pic: './images/Hanna.jpg' }, { name: "Gerber Childrenswear", price: 35, pic: './images/Gerber.jpg' }, { name: "Jazzy Organics", price: 20, pic: './images/Jazzy.jpg' }]

let a = [];
//<img src="./images/hp.jpg" > 
fillData = () => {
    for (let i = 0; i < arr[0].length; i++) {
        a = Object.values(arr[0][i])
        $("<tr> " + "<td>" + a[0] + "<td>" + a[1] + ' $' + "<td>" + `'<img class="image_1" src=${a[2]} '` + "<td>" + "<td>" + "<button class='btn'>BUY</button>" + "</td></td></td></td></td></tr>").appendTo(protab)
    }
}


nav.appendTo(body)
divP.appendTo(body)
divElTa.appendTo(body)
divClot.appendTo(body)
divDeco.appendTo(body)
divShB.appendTo(body)
divkitc.appendTo(body)
divpro.appendTo(body)
protab.appendTo(divpro)

lapEve.on("click", () => {
    $('#protab tbody').empty();
    arr.push(arrL)
    fillData()
    protab.show()
    arr.splice (0,arr.length)    

})
mobEve.on("click", () => {
    $('#protab tbody').empty(); 
    arr.push(arrM)
    fillData()
    protab.show()
    arr.splice (0,arr.length)
})
heEve.on("click", () => {
    $('#protab tbody').empty(); 
    arr.push(arrH)
    fillData()
    protab.show()
    arr.splice (0,arr.length)
})
mevEVE.on("click", () => {
    $('#protab tbody').empty(); 
    arr.push(arrCM)
    fillData()
    protab.show()
    arr.splice (0,arr.length)
})
womenEVE.on("click", () => {
    $('#protab tbody').empty(); 
    arr.push(arrCW)
    fillData()
    protab.show()
    arr.splice (0,arr.length)
})
babyEVE.on("click", () => {
    $('#protab tbody').empty(); 
    arr.push(arrCB)
    fillData()
    protab.show()
    arr.splice (0,arr.length)
})


divElec.on("click", () => {
    eCount++;
    if (eCount % 2 !== 0 || eCount === 0) {
        divElTa.show();
        divClot.hide();
        divDeco.hide();
        divShB.hide();
        divkitc.hide();
    } else if (eCount % 2 === 0) {
        divElTa.hide()
    }

})
divClo.on("click", () => {
    cCount++
    if (cCount % 2 !== 0 || cCount === 0) {
        divClot.show();
        divElTa.hide();
        divDeco.hide();
        divShB.hide();
        divkitc.hide();
    } else if (cCount % 2 === 0) {
        divClot.hide()
    }

})
divDe.on("click", () => {
    dCount++
    if (dCount % 2 !== 0 || dCount === 0) {
        divDeco.show();
        divClot.hide();
        divElTa.hide();
        divShB.hide();
        divkitc.hide()
    } else if (dCount % 2 === 0) {
        divDeco.hide()
    }

})
divSho.on("click", () => {
    sCount++
    if (sCount % 2 !== 0 || sCount === 0) {
        divShB.show();
        divDeco.hide();
        divClot.hide();
        divElTa.hide();
        divkitc.hide()
    } else if (sCount % 2 === 0) {
        divShB.hide()
    }
})
divKit.on("click", () => {
    kCount++
    if (kCount % 2 !== 0 || kCount === 0) {
        divkitc.show();
        divDeco.hide();
        divClot.hide();
        divElTa.hide();
        divShB.hide();
    } else if (kCount % 2 === 0) {
        divkitc.hide()
    }
})
