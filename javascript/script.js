
// Alert Name
document.getElementById("alert_name").onclick = function () {
    document.getElementById("statement").innerHTML = alert("Sameer Younas")
    document.getElementById("statement").innerHTML = ""
    document.getElementById("output").innerHTML = ""


}
// Alert Number
document.getElementById("alert_nmbr").onclick = function () {
    document.getElementById("statement").innerHTML = alert("+92 312 8540300")
    document.getElementById("statement").innerHTML = ""
    document.getElementById("output").innerHTML = ""


}
// Variable Names

// let html=("<ul> <li>Names can contain letters, digits, underscores, and dollar signs. </li> <li> Names must begin with a letter</li> <li>Names can also begin with $ and _ (but we will not use it in this tutorial).</li></ul>")

document.getElementById("variable-name").onclick = function () {
    document.getElementById("statement").innerHTML = ("Variable Name")

    document.getElementById("output").innerHTML = ("var,const,let")


}

// camelExample
document.getElementById("camel-example").onclick = function () {
    document.getElementById("statement").innerHTML = ("camelCaseExamples")

    document.getElementById("output").innerHTML = ("sirUmairIsOurWebDevTeacher.")


}
// Sum 2 Numbers

document.getElementById("sum2nmbr").onclick = function () {
    let a = 5;
    let b = 10;
    let sum = a + b;
    document.getElementById("statement").innerHTML = "a= " + a + "<br/> b=" + b
    document.getElementById("output").innerHTML = " a+b=" + sum
}
// Sub 2 Numbers
document.getElementById("sub2nmbr").onclick = function () {
    let a = 5;
    let b = 10;
    let sub = b - a;

    document.getElementById("statement").innerHTML = "a= " + a + "<br/> b=" + b
    document.getElementById("output").innerHTML = " b-a=" + sub
}
// Multiply 2 Numbers
document.getElementById("mult2nmbr").onclick = function () {
    let a = 5;
    let b = 10;
    let mul = b * a;

    document.getElementById("statement").innerHTML = "a= " + a + "<br/> b=" + b
    document.getElementById("output").innerHTML = " b*a=" + mul
}
//  Divide 2 Numbers
document.getElementById("divide2nmbr").onclick = function () {
    let a = 5;
    let b = 10;
    let divide = b / a;

    document.getElementById("statement").innerHTML = "a= " + a + "<br/> b=" + b
    document.getElementById("output").innerHTML = " b/a=" + divide
}
//  Divide 2 Numbers
document.getElementById("calculatenmbr").onclick = function () {
    let a = 5;
    let b = 10;
    let c = 55;
    let cal = b / a * c;

    document.getElementById("statement").innerHTML = "a= " + a + "<br/> b=" + b + "<br/> c=" + c
    document.getElementById("output").innerHTML = " b/a*c=" + cal
}
// Statement & Output Clear
document.getElementById("clear-statement").onclick = function () {
    document.getElementById("statement").innerHTML = ""
}
document.getElementById("clear-output").onclick = function () {
    document.getElementById("output").innerHTML = ""
}