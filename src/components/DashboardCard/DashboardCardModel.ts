import { IPerson, IProject } from "models/generalModel";

export interface IProps {
  name: string;
  type: string;
  data: IDashboardData;
}

export interface IDashboardData {
  availablePersons: Array<IPerson>;
  projectsDone: number;
  projectsInProgress: number;
  projectsPending: number;
  upcomingDeadlines: Array<IProject>;
  upcomingStartDates: Array<IProject>;
}

