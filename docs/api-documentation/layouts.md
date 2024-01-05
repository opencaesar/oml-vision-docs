---
sidebar_position: 3
---

# Layouts

The layouts directory contains the specifications for OML Vision to render 

- pages defined in the model that are rendered in the sidebar
- content within tables, trees, and diagrams that are rendered in the webview

<!-- TODO: Change example to opencaesar organization -->
An example of a layouts directory correctly formatted for OML Vision can be seen [here](https://github.com/pogi7/kepler16b-example/blob/main/src/vision/layouts)

## `pages.json`

:::info pages.json

Create a `src/vision/layouts/pages.json` file (case-sensitive)

:::

The `src/vision/layouts/pages.json` file is responsible defines possible views that OML Vision can display to user can specify if a view is a table, tree, or diagram

It is formatted as a JSON data structure.

<!-- TODO: Change to opencaesar repo -->
An example of what this looks like is seen below with the source code found [here](https://github.com/pogi7/kepler16b-example/blob/main/src/vision/layouts/pages.json)

```json
[
  { "title": "Home", "path": "/", "treeIcon": "home" },
  {
    "title": "Kepler16b",
    "treeIcon": "server",
    "iconUrl": "https://nasa-jpl.github.io/stellar/icons/satellite.svg",
    "children": [
      { 
        "title": "Objectives",
        "treeIcon": "window",
        "path": "objectives" 
      },
      {
        "title": "Missions",
        "treeIcon": "graph-scatter",
        "path": "missions",
        "isDiagram": true
      },
      {
        "title": "Components",
        "treeIcon": "list-tree",
        "path": "components",
        "isTree": true
      },
      {
        "title": "Connections",
        "treeIcon": "window",
        "path": "connections"
      },
      {
        "title": "Requirements",
        "treeIcon": "list-tree",
        "path": "requirements",
        "isTree": true
      }
    ]
  }
]
```

## Home Page

The home page acts as an entry point for users to navigate through the pages that OML Vision renders.

### title
:::danger REQUIRED

```typescript
title: string
```

:::


This string defines the title of the home page.  A good name for the home page is "Home" or "Frontpage"

:::tip USER INTERFACE

The name of the `title` is rendered in the sidebar for the OML Vision extension shown in the red boxes.

![Title Home Page](./img/titleHomePage.png)

:::

### path
:::danger REQUIRED

```typescript
path: string
```

:::


This string defines the path of the page. 

**For the `Home Page` the path must be `/`**

:::tip USER INTERFACE

The name of the `path` is rendered in the sidebar when you hover and hold for 2 seconds over the `Home Page` in the OML Vision extension shown in the red boxes.

![Path Home Page](./img/pathHomePage.png)

:::

### treeIcon
:::note OPTIONAL

```typescript
treeIcon: string
```

:::


This string defines the icon to be rendered in the sidebar next to the `Title` of the page. 

**A full list of available icons can be seen [here](https://code.visualstudio.com/api/references/icons-in-labels#icon-listing).  Use the `default codicon ID` as the value of the `treeIcon`**

:::tip USER INTERFACE

The icon of the `treeIcon` is rendered in the sidebar for the OML Vision extension shown in the red boxes.

![Path Home Page](./img/treeIconHomePage.png)

:::

