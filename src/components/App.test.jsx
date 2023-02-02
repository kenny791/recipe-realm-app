import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom'
// import { describe, it, expect } from 'vitest'
import App from './App'

describe('App component', () => {
  it('Renders Recipe Realm heading', () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    const heading = container.querySelector('p.display-1')
    expect(heading).toBeDefined()
    expect(heading).toHaveTextContent('Recipe Realm')
  })
  it('Shows the Search page when Search is clicked', async () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const navbarHome = container.querySelector('Link.navbar-brand')
    userEvent.click(navbarHome)
    const heading = container.querySelector('p.display-1')
    expect(heading).toBeDefined()
    expect(heading).toHaveTextContent('Recipe Realm')
  })
})