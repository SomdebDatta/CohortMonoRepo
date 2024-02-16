import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    try {
        await client.connect();
        const query = "INSERT INTO users (username, password, name) VALUES ($1, $2, $3)";
        const values = [username, password, name];
        const res = await client.query(query, values);
        console.log(res);
        return res;
    } catch (err) {
        console.error('Error during insertion', err);
    } finally {
        await client.end();
    }
    

}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try {
        await client.connect();
        const query = "SELECT (username, password, name) FROM users WHERE id = $1";
        const values = [userId];
        const res = await client.query(query, values);
        console.log(res);
        return res;
    } catch (err) {
        console.error('Error during insertion', err);
    } finally {
        await client.end();
    }
}