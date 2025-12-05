const { createContactMessageRef, listServicesRef, getTeamMembersRef, updateCompanyInfoRef } = require('../');
const { DataConnect, CallerSdkTypeEnum } = require('@angular/fire/data-connect');
const { injectDataConnectQuery, injectDataConnectMutation } = require('@tanstack-query-firebase/angular/data-connect');
const { inject, EnvironmentInjector } = require('@angular/core');

exports.injectCreateContactMessage = function injectCreateContactMessage(args, injector) {
  return injectDataConnectMutation(createContactMessageRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

exports.injectListServices = function injectListServices(options, injector) {
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

exports.injectGetTeamMembers = function injectGetTeamMembers(options, injector) {
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

exports.injectUpdateCompanyInfo = function injectUpdateCompanyInfo(args, injector) {
  return injectDataConnectMutation(updateCompanyInfoRef, args, injector, CallerSdkTypeEnum.GeneratedAngular);
}

