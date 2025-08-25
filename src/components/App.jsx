import Greeting from "./Greeting";
import ShoppingList from "./ShoppingList";
import OrderStatus from "./OrderStatus";

function App() {
  const products = ["Хлеб", "Молоко", "Яблоки", "Кофе"];

  const orders = [
    { orderId: 101, status: "обработан" },
    { orderId: 102, status: "в пути" },
    { orderId: 103, status: "доставлен" }
  ];

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Задание 1 */}
      <h2>Задание 1: Приветствие</h2>
      <Greeting name="Александр" />
      <Greeting name="Александра" />

      {/* Задание 2 */}
      <h2 style={{ marginTop: "20px" }}>Задание 2: Список покупок</h2>
      <ShoppingList items={products} />

      {/* Задание 3 */}
      <h2 style={{ marginTop: "20px" }}>Задание 3: Статусы заказов</h2>
      {orders.map((order) => (
        <OrderStatus
          key={order.orderId}
          orderId={order.orderId}
          status={order.status}
        />
      ))}
    </div>
  );
}

export default App;
