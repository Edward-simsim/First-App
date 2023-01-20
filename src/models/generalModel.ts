export interface IPerson {
  assignedProject: IProject;
  firstName: string;
  id: number;
  isAvailable: boolean;
  lastName: string;
  position: string;
}

export interface IProject {
  deadline: string;
  description: string;
  endDate: string;
  id: number;
  startDate: string;
  status: string;
  title: string;
}
