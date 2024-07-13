export const up  = (num) => {
    return {
        type: 'UP',
        number : num
    }
}

export const down  = (num) => {
    return {
        type: 'DOWN',
        number : num
    }
}

export const reset  = () => {
    return {
        type: 'RESET'
    }
} 