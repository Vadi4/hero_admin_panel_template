import {useHttp} from '../../hooks/http.hook';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import {heroAdding, heroAdded, heroAddedError} from '../../actions';

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {

    const [heroName, setHeroName] = useState('');
    const [heroDescription, setHeroDescription] = useState();
    const [heroElement, setHeroElement] = useState();

    const {filters, filtersLoadingStatus} = useSelector(state => state);

    const dispatch = useDispatch();
    const {request} = useHttp();


    const onSubmit = (e) => {
        e.preventDefault();

        if(typeof heroElement === 'undefined') {
            return alert('Вы не выбрали элемент героя');
        }

        const newHero = {
            'id': uuidv4(),
            'name': heroName,
            'description': heroDescription,
            'element': heroElement
        }

        console.log(newHero)

        dispatch(heroAdding());
        request("http://localhost:3001/heroes", 'POST', JSON.stringify(newHero))
            .then(data => dispatch(heroAdded(newHero)))
            .catch(() => dispatch(heroAddedError()))
    }


    const renderFilters = (filters, status) => {
        if (status === "loading") {
            return <option>Загрузка элементов</option>
        } else if (status === "error") {
            return <option>Ошибка загрузки</option>
        }

        // Если фильтры есть, то рендерим их
        if (filters && filters.length > 0 ) {
            return filters.map(({name, label}) => {
                // Один из фильтров нам тут не нужен
                // eslint-disable-next-line
                if (name === 'all')  return;

                return <option key={name} value={name}>{label}</option>
            })
        }
    }


    return (
        <form className="border p-4 shadow-lg rounded" onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name"
                    placeholder="Как меня зовут?"
                    value={heroName}
                    onChange={(e) => setHeroName(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}
                    value={heroDescription}
                    onChange={(e) => setHeroDescription(e.target.value)}
                />
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={heroElement}
                    onChange={(e) => setHeroElement(e.target.value)}
                >
                    <option >Я владею элементом...</option>
                    {renderFilters(filters, filtersLoadingStatus)}
                </select>
            </div>

            <button
                type="submit" className="btn btn-primary">Создать</button>
        </form>
    )
}

export default HeroesAddForm;