const body=$("body");
const header=$("#header");
const input=$("#search")
const nav=$("#divnav")
const divmain=$("#divmain")
const divP=$("#divP")

const subMain=$("#subMain")
const eleHead=$("#eleHead")
const cloHead=$("#cloHead")
const decHead=$("#decHead")
const bagHead=$("#bagHead")
const kitHead=$("#kitHead")
const divElTa=$("#divElTa")
const elecTa=$("#elecTa")
const td1=$("#td1")




header.css("color", "#CCCCCC");
td1.css("background-image","url(./images/HP.png)")

header.text("E-Commerce Website")
eleHead.text("Electronic")
cloHead.text("Clothes")
decHead.text("Decor")
bagHead.text("Shoes and bags")
kitHead.text("kitchen")


nav.appendTo(body)
divP.appendTo(body)
divElTa.appendTo(body)


