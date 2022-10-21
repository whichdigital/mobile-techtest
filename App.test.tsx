import { render } from '@testing-library/react-native';
import React from 'react';
import App from './App';

describe('<App />', () => {
    it('should be able to render a title', () => {
        const { getByTestId } = render(<App />);

        expect(getByTestId('title').props.children).toEqual('Mobile Tech Test');
    });

    it('should be able to render the tech test description', () => {
        const { getByTestId } = render(<App />);

        expect(getByTestId('subtitle').props.children).toEqual('Description:');
        expect(getByTestId('description').props.children).toMatchSnapshot();
    });
});
