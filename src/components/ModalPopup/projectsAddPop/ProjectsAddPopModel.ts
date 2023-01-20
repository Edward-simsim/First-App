import { IProject } from "models/generalModel";

export interface IProps{
    open: () => {};
    handleClose: () => {};
    closeWithRefetchData : () => {};
    entity:IProject;
}