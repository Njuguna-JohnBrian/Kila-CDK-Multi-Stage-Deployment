import { DockerImageFunction } from "aws-cdk-lib/aws-lambda";
import { Construct } from "constructs";
import { Duration } from "aws-cdk-lib";

import * as lambda from "aws-cdk-lib/aws-lambda";
import * as cdk from "aws-cdk-lib";
/**
 *
 * @param lambdaScope  scope/context of function
 * @param lambdaName
 * @param lambdaDescription  a tag to identify a function better
 * @param lambdaPath path to the lambda dockerfile
 * @param lambdaTimeout the time after which a function will stop running
 * @param dockerFile
 * @param lambdaEnvironments environment variables to be parsed to the function
 * @param vpc
 * @param vpcSubnets
 * @returns a new instance of a `DockerImageFunction`
 */
export const createLambda = (
  lambdaScope: Construct,
  lambdaName: string,
  lambdaDescription: string,
  lambdaPath: string,
  lambdaTimeout: number,
  dockerFile?: string,
  lambdaEnvironments?: {
    [key: string]: string;
  },
  vpc?: cdk.aws_ec2.IVpc,
  vpcSubnets?: cdk.aws_ec2.SubnetSelection
): DockerImageFunction => {
  return new DockerImageFunction(lambdaScope, lambdaDescription, {
    code: lambda.DockerImageCode.fromImageAsset(lambdaPath, {
      file: dockerFile,
    }),
    functionName: lambdaName,
    description: lambdaDescription,
    timeout: Duration.seconds(lambdaTimeout),
    memorySize: 1024,
    retryAttempts: 2,
    environment: lambdaEnvironments,
    vpc,
    vpcSubnets,
  });
};
