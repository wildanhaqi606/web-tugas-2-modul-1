// Menambahkan tugas baru ke daftar
function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText === '') {
        alert('Tugas tidak boleh kosong!');
        return;
    }

    const taskList = document.getElementById('todo-list');
    const newTask = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Tombol Edit
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.onclick = function() {
        editTask(newTask, taskSpan);
    };

    // Tombol Hapus
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = function() {
        taskList.removeChild(newTask);
    };

    // Tambahkan span dan tombol ke item task
    newTask.appendChild(taskSpan);
    newTask.appendChild(editButton);
    newTask.appendChild(deleteButton);
    taskList.appendChild(newTask);

    // Kosongkan input setelah tugas ditambahkan
    input.value = '';
}

// Fungsi untuk mengedit tugas
function editTask(taskElement, taskSpan) {
    const newTaskName = prompt('Masukkan nama baru untuk tugas:', taskSpan.textContent);
    if (newTaskName === null || newTaskName.trim() === '') {
        alert('Nama tugas tidak boleh kosong!');
        return;
    }
    taskSpan.textContent = newTaskName.trim();
}
