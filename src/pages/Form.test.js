import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from './Form';

describe('Form component', () => {

    test('renders What kind of workout would you like today?', () => {
        render(<Form />);
        const chooseElement = screen.getByText('What kind of workout would you like today?');
        expect(chooseElement).toBeInTheDocument();
    });

    test('renders SuggestedWorkout on valid form submission', () => {
        render(<Form />);  
        const onClick = jest.fn()
          expect(() =>
            render(<SuggestedWorkout onClick={onClick} />)
          ).toBeInTheDocument();
        });


});

