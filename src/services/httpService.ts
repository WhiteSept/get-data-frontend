import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api',
})

export async function getMatches() {
    try {
        const {data} = await axiosClient.get(`/league`)
        return [null, data];
    } catch (error) {
        return [error];
    }
}
