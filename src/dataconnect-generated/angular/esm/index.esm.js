import { createContactMessageRef, listServicesRef, getTeamMembersRef, updateCompanyInfoRef } from '../../';
import { DataConnect, CallerSdkTypeEnum } from '@angular/fire/data-connect';
import { injectDataConnectQuery, injectDataConnectMutation } from '@tanstack-query-firebase/angular/data-connect';
import { inject, EnvironmentInjector } from '@angular/core';
export function injectCreateContactMessage(args, injector) {
  return injectDataConnectMutation(createContactMessageRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectListServices(options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  listServicesRef(dc),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectGetTeamMembers(options, injector) {
  const finalInjector = injector || inject(EnvironmentInjector);
  const dc = finalInjector.get(DataConnect);
  return injectDataConnectQuery(() => {
    const addOpn = options && options();
    return {
      queryFn: () =>  getTeamMembersRef(dc),
      ...addOpn
    };
  }, finalInjector, CallerSdkTypeEnum.GeneratedAngular);
}

export function injectUpdateCompanyInfo(args, injector) {
  return injectDataConnectMutation(updateCompanyInfoRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

