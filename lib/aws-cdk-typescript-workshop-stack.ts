import cdk = require('@aws-cdk/core');
import lambda = require('@aws-cdk/aws-lambda')

export class AwsCdkTypescriptWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: 'hello.handler',
      code: lambda.Code.fromAsset('lambda')
    })
  }
}
