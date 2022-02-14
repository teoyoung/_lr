import React, { ChangeEvent, createRef, useState } from 'react';
import { UseAppDispatch } from '../../Store';
import {IngredientsType} from '../../common/statusType';
import {setIngridient, removeIngridient} from '../../reducers/IngridientReducer';
import { IngredientText, Block } from './IngridientSelect.style';
import {IngredientItemUID} from '../../api/ShopAPI';

const IngridientSelect = (props: {ingredient: IngredientItemUID}) => {

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
            dispatch(removeIngridient(ingredient));
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
        dispatch(setIngridient({ingredient, type: checkboxType}));        
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