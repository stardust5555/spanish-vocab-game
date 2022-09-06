import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import App from './App';




//Maths test 
describe('quick maths test to test Jest is working', () => {
    test('2 + 2 is 4', () => {
      expect(2 + 2).toBe(4);
    });
  });

//Rendering Homepage
test('Renders the landing page - the town map', () => {
render(<App />);

//To Be in Document
expect(screen.getByRole("heading", { name: "Town Map" })).toBeInTheDocument();
expect(screen.getByRole("img", { name: "townMap" })).toBeInTheDocument();
expect(screen.getByRole("img", { name: "supermarket" })).toBeInTheDocument();
expect(screen.getByRole("img", { name: "clothes shop" })).toBeInTheDocument();
expect(screen.getByRole("img", { name: "barn" })).toBeInTheDocument();
expect(screen.getByRole("img", { name: "school" })).toBeInTheDocument();
expect(screen.getByRole("link", { name: "supermarket" })).toBeInTheDocument();
expect(screen.getByRole("link", { name: "clothes shop" })).toBeInTheDocument();
expect(screen.getByRole("link", { name: "barn" })).toBeInTheDocument();
expect(screen.getByRole("link", { name: "school" })).toBeInTheDocument();

//Testing the text inside the h1
expect(screen.getByRole("heading", { name: "Town Map" })).toHaveTextContent(/Town Map/);
screen.getByText('Town Map'); 

//Links
// userEvent.click(screen.getByRole("link", { name: "school" }));
//     expect(screen.getByRole("button")).toBeInTheDocument();

})