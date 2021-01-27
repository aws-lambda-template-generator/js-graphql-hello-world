# Javascript Lambda GraphQL Hello World Example


## Installation

```bash
yarn add apollo-server-lambda

# build error not found these modules, so manually installed them.
yarn add bufferutil utf-8-validate
```


## Testing lambda locally

Use Serverless Offline.

```bash
# Install
yarn add --dev serverless-offline

# Start local lambda
sls offline

# Test with curl
curl -X POST http://localhost:3000//test/graphql/profile
```
