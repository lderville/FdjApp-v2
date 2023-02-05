import React, {UseState }from 'react';
import { createRoot } from 'react-dom/client'


import Items from './components/items';


class App extends React.Component {
    constructor() {
        super();

        this.state = {
            entries: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(response => response.json())
            .then(entries => {
                this.setState({
                    entries
                });
            });
    }

    render() {
        return (
            <div className="row">
                {this.state.entries.map(
                    ({ id, title, body }) => (
                        <Items
                            key={id}
                            title={title}
                            body={body}
                        >
                        </Items>
                    )
                )}
            </div>
        );
    }
}

createRoot(document.getElementById('root')).render(<App />)

