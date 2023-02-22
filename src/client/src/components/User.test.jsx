import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import RecipeContext from '../context'
import User from './User'

const recipeList = [
  {
    _id: "63df0670e35edccc586a2c26",
    id: 0,
    name: "Vegetable Soup",
    author: {
        _id: "63df0670e35edccc586a2c1f",
        username: "BakeBoss"
    },
    description: "A hearty and comforting soup made with a variety of vegetables, perfect for a cold winter day.",
    rating_list: [
      {
        username: {
          _id: "63df0670e35edccc586a2c20",
          username: "KitchenKing"
        },
        rating: 4,
        _id: "63df0670e35edccc586a2c27"
      },
      {
        username: {
          _id: "63df0670e35edccc586a2c21",
          username: "CookCraze"
        },
        rating: 5,
        _id: "63df0670e35edccc586a2c28"
      },
      {
        username: {
          _id: "63df0670e35edccc586a2c22",
          username: "WhiskWizard"
        },
        rating: 5,
        _id: "63df0670e35edccc586a2c29"
      }
    ],
    tags: [
      "Soup",
      "Vegetarian",
      "Easy"
    ],
    image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675125479/Recipe%20Photos/image_f7aixd.png",
    ingredients: [
      "1 onion, diced",
      "1 carrot, diced",
      "1 potato, diced",
      "1 cup of water",
      "1 can of diced tomatoes",
      "2 cloves of garlic, minced",
      "1 tsp of olive oil",
      "1 tsp of salt",
      "1/2 tsp of black pepper",
      "1/4 tsp of thyme"
    ],
    method: [
      "In a large pot, heat the olive oil over medium heat",
      "Add the onion, carrot, and potato and sauté for 5 minutes",
      "Add the garlic, salt, pepper, and thyme and sauté for an additional 2 minutes",
      "Add the diced tomatoes and water, bring the mixture to a boil",
      "Reduce the heat to low, cover and let simmer for 30 minutes or until vegetables are tender",
      "Serve with bread or crackers if desired"
    ],
    comments: [
        {
            username: {
                _id: "63df0670e35edccc586a2c20",
                username: "KitchenKing"
            },
            date: "2023-01-30T00:00:00.000Z",
            comment: "This soup was delicious! I added some shredded chicken and it was a great addition.",
            _id: "63df0670e35edccc586a2c2a"
        },
        {
            username: {
                _id: "63df0670e35edccc586a2c21",
                username: "CookCraze"
            },
            date: "2023-01-30T00:00:00.000Z",
            comment: "So easy to make and so comforting on a cold day. Will definitely make this again.",
            _id: "63df0670e35edccc586a2c2b"
        },
        {
            username: {
                _id: "63df0670e35edccc586a2c22",
                username: "WhiskWizard"
            },
            date: "2023-01-30T00:00:00.000Z",
            comment: "I was blown away by the quality of the ingredients used in this dish. It was fresh and bursting with flavor.",
            _id: "63df0670e35edccc586a2c2c"
        }
    ],
    __v: 0
  },
  {
      _id: "63df0670e35edccc586a2c2d",
      id: 1,
      name: "Spaghetti Bolognese",
      author: {
          _id: "63df0670e35edccc586a2c20",
          username: "KitchenKing"
      },
      description: "A classic Italian dish made with a rich meat sauce and spaghetti.",
      rating_list: [
          {
              username: {
                  _id: "63df0670e35edccc586a2c20",
                  username: "KitchenKing"
              },
              rating: 4,
              _id: "63df0670e35edccc586a2c2e"
          },
          {
              username: {
                  _id: "63df0670e35edccc586a2c21",
                  username: "CookCraze"
              },
              rating: 5,
              _id: "63df0670e35edccc586a2c2f"
          }
      ],
      tags: [
          "Pasta",
          "Italian",
          "Easy"
      ],
      image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675125791/Recipe%20Photos/image_ojxpvy.png",
      ingredients: [
          "1 pound of spaghetti",
          "1 pound of ground beef",
          "1 onion, diced",
          "2 cloves of garlic, minced",
          "1 can of diced tomatoes",
          "1 cup of beef broth",
          "1 tsp of olive oil",
          "1 tsp of salt",
          "1/2 tsp of black pepper",
          "1 tsp of dried basil"
      ],
      method: [
          "Cook the spaghetti according to package instructions and set aside",
          "In a large pot, heat the olive oil over medium heat",
          "Add the onion, garlic, and ground beef and sauté until the beef is browned",
          "Add the diced tomatoes, beef broth, salt, pepper, and basil and bring to a boil",
          "Reduce the heat to low, cover and let simmer for 30 minutes",
          "Serve the meat sauce over the cooked spaghetti"
      ],
      comments: [
          {
              username: {
                  _id: "63df0670e35edccc586a2c20",
                  username: "KitchenKing"
              },
              date: "2023-01-30T00:00:00.000Z",
              comment: "This bolognese sauce was delicious! I added some red wine for extra flavor.",
              _id: "63df0670e35edccc586a2c30"
          },
          {
              username: {
                  _id: "63df0670e35edccc586a2c21",
                  username: "CookCraze"
              },
              date: "2023-01-30T00:00:00.000Z",
              comment: "This recipe is a family favorite, it's so easy to make and always a hit.",
              _id: "63df0670e35edccc586a2c31"
          },
          {
              username: {
                  _id: "63df0670e35edccc586a2c22",
                  username: "WhiskWizard"
              },
              date: "2023-01-30T00:00:00.000Z",
              comment: "This was my first time trying this cuisine, and I was pleasantly surprised by how much I enjoyed it. The portions were generous, and the prices were reasonable.",
              _id: "63df0670e35edccc586a2c32"
          }
      ],
      __v: 0
    }
]

