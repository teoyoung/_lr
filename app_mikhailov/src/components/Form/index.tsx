import React, { ChangeEvent, FormEvent, useState } from 'react';
import IngridientSelect from './IngridientSelect';
import { UseAppDispatch, UseAppSelector } from '../../Store';
import { loginIn, setIngridietns } from '../../api/UserAPI'
import { SelectIngridients } from '../../reducers/IngridientReducer';
import { IngredientItemUID, SelectShopIngredietns } from '../../api/ShopAPI';
import { Block, Ingredient, Component, NameInputBlock, IngredientsBlock, IngredientsTitle } from './Form.style';

const Form = () => {

    const dispath = UseAppDispatch();
    const selectIngridient = UseAppSelector(SelectIngridients);
    const selectShopIngridietns = UseAppSelector(SelectShopIngredietns);

    const ingredientsList = selectShopIngridietns.map((item) => <Ingredient key={item.uid}>{<IngridientSelect ingredient={item}/>}</Ingredient>);

    const [name, setName] = useState<string>(null);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        dispath(setIngridietns(selectIngridient));
        dispath(loginIn(name)); 
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
                {ingredientsList}
                </IngredientsBlock>

                <input type="submit" value="Отправить" />
                </form>
            </Block>
        </Component>
    )
};

export default Form;
