import React, { Component } from 'react';
import id from 'shortid'

export let menus = [
  { id: id.generate(),
    name: "Espresso",
    description: "Coffee of Italian origin, brewed by expressing through finely ground coffee beans.",
    menus:
      [ { id: 1, name: "Hot Espresso", price: 45 },
        { id: 2, name: "Cold Espresso", price: 50 },
        { id: 3, name: "Espresso Frappe", price: 55 }
      ]

  },
  { id: id.generate(),
    name: "Latte",
    description: "Coffee drink made with espresso and steamed milk. This is milkier than a cappuccino.",
    menus:
      [ { id: 4, name: "Hot Latte", price: 55 },
        { id: 5, name: "Cold Latte", price: 65 },
        { id: 6, name: "Latte Frappe", price: 75 }
      ]

  },
  { id: id.generate(),
    name: "Cappucino",
    description: "Espresso-based coffee drink prepared with double espresso and steamed milk foam (microfoam).",
    menus:
      [ { id: 7, name: "Hot Cappucino", price: 60 },
        { id: 8, name: "Cold Cappucino", price: 70 },
        { id: 9, name: "Cappucino Frappe", price: 80 }
      ]

  }
];
