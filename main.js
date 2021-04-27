const body=$("body");
const header=$("#header");
const input=$("#search")
const nav=$("#divnav")
const eleHead=$("#eleHead")
const cloHead=$("#cloHead")
const decHead=$("#decHead")
const bagHead=$("#bagHead")
const kitHead=$("#kitHead")

header.css("color", "#CCCCCC");

header.text("E-Commerce Website")
eleHead.text("Electronic")
cloHead.text("Clothes")
decHead.text("Decor")
bagHead.text("Shoes and bags")
kitHead.text("kitchen")


divnav.appendTo(body)