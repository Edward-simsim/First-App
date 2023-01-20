import { IPerson } from "models/generalModel";

export interface IProps {
    entity:IPerson
    handleEditEntity:(entity:IPerson)=>{};
}