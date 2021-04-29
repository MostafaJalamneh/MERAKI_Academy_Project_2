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

let eCount = 0;
let cCount = 0;
let dCount = 0
let sCount = 0;
let kCount = 0;
let arr = [{ name: "HP", price: 250 }]
let a = Object.values(arr[0])
fillData = () => {
    
        $("<tr> " + "</tr>")
        $("<td>" + a[0] + "<td>" + a[1] + "</td></td").appendTo(protab)
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


divElec.on("click", () => {
    eCount++;
    fillData()
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
