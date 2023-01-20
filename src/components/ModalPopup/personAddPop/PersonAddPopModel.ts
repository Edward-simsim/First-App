import { IPerson } from 'models/generalModel';
export interface IProps {
  open:() => {};
    entity:IPerson
    handleClose:() => {};
    closeWithRefetchData:() => {};
}