export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const filtersFetching = () => {
    return {
        type: 'FILTERS_FETCHING'
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}

export const filtersFetchingError = () => {
    return {
        type: 'FILTERS_FETCHING_ERROR'
    }
}

export const  heroAdding = () => {
    return {
        type: 'HERO_ADDING'
    }
}

export const  heroAdded = (newHero) => {
    return {
        type: 'HERO_ADDED',
        payload: newHero
    }
}

export const  heroAddedError = () => {
    return {
        type: 'HERO_ADDED_ERROR'
    }
}

export const heroRemove = (id) => {
    return {
        type: 'HERO_REMOVE',
        payload: id
    }
}

export const setFilters = (name) => {
    return {
        type: 'SET_FILTERS',
        payload: name
    }
}