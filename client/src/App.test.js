import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/NavBar';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'




it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});



test('button toggles darkmode', async () => {
  //arrange
  const { getByTestId } = render(<NavBar />);
  const body = document.querySelector('body');
  

  //act -- click on the toggle darkmode button

  fireEvent.click(getByTestId(/darkModeBtn/));

  //assert -- body should now have className dark-mode
  expect(body).toHaveClass('dark-mode');
  
})

