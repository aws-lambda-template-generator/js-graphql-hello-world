# Javascript Lambda GraphQL Hello World Example

Simple GraphQL Lambda function example with JavaScript. GraphQL is powered by apollo-server-lambda. return hello world with Query. It will give the endpoint for post as well as get for the playground.

<img src="./img/hello-world-playground.png" />

## Tools

- yarn
- serverless
- apollo-server-lambda

## Installation

```bash
yarn install
```

## Testing lambda locally

Use Serverless Offline.

```bash
# Start local lambda by using sls offline command
sls offline start -r ap-southeast-1 --stage test

# Test with curl
curl -X POST http://localhost:3000/test/graphql/hello --data '{"query": "{hello}"}'
```

Playground is available.

Go to `http://localhost:3000/test/graphql`. You may need to change the actual query url within the query tab to `http://localhost:3000/test/graphql/hello`

`apollo-server-lambda` uses `apollo-server` under the hood. Therefore, the logic should work when it is replaced ith apollo-server. We can run the application without spinning up a local lambda.

```js
yarn dev
```

## Deploy

In `config/account.yml`, you need to fill account, aws region and s3 base url. Make sure your AWS CLI is configured correctly. Then, use sls command to deploy.

```bash
sls deploy --stage test

# Account can be overriden by passing the --account in sls command
sls deploy --stage test --acount <your AWS account number>
```
