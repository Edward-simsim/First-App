import { IProject } from "models/generalModel";

export interface IProps {
  entity: IProject;
  handleEditEntity: (entity: IProject) => {};
  handlePersonStatus: (entity: IProject) => {};
}