const loggedInUser = {
    _id: "63df0670e35edccc586a2c22",
    username: "WhiskWizard",
    favourites: [
        {
            _id: "63df0670e35edccc586a2c33",
            id: 2,
            name: "Lemon Garlic Shrimp Scampi",
            description: "This Lemon Garlic Shrimp Scampi recipe is the perfect quick and easy dinner that can be ready in under 30 minutes. Succulent shrimp are cooked in a buttery lemon garlic sauce and served over pasta for a satisfying meal.",
            image: "https://res.cloudinary.com/dzz3meeb6/image/upload/c_scale,w_600/v1675125898/Recipe%20Photos/image_ejjnvv.png"
        }
    ],
    __v: 0
}

describe('User Page', () => {
  let container

  beforeEach(function () {
    container = render(
      <BrowserRouter>
        <RecipeContext.Provider value={{ recipeList, loggedInUser }}>
          <User />
        </RecipeContext.Provider>
      </BrowserRouter>
    ).container
  })

  it('Renders Anchor tags', () => {
    const favouritesAnchor = container.querySelector('a[href="/#favouritesAnchor"]')
    const recipesAnchor = container.querySelector('a[href="/#recipesAnchor"]')
    const commentsAnchor = container.querySelector('a[href="/#commentsAnchor"]')
    const ratingsAnchor = container.querySelector('a[href="/#ratingsAnchor"]')
    expect(favouritesAnchor).toBeDefined()
    expect(recipesAnchor).toBeDefined()
    expect(commentsAnchor).toBeDefined()
    expect(ratingsAnchor).toBeDefined()
    expect(favouritesAnchor).toHaveTextContent('Favourites')
    expect(recipesAnchor).toHaveTextContent('Recipes')
    expect(commentsAnchor).toHaveTextContent('Comments')
    expect(ratingsAnchor).toHaveTextContent('Ratings')
  })

  it('Renders headings', () => {
    const favouritesAnchorTag = screen.getByRole('heading', { name: 'Favourites' })
    const recipesAnchorTag = screen.getByRole('heading', { name: 'Submitted Recipes' })
    const commentsAnchorTag = screen.getByRole('heading', { name: 'Submitted Comments' })
    const ratingsAnchorTag = screen.getByRole('heading', { name: 'Ratings' })

    const favouritesDiv = favouritesAnchorTag.parentNode
    const recipesDiv = recipesAnchorTag.parentElement
    const commentsDiv = commentsAnchorTag.parentElement
    const ratingsDiv = ratingsAnchorTag.parentElement

    const favouritesHeading = favouritesDiv.querySelector('h1')
    const recipesHeading = recipesDiv.querySelector('h1')
    const commentsHeading = commentsDiv.querySelector('h1')
    const ratingsHeading = ratingsDiv.querySelector('h1')

    expect(favouritesAnchorTag).toBeDefined()
    expect(recipesAnchorTag).toBeDefined()
    expect(commentsAnchorTag).toBeDefined()
    expect(ratingsAnchorTag).toBeDefined()

    expect(favouritesHeading).toBeDefined()
    expect(recipesHeading).toBeDefined()

    expect(favouritesHeading).toHaveTextContent('Favourites')
    expect(recipesHeading).toHaveTextContent('Submitted Recipes')
    expect(commentsHeading).toHaveTextContent('Submitted Comments')
    expect(ratingsHeading).toHaveTextContent('Ratings')
  })
})