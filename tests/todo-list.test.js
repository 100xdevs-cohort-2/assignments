const Todo = require('../hard/todo-list');

describe('Todo', () => {
	let todoList;

	beforeEach(() => {
		todoList = new Todo();
	});

	test('add and getAll', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		expect(todoList.getAll()).toEqual([
			'Task 1',
			'Task 2',
			'Task 3',
		]);
	});

	test('remove', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		todoList.remove(1);
		expect(todoList.getAll()).toEqual(['Task 1', 'Task 3']);

		todoList.remove(0);
		expect(todoList.getAll()).toEqual(['Task 3']);

		todoList.remove(2);
		expect(todoList.getAll()).toEqual(['Task 3']);
	});

	test('update', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		todoList.update(1, 'Updated Task 2');
		expect(todoList.get(1)).toBe('Updated Task 2');

		todoList.update(3, 'Invalid Task');
		expect(todoList.getAll()).toEqual([
			'Task 1',
			'Updated Task 2',
			'Task 3',
		]);
	});

	test('get', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		expect(todoList.get(0)).toBe('Task 1');
		expect(todoList.get(2)).toBe('Task 3');
		expect(todoList.get(3)).toBeNull();
	});

	test('clear', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 3');

		todoList.clear();
		expect(todoList.getAll()).toEqual([]);
	});

	test('remove and update with invalid indexes', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');

		todoList.remove(5);
		expect(todoList.getAll()).toEqual(['Task 1', 'Task 2']);

		todoList.update(3, 'Updated Task');
		expect(todoList.getAll()).toEqual(['Task 1', 'Task 2']);
	});

	test('add duplicate tasks', () => {
		todoList.add('Task 1');
		todoList.add('Task 2');
		todoList.add('Task 1');
		todoList.add('Task 3');

		expect(todoList.getAll()).toEqual([
			'Task 1',
			'Task 2',
			'Task 1',
			'Task 3',
		]);
	});
});
