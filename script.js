
document.addEventListener('DOMContentLoaded', () => {
    let ProTodo = !localStorage.getItem("ProTodo") ? [] : JSON.parse(localStorage.getItem("ProTodo"));
    if (ProTodo) {
        displayTodo(ProTodo);
    }

    const chartData = prepareChart(ProTodo);
    const ctx = document.getElementById('myChart-Todo').getContext('2d');
    window.myChartInstance = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function (value) {
                            return value;
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            if (context.parsed.y !== null) {
                                const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                                const percentage = total === 0 ? 0 : ((context.parsed.y / total) * 100).toFixed(1);
                                label += context.parsed.y + ' (' + percentage + '%)';
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
    TodoList();
    stateItemsLeft();
});

function TodoList() {
    const addBtn = document.getElementById('add-todo-btn');
    const addinput = document.getElementById('add-todo');

    addBtn.addEventListener('click', () => {
        let item = addinput.value.trim();
        if (item) {
            addinput.value = "";
            let ProTodo = !localStorage.getItem("ProTodo") ? [] : JSON.parse(localStorage.getItem("ProTodo"));
            const FormatItems = {
                id: Date.now(),
                task: item,
                complited: false
            }
            ProTodo.push(FormatItems);
            localStorage.setItem("ProTodo", JSON.stringify(ProTodo));
            displayTodo(ProTodo);
            updateChart();
            stateToDragForDelete();
            stateItemsLeft();
        }
    });

    const deleteBtn = document.querySelector("#delete-task");
    const deleteAll = document.querySelector('#delete-all-task');
    const Todo = document.querySelectorAll('.todo-item');
    const showDelBasket = document.querySelector('.show-del-basket');
    const icone = document.querySelector('.icone');

    deleteAll.addEventListener('click', () => {
        localStorage.clear();
        displayTodo(JSON.parse(localStorage.getItem("ProTodo")));
        updateChart();
        stateItemsLeft();
    });

    deleteBtn.addEventListener('click', () => {
        showDelBasket.classList.toggle('active-del-basket');
        updateChart();
        setUpDragDrop();
        stateToDragForDelete();
        stateItemsLeft();
    });
}

function setUpDragDrop() {
    // فعال‌سازی درگ و دراپ برای موبایل
    if (typeof enableDragDropTouch === 'function') {
        enableDragDropTouch();
    }

    const todoList = document.querySelector('.body-todo-list');
    const showDelBasket = document.querySelector('.show-del-basket');

    if (!todoList || !showDelBasket) { return; }
    const newTodoList = todoList.cloneNode(true);
    let todoForDel;

    todoList.parentNode.replaceChild(newTodoList, todoList);
    newTodoList.addEventListener('dragstart', (e) => {
        const iconeElement = e.target.closest('.icone');
        if (iconeElement) {
            todoForDel = iconeElement.closest('.todo-item');
            if (todoForDel) {
                e.dataTransfer.setData('text/plain', todoForDel.dataset.id);
            }
        }
    });

    // == my code ==
    showDelBasket.addEventListener('dragover', (e) => {
        e.preventDefault();
        showDelBasket.style.backgroundColor = 'rgba(255, 0, 0, 0.2)';
        updateChart();
    });

    showDelBasket.addEventListener('dragleave', () => {
        showDelBasket.style.backgroundColor = '';
        updateChart();
    });

    showDelBasket.addEventListener('drop', (e) => {
        console.log(e.target);
        e.preventDefault();
        showDelBasket.style.backgroundColor = '';

        if (todoForDel) {
            const indexofTask = [...document.querySelectorAll(".body-todo-list .todo-item")].indexOf(todoForDel);
            if (indexofTask !== -1) {
                let ProTodo = JSON.parse(localStorage.getItem("ProTodo")) || [];
                ProTodo.splice(indexofTask, 1);
                localStorage.setItem("ProTodo", JSON.stringify(ProTodo));
                displayTodo(ProTodo);
                updateChart();
                stateToDragForDelete();
                stateItemsLeft();
            }
        }
    });
    updateChart();
}

function stateToDragForDelete() {
    const showDelBasket = document.querySelector('.show-del-basket');
    const numicone = document.querySelectorAll('.icone');

    if (showDelBasket.classList.contains('active-del-basket')) {
        numicone.forEach((item) => { item.setAttribute('draggable', true) });
    } else {
        numicone.forEach((item) => { item.setAttribute('draggable', false) });
    }
}

function displayTodo(todoArray) {
    document.querySelector('.body-todo-list').innerHTML = "";

    if (!todoArray || todoArray.length === 0) {
        return null;
    }

    todoArray.forEach(todoItem => {
        const todo = document.createElement('div');
        const DivIcone = document.createElement('div');
        const icone = document.createElement('i');
        const TaskTodoAdded = document.createElement('div');
        const taskAdded = document.createElement('h2');
        const compliteTask = document.createElement('div');
        const checkBoxComplite = document.createElement('input');
        checkBoxComplite.setAttribute("type", "checkbox")

        // set classlist
        todo.classList.add('todo-item');
        DivIcone.classList.add('icone');
        TaskTodoAdded.classList.add('div-work-todo-added');
        compliteTask.classList.add('div-complite-todo-work-added');

        // set value
        taskAdded.textContent = todoItem.task;
        checkBoxComplite.checked = todoItem.complited;

        // set parent
        DivIcone.appendChild(icone);
        TaskTodoAdded.appendChild(taskAdded);
        compliteTask.appendChild(checkBoxComplite);
        todo.appendChild(DivIcone);
        todo.appendChild(TaskTodoAdded);
        todo.appendChild(compliteTask);
        document.querySelector('.body-todo-list').appendChild(todo);

        if (todo.complited) {
            DivIcone.classList.add('active-icone');
            checkBoxComplite.setAttribute("checkbox", "checked");
        }

        // add Event listener
        checkBoxComplite.addEventListener('click', (e) => {
            const parent = e.target.parentElement.parentElement;
            const checked = checkBoxComplite.checked;
            const indexOfParent = [...document.querySelectorAll('.body-todo-list .todo-item')].indexOf(parent);
            let Todo = JSON.parse(localStorage.getItem("ProTodo"));
            Todo[indexOfParent].complited = checked;
            localStorage.setItem("ProTodo", JSON.stringify(Todo));
            checked ? DivIcone.classList.add('active-icone') : DivIcone.classList.remove('active-icone');
            const ProTodo = JSON.parse(localStorage.getItem("ProTodo"));
            displayTodo(ProTodo);
            updateChart();
            stateToDragForDelete();
            stateItemsLeft();
        });
    });

}

function stateItemsLeft() {
    let ProTodo = JSON.parse(localStorage.getItem("ProTodo"));
    let itemLeft = ProTodo.filter((item) => !item.complited);
    console.log(itemLeft.length);
    document.getElementById('number-todo').textContent = itemLeft.length;
}

function TodoChart() {

    const ctx = document.getElementById('myChart-Todo').getContext('2d');

    const chartTodo = prepareChart(JSON.parse(localStorage.getItem("ProTodo")));

    const myChart = new Chart(ctx, {
        type: 'bar',
        data: chartTodo,
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function (value) {
                        return value;
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function (context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            const total = context.chart.data.datasets[0].data.reduce((a, b) => a + b, 0);
                            const percentage = total === 0 ? 0 : ((context.parsed.y / total) * 100).toFixed(1);
                            label += context.parsed.y + ' (' + percentage + '%)';
                        }
                        return label;
                    }
                }
            }
        }
    });
}

function prepareChart(todoArray) {
    if (!todoArray || todoArray.length === 0) {
        return { labels: [], datasets: [{ data: [], label: 'not found' }] }
    }

    let complitedCount = 0;
    todoArray.forEach((todo) => {
        if (todo.complited) {
            complitedCount++;
            console.log(complitedCount);
        }
    });
    const incompliteCount = todoArray.length - complitedCount;

    return {
        labels: ['Complited', 'Incomplited'],
        datasets: [{
            label: 'Task State',
            data: [complitedCount, incompliteCount],
            backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
            Colors: [
                '#000',
                '#fff'
            ],
            borderColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
            borderWidth: 1
        }]
    }
}

function updateChart() {
    const ProTodo = JSON.parse(localStorage.getItem("ProTodo")) || [];
    const chartData = prepareChart(ProTodo);

    if (window.myChartInstance) {
        window.myChartInstance.data.labels = chartData.labels;
        window.myChartInstance.data.datasets[0].data = chartData.datasets[0].data;
        window.myChartInstance.data.datasets[0].backgroundColor = chartData.datasets[0].backgroundColor;
        window.myChartInstance.update();
    }
}
