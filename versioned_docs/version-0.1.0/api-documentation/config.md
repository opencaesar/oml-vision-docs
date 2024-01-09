---
sidebar_position: 2
---

# Config

The config or configuration directory contains the configuration the following API endpoints for the in-memory [Fuseki](https://jena.apache.org/documentation/fuseki2/) RDF triplestore:

- query
- update

<!-- TODO: Change example to opencaesar organization -->
An example of a config directory correctly formatted for OML Vision can be seen [here](https://github.com/pogi7/kepler16b-example/blob/main/src/vision/config/sparqlConfig.json)

## sparqlConfig.json

:::info sparqlConfig.json

Create a `src/vision/config/sparqlConfig.json` file (case-sensitive)

:::

The `src/vision/config/sparqlConfig.json` file is responsible for specifying the query and update API endpoints.

It is formatted as a JSON data structure.

<!-- TODO: Change to opencaesar repo -->
An example of what this looks like is seen below with the source code found [here](https://github.com/pogi7/kepler16b-example/blob/main/src/vision/config/sparqlConfig.json)

```json
{
  "queryEndpoint": "http://localhost:3030/tutorial2/sparql",
  "updateEndpoint": "http://localhost:3030/tutorial2/update"
}
```

### queryEndpoint

:::danger REQUIRED

```typescript
queryEndpoint: string
```

:::

This string defines the API query endpoint of the in-memory RDF triplestore.  

#### Fuseki

<!-- TODO: Change to opencaesar repo -->
This endpoint can usually be found within the `.fuseki.ttl` file under the `sparql` service.  An example of how to specify this endpoint can be found [here](https://github.com/pogi7/kepler16b-example/blob/main/.fuseki.ttl#L15)

### updateEndpoint
:::danger REQUIRED

```typescript
updateEndpoint: string
```

:::

This string defines the API update endpoint of the in-memory RDF triplestore.  

#### Fuseki

<!-- TODO: Change to opencaesar repo -->
This endpoint can usually be found within the `.fuseki.ttl` file under the `update` service.  An example of how to specify this endpoint can be found [here](https://github.com/pogi7/kepler16b-example/blob/main/.fuseki.ttl#L14)