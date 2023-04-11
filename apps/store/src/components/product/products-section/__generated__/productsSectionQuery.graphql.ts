/**
 * @generated SignedSource<<729aa9401540529be29fb2420eff411a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Category = "BOOKS" | "ELECTRONICS" | "FASHION" | "GROCERY" | "HOME" | "OTHER" | "SPORTS" | "TOYS" | "%future added value";
export type productsSectionQuery$variables = {};
export type productsSectionQuery$data = {
  readonly products: ReadonlyArray<{
    readonly _id: string;
    readonly category: Category;
    readonly createdAt: any;
    readonly description: string;
    readonly images: ReadonlyArray<string>;
    readonly name: string;
    readonly price: number;
    readonly quantity: number;
    readonly updatedAt: any | null;
  }>;
};
export type productsSectionQuery = {
  response: productsSectionQuery$data;
  variables: productsSectionQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Product",
    "kind": "LinkedField",
    "name": "products",
    "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "productsSectionQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "productsSectionQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "02370f30a8416dfc83c73a27890965ad",
    "id": null,
    "metadata": {},
    "name": "productsSectionQuery",
    "operationKind": "query",
    "text": "query productsSectionQuery {\n  products {\n    _id\n    name\n    price\n    description\n    category\n    images\n    createdAt\n    updatedAt\n    quantity\n  }\n}\n"
  }
};
})();

(node as any).hash = "2782715de5bead89d576ff22aa5e409f";

export default node;
