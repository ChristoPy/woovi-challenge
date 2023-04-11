/**
 * @generated SignedSource<<4cb253bce2334c2517c10d28a6faffaf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Category = "BOOKS" | "ELECTRONICS" | "FASHION" | "GROCERY" | "HOME" | "OTHER" | "SPORTS" | "TOYS" | "%future added value";
export type productInfoQuery$variables = {
  productId: string;
};
export type productInfoQuery$data = {
  readonly product: {
    readonly _id: string;
    readonly category: Category;
    readonly createdAt: any;
    readonly description: string;
    readonly images: ReadonlyArray<string>;
    readonly name: string;
    readonly price: number;
    readonly quantity: number;
    readonly updatedAt: any | null;
  } | null;
};
export type productInfoQuery = {
  response: productInfoQuery$data;
  variables: productInfoQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "productId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "productId"
      }
    ],
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "product",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "price",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "category",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "images",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "createdAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "updatedAt",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "quantity",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "productInfoQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "productInfoQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "96a42f73d1ba78ef96d4f449d0f5e718",
    "id": null,
    "metadata": {},
    "name": "productInfoQuery",
    "operationKind": "query",
    "text": "query productInfoQuery(\n  $productId: String!\n) {\n  product(_id: $productId) {\n    _id\n    name\n    price\n    description\n    category\n    images\n    createdAt\n    updatedAt\n    quantity\n  }\n}\n"
  }
};
})();

(node as any).hash = "36ba389158423efc5265db05371f5c61";

export default node;
