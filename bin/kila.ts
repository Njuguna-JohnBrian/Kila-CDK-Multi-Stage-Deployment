#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { KilaStack } from "../lib/kila-stack";
import { NetworkStack } from "../lib/network-stack";
import { ApiStack } from "../lib/api-stack";
import * as exec from "child_process";

const app = new cdk.App();

const env: cdk.Environment = {
  region: cdk.Aws.REGION,
};

const network = new NetworkStack(app, "KilaNetworkStack", {
  description: "Kila Network Stack",
  crossRegionReferences: true,
  env: {
    region: "us-east-1",
  },
});

const api = new ApiStack(app, "KilaApiStack", {
  description: "Kila Api Stack",
  stage: "dev",
  env: env,
});
