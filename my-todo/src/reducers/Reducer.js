
export const initialState = {
    initialTodos: [
        {
            item: 'Learn HTML',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Learn CSS',
            completed: false,
            id: 389298758
        },
        {
            item: 'Learn JavaScript',
            completed: false,
            id: 38929875
        },
        {
            item: 'Learn React',
            completed: false,
            id: 3892987
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                completed: false,
                id: Date.now(),
            };
            return {
                ...state,
                initialTodos: [...state.initialTodos, newTodo]
            };

        case 'TOGGLE_COMPLETED':
            let updatedTodos = state.initialTodos.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item,
                        completed: !item.completed
                    };
                } else {
                    return item;
                }
            });
            return {
                ...state,
                initialTodos: updatedTodos
            };

        case 'CLEAR_COMPLETED':
            return {
                ...state,
                initialTodos: state.initialTodos.filter(item => !item.completed)
            };

        default:
            return state;
    }
};