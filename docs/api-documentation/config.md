---
sidebar_position: 2
---

# Config

The config or configuration directory contains the configuration the following API endpoints for the in-memory [Fuseki](https://jena.apache.org/documentation/fuseki2/) RDF triplestore:

- query
- mutation

<!-- TODO: Change example to opencaesar organization -->
An example of a config directory correctly formatted for OML Vision can be seen [here](https://github.com/pogi7/kepler16b-example/blob/main/src/vision/config/sparqlConfig.json)

## sparqlConfig.json

:::info sparqlConfig.json

Create a `src/vision/config/sparqlConfig.json` file (case-sensitive)

:::

The `src/vision/config/sparqlConfig.json` file is responsible for specifying the query and mutation API endpoints.

It is formatted as a JSON object with 2 strings as follows:

```json
{
  "queryEndpoint": string,
  "mutationEndpoint": string
}
```