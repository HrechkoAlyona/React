function ListsComponent() {
  return (
    <div>
      <h2>Списки</h2>

      <h3>Упорядоченный список</h3>
      <ol>
        <li>Пункт 1
          <ul>
            <li>Подпункт 1.1</li>
          </ul>
        </li>
        <li>Пункт 2</li>
      </ol>

      <h3>Неупорядоченный список</h3>
      <ul>
        <li>Элемент A
          <ol>
            <li>Вложенный 1</li>
          </ol>
        </li>
        <li>Элемент B</li>
      </ul>
    </div>
  );
}

export default ListsComponent;
