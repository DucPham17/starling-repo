export const UpdateAction = (value) => {
    const action = {
        type: 'UPDATE',
        value
    }
    return action
}

export const GetAction = (value) => {
    const action = {
        type: 'GET',
        value
    }
    return action
}

export const SetAction = (key, value) => {
    const action = {
        type: 'SET',
        key,
        value
    }
    return action
}

export const GetTodosAction = (value) => {
    const action = {
        type: 'GET_TASKS',
        value
    }
    return action
}

export const SetTodosAction = (key, value) => {
    const action = {
        type: 'SET_TASKS',
        key,
        value
    }
    return action
}

export const UpdateTodosAction = (value) => {
    const action = {
        type: 'UPDATE_TASKS',
        value
    }
    return action
}