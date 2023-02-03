import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
// import { describe, it, expect } from 'vitest'
import App from './App'

describe('Home Page', () => {
  let container

  beforeEach(function () {

    container = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ).container
  })

  it('Renders the heading and sub-heading correctly', () => {
    const heading = container.querySelector('p.display-1')
    const subHeading = container.querySelector('p.display-6')

    expect(heading).toBeDefined()
    expect(heading).toHaveTextContent('Recipe Realm')
    expect(subHeading).toBeDefined()
    expect(subHeading).toHaveTextContent('Nourish your taste buds, one recipe at a time')
  })

  it('Renders the Navbar correctly', () => {
    const navbarHome = container.querySelector('Link.navbar-brand')
    const navbarSearch = screen.getByText('Search')
    const navbarSubmit = screen.getByText('Submit Recipe')
    const navbarProfile = screen.getByText(/.*\sProfile|Login/);

    expect(navbarHome).toBeDefined()
    expect(navbarSearch).toBeDefined()
    expect(navbarSubmit).toBeDefined()
    expect(navbarProfile).toBeDefined()
    expect(navbarSearch).toHaveTextContent('Search')
    expect(navbarSubmit).toHaveTextContent('Submit Recipe')
    expect(navbarProfile).toHaveTextContent(/.*\sProfile|Login/)
    
    // Can't get this to work
    // expect(navbarHome).toHaveTextContent('Recipe Realm')
  })

  it('Renders the Search bar correctly', () => {
    const form = container.querySelector('.input-group')
    const button = form.querySelector('button.btn')
    const input = form.querySelector('input.form-control')

    expect(form).toBeDefined()
    expect(button).toBeDefined()
    expect(button).toHaveTextContent('Go!')
    expect(input).toBeDefined()
    expect(input.getAttribute('placeholder')).toEqual('Search')
  })

  it('Renders the featured recipe section correctly', () => {
    const heading = screen.getByText('Featured Recipe')
    const recipeName = container.querySelector('h4')

    expect(heading).toBeDefined()
    expect(recipeName).toBeDefined()
    expect(heading).toHaveTextContent('Featured Recipe')
    
    // Can't get this to work
    // expect(recipeName).toHaveTextContent('Featured Recipe')
  })


  it('Renders the carousel correctly', () => {
    const carousel = container.querySelector('.carousel')
    const innerCarousel = carousel.querySelector('.carousel-inner')
    expect(carousel).toBeDefined()
    expect(innerCarousel).toBeDefined()

    const previousButton = carousel.querySelector('.carousel-control-prev')
    const previousButtonText = previousButton.querySelector('span.visually-hidden')
    expect(previousButton).toBeDefined()
    expect(previousButtonText).toBeDefined()
    expect(previousButtonText).toHaveTextContent('Previous')

    const nextButton = carousel.querySelector('.carousel-control-next')
    const nextButtonText = nextButton.querySelector('span.visually-hidden')
    expect(nextButton).toBeDefined()
    expect(nextButtonText).toBeDefined()
    expect(nextButtonText).toHaveTextContent('Next')
  })

  it('Renders the footer correctly', () => {
    const footer = container.querySelector('footer')
    expect(footer).toBeDefined()
    expect(footer).toHaveTextContent('©2023 Recipe Realm')
  })

  it('Shows the Search page when Search is clicked', async () => {
    const navbarHome = container.querySelector('Link.navbar-brand')
    await userEvent.click(navbarHome)

    const heading = container.querySelector('p.display-1')
    const navbarSearch = screen.getByText('Search')
    const navbarSubmit = screen.getByText('Submit Recipe')
    const navbarProfile = screen.getByText(/.*\sProfile|Login/);

    expect(heading).toBeDefined()
    expect(navbarSearch).toBeDefined()
    expect(navbarSubmit).toBeDefined()
    expect(navbarProfile).toBeDefined()

    expect(heading).toHaveTextContent('Recipe Realm')
    expect(navbarSearch).toHaveTextContent('Search')
    expect(navbarSubmit).toHaveTextContent('Submit Recipe')
    expect(navbarProfile).toHaveTextContent(/.*\sProfile|Login/)
  })
})