import {UsersType} from "../componets/Users/usersReducer";

export const updateObjectInArray = (items:Array<UsersType>, itemId:number, objPropName: 'id', newObjProps:{followed:boolean}) => {

        return items.map(e => e[objPropName] === itemId ? {...e, ...newObjProps} : e)

}