import cdk = require('@aws-cdk/core');
import lambda = require('@aws-cdk/aws-lambda')
import apigw = require('@aws-cdk/aws-apigateway')
import { HitCounter } from './hitcounter'


export class AwsCdkTypescriptWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: 'hello.handler',
      code: lambda.Code.fromAsset('lambda')
    })

    const helloWithCounter = new HitCounter(this, 'HelloHitCounter', {
      downstream: hello
    })

    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: helloWithCounter.handler
    })
  }
}
