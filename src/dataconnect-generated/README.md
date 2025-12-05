# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `Angular README`, you can find it at [`dataconnect-generated/angular/README.md`](./angular/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListServices*](#listservices)
  - [*GetTeamMembers*](#getteammembers)
- [**Mutations**](#mutations)
  - [*CreateContactMessage*](#createcontactmessage)
  - [*UpdateCompanyInfo*](#updatecompanyinfo)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListServices
You can execute the `ListServices` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listServices(): QueryPromise<ListServicesData, undefined>;

interface ListServicesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListServicesData, undefined>;
}
export const listServicesRef: ListServicesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listServices(dc: DataConnect): QueryPromise<ListServicesData, undefined>;

interface ListServicesRef {
  ...
  (dc: DataConnect): QueryRef<ListServicesData, undefined>;
}
export const listServicesRef: ListServicesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listServicesRef:
```typescript
const name = listServicesRef.operationName;
console.log(name);
```

### Variables
The `ListServices` query has no variables.
### Return Type
Recall that executing the `ListServices` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListServicesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListServicesData {
  services: ({
    id: UUIDString;
    name: string;
    description: string;
    imageUrl?: string | null;
    priceRange?: string | null;
  } & Service_Key)[];
}
```
### Using `ListServices`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listServices } from '@dataconnect/generated';


// Call the `listServices()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listServices();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listServices(dataConnect);

console.log(data.services);

// Or, you can use the `Promise` API.
listServices().then((response) => {
  const data = response.data;
  console.log(data.services);
});
```

### Using `ListServices`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listServicesRef } from '@dataconnect/generated';


// Call the `listServicesRef()` function to get a reference to the query.
const ref = listServicesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listServicesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.services);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.services);
});
```

## GetTeamMembers
You can execute the `GetTeamMembers` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getTeamMembers(): QueryPromise<GetTeamMembersData, undefined>;

interface GetTeamMembersRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetTeamMembersData, undefined>;
}
export const getTeamMembersRef: GetTeamMembersRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getTeamMembers(dc: DataConnect): QueryPromise<GetTeamMembersData, undefined>;

interface GetTeamMembersRef {
  ...
  (dc: DataConnect): QueryRef<GetTeamMembersData, undefined>;
}
export const getTeamMembersRef: GetTeamMembersRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getTeamMembersRef:
```typescript
const name = getTeamMembersRef.operationName;
console.log(name);
```

### Variables
The `GetTeamMembers` query has no variables.
### Return Type
Recall that executing the `GetTeamMembers` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetTeamMembersData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface GetTeamMembersData {
  teamMembers: ({
    id: UUIDString;
    name: string;
    role: string;
    imageUrl?: string | null;
  } & TeamMember_Key)[];
}
```
### Using `GetTeamMembers`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getTeamMembers } from '@dataconnect/generated';


// Call the `getTeamMembers()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getTeamMembers();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getTeamMembers(dataConnect);

console.log(data.teamMembers);

// Or, you can use the `Promise` API.
getTeamMembers().then((response) => {
  const data = response.data;
  console.log(data.teamMembers);
});
```

### Using `GetTeamMembers`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getTeamMembersRef } from '@dataconnect/generated';


// Call the `getTeamMembersRef()` function to get a reference to the query.
const ref = getTeamMembersRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getTeamMembersRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.teamMembers);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.teamMembers);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateContactMessage
You can execute the `CreateContactMessage` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createContactMessage(vars: CreateContactMessageVariables): MutationPromise<CreateContactMessageData, CreateContactMessageVariables>;

interface CreateContactMessageRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateContactMessageVariables): MutationRef<CreateContactMessageData, CreateContactMessageVariables>;
}
export const createContactMessageRef: CreateContactMessageRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createContactMessage(dc: DataConnect, vars: CreateContactMessageVariables): MutationPromise<CreateContactMessageData, CreateContactMessageVariables>;

interface CreateContactMessageRef {
  ...
  (dc: DataConnect, vars: CreateContactMessageVariables): MutationRef<CreateContactMessageData, CreateContactMessageVariables>;
}
export const createContactMessageRef: CreateContactMessageRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createContactMessageRef:
```typescript
const name = createContactMessageRef.operationName;
console.log(name);
```

### Variables
The `CreateContactMessage` mutation requires an argument of type `CreateContactMessageVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateContactMessageVariables {
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
  senderPhone?: string | null;
}
```
### Return Type
Recall that executing the `CreateContactMessage` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateContactMessageData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateContactMessageData {
  contactMessage_insert: ContactMessage_Key;
}
```
### Using `CreateContactMessage`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createContactMessage, CreateContactMessageVariables } from '@dataconnect/generated';

// The `CreateContactMessage` mutation requires an argument of type `CreateContactMessageVariables`:
const createContactMessageVars: CreateContactMessageVariables = {
  senderName: ..., 
  senderEmail: ..., 
  subject: ..., 
  message: ..., 
  senderPhone: ..., // optional
};

// Call the `createContactMessage()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createContactMessage(createContactMessageVars);
// Variables can be defined inline as well.
const { data } = await createContactMessage({ senderName: ..., senderEmail: ..., subject: ..., message: ..., senderPhone: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createContactMessage(dataConnect, createContactMessageVars);

console.log(data.contactMessage_insert);

// Or, you can use the `Promise` API.
createContactMessage(createContactMessageVars).then((response) => {
  const data = response.data;
  console.log(data.contactMessage_insert);
});
```

### Using `CreateContactMessage`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createContactMessageRef, CreateContactMessageVariables } from '@dataconnect/generated';

// The `CreateContactMessage` mutation requires an argument of type `CreateContactMessageVariables`:
const createContactMessageVars: CreateContactMessageVariables = {
  senderName: ..., 
  senderEmail: ..., 
  subject: ..., 
  message: ..., 
  senderPhone: ..., // optional
};

// Call the `createContactMessageRef()` function to get a reference to the mutation.
const ref = createContactMessageRef(createContactMessageVars);
// Variables can be defined inline as well.
const ref = createContactMessageRef({ senderName: ..., senderEmail: ..., subject: ..., message: ..., senderPhone: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createContactMessageRef(dataConnect, createContactMessageVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.contactMessage_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.contactMessage_insert);
});
```

## UpdateCompanyInfo
You can execute the `UpdateCompanyInfo` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateCompanyInfo(vars: UpdateCompanyInfoVariables): MutationPromise<UpdateCompanyInfoData, UpdateCompanyInfoVariables>;

interface UpdateCompanyInfoRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateCompanyInfoVariables): MutationRef<UpdateCompanyInfoData, UpdateCompanyInfoVariables>;
}
export const updateCompanyInfoRef: UpdateCompanyInfoRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateCompanyInfo(dc: DataConnect, vars: UpdateCompanyInfoVariables): MutationPromise<UpdateCompanyInfoData, UpdateCompanyInfoVariables>;

interface UpdateCompanyInfoRef {
  ...
  (dc: DataConnect, vars: UpdateCompanyInfoVariables): MutationRef<UpdateCompanyInfoData, UpdateCompanyInfoVariables>;
}
export const updateCompanyInfoRef: UpdateCompanyInfoRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateCompanyInfoRef:
```typescript
const name = updateCompanyInfoRef.operationName;
console.log(name);
```

### Variables
The `UpdateCompanyInfo` mutation requires an argument of type `UpdateCompanyInfoVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateCompanyInfoVariables {
  id: UUIDString;
  address?: string | null;
  email?: string | null;
  history?: string | null;
  missionStatement?: string | null;
  name?: string | null;
  phone?: string | null;
}
```
### Return Type
Recall that executing the `UpdateCompanyInfo` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateCompanyInfoData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateCompanyInfoData {
  companyInfo_update?: CompanyInfo_Key | null;
}
```
### Using `UpdateCompanyInfo`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateCompanyInfo, UpdateCompanyInfoVariables } from '@dataconnect/generated';

// The `UpdateCompanyInfo` mutation requires an argument of type `UpdateCompanyInfoVariables`:
const updateCompanyInfoVars: UpdateCompanyInfoVariables = {
  id: ..., 
  address: ..., // optional
  email: ..., // optional
  history: ..., // optional
  missionStatement: ..., // optional
  name: ..., // optional
  phone: ..., // optional
};

// Call the `updateCompanyInfo()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateCompanyInfo(updateCompanyInfoVars);
// Variables can be defined inline as well.
const { data } = await updateCompanyInfo({ id: ..., address: ..., email: ..., history: ..., missionStatement: ..., name: ..., phone: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateCompanyInfo(dataConnect, updateCompanyInfoVars);

console.log(data.companyInfo_update);

// Or, you can use the `Promise` API.
updateCompanyInfo(updateCompanyInfoVars).then((response) => {
  const data = response.data;
  console.log(data.companyInfo_update);
});
```

### Using `UpdateCompanyInfo`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateCompanyInfoRef, UpdateCompanyInfoVariables } from '@dataconnect/generated';

// The `UpdateCompanyInfo` mutation requires an argument of type `UpdateCompanyInfoVariables`:
const updateCompanyInfoVars: UpdateCompanyInfoVariables = {
  id: ..., 
  address: ..., // optional
  email: ..., // optional
  history: ..., // optional
  missionStatement: ..., // optional
  name: ..., // optional
  phone: ..., // optional
};

// Call the `updateCompanyInfoRef()` function to get a reference to the mutation.
const ref = updateCompanyInfoRef(updateCompanyInfoVars);
// Variables can be defined inline as well.
const ref = updateCompanyInfoRef({ id: ..., address: ..., email: ..., history: ..., missionStatement: ..., name: ..., phone: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateCompanyInfoRef(dataConnect, updateCompanyInfoVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.companyInfo_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.companyInfo_update);
});
```

