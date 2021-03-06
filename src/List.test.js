import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
            .create(
                <List
                    key={4}
                    header='Fourth list'
                    cards={[
                        { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
                        { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' }
                    ]}
                />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
