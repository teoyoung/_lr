import React, { ChangeEvent, FormEvent, useState } from 'react';
import IngridientSelect from './IngridientSelect';
import { UseAppDispatch, UseAppSelector } from '../../Store';
import { FetchIngredientItems, SelectShopIngredientItems } from '../../store/ShopSlice';
import { Block, Ingredient, Component, NameInputBlock, IngredientsBlock, IngredientsTitle } from './Form.style';
import { FetchLoginIn, SelectUserIngridients } from '../../store/UserSlice';

const Form = () => {

    const [isCompete, setStateComplete] = useState(false);

    const dispath = UseAppDispatch();
    const selectIngridient = UseAppSelector(SelectShopIngredientItems);
    const selectUserIngridients = UseAppSelector(SelectUserIngridients);

    dispath(FetchIngredientItems());

   const ingredientsList = selectIngridient.map((item) => <Ingredient key={item.uid}>{<IngridientSelect ingredient={item}/>}</Ingredient>);

    const [name, setName] = useState<string>(null);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        setStateComplete(true);
        dispath(FetchLoginIn({name, ingredients: selectUserIngridients})); 
        event.preventDefault();      
    }

    return (
        <Component>
            <Block>
                <form onSubmit = {handleSubmit}>
                <NameInputBlock>
                    <p>Ваше имя: </p>
                    <label>
                        <input required type="text" name="name" onChange={handleChange} />
                    </label>
                </NameInputBlock>
                <IngredientsBlock>
                    <IngredientsTitle>
                    Зелёные — предпочтительные ингридиенты, 
а красные на которые аллергия                 
                    </IngredientsTitle>
                {!ingredientsList.length ? <h3>Загрузка...</h3> : ingredientsList}
                </IngredientsBlock>

                {!isCompete ? <input type="submit" value="Отправить" /> : <h2> Отправка ...</h2>}
                </form>
            </Block>
        </Component>
    )
};

export default Form;
