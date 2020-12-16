#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { KusoappStack } from '../lib/kusoapp-stack';

const app = new cdk.App();
new KusoappStack(app, 'KusoappStack');
