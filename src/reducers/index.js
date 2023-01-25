const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    filtersLoadingStatus: 'idle',
    heroesAddingStatus: 'idle'
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'FILTERS_FETCHING':
            return {
                ...state,
                filtersLoadingStatus: 'loading'
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload,
                filtersLoadingStatus: 'idle'
            }
        case 'FILTERS_FETCHING_ERROR':
            return {
                ...state,
                filtersLoadingStatus: 'error'
            }
        case 'HERO_ADDING':
            return {
                ...state,
                heroesAddingStatus: 'loading'
            }
        case 'HERO_ADDED':
            const newHeroListAdded = state.heroes;
            newHeroListAdded.push(action.payload);
            return  {
                ...state,
                heroes: newHeroListAdded,
                heroesAddingStatus: 'idle'
            }
        case 'HERO_ADDED_ERROR':
            return {
                ...state,
                heroesAddingStatus: 'error'
            }
        case 'HERO_REMOVE':
            const newHeroList = state.heroes.filter(item => item.id !== action.payload );
            return  {
                ...state,
                heroes: newHeroList
            }
        default: return state
    }
}

export default reducer;