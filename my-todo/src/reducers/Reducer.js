
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
        default:
            return state
    }
}