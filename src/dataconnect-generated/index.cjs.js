const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'final',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createContactMessageRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateContactMessage', inputVars);
}
createContactMessageRef.operationName = 'CreateContactMessage';
exports.createContactMessageRef = createContactMessageRef;

exports.createContactMessage = function createContactMessage(dcOrVars, vars) {
  return executeMutation(createContactMessageRef(dcOrVars, vars));
};

const listServicesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListServices');
}
listServicesRef.operationName = 'ListServices';
exports.listServicesRef = listServicesRef;

exports.listServices = function listServices(dc) {
  return executeQuery(listServicesRef(dc));
};

const getTeamMembersRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetTeamMembers');
}
getTeamMembersRef.operationName = 'GetTeamMembers';
exports.getTeamMembersRef = getTeamMembersRef;

exports.getTeamMembers = function getTeamMembers(dc) {
  return executeQuery(getTeamMembersRef(dc));
};

const updateCompanyInfoRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateCompanyInfo', inputVars);
}
updateCompanyInfoRef.operationName = 'UpdateCompanyInfo';
exports.updateCompanyInfoRef = updateCompanyInfoRef;

exports.updateCompanyInfo = function updateCompanyInfo(dcOrVars, vars) {
  return executeMutation(updateCompanyInfoRef(dcOrVars, vars));
};
