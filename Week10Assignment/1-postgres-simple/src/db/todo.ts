import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    try {
        await client.connect();
        const query = "INSERT INTO todos (userId, title, description) VALUES ($1, $1, $3)";
        const values = [userId, title, description];
        const res = await client.query(query, values);
        console.log(res);
        return res;
    } catch (err) {
        console.error('Error during insertion');
    } finally {
        await client.end();
    }
    
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try {
        await client.connect();
        const query = "UPDATE todos SET done = 'true' WHERE id = ($1)";
        const values = [todoId];
        const res = await client.query(query, values);
        console.log(res);
        return res;
    } catch (err) {
        console.error('Error during updation');
    } finally {
        await client.end();
    }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    try {
        await client.connect();
        const query = "SELECT * FROM TODOS WHERE userId = ($1)";
        const values = [userId];
        const res = await client.query(query, values);
        console.log(res);
        return res;
    } catch (err) {
        console.error('Error during get');
    } finally {
        await client.end();
    }

}