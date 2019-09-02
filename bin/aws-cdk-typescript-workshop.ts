#!/usr/bin/env node
import cdk = require('@aws-cdk/core');
import { AwsCdkTypescriptWorkshopStack } from '../lib/aws-cdk-typescript-workshop-stack';

const app = new cdk.App();
new AwsCdkTypescriptWorkshopStack(app, 'AwsCdkTypescriptWorkshopStack');