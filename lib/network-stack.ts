import { Stack, StackProps } from "aws-cdk-lib";
import * as cdk from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";
import { IpAddresses } from "aws-cdk-lib/aws-ec2";

export class NetworkStack extends Stack {
  public readonly vpc: cdk.aws_ec2.Vpc;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.vpc = new ec2.Vpc(this, "KilaVpc", {
      ipAddresses: IpAddresses.cidr("10.0.0.0/16"),
      natGateways: 1,
      maxAzs: 3,
      subnetConfiguration: [
        {
          name: "kilaPrivateSubnet",
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
          cidrMask: 24,
        },
        {
          name: "kilaPublicSubnet",
          subnetType: ec2.SubnetType.PUBLIC,
          cidrMask: 24,
        },
      ],
    });
  }
}
