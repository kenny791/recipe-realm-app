import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
// import { describe, it, expect } from 'vitest'
import App from './App'

describe('App component', () => {
  let container

  beforeEach(function () {
    container = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    ).container
  })

  it('Shows the Landing page and renders correctly', () => {

    // Assigning variable for the heading/sub-heading
    const heading = container.querySelector('p.display-1')
    const subHeading = container.querySelector('p.display-6')

    // Testing to see if the heading/sub-heading is defined and has the correct text
    expect(heading).toBeDefined()
    expect(heading).toHaveTextContent('Recipe Realm')
    expect(subHeading).toBeDefined()
    expect(subHeading).toHaveTextContent('Nourish your taste buds, one recipe at a time')

    // Assigning variables for each navbar element
    const navbarHome = container.querySelector('Link.navbar-brand')
    const navbarSearch = screen.getByText('Search')
    const navbarSubmit = screen.getByText('Submit Recipe')
    const navbarProfile = screen.getByText(/.*\sProfile|Login/);

    // Testing to see if the navbar elements are defined
    expect(navbarHome).toBeDefined()
    expect(navbarSearch).toBeDefined()
    expect(navbarSubmit).toBeDefined()
    expect(navbarProfile).toBeDefined()

    // Testing to see if the navbar elements have the correct text
    expect(navbarSearch).toHaveTextContent('Search')
    expect(navbarSubmit).toHaveTextContent('Submit Recipe')
    expect(navbarProfile).toHaveTextContent(/.*\sProfile|Login/)
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