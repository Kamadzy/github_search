class GitHub {
    constructor() {
        this.client_id = 'f021a2e5ac5024af9d9d';
        this.client_secret = '4ee2837cb8a5834a9b90d41c75ab0f885e61d81a';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponce = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();
        const repos = await repoResponce.json();

        return {
            profile,
            repos
        }
    }
}