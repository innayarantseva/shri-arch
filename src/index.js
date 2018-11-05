const createStore = ( reducer, initialState ) => {

    // defines Store
    let Store = {
            state: initialState,
            reducer,
            listener: () => {}
        };

    // defines Store methods
    const getState = () => {
        return Store.state;
    };

    const dispatch = action => {
        Store.state = reducer( Store.state, action );
        Store.listener();
        return action;
    };

    const subscribe = ( newListener ) => {
        Store.listener = newListener;
    };

    // assigns methods to Store
    Store.getState  = getState;
    Store.dispatch  = dispatch;
    Store.subscribe = subscribe;

    return Store;
}

export default createStore;