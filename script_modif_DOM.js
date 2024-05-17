// Change the title
const changeTitles = () => {
    const title = document.getElementsByTagName("h1")[0]
    title.innerHTML = "Ce titre est modifié!"
}

changeTitles()

// change call to action
const changeCallToActions = () => {
    const primaryBTN = document.getElementsByClassName("btn btn-primary my-2")[0]
    primaryBTN.innerHTML = "OK je veux tester"
    primaryBTN.href = "https://www.thehackingproject.org"

    const secondaryBTN = document.getElementsByClassName("btn btn-secondary my-2")[0]
    secondaryBTN.innerHTML = "Non merci!"
    secondaryBTN.href = "https://www.thehackingproject.org"

    // console.log(primaryBTN)
}

changeCallToActions()

// change logo name
const changeLogoName = () => {
    const changeAlbum = document.getElementsByClassName("navbar-brand d-flex align-items-center")[0]
    changeAlbum.innerHTML = "The THP Experience"
    changeAlbum.style.fontSize = "2em"
}

changeLogoName()

// populate Image
const populateImage = () => {
    const cards = document.getElementsByClassName("card mb-4 box-shadow")

    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png", "https://img.icons8.com/color/480/000000/css3.png", "https://img.icons8.com/color/480/000000/javascript.png", "https://img.icons8.com/color/480/000000/ruby-programming-language.png", "https://img.icons8.com/color/480/000000/bootstrap.png", "https://img.icons8.com/color/480/000000/github.png", "https://i.imgur.com/bJE9Pka.png", "https://avatars2.githubusercontent.com/u/25484553?s=200&v=4", "https://img.icons8.com/color/480/000000/heroku.png"];

    for (let i = 0; i < cards.length; i++) {
        document.getElementsByClassName("card-img-top")[i].src = imagesArray[i]
    }
}

populateImage()

//delete cards
const deleteLastCards = () => {
    const cards = document.getElementsByClassName("card mb-4 box-shadow")

    console.log(cards.length)

    for (let i = (cards.length) - 1; i > 6 ; i--) {
        cards[i].remove()
        // console.log(i)
    }
}

deleteLastCards()