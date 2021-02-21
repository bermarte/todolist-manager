'use strict';
//const url = 'http://localhost:3000/todos';
const url = '/todos';


export const restMethods = {
	getAll: async function () {
		try {
			const res = await fetch(url);
			const data = await res.json();
			return data;		
		} catch (err) {
			console.log(err);
		}
	},

	postTodo: async function (newTodo) {
		try {
			const res = await fetch(url, {
				method: 'POST',
				body: JSON.stringify(newTodo),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});
			return await res.json();
		} catch (err) {
			console.log(err);
		}
	},

	patchTodo: async function (id, newObj) {
		try {
			const res = await fetch(`${url}/${id}`, {
				method: 'PATCH',
				body: JSON.stringify(newObj),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});
			return await res.json();
		} catch (err) {
			console.log(err);
		}
	},
	deleteTodo: async function (id) {
		try {
			const res = await fetch(`${url}/${id}`, {
				method: 'DELETE',
			});
			return await res.json();
		} catch (err) {
			console.log(err);
		}
	},
};

