import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from '../Navbar';

describe('Navbar Component', () => {
  it('renders a hamburger button with aria-label', () => {
    render(<Navbar />);
    const button = screen.getByLabelText('Toggle navigation menu');
    expect(button).toBeInTheDocument();
  });

  it('includes a link to the Blog', () => {
    render(<Navbar />);
    const blogLinks = screen.getAllByText('Blog');
    expect(blogLinks.length).toBeGreaterThan(0);
    expect(blogLinks[0]).toHaveAttribute('href', '/blog');
  });

  it('toggles the mobile menu on hamburger click', () => {
    render(<Navbar />);
    const button = screen.getByLabelText('Toggle navigation menu');

    // Initially hidden
    let mobileMenu = document.getElementById('mobile-menu');
    expect(mobileMenu).not.toBeInTheDocument();

    // Click to show
    fireEvent.click(button);
    mobileMenu = document.getElementById('mobile-menu');
    expect(mobileMenu).toBeInTheDocument();

    // Click to hide
    fireEvent.click(button);
    mobileMenu = document.getElementById('mobile-menu');
    expect(mobileMenu).not.toBeInTheDocument();
  });
});
