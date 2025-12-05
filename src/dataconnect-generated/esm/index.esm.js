import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'final',
  location: 'us-east4'
};

export const createContactMessageRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateContactMessage', inputVars);
}
createContactMessageRef.operationName = 'CreateContactMessage';

export function createContactMessage(dcOrVars, vars) {
  return executeMutation(createContactMessageRef(dcOrVars, vars));
}

export const listServicesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListServices');
}
listServicesRef.operationName = 'ListServices';

export function listServices(dc) {
  return executeQuery(listServicesRef(dc));
}

export const getTeamMembersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetTeamMembers');
}
getTeamMembersRef.operationName = 'GetTeamMembers';

export function getTeamMembers(dc) {
  return executeQuery(getTeamMembersRef(dc));
}

export const updateCompanyInfoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateCompanyInfo', inputVars);
}
updateCompanyInfoRef.operationName = 'UpdateCompanyInfo';

export function updateCompanyInfo(dcOrVars, vars) {
  return executeMutation(updateCompanyInfoRef(dcOrVars, vars));
}

