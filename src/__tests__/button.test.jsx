import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../components/button'


describe('Button component', () => {
  test('renders button with text', () => {
    render(<Button text="Click me"/>)
    const buttonElement = screen.getByText('Click me')

    expect(buttonElement).to.exist;
    expect(buttonElement).toHaveClass('button')
  })

  test('renders button with secondary class when secondary prop is true', () => {
    render(<Button text="Click me" secondary />)
    const buttonElement = screen.getByText('Click me')

    expect(buttonElement).toHaveClass('button--secondary')
  })

  test('renders button with onClick handler', () => {
    let onClickCalled = false
    const onClickHandler = () => {
      onClickCalled = true
    }

    render(<Button text="Click me" onClick={onClickHandler} />)
    const buttonElement = screen.getByText('Click me')

    // Simulate click event
    fireEvent.click(buttonElement)

    // Check if onClick handler was called
    expect(onClickCalled).toBe(true)
  })
})