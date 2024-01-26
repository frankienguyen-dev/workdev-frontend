import { Role } from './role.type.ts';
import { BelongToCompany } from './company.type.ts';
import { Job } from './job.type.ts';

export interface ByUser {
  id: string;
  email: string;
}

export interface User {
  id: string;
  fullName: string | null;
  address: string | null;
  email: string;
  logo?: string;
  phoneNumber: string | null;
  gender: string | null;
  title: string | null;
  age: number | null;
  roles: Role[] | [];
  jobs: Job[] | [];
  company: BelongToCompany | null;
  createdBy: ByUser | null;
  createdAt: string | null;
  updatedBy: ByUser | null;
  updatedAt: string | null;
  deletedBy: ByUser | null;
  deletedAt: string | null;
}

export interface UserResponse {
  message: string;
  statusCode: number;
  data: User;
}
