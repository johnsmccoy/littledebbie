function littledebbies() {
    const snackcakes = [

    ]
    const myfactory = (title, discription, amount, topping, flavor, weight) => {
        let debbies = {
            title: title,
            discription: discription,
            amount: amount,
            topping: topping,
            flavor: flavor,
            weight: weight

        }
        snackcakes.push(debbies)
        const stringify = JSON.stringify(snackcakes)
        localStorage.setItem("cosmicBrownies", stringify)
    }
    // const eastereggbrownies = {
    //     title: "Easter Egg Brownies",
    //     discription: "Deviled Egg Brownies",
    //     amount: 6,
    //     topping: "Frosting",
    //     flavor: "Chocolate",
    //     weight: 261
    // },

    // return(cosmicBrownies,eastereggbrownies)
    myfactory("zebra", "black and white", "dollar", "iceing", "vanilla", "35grams")
    myfactory("john", "hansom", "millions", "hair", "tagalog", "fit")

}

