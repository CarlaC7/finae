import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CompanyInfo_Key {
  id: UUIDString;
  __typename?: 'CompanyInfo_Key';
}

export interface ContactMessage_Key {
  id: UUIDString;
  __typename?: 'ContactMessage_Key';
}

export interface CreateContactMessageData {
  contactMessage_insert: ContactMessage_Key;
}

export interface CreateContactMessageVariables {
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
  senderPhone?: string | null;
}

export interface GetTeamMembersData {
  teamMembers: ({
    id: UUIDString;
    name: string;
    role: string;
    imageUrl?: string | null;
  } & TeamMember_Key)[];
}

export interface ListServicesData {
  services: ({
    id: UUIDString;
    name: string;
    description: string;
    imageUrl?: string | null;
    priceRange?: string | null;
  } & Service_Key)[];
}

export interface Service_Key {
  id: UUIDString;
  __typename?: 'Service_Key';
}

export interface TeamMember_Key {
  id: UUIDString;
  __typename?: 'TeamMember_Key';
}

export interface UpdateCompanyInfoData {
  companyInfo_update?: CompanyInfo_Key | null;
}

export interface UpdateCompanyInfoVariables {
  id: UUIDString;
  address?: string | null;
  email?: string | null;
  history?: string | null;
  missionStatement?: string | null;
  name?: string | null;
  phone?: string | null;
}

interface CreateContactMessageRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateContactMessageVariables): MutationRef<CreateContactMessageData, CreateContactMessageVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateContactMessageVariables): MutationRef<CreateContactMessageData, CreateContactMessageVariables>;
  operationName: string;
}
export const createContactMessageRef: CreateContactMessageRef;

export function createContactMessage(vars: CreateContactMessageVariables): MutationPromise<CreateContactMessageData, CreateContactMessageVariables>;
export function createContactMessage(dc: DataConnect, vars: CreateContactMessageVariables): MutationPromise<CreateContactMessageData, CreateContactMessageVariables>;

interface ListServicesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListServicesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListServicesData, undefined>;
  operationName: string;
}
export const listServicesRef: ListServicesRef;

export function listServices(): QueryPromise<ListServicesData, undefined>;
export function listServices(dc: DataConnect): QueryPromise<ListServicesData, undefined>;

interface GetTeamMembersRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetTeamMembersData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetTeamMembersData, undefined>;
  operationName: string;
}
export const getTeamMembersRef: GetTeamMembersRef;

export function getTeamMembers(): QueryPromise<GetTeamMembersData, undefined>;
export function getTeamMembers(dc: DataConnect): QueryPromise<GetTeamMembersData, undefined>;

interface UpdateCompanyInfoRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCompanyInfoVariables): MutationRef<UpdateCompanyInfoData, UpdateCompanyInfoVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateCompanyInfoVariables): MutationRef<UpdateCompanyInfoData, UpdateCompanyInfoVariables>;
  operationName: string;
}
export const updateCompanyInfoRef: UpdateCompanyInfoRef;

export function updateCompanyInfo(vars: UpdateCompanyInfoVariables): MutationPromise<UpdateCompanyInfoData, UpdateCompanyInfoVariables>;
export function updateCompanyInfo(dc: DataConnect, vars: UpdateCompanyInfoVariables): MutationPromise<UpdateCompanyInfoData, UpdateCompanyInfoVariables>;

