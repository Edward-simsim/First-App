import { IProject } from "models/generalModel";

export interface IProps{
    open: () => {};
    handleStatusClose: () => {};
    entity:IProject;
}