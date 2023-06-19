import { Stack, StackProps } from "aws-cdk-lib";
import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";

export interface ApiStackProps extends StackProps {
  stage: string;
}
export class ApiStack extends Stack {
  public readonly api: cdk.aws_apigateway.RestApi;

  constructor(scope: Construct, id: string, props: ApiStackProps) {
    super(scope, id, props);

    this.api = new apigateway.RestApi(this, "KilaApiGateway", {
      description: "KilaApiGateway",
      restApiName: "kilaApi",
      deployOptions: {
        stageName: props.stage,
        tracingEnabled: true,
        variables: {},
      },
      defaultCorsPreflightOptions: {
        allowHeaders: [
          "Content-Type",
          "X-Amz-Date",
          "Authorization",
          "X-Api-Key",
        ],
        allowMethods: ["OPTIONS", "GET", "POST", "PUT", "PATCH", "DELETE"],
        allowCredentials: true,
        allowOrigins: ["http://localhost:3000"],
      },
    });
  }
}
