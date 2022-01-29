<template>
  <div class="leaderboardPage">
    <h1>{{ guild ? `Leaderboard for ${guild.name}` : 'Loading Leaderboard...' }}</h1>
    <div class="leaderboardUserListContainer">
      <div class="leaderboardUserList" v-if="guild != null">
        <LeaderboardUserRow v-for="user in users" :key="user.id" :user="user" />
      </div>
      <div class="leaderboardUserList" v-else>
        <LeaderboardUserRow v-for="index in 10" :key="index" :user="placeholderUser"/>
      </div>
    </div>
  </div>
</template>
<script>
import LeaderboardUserRow from '@/components/leaderboard/LeaderboardUserRow.vue'
const axios = require('axios').default

export default {
  name: 'Leaderboard',
  components: {
    LeaderboardUserRow
  },
  data () {
    return {
      users: [],
      guild: null,
      placeholderUser: { user: { username: 'Loading', discriminator: '0000' }, xp: 0, level: 0, messageCount: 0 }
    }
  },
  methods: {
    getInitialUsers () {
      axios.get(`https://api.prosperitybot.net/v1/leaderboard/${this.$route.params.id}`).then((response) => {
        this.users = response.data.users
        this.guild = response.data.guild
      })
    }
  },
  mounted () {
    this.getInitialUsers()
  }
}
</script>
<style scoped>
.leaderboardUserListContainer {
  margin: auto;
  max-width: 75%;
  width: 75%;
  border-radius: 3px;
}
.leaderboardUserList {
  margin: auto;
  display: flex;
  width: 50%;
  flex-direction: column;
  padding: 16px 20px;
}
</style>
