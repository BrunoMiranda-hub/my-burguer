import * as actionType from "../Store/actionType"

export const addIngredient = (ingName)=>{
     return{
         type:actionType.ADD_INGREDIENT,
         ingredientName: ingName,
     }  
}

export const removeIngredient = (ingName)=>{
    return {
        type : actionType.REMOVE_INGREDIENT,
        ingredientName: ingName,
    }
}