function Todo(props) {
  const { id, title, about } = props;

  return (
    <li className="task">
      <div className="container">
        <div className="container__text">
          <h1>{title}</h1>
          <h2>{about}</h2>
        </div>
        <button>x</button>
      </div>
      <div className="menu">
        <button>
          <img src="" alt="share" />
          <img src="" alt="info" />
          <img src="" alt="edit" />
        </button>
      </div>
    </li>
  );
}

export default Todo;
