const DisplayBoard = ({numberOfBooks, getAllBook, numberOfTodos, getAllTodo}) => {
    
    return(
        <div className="display-wrapper">
            <div className="display-box">
                <div className="display-board">
                    <h4>생성된 book 수</h4>
                    <div className="number">
                    {numberOfBooks}
                    </div>
                </div>
                <div className="display-board">
                    <h4>생성된 todo 수</h4>
                    <div className="number">
                    {numberOfTodos}
                    </div>
                </div>
                <div className="get-button">
                    <button onClick={() => getAllBook()}>Get all Books</button>
                </div>
                <div className="get-button">
                    <button onClick={() => getAllTodo()}>Get all Todos</button>
                </div>
            </div>
        </div>
    )
}

export default DisplayBoard;