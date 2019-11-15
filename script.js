var Counter = React.createClass( {
    getDefaultProps: function() {
        console.log('Ustawia domyślne wartości propsów');
    },

    getInitialState: function() {
        return {
            counter: 0
        };
    },
// //this.setState((state, props) => {
//   return {counter: state.counter + props.step};
// });
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
   },

    decrement:function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    componentWillMount: function() {
        console.log('Wywoływana przed metodą render');
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('span', {}, 'Licznik' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+'),
        );
    },

    componentDiMount: function () {
        console.log('Komponent jest zamontowany w DOM i widnieje już na stronie');
    },

    componentWillReceiveProps: function() {
        console.log('Komponent otrzymał nowe właściwości props');
    },
//is invoked before rendering when new props or state are being received. Defaults to true. This method is not called for the initial render or when forceUpdate() is used.
    shouldComponentUpdate: function() {
        console.log('Sprawdza czy trzeba przerysować komponent, optymilizacja');
        return true;
    },

    componentWillUpdate: function() {
        console.log('Zmiany w komponencie');
    },
// If we have a snapshot value, we've just added new items
// Adjust scroll so these new items don't push the old ones out of view.
// (snapshot here is the value returned from getSnapshotBeforeUpdate)
    componentDidUpdate: function() {
        console.log('Możliwość wykonania manipulacji DOM');
    },

    componentWillUnmount: function() {
        console.log('Usuwanie');
    },
});

var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter),
);
ReactDOM.render(element,document.getElementById('app'));