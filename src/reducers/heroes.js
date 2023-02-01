const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    heroesAddingStatus: 'idle',
}

const heroes = (state = initialState, action) => {
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
        case 'HERO_ADDING':
            return {
                ...state,
                heroesAddingStatus: 'loading'
            }
        case 'HERO_ADDED':

            const newHeroListAdded = [...state.heroes, action.payload];

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

export default heroes;