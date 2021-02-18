## Reference for Library Installations

1. Using apollo-server-lambda which uses apollo-server as a base and have the wrapper to create lambda handler to convert event data into graphql query.

```bash
yarn add apollo-server-lambda graphql
# build error not found these modules, so manually installed them.
yarn add bufferutil utf-8-validate
```

2. Using serverless-offline to spin up lambda

```bash
yarn add --dev serverless-offline
```
