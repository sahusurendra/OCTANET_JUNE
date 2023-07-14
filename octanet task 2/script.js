 let tasks = [];

    function addTask() {
      const titleInput = document.getElementById('task-title');
      const descriptionInput = document.getElementById('task-description');
      const priorityInput = document.getElementById('task-priority');
      const dayInput = document.getElementById('task-day');
      const dateInput = document.getElementById('task-date');

      const task = {
        title: titleInput.value,
        description: descriptionInput.value,
        priority: priorityInput.value,
        day: dayInput.value,
        date: dateInput.value,
        completed: false
      };

      tasks.push(task);

      renderTasks();
      clearInputs();
    }

    function toggleTask(index) {
      tasks[index].completed = !tasks[index].completed;
      renderTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      renderTasks();
    }

    function renderTasks() {
      const taskList = document.querySelector('#task-list tbody');
      taskList.innerHTML = '';

      tasks.forEach((task, index) => {
        const row = document.createElement('tr');
        if (task.completed) {
          row.classList.add('completed');
        }

        const checkboxCell = document.createElement('td');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.addEventListener('change', () => toggleTask(index));
        checkboxCell.appendChild(checkbox);

        const titleCell = document.createElement('td');
        titleCell.textContent = task.title;

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = task.description;

        const priorityCell = document.createElement('td');
        priorityCell.textContent = task.priority;

        const dayCell = document.createElement('td');
        dayCell.textContent = task.day;

        const dateCell = document.createElement('td');
        dateCell.textContent = task.date;

        const deleteCell = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => deleteTask(index));
        deleteCell.appendChild(deleteButton);

        
        row.appendChild(titleCell);
        row.appendChild(descriptionCell);
        row.appendChild(priorityCell);
        row.appendChild(dayCell);
        row.appendChild(dateCell);
        row.appendChild(checkboxCell);
        row.appendChild(deleteCell);
        taskList.appendChild(row);
      });
    }

    function clearInputs() {
      document.getElementById('task-title').value = '';
      document.getElementById('task-description').value = '';
      document.getElementById('task-priority').selectedIndex = 0;
      document.getElementById('task-day').selectedIndex = 0;
      document.getElementById('task-date').value = '';
    }
 