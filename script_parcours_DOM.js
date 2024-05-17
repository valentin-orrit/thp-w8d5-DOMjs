// number of p
const numOfParagraphs = document.getElementsByTagName("p").length

console.log("number of paragraphs : " + numOfParagraphs)

// coucou
const coucou = document.getElementById("coucou").innerHTML

console.log("\n the text is : " + coucou)

// 3e a html
const thirdLink = document.getElementsByTagName("a")[2].href

console.log("\n" + thirdLink)

// compte-moi
const numOfCompteMoi = document.getElementsByClassName("compte-moi").length

console.log("\n" + numOfCompteMoi)

// compte moi in li
const numOfCompteMoiInLi = document.querySelectorAll("li.compte-moi").length

console.log("\n" + numOfCompteMoiInLi)

// compte moi in li in ol
const numOfCompteMoiInLiInOl = document.querySelectorAll("ol li.compte-moi").length

console.log("\n" + numOfCompteMoiInLiInOl)

// compte moi in li in ol
const hiddenUl = document.querySelectorAll("div ul")[1].querySelectorAll("li")[0].innerHTML

console.log("\n" + hiddenUl)