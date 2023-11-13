import { SupportedRegion, SystemConfig } from "../lib/shared/types";
import { existsSync, readFileSync } from "fs";

export function getConfig(): SystemConfig {
  if (existsSync("./bin/config.json")) {
    return JSON.parse(readFileSync("./bin/config.json").toString("utf8"));
  }
  // Default config
  return {
    prefix: "X1",
    /*vpc: {
      vpcId: "vpc-00000000000000000",
      createVpcEndpoints: true,
    },*/
    bedrock: {
      enabled: true,
      region: SupportedRegion.US_EAST_1,
      endpointUrl: "https://bedrock-runtime.us-east-1.amazonaws.com",
    },
    llms: {
      // sagemaker: [SupportedSageMakerModels.FalconLite]
      sagemaker: [],
    },
    rag: {
      enabled: true,
      engines: {
        aurora: {
          enabled: true,
        },
        opensearch: {
          enabled: true,
        },
        kendra: {
          enabled: true,
          createIndex: true,
        },
      },
      embeddingsModels: [
        {
          provider: "sagemaker",
          name: "intfloat/multilingual-e5-large",
          dimensions: 1024,
        },
        {
          provider: "sagemaker",
          name: "sentence-transformers/all-MiniLM-L6-v2",
          dimensions: 384,
        },
        {
          provider: "bedrock",
          name: "amazon.titan-embed-text-v1",
          dimensions: 1536,
          default: true,
        },
        {
          provider: "bedrock",
          name: "cohere.embed-english-v3",
          dimensions: 1024,
        },
        {
          provider: "bedrock",
          name: "cohere.embed-multilingual-v3",
          dimensions: 1024,
        },
        {
          provider: "openai",
          name: "text-embedding-ada-002",
          dimensions: 1536,
        },
      ],
      crossEncoderModels: [
        {
          provider: "sagemaker",
          name: "cross-encoder/ms-marco-MiniLM-L-12-v2",
          default: true,
        },
      ],
    },
  };
}

export const config: SystemConfig = getConfig();
