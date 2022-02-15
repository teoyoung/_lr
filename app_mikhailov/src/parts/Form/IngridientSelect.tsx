import React, { ChangeEvent, createRef, useState } from 'react';
import { UseAppDispatch } from '../../Store';
import { IngredientsType } from '../../common/UserTypes';
import { AddIngredietn, RemoveIngredietn } from '../../store/UserSlice';
import { IngredientText, Block } from './IngridientSelect.style';
import { IIngredientItem } from '../../common/ShopTypes';

const IngridientSelect = (props: {ingredient: IIngredientItem}) => {

    const {ingredient} = props;
    const {name} = ingredient;

    const [type, setType] = useState<IngredientsType>(undefined);
    const dispatch = UseAppDispatch();
    const favorite = createRef<HTMLInputElement>();
    const allergy = createRef<HTMLInputElement>();
    const checkboxes = {favorite, allergy};
    
    function checkSelectCnage(event: ChangeEvent<HTMLInputElement>) {
        const checkboxType = event.target.name as IngredientsType;

        if(type === checkboxType) {
            // Удаление из списка ингридиентов  
            checkboxes[type].current.checked = checkboxes[type].current.checked;
            dispatch(RemoveIngredietn(ingredient));
            setType(undefined);
            return;
        } else {
            // Выбор типа выбранного ингридиента
            const check = checkboxType === 'allergy' ? true : checkboxType === 'favorite' ? false : null;
            if(check === null) {
                return;
            }
            checkboxes.allergy.current.checked = check;   
            checkboxes.favorite.current.checked = !check; 
        }

        setType(checkboxType);
        dispatch(AddIngredietn({ingredient, type: checkboxType}));        
    }

    return (
        <Block>
            <input type="checkbox" ref={favorite} name="favorite" onChange={checkSelectCnage}/>
            <input type="checkbox" ref={allergy} name="allergy" onChange={checkSelectCnage}/>
            <IngredientText color={type === 'allergy' ? 'red' : type === 'favorite' ? 'green' : '#ffffff'}>{name}</IngredientText>
        </Block>
    );
}

export default IngridientSelect;