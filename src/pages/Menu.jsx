
function Menu() {
  const coffee = [
    {
      name: "Cappuccino",
      description: "Rich espresso topped with smooth steamed milk foam.",
      price: "₹140",
    },
    {
      name: "Cafe Latte",
      description: "Smooth espresso blended with creamy steamed milk.",
      price: "₹150",
    },
    {
      name: "Caramel Macchiato",
      description: "Espresso, steamed milk and caramel drizzle.",
      price: "₹170",
    },
    {
      name: "Mocha",
      description: "Espresso combined with chocolate and creamy milk.",
      price: "₹170",
    },
    {
      name: "Cold Coffee",
      description: "Chilled coffee blended with creamy milk and ice.",
      price: "₹160",
    },
    {
      name: "Hazelnut Latte",
      description: "Creamy latte with a delicious roasted hazelnut flavour.",
      price: "₹180",
    },
  ];

  const mocktails = [
    {
      name: "Blue Lagoon",
      description: "Refreshing citrus drink with blue curacao and lemonade.",
      price: "₹160",
    },
    {
      name: "Virgin Mojito",
      description: "Fresh mint, lime and sparkling soda served chilled.",
      price: "₹150",
    },
    {
      name: "Strawberry Fizz",
      description: "Sweet strawberry syrup, lemon and sparkling soda.",
      price: "₹170",
    },
    {
      name: "Peach Iced Tea",
      description: "Chilled black tea infused with sweet peach flavour.",
      price: "₹160",
    },
    {
      name: "Passion Fruit Cooler",
      description: "Tropical passion fruit with lime and sparkling soda.",
      price: "₹180",
    },
    {
      name: "Watermelon Mint Cooler",
      description: "Fresh watermelon blended with mint and lime.",
      price: "₹170",
    },
  ];

  const food = [
    {
      name: "Classic Veg Sandwich",
      description: "Fresh vegetables, cheese and creamy dressing in toasted bread.",
      price: "₹170",
    },
    {
      name: "Grilled Cheese Sandwich",
      description: "Golden toasted bread filled with melted cheese.",
      price: "₹180",
    },
    {
      name: "Pesto Pasta",
      description: "Creamy pasta tossed with basil pesto and parmesan.",
      price: "₹220",
    },
    {
      name: "Creamy Alfredo Pasta",
      description: "Penne pasta in a rich and creamy white sauce.",
      price: "₹230",
    },
    {
      name: "Margherita Pizza",
      description: "Classic pizza topped with tomato, mozzarella and basil.",
      price: "₹240",
    },
    {
      name: "Loaded Veg Pizza",
      description: "Cheesy pizza loaded with fresh vegetables and herbs.",
      price: "₹280",
    },
  ];

  const snacks = [
    {
      name: "French Fries",
      description: "Crispy golden fries seasoned with cafe-style herbs.",
      price: "₹120",
    },
    {
      name: "Peri Peri Fries",
      description: "Crispy fries tossed in spicy peri peri seasoning.",
      price: "₹140",
    },
    {
      name: "Cheesy Garlic Bread",
      description: "Toasted garlic bread topped with melted cheese.",
      price: "₹160",
    },
    {
      name: "Veg Nachos",
      description: "Crispy nachos topped with cheese, salsa and vegetables.",
      price: "₹180",
    },
    {
      name: "Paneer Tikka",
      description: "Soft paneer cubes marinated with aromatic spices.",
      price: "₹210",
    },
    {
      name: "Veg Momos",
      description: "Steamed dumplings filled with seasoned vegetables.",
      price: "₹160",
    },
  ];

  const desserts = [
    {
      name: "Chocolate Truffle Cake",
      description: "Rich chocolate cake layered with smooth chocolate ganache.",
      price: "₹180",
    },
    {
      name: "Red Velvet Cake",
      description: "Soft red velvet sponge with creamy cheese frosting.",
      price: "₹190",
    },
    {
      name: "Lotus Biscoff Cheesecake",
      description: "Creamy cheesecake with a crunchy Biscoff biscuit base.",
      price: "₹220",
    },
    {
      name: "Brownie with Ice Cream",
      description: "Warm chocolate brownie served with vanilla ice cream.",
      price: "₹210",
    },
    {
      name: "Classic Waffles",
      description: "Crispy waffles served with chocolate sauce and berries.",
      price: "₹200",
    },
    {
      name: "Chocolate Pancakes",
      description: "Fluffy chocolate pancakes finished with chocolate drizzle.",
      price: "₹190",
    },
  ];

  const displayCategory = (title, items) => {
    return (
      <section className="menu-section">
        <h2 className="menu-category-title">{title}</h2>

        <div className="menu-grid">
          {items.map((item, index) => (
            <div className="menu-card" key={index}>
              <h2>{item.name}</h2>

              <p>{item.description}</p>

              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <main className="menu-page">
      <p className="welcome-text">VELVET BREW MENU</p>

      <h1>Something for Every Mood</h1>

      <p>
        Freshly prepared drinks, delicious bites and sweet little treats.
      </p>

      {displayCategory("☕ Coffee & Beverages", coffee)}

      {displayCategory("🍹 Mocktails & Coolers", mocktails)}

      {displayCategory("🍝 Cafe Food", food)}

      {displayCategory("🍟 Snacks & Starters", snacks)}

      {displayCategory("🍰 Desserts", desserts)}
    </main>
  );
}

export default Menu;

