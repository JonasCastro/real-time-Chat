import { IUser } from './user';

export interface IMessage {
  user: IUser;
  value: string;
  date: string;
}
