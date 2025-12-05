import { CreateContactMessageData, CreateContactMessageVariables, ListServicesData, GetTeamMembersData, UpdateCompanyInfoData, UpdateCompanyInfoVariables } from '../';
import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise} from '@angular/fire/data-connect';
import { CreateQueryResult, CreateMutationResult} from '@tanstack/angular-query-experimental';
import { CreateDataConnectQueryResult, CreateDataConnectQueryOptions, CreateDataConnectMutationResult, DataConnectMutationOptionsUndefinedMutationFn } from '@tanstack-query-firebase/angular/data-connect';
import { FirebaseError } from 'firebase/app';
import { Injector } from '@angular/core';

type CreateContactMessageOptions = DataConnectMutationOptionsUndefinedMutationFn<CreateContactMessageData, FirebaseError, CreateContactMessageVariables>;
export function injectCreateContactMessage(options?: CreateContactMessageOptions, injector?: Injector): CreateDataConnectMutationResult<CreateContactMessageData, CreateContactMessageVariables, CreateContactMessageVariables>;

export type ListServicesOptions = () => Omit<CreateDataConnectQueryOptions<ListServicesData, undefined>, 'queryFn'>;
export function injectListServices(options?: ListServicesOptions, injector?: Injector): CreateDataConnectQueryResult<ListServicesData, undefined>;

export type GetTeamMembersOptions = () => Omit<CreateDataConnectQueryOptions<GetTeamMembersData, undefined>, 'queryFn'>;
export function injectGetTeamMembers(options?: GetTeamMembersOptions, injector?: Injector): CreateDataConnectQueryResult<GetTeamMembersData, undefined>;

type UpdateCompanyInfoOptions = DataConnectMutationOptionsUndefinedMutationFn<UpdateCompanyInfoData, FirebaseError, UpdateCompanyInfoVariables>;
export function injectUpdateCompanyInfo(options?: UpdateCompanyInfoOptions, injector?: Injector): CreateDataConnectMutationResult<UpdateCompanyInfoData, UpdateCompanyInfoVariables, UpdateCompanyInfoVariables>;
