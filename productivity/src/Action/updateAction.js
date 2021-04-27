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