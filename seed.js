import { UserModel, RecipeModel, dbClose } from "./db.js"

await RecipeModel.deleteMany()
console.log("Recipes deleted")
await UserModel.deleteMany()
console.log("Users deleted")

const users = [
    { username: "BakeBoss", password: "password1", favourites: []},
    { username: "KitchenKing", password: "password2", favourites: []},
    { username: "CookCraze", password: "password3", favourites: []},
    { username: "WhiskWizard", password: "password4", favourites: []},
    { username: "RecipeRocker", password: "password5", favourites: []},
    { username: "MasterChefMate", password: "password6", favourites: []}   
]

const insertusers = await UserModel.insertMany(users)
console.log("Users inserted")

const recipes = [
    {
      id: 0,
      name: "Vegetable Soup",
      author: insertusers[0],
      description: "A hearty and comforting soup made with a variety of vegetables, perfect for a cold winter day.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}, {username: insertusers[3], rating: 5}
      ],
      tags: ["Soup", "Vegetarian", "Easy"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675125479/Recipe%20Photos/image_f7aixd.png",
      ingredients: ["1 onion, diced", "1 carrot, diced", "1 potato, diced", "1 cup of water", "1 can of diced tomatoes", "2 cloves of garlic, minced", "1 tsp of olive oil", "1 tsp of salt", "1/2 tsp of black pepper", "1/4 tsp of thyme"],
      method: ["In a large pot, heat the olive oil over medium heat", "Add the onion, carrot, and potato and sauté for 5 minutes", "Add the garlic, salt, pepper, and thyme and sauté for an additional 2 minutes", "Add the diced tomatoes and water, bring the mixture to a boil", "Reduce the heat to low, cover and let simmer for 30 minutes or until vegetables are tender", "Serve with bread or crackers if desired"],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This soup was delicious! I added some shredded chicken and it was a great addition."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "So easy to make and so comforting on a cold day. Will definitely make this again."
        },
        {    
          username: insertusers[3],
          date: new Date("2023-01-30"),
          comment: "I was blown away by the quality of the ingredients used in this dish. It was fresh and bursting with flavor."
        }
      ]
    },
    {
      id: 1,
      name: "Spaghetti Bolognese",
      author: insertusers[1],
      description: "A classic Italian dish made with a rich meat sauce and spaghetti.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["Pasta", "Italian", "Easy"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675125791/Recipe%20Photos/image_ojxpvy.png",
      ingredients: ["1 pound of spaghetti", "1 pound of ground beef", "1 onion, diced", "2 cloves of garlic, minced", "1 can of diced tomatoes", "1 cup of beef broth", "1 tsp of olive oil", "1 tsp of salt", "1/2 tsp of black pepper", "1 tsp of dried basil"],
      method: ["Cook the spaghetti according to package instructions and set aside", "In a large pot, heat the olive oil over medium heat", "Add the onion, garlic, and ground beef and sauté until the beef is browned", "Add the diced tomatoes, beef broth, salt, pepper, and basil and bring to a boil", "Reduce the heat to low, cover and let simmer for 30 minutes", "Serve the meat sauce over the cooked spaghetti"],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This bolognese sauce was delicious! I added some red wine for extra flavor."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "This recipe is a family favorite, it's so easy to make and always a hit."
        },
        {
          username: insertusers[3],
          date: new Date("2023-01-30"),
          comment: "This was my first time trying this cuisine, and I was pleasantly surprised by how much I enjoyed it. The portions were generous, and the prices were reasonable."
        }
      ]
    },
    {
      id: 2,
      name: "Lemon Garlic Shrimp Scampi",
      author: insertusers[3],
      description: "This Lemon Garlic Shrimp Scampi recipe is the perfect quick and easy dinner that can be ready in under 30 minutes. Succulent shrimp are cooked in a buttery lemon garlic sauce and served over pasta for a satisfying meal.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["Seafood", "Italian", "Hard"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675125898/Recipe%20Photos/image_ejjnvv.png",
      ingredients: ["1 lb shrimp, peeled and deveined", "4 cloves of garlic, minced", "1/4 cup of lemon juice", "1/4 cup of white wine", "4 tablespoons of butter", "Salt and pepper, to taste", "1/4 cup of parsley, chopped", "1 lb of spaghetti"],
      method: ["Cook pasta according to package instructions, reserve 1 cup of pasta water before draining. ",
      "In a large skillet, melt butter over medium heat. Add garlic and cook until fragrant, about 1 minute. Add shrimp and cook for 2-3 minutes per side or until pink. ",
      "Add lemon juice, white wine, and bring to a simmer. Cook for 1-2 minutes until the sauce thickens. Season with salt and pepper, to taste. ",
      "Add cooked pasta to the skillet and toss to combine. If the sauce is too thick, add reserved pasta water, 1 tablespoon at a time, until desired consistency is reached. ",
      "Remove from heat and toss in chopped parsley. Serve hot and enjoy!"],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "I made this recipe for dinner last night and it was a hit! The shrimp were cooked perfectly and the lemon garlic sauce was so flavorful. I will definitely be making this again."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I made this recipe for a dinner party and received so many compliments! It's a perfect balance of flavors and so easy to make. I highly recommend giving it a try."
        },
        {
          username: insertusers[3],
          date: new Date("2023-01-30"),
          comment: "The taste of this dish was out of this world! I can't wait to try more recipes from this chef."
        }
      ]
    },
    {
      id: 3,
      name: "Lemon Chicken Piccata",
      author: insertusers[0],
      description: "This classic Italian-American dish features tender chicken cutlets in a tangy lemon sauce, served over spaghetti or a bed of rice. Perfect for a fancy dinner at home or a special occasion.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["Chicken", "Italian", "Medium"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675125914/Recipe%20Photos/image_wwiqvd.png",
      ingredients: ["4 boneless, skinless chicken breasts", "Salt and pepper", "Flour for dusting", "1/4 cup olive oil", "1/4 cup butter", "1/2 cup chicken broth", "1/2 cup lemon juice", "1/4 cup capers", "1/4 cup chopped fresh parsley"],
      method: ["Pound the chicken breasts to an even thickness, season with salt and pepper, and dust with flour.","In a large skillet, heat the olive oil and butter over medium-high heat.", "Cook the chicken for 3-4 minutes per side, or until golden brown and cooked through.", "Remove the chicken to a platter and cover with foil to keep warm.", "In the same skillet, add the chicken broth, lemon juice, capers, and parsley.", "Cook for 2-3 minutes, or until the sauce is thickened and bubbly.", "Serve the chicken over spaghetti or rice, and spoon the sauce over the top."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This was absolutely delicious! I've made it for dinner parties and it's always a hit. I highly recommend it."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I'm not usually a fan of capers but they really add a nice briny flavor to the dish. Will definitely make again!"
        },
        {
          username: insertusers[3],
          date: new Date("2023-01-30"),
          comment: "This dish was a huge hit at our dinner party! Everyone loved it and asked for the recipe."
        }
      ]
    },
    {
      id: 4,
      name: "Chocolate Chip Cookies",
      author: insertusers[0],
      description: "These classic chocolate chip cookies are soft, chewy, and loaded with chocolate chips. Perfect for a sweet treat or a dessert option.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["Dessert", "Cookies", "Chocolate chip", "Medium"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675125923/Recipe%20Photos/image_y3thvh.png",
      ingredients: [
          "2 and 1/4 cups all-purpose flour",
          "1 tsp baking soda",
          "1 tsp salt",
          "1 cup unsalted butter, at room temperature",
          "3/4 cup white sugar",
          "3/4 cup brown sugar",
          "2 large eggs",
          "2 tsp vanilla extract",
          "2 cups semisweet chocolate chips"
      ],
      method: [
        "Preheat the oven to 350 degrees F (175 degrees C). Line a baking sheet with parchment paper.",
        "In a medium bowl, whisk together the flour, baking soda, and salt. Set aside.",
        "In a large mixing bowl, cream together the butter, white sugar, and brown sugar until light and fluffy.",
        "Beat in the eggs, one at a time, followed by the vanilla extract.",
        "Gradually stir in the flour mixture until just combined.",
        "Fold in the chocolate chips.",
        "Using a cookie scoop or spoon, drop dough balls onto the prepared baking sheet.",
        "Bake for 12-15 minutes, or until the edges are golden brown.",
        "Allow to cool on the baking sheet for 5 minutes before transferring to a wire rack to cool completely."
      ],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "These cookies were delicious! I will definitely make them again."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I brought these to a party and they were a hit! So many compliments on the recipe."
        },
        {
          username: insertusers[3],
          date: new Date("2023-01-30"),
          comment: "The flavors in this dish were so unique and enjoyable. I never would have thought to combine these ingredients, but it worked so well!"
        }
      ]
    },
    {
      id: 5,
      name: "Spicy Peanut Noodles",
      author: insertusers[3],
      description: "This recipe is perfect for a quick and easy weeknight dinner that is packed with flavor. Spicy peanut noodles are made with a homemade peanut sauce, and are perfect served over rice or noodles.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["Spicy", "Peanut sauce", "Noodles", "Dinner", "Medium", "Thai"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126162/Recipe%20Photos/image_taokx6.png",
      ingredients: ["8 oz linguine", "1/4 cup creamy peanut butter", "1/4 cup soy sauce", "1/4 cup rice vinegar", "2 tbsp sesame oil", "1 tbsp honey", "1 tbsp grated ginger", "1 tsp red pepper flakes", "3 cloves garlic, minced"],
      method: ["Cook the linguine according to package instructions.", "Meanwhile, in a small saucepan, whisk together the peanut butter, soy sauce, rice vinegar, sesame oil, honey, ginger, red pepper flakes and garlic. Cook over medium heat, stirring constantly, until the sauce is heated through and smooth.", "Drain the cooked linguine and toss with the peanut sauce.", "Serve hot, garnished with chopped peanuts and green onions if desired."],
      comments: [
        {
        username: insertusers[1],
        date: new Date("2023-01-30"),
        comment: "This recipe is amazing! I added some chicken and it was delicious."
        },
        {
        username: insertusers[2],
        date: new Date("2023-01-30"),
        comment: "I made this for my family and they loved it. I will definitely be making it again."
        },
        {
          username: insertusers[3],
          date: new Date("2023-01-30"),
          comment: "I was pleasantly surprised by how healthy this dish was while still being so flavorful and filling."
        }
      ]
    },
    {
      id: 6,
      name: "Spicy Chipotle Black Bean Tacos",
      author: insertusers[0],
      description: "These Spicy Chipotle Black Bean Tacos are the perfect vegan and gluten-free meal. Packed with protein and flavor, these tacos are sure to please.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["vegan", "gluten-free", "spicy", "black bean", "tacos", "mexican", "medium"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126171/Recipe%20Photos/image_lqajjk.png",
      ingredients: ["1 can black beans, drained and rinsed", "1 tbsp olive oil", "1 onion, diced", "3 cloves garlic, minced", "1 tbsp chili powder", "1 tsp cumin", "1/2 tsp smoked paprika", "1/4 tsp chipotle powder", "1/4 tsp salt", "1/4 cup water", "8 corn tortillas", "Toppings of choice (avocado, cilantro, lime wedges, etc.)"],
      method: ["In a medium saucepan, heat the olive oil over medium heat. Add the onion and garlic and cook until softened, about 5 minutes.", "Stir in the black beans, chili powder, cumin, smoked paprika, chipotle powder, salt, and water. Bring to a simmer and cook for 10-15 minutes, or until the sauce has thickened.", "While the bean mixture is cooking, warm the tortillas in the oven or on a skillet.", "To assemble the tacos, fill each tortilla with the black bean mixture and your desired toppings.", "Serve immediately and enjoy!"],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "These tacos are so good! I added some cheese and sour cream, and it was delicious."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I made these for a vegan friend and they loved it. I will definitely be making them again."
        }
      ]
    },
    {
      id: 7,
      name: "Creamy Garlic Mushroom Chicken",
      author: insertusers[0],
      description: "Creamy Garlic Mushroom Chicken is a comforting and delicious dinner that is perfect for any night of the week. Tender chicken is cooked in a rich and creamy garlic mushroom sauce, making it perfect served over rice or noodles.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["chicken", "mushroom", "creamy", "garlic", "dinner", "easy"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126177/Recipe%20Photos/image_uie23b.png",
      ingredients: ["4 boneless, skinless chicken breasts", "1/4 cup all-purpose flour", "1 tsp salt", "1/2 tsp black pepper", "1 tbsp olive oil", "1 tbsp butter", "8 oz sliced mushrooms", "3 cloves garlic, minced", "1 cup chicken broth", "1/2 cup heavy cream", "1/4 cup grated Parmesan cheese", "2 tbsp chopped fresh parsley"],
      method: ["In a shallow dish, combine the flour, salt and pepper. Dredge the chicken in the flour mixture, shaking off any excess.", "In a large skillet, heat the olive oil and butter over medium heat. Add the chicken and cook for 6-8 minutes per side, or until golden brown and cooked through.", "Remove the chicken from the skillet and set aside.", "Add the mushrooms and garlic to the skillet and cook until softened, about 5 minutes. Stir in the chicken broth, heavy cream and Parmesan cheese. Bring to a simmer and cook for 2-3 minutes, or until the sauce has thickened.", "Return the chicken to the skillet and spoon the sauce over the top. Sprinkle with parsley and serve immediately."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This recipe is amazing! I added some spinach and it was delicious."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I made this for my family and they loved it. I will definitely be making it again."
        }
      ]
    },
    {
      id: 8,
      name: "Vegan Lentil Shepherd's Pie",
      author: insertusers[0],
      description: "This Vegan Lentil Shepherd's Pie is hearty, comforting and perfect for a cold winter evening. Lentils are cooked with vegetables and spices, topped with a layer of creamy mashed potatoes, and then baked until golden brown.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["vegan", "lentils", "shepherd's pie", "comfort food", 'dinner', 'hard'],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126185/Recipe%20Photos/image_plvsmx.png",
      ingredients: ["2 cups cooked green or brown lentils", "1 onion, diced", "2 cloves garlic, minced", "1 carrot, diced", "1 cup frozen peas", "1 tbsp tomato paste", "1 tbsp flour", "1 tsp dried thyme", "1 tsp dried rosemary", "1/4 tsp black pepper", "1 cup vegetable broth", "4 cups mashed potatoes", "1 tbsp vegan butter", "1 tbsp chopped fresh parsley"],
      method: ["Preheat the oven to 375°F (190°C). Grease a 9x13 inch baking dish.", "In a large skillet, sauté the onion and garlic in a little bit of oil until softened. Add the carrot and cook for a few minutes more.", "Stir in the lentils, peas, tomato paste, flour, thyme, rosemary and pepper. Add the broth and bring the mixture to a simmer. Cook for about 5 minutes, or until the mixture has thickened.", "Transfer the lentil mixture to the prepared baking dish. Spread the mashed potatoes over the top, smoothing out the surface.", "Bake for 25-30 minutes, or until the top is golden brown and the filling is bubbly.", "Remove from the oven and let cool for a few minutes before serving."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This recipe was delicious! I would definitely make it again."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I made this for dinner and it was a hit with my family. Even my meat-loving husband enjoyed it!"
        }
      ]
    },
    {
      id: 9,
      name: "Vegan Chickpea Curry",
      author: insertusers[0],
      description: "This vegan chickpea curry is a hearty and comforting dish that is perfect for a weeknight dinner. Chickpeas are simmered in a flavorful tomato-based sauce with spices and vegetables, and served over rice or with naan bread.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["vegan", "chickpea", "Indian", "comfort food", "medium"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126191/Recipe%20Photos/image_setj7i.png",
      ingredients: ["1 tbsp vegetable oil", "1 onion, diced", "3 cloves garlic, minced", "1 tbsp grated ginger", "2 tsp ground cumin", "1 tsp ground coriander", "1/2 tsp ground turmeric", "1/2 tsp ground cinnamon", "1/4 tsp cayenne pepper", "1 (14 oz) can diced tomatoes", "1 cup vegetable broth", "1 cup coconut milk", "2 cups cooked chickpeas", "1 cup diced carrots", "1 cup diced potatoes", "1 cup frozen peas", "1 tbsp chopped fresh cilantro"],
      method: ["In a large pot, heat the oil over medium heat. Add the onion and cook until softened, about 5 minutes. Add the garlic and ginger and cook for 1-2 minutes more.", "Stir in the cumin, coriander, turmeric, cinnamon, and cayenne pepper. Cook for 1-2 minutes, or until fragrant.", "Add the diced tomatoes, vegetable broth, coconut milk, chickpeas, carrots, potatoes, and peas. Bring the mixture to a simmer and cook until the vegetables are tender, about 20-25 minutes.", "Stir in the cilantro and serve over rice or with naan bread."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This recipe was delicious! I would definitely make it again."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I made this for dinner and it was a hit with my family. Even my meat-loving husband enjoyed it!"
        }
      ]
    },
    {
      id: 10,
      name: "Authentic Chicken Tikka Masala",
      author: insertusers[0],
      description: "This is an authentic recipe for the popular Indian dish, Chicken Tikka Masala. Tender chunks of chicken are marinated in yogurt and spices, then grilled or broiled, and simmered in a creamy tomato-based sauce. It is best served with rice or naan bread.",
      rating_list: [
        {username: insertusers[1], rating: 5}, {username: insertusers[2], rating: 4}
      ],
      tags: ["chicken", "tikka masala", "curry", "Indian", "hard"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126197/Recipe%20Photos/image_mchjpl.png",
      ingredients: ["1 lb boneless, skinless chicken breasts, cut into bite-sized chunks", "1 cup plain yogurt", "1 tbsp grated ginger", "2 cloves garlic, minced", "1 tsp ground cumin", "1 tsp ground coriander", "1/2 tsp ground turmeric", "1/2 tsp ground cinnamon", "1/4 tsp cayenne pepper", "1/4 tsp ground black pepper", "1 tbsp vegetable oil", "1 onion, diced", "3 cloves garlic, minced", "1 tbsp grated ginger", "1 tsp ground cumin", "1 tsp ground coriander", "1/2 tsp ground turmeric", "1/2 tsp ground cinnamon", "1/4 tsp cayenne pepper", "1/4 tsp ground black pepper", "1 (14 oz) can diced tomatoes", "1 cup heavy cream", "1/4 cup chopped fresh cilantro"],
      method: ["In a large bowl, combine the chicken, yogurt, ginger, garlic, cumin, coriander, turmeric, cinnamon, cayenne pepper, and black pepper. Mix well, cover and refrigerate for at least 2 hours.", "In a large pot, heat the oil over medium heat. Add the onion and cook until softened, about 5 minutes. Add the garlic and ginger and cook for 1-2 minutes more.", "Stir in the cumin, coriander, turmeric, cinnamon, and cayenne pepper. Cook for 1-2 minutes, or until fragrant.", "Add the diced tomatoes and bring the mixture to a simmer. Cook for 10-15 minutes.", "Thread the marinated chicken onto skewers and grill or broil until cooked through. Add the cooked chicken to the simmering sauce and stir in the heavy cream and cilantro. Cook for 5-10 minutes more, or until heated through. Serve with rice or naan bread."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This recipe was delicious! I would definitely make it again."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I made this for dinner and it was a hit with my family. It was very flavorful."
        }
      ]
    },
    {
      id: 11,
      name: "Vegetable Fried Rice",
      author: insertusers[0],
      description: "This delicious and easy recipe is a great way to use up leftover rice and vegetables. It's a perfect dish to make when you're short on time and looking for a quick and simple meal. It's also vegan and can be made gluten-free by using tamari instead of soy sauce",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["vegetable", "fried rice", "vegan", "gluten-free", "easy", "Asian"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126371/Recipe%20Photos/image_ujavr9.png",
      ingredients: ["4 cups cooked white rice", "2 tbsp vegetable oil", "1 onion, diced", "2 cloves garlic, minced", "1 cup diced carrots", "1 cup frozen peas", "1 cup diced bell peppers", "3 tbsp soy sauce", "1 tbsp rice vinegar", "1 tsp sesame oil", "2 green onions, thinly sliced"],
      method: ["In a large skillet or wok, heat the vegetable oil over medium-high heat. Add the onion and garlic and cook until softened, about 2-3 minutes.", "Add the carrots, peas, and bell peppers and cook until the vegetables are tender, about 5 minutes.", "Stir in the cooked rice, soy sauce, rice vinegar, and sesame oil. Cook, stirring frequently, until the rice is heated through, about 3-4 minutes.", "Stir in the green onions and cook for 1-2 minutes more.", "Serve the fried rice immediately."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This recipe was very easy to make and tasted delicious!"
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I made this for dinner and it was a hit with my family. It's a great way to use up leftover rice."
        }
      ]
    },
    {
      id: 12,
      name: "Vegan Breakfast Tacos",
      author: insertusers[3],
      description: "These vegan breakfast tacos are a delicious and healthy way to start your day. They're filled with scrambled tofu, sautéed peppers, and onions, and topped with avocado and salsa. They're perfect for a quick and easy breakfast, and can be easily customized to suit your taste.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["vegan", "breakfast", "tacos", "mexican", "easy"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126378/Recipe%20Photos/image_aezj2q.png",
      ingredients: ["1 block of firm tofu", "1 tbsp olive oil", "1/2 red onion, diced", "1 red bell pepper, diced", "1 green bell pepper, diced", "1 tsp chili powder", "1/2 tsp ground cumin", "1/2 tsp garlic powder", "1/4 tsp salt", "1/4 tsp black pepper", "1 avocado, diced", "1/2 cup salsa", "8 corn tortillas"],
      method: ["Drain the tofu and crumble it into a bowl. Heat the olive oil in a skillet over medium heat. Add the onion, bell peppers, chili powder, cumin, garlic powder, salt and pepper to the skillet. Cook for about 5 minutes or until the vegetables are tender.", "Add the crumbled tofu to the skillet and cook for another 5 minutes or until the tofu is heated through. Stir occasionally.", "Warm the tortillas in the microwave or on a skillet. Divide the tofu mixture among the tortillas. Top each taco with avocado and salsa.", "Serve the vegan breakfast tacos immediately."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "These vegan breakfast tacos were so delicious and easy to make. I will definitely be making them again!"
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I loved these vegan breakfast tacos! They were a great way to start my day, and I appreciated the simple, clean ingredients."
        }
      ]
    },
    {
      id: 13,
      name: "Traditional English Breakfast",
      author: insertusers[0],
      description: "This traditional English breakfast is the perfect way to start your day. It includes all the classic components of a full English breakfast: eggs, bacon, sausage, black pudding, baked beans, grilled tomatoes, and mushrooms. Serve with a side of toast and a cup of tea for a truly authentic experience.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["english", "breakfast", "traditional", "hard"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126383/Recipe%20Photos/image_kcpynf.png",
      ingredients: ["4 eggs", "4 slices of bacon", "4 sausages", "4 slices of black pudding", "1 can of baked beans", "2 tomatoes, halved", "8 mushrooms, halved", "Salt and pepper, to taste", "Butter or oil, for frying", "4 slices of toast"],
      method: ["Heat a pan over medium-high heat and add a little butter or oil. Fry the bacon, sausages, black pudding, tomatoes, and mushrooms until cooked through. Season with salt and pepper to taste.", "In a separate pan, fry or scramble the eggs to your liking.", "Serve the cooked meats and vegetables on plates, with the fried eggs on top. Warm the baked beans in a saucepan or microwave and serve on the side.", "Serve with toast and a cup of tea."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This traditional English breakfast was delicious. It was a great way to start the day and I loved all the different components."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I loved this traditional English breakfast, it was a real treat! The black pudding was a new experience for me but I liked it a lot."
        }
      ]
    },
    {
      id: 14,
      name: "Kung Pao Chicken",
      author: insertusers[0],
      description: "Kung Pao Chicken is a popular Szechuan dish made with tender chicken, peanuts, vegetables, and a spicy Kung Pao sauce. This dish is perfect for those who love a little heat in their food. Serve it over steamed rice for a complete meal.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["asian", "szechuan", "spicy", "medium"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126392/Recipe%20Photos/image_vncv8c.png",
      ingredients: ["1 lb boneless chicken, cut into small chunks", "1 red bell pepper, cut into small chunks", "1 green bell pepper, cut into small chunks", "1/2 cup peanuts", "1/4 cup cornstarch", "2 tablespoons oil", "2 cloves garlic, minced", "1 tablespoon ginger, minced", "2 green onions, sliced", "1/4 cup Kung Pao sauce", "1/4 cup chicken broth", "1 tablespoon soy sauce", "1 tablespoon rice vinegar", "1 teaspoon sesame oil", "1 teaspoon sugar", "1/4 teaspoon red pepper flakes"],
      method: ["Mix the chicken chunks with the cornstarch in a bowl and toss to coat the chicken evenly.", "Heat a pan or wok over high heat and add oil. Once hot, add the chicken chunks and stir-fry for about 4-5 minutes or until the chicken is cooked through.", "Remove the chicken from the pan and set aside.", "Add the garlic, ginger, and red and green bell peppers to the pan and stir-fry for 2-3 minutes or until the vegetables are tender.", "Add the Kung Pao sauce, chicken broth, soy sauce, rice vinegar, sesame oil, sugar, and red pepper flakes to the pan and stir to combine.", "Add the chicken back to the pan and stir to coat it in the sauce.", "Add the peanuts and green onions to the pan and stir to combine.", "Serve over steamed rice."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This Kung Pao chicken was delicious! The spicy Kung Pao sauce was perfect and I loved the crunch of the peanuts."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I loved this Kung Pao chicken, it had just the right amount of heat for me and the vegetables were cooked perfectly. I will definitely be making this again!"
        }
      ]
    },
    {
      id: 15,
      name: "Tonkatsu",
      author: insertusers[0],
      description: "Tonkatsu is a popular Japanese dish that consists of breaded and deep-fried pork cutlets. It is often served with a side of shredded cabbage and a tonkatsu sauce, made with a combination of fruit, vegetable, and meat or fish-based ingredients. This dish is perfect for those who love a crispy and savory meal.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}, {username: insertusers[3], rating: 5}
      ],
      tags: ["asian", "pork", "deep-fried", "hard"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126399/Recipe%20Photos/image_nsjtqb.png",
      ingredients: ["4 pork cutlets", "1 cup flour", "2 eggs, beaten", "2 cups bread crumbs", "1 head of cabbage, shredded", "oil for frying", "Tonkatsu Sauce:", "1/2 cup ketchup", "1/4 cup Worcestershire sauce", "1 tablespoon sugar", "1 tablespoon soy sauce", "1 tablespoon sake", "1 teaspoon grated onion"],
      method: ["Mix the ketchup, Worcestershire sauce, sugar, soy sauce, sake and grated onion in a small saucepan over medium heat. Bring to a boil, then reduce the heat and simmer for 5 minutes to thicken.", "Season the pork cutlets with salt and pepper.", "Place the flour, beaten eggs, and breadcrumbs in separate shallow dishes.", "Dredge each pork cutlet in the flour, then dip it in the beaten eggs and coat it with the breadcrumbs.", "Heat a large skillet over medium-high heat and add enough oil to come 1/4 inch up the sides of the pan.", "Fry the pork cutlets for 2-3 minutes per side or until golden brown and cooked through.", "Remove the pork cutlets from the pan and drain on a paper towel.", "Serve the pork cutlets with the shredded cabbage and tonkatsu sauce on the side."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This tonkatsu was delicious! The pork was so tender and the breading was crispy and flavorful. The tonkatsu sauce was the perfect complement to the dish."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I loved this tonkatsu, the flavors were well balanced and it was cooked to perfection. I will definitely be making this again!"
        }
      ]
    },
    {
      id: 16,
      name: "Australian Meat Pie",
      author: insertusers[0],
      description: "Australian Meat Pie is a classic Australian dish that consists of a flaky pastry crust filled with a savory meat and vegetable filling. It's often served with tomato sauce, and is a favorite at sports games, picnics, and as a quick snack. This dish is perfect for those who love a hearty and comforting meal.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}, {username: insertusers[3], rating: 5}
      ],
      tags: ["Australian", "meat", "pie"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126365/Recipe%20Photos/image_gctalk.png",
      ingredients: ["1 lb ground beef", "1 onion, diced", "2 cloves garlic, minced", "1 cup diced carrots", "1 cup diced potatoes", "1 cup frozen peas", "1/2 cup beef broth", "1 tablespoon tomato paste", "1 teaspoon dried thyme", "1/4 teaspoon nutmeg", "Salt and pepper to taste", "1 sheet puff pastry, thawed", "1 egg, beaten"],
      method: ["Preheat the oven to 400F.", "In a large skillet over medium-high heat, brown the ground beef until fully cooked.", "Add the onion, garlic, carrots, potatoes, and peas, and cook for 5 minutes.", "Add the beef broth, tomato paste, thyme, nutmeg, salt and pepper, and bring to a simmer.", "Cook for an additional 10 minutes, or until the vegetables are tender.", "Remove the skillet from the heat and let the filling cool for 10 minutes.", "Roll out the puff pastry on a lightly floured surface and cut it into 4 equal squares.", "Spoon the cooled filling onto the center of each square.", "Brush the edges of the pastry with the beaten egg.", "Fold the pastry in half to form a triangle, and press the edges to seal.", "Brush the top of each pie with the remaining beaten egg.", "Bake the pies for 20-25 minutes or until the pastry is golden brown and puffed.", "Serve the pies hot with tomato sauce."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This meat pie was delicious! The filling was hearty and flavorful, and the pastry was flaky and buttery. The tomato sauce was the perfect complement to the dish."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I loved this meat pie, it reminded me of home. The flavors were well balanced and it was cooked to perfection. I will definitely be making this again!"
        }
      ]
    },
    {
      id: 17,
      name: "Fattoush Salad",
      author: insertusers[0],
      description: "Fattoush is a traditional Arabic salad that's typically made with a variety of fresh vegetables and herbs, along with toasted or fried pita bread. It's a great way to use up stale bread and is a perfect side dish to any meal. The salad is usually dressed with a simple lemon and olive oil dressing and garnished with sumac.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["Arabic", "salad", "vegetarian"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126511/Recipe%20Photos/image_rieywn.png",
      ingredients: ["1 head of romaine lettuce, chopped", "1 cucumber, chopped", "1 tomato, chopped", "1/2 red onion, chopped", "1/2 cup chopped fresh parsley", "1/2 cup chopped fresh mint", "1/4 cup chopped fresh cilantro", "1/2 cup crumbled feta cheese", "1/2 cup diced toasted or fried pita bread", "1/4 cup lemon juice", "1/4 cup olive oil", "1 teaspoon sumac"],
      method: ["In a large bowl, combine the romaine lettuce, cucumber, tomato, red onion, parsley, mint, and cilantro.", "Add the feta cheese and toasted pita bread.", "In a small bowl, whisk together the lemon juice, olive oil, and sumac.", "Pour the dressing over the salad and toss to coat.", "Serve the salad immediately."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This Fattoush salad was delicious and refreshing. The dressing was tangy and balanced nicely with the herbs and vegetables. I liked the addition of the feta cheese and toasted pita bread. It was a great side dish."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I loved this salad. It was light and healthy, but still filling. The herbs and vegetables were so fresh and the dressing was perfect. I will definitely be making this again!"
        }
      ]
    },
    {
      id: 18,
      name: "Spicy Sausage and Potato Skillet",
      author: insertusers[0],
      description: "This Spicy Sausage and Potato Skillet is a hearty and comforting one-pan meal that's perfect for a quick and easy dinner. The spicy sausage and tender potatoes are cooked together in a skillet with onions and bell peppers, and then topped with a sprinkle of shredded cheese. It's a perfect dish to feed a crowd.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}, {username: insertusers[3], rating: 5}
      ],
      tags: ["Spicy", "Sausage", "Potato", "Skillet", "Medium"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126504/Recipe%20Photos/image_k9andy.png",
      ingredients: ["1 pound spicy sausage, sliced", "4 potatoes, peeled and diced", "1 onion, diced", "1 bell pepper, diced", "1 tablespoon olive oil", "1/4 teaspoon salt", "1/4 teaspoon black pepper", "1/4 cup shredded cheese"],
      method: ["In a large skillet, heat the olive oil over medium heat.", "Add the spicy sausage and cook for about 5 minutes or until browned.", "Add the potatoes, onion, and bell pepper to the skillet and stir to combine.", "Sprinkle the salt and pepper over the top.", "Cook for about 15 minutes or until the potatoes are tender and the vegetables are softened.", "Sprinkle the shredded cheese over the top and cook for an additional 2 minutes or until the cheese is melted.", "Serve hot."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This Spicy Sausage and Potato Skillet was a delicious and easy dinner. The sausage and potatoes were cooked perfectly and the added vegetables made it a healthy and balanced meal. The cheese on top was a nice touch."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I loved this recipe! It was so easy to make and had a great balance of flavors. The spicy sausage and tender potatoes were the perfect combination. I will definitely be making this again!"
        }
      ]
    },
    {
      id: 19,
      name: "Spicy Potato and Chickpea Curry",
      author: insertusers[0],
      description: "This spicy potato and chickpea curry is a delicious, hearty and comforting dish that's perfect for a cold night. Potatoes and chickpeas are simmered in a flavorful tomato-based sauce with spices like cumin, coriander and turmeric, making this curry both healthy and satisfying.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["Potato", "Chickpea", "Curry", "Indian"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126498/Recipe%20Photos/image_kfzidw.png",
      ingredients: ["1 tablespoon vegetable oil", "1 onion, chopped", "4 cloves of garlic, minced", "1 tablespoon grated ginger", "2 teaspoons cumin powder", "2 teaspoons coriander powder", "1 teaspoon turmeric powder", "1 teaspoon red chili powder", "1/2 teaspoon salt", "1 can diced tomatoes", "2 cups vegetable broth", "2 cups cubed potatoes", "1 can chickpeas, drained and rinsed", "1/4 cup chopped cilantro"],
      method: ["In a large pot or dutch oven, heat the oil over medium heat. Add the onion and sauté until softened.", "Add the garlic and ginger and sauté for another minute.", "Add the spices and salt and stir to combine.", "Add the diced tomatoes, vegetable broth, potatoes and chickpeas.", "Bring to a boil, then reduce the heat to low and simmer for 15-20 minutes or until the potatoes are tender.", "Stir in the cilantro and serve over rice."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This spicy potato and chickpea curry was delicious and satisfying. The flavors were spot-on and the potatoes and chickpeas were cooked perfectly. I will definitely be making this again!"
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "This curry was so delicious! The spices were just right and the chickpeas and potatoes were a great combination. I served it over rice and it was the perfect comfort food on a cold night."
        }
      ]
    },
    {
      id: 20,
      name: "Grilled Chicken and Vegetable Skewers",
      author: insertusers[0],
      description: "These grilled chicken and vegetable skewers are a delicious and easy to make dinner option. Marinated in a flavorful blend of olive oil, lemon juice, and herbs, the skewers are grilled to perfection and served with a side of garlic yogurt sauce.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["Chicken", "Vegetable", "Skewers", "Easy"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126519/Recipe%20Photos/image_i825vk.png",
      ingredients: ["1 pound boneless, skinless chicken breasts, cut into 1-inch cubes", "1 red bell pepper, cut into 1-inch pieces", "1 yellow bell pepper, cut into 1-inch pieces", "1 red onion, cut into wedges", "1 zucchini, cut into 1-inch pieces", "1/4 cup olive oil", "juice of 1 lemon", "2 cloves of garlic, minced", "1 teaspoon dried oregano", "1 teaspoon dried basil", "1/2 teaspoon salt", "1/4 teaspoon black pepper", "1 cup plain yogurt", "1 clove of garlic, minced", "1/4 teaspoon salt"],
      method: ["In a large bowl, combine the chicken, bell peppers, onion, and zucchini.", "In a separate bowl, whisk together the olive oil, lemon juice, garlic, oregano, basil, salt, and pepper.", "Pour the marinade over the chicken and vegetables and toss to coat.", "Thread the chicken and vegetables onto skewers, alternating between the different ingredients.", "Grill the skewers over medium-high heat for 8-10 minutes per side or until the chicken is cooked through.", "In a small bowl, mix together the yogurt, garlic, and salt for the garlic yogurt sauce.", "Serve the skewers with the garlic yogurt sauce."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "These grilled chicken and vegetable skewers were delicious and so easy to make. The marinade added a lot of flavor and the garlic yogurt sauce was the perfect complement."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "These skewers were a hit at our BBQ! The marinade was delicious and the vegetables were cooked perfectly. The garlic yogurt sauce was also a great addition."
        }
      ]
    },
    {
      id: 21,
      name: "Spicy Shrimp and Cauliflower Rice",
      author: insertusers[0],
      description: "This spicy shrimp and cauliflower rice dish is a delicious and healthy dinner option. The shrimp is sautéed with spices and served on top of a bed of cauliflower rice cooked with peppers and onions. Perfect for a quick and easy weeknight meal.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["Shrimp", "Cauliflower Rice", "Spicy", "Medium"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126685/Recipe%20Photos/image_bmgzh5.png",
      ingredients: ["1 pound raw shrimp, peeled and deveined", "1 teaspoon chili powder", "1 teaspoon cumin", "1 teaspoon smoked paprika", "1/2 teaspoon salt", "1/4 teaspoon black pepper", "2 tablespoons olive oil", "1 red bell pepper, diced", "1 yellow onion, diced", "4 cloves of garlic, minced", "1 head of cauliflower, grated", "1/4 cup chopped cilantro"],
      method: ["In a large bowl, combine the shrimp, chili powder, cumin, smoked paprika, salt, and pepper.", "In a large skillet, heat the olive oil over medium-high heat.", "Add the bell pepper, onion, and garlic to the skillet and sauté for 5-7 minutes or until softened.", "Add the cauliflower to the skillet and sauté for an additional 5-7 minutes or until the cauliflower is tender.", "Add the shrimp to the skillet and sauté for 3-5 minutes or until the shrimp is pink and cooked through.", "Serve the shrimp and cauliflower rice in bowls and garnish with cilantro."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This spicy shrimp and cauliflower rice dish was amazing! The spices added a lot of flavor and the cauliflower rice was a great healthy alternative to regular rice."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I loved this dish! The shrimp was cooked perfectly and the cauliflower rice was a great way to add more vegetables to the meal. I will definitely be making this again."
        }
      ]
    },
    {
      id: 22,
      name: "Mediterranean Quinoa Salad",
      author: insertusers[0],
      description: "This Mediterranean quinoa salad is a delicious and healthy way to enjoy the flavors of the Mediterranean. It's packed with fresh veggies, quinoa, and a flavorful lemon vinaigrette. Perfect for a light lunch or a side dish to any meal.",
      rating_list: [
        {username: insertusers[1], rating: 4}, {username: insertusers[2], rating: 5}
      ],
      tags: ["Quinoa", "Salad", "Mediterranean", "easy"],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675126712/Recipe%20Photos/image_ews5pj.png",
      ingredients: ["1 cup quinoa, rinsed and drained", "1 1/2 cups water", "1/2 teaspoon salt", "1/2 cup chopped cherry tomatoes", "1/2 cup chopped cucumber", "1/2 cup crumbled feta cheese", "1/4 cup chopped kalamata olives", "1/4 cup chopped red onion", "1/4 cup chopped fresh parsley", "1/4 cup chopped fresh mint", "1/4 cup olive oil", "3 tablespoons lemon juice", "1 clove of garlic, minced", "1/4 teaspoon salt", "1/4 teaspoon black pepper"],
      method: ["In a medium saucepan, bring the quinoa, water, and salt to a boil. Reduce heat to low, cover and simmer for 18 minutes. Remove from heat and let it sit, covered, for 5 minutes. Fluff with a fork and let it cool.", "In a large bowl, combine the cooked quinoa, tomatoes, cucumber, feta cheese, olives, red onion, parsley, and mint.", "In a small bowl, whisk together the olive oil, lemon juice, garlic, salt and pepper. Pour over the quinoa mixture and toss to coat.", "Serve chilled or at room temperature."],
      comments: [
        {
          username: insertusers[1],
          date: new Date("2023-01-30"),
          comment: "This Mediterranean quinoa salad was delicious! The lemon vinaigrette was so flavorful and the quinoa added a nice texture. I will definitely be making this again."
        },
        {
          username: insertusers[2],
          date: new Date("2023-01-30"),
          comment: "I loved this salad! It was so fresh and flavorful. The quinoa added a great source of protein. I will be making this again and again."
        }
      ]
    }
]

const insertrecipes = await RecipeModel.insertMany(recipes)

console.log("Recipes inserted")


await UserModel.updateMany(
  { username: { $in: [insertusers[0].username, insertusers[1].username] } },
  { $push: { favourites: { $each: [insertrecipes[1], insertrecipes[2], insertrecipes[3]] } } }
)

await UserModel.updateMany(
  { username: { $in: [insertusers[2].username, insertusers[3].username] } },
  { $push: { favourites: { $each: [insertrecipes[4], insertrecipes[5], insertrecipes[6], insertrecipes[7]] } } }
)

await UserModel.updateMany(
  { username: { $in: [insertusers[4].username, insertusers[5].username] } },
  { $push: { favourites: { $each: [insertrecipes[0], insertrecipes[2], insertrecipes[3]] } } }
)

console.log("Users with favourites inserted")

dbClose()
