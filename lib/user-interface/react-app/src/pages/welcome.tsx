import {
  ContentLayout,
  Header,
  Cards,
  Container,
  SpaceBetween,
  Link,
  BreadcrumbGroup,
} from "@cloudscape-design/components";
import BaseAppLayout from "../components/base-app-layout";
import RouterButton from "../components/wrappers/router-button";
import useOnFollow from "../common/hooks/use-on-follow";
import { CHATBOT_NAME } from "../common/constants";

export default function Welcome() {
  const onFollow = useOnFollow();

  return (
    <BaseAppLayout
      breadcrumbs={
        <BreadcrumbGroup
          onFollow={onFollow}
          items={[
            {
              text: CHATBOT_NAME,
              href: "/",
            },
          ]}
        />
      }
      content={
        <ContentLayout
          header={
            <Header
              variant="h1"
              description="LSEG GenAI Playground to try out various models with RAG capabilities"
              actions={
                <RouterButton
                  iconAlign="right"
                  iconName="contact"
                  variant="primary"
                  href="/chatbot/playground"
                >
                  Getting Started
                </RouterButton>
              }
            >
              LSEG GenAI Playground Home
            </Header>
          }
        >
          <SpaceBetween size="l">
          <Header
              variant="h1"
              description="TBD Documentation on usage, check the features readme for starting point"
            >
              TBD Documentation on Usage
            </Header>
            <SpaceBetween size="l"></SpaceBetween>
            <Header
              variant="h1"
              description="You can optionally experiment with one or more of the following CDK constructs to implement RAG requests."
            >
              Retrieval Augmented Generation (RAG) sources
            </Header>
            <Cards
              cardDefinition={{
                header: (item) => (
                  <Link
                    href={item.href}
                    external={item.external}
                    fontSize="heading-m"
                  >
                    {item.name}
                  </Link>
                ),
                sections: [
                  {
                    content: (item) => <div>{item.description}</div>,
                  },
                  {
                    id: "type",
                    header: "Type",
                    content: (item) => item.type,
                  },
                ],
              }}
              cardsPerRow={[{ cards: 1 }, { minWidth: 700, cards: 3 }]}
              items={[
                {
                  name: "Amazon Aurora with pgvector",
                  type: "Vector Database",
                  external: true,
                  href: "https://aws.amazon.com/about-aws/whats-new/2023/07/amazon-aurora-postgresql-pgvector-vector-storage-similarity-search/",
                  description:
                    "Amazon Aurora PostgreSQL-Compatible Edition now supports the pgvector extension to store embeddings from machine learning (ML) models in your database and to perform efficient similarity searches.",
                  tags: ["Fully managed"],
                },
                {
                  name: "Amazon Opensearch VectorSearch",
                  type: "Vector Database",
                  external: true,
                  href: "https://aws.amazon.com/blogs/big-data/amazon-opensearch-services-vector-database-capabilities-explained/",
                  description:
                    "With OpenSearch Service’s vector database capabilities, you can implement semantic search, Retrieval Augmented Generation (RAG) with LLMs, recommendation engines, and search rich media.",
                },
                {
                  name: "Amazon Kendra",
                  external: true,
                  type: "Search Engine",
                  href: "https://aws.amazon.com/kendra/",
                  description:
                    "Amazon Kendra is an intelligent search service powered by machine learning (ML).",
                },
              ]}
            />
          </SpaceBetween>
        </ContentLayout>
      }
    ></BaseAppLayout>
  );
}
