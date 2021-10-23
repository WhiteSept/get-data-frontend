
const BASE_URL = 'http://localhost:8080/api'

export async function getMatches() {
    await this.$http.get(`${BASE_URL}/league`)
}
