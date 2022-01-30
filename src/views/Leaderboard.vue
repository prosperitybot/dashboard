<template>
  <v-container>
    <h1>{{ guild ? `Leaderboard for ${guild.name}` : 'Loading Leaderboard...' }}</h1>
    <div class="leaderboardUserListContainer">
      <v-row justify="center">
        <v-col sm="12" md="8" lg="4">
          <div class="leaderboardUserList" v-if="guild != null">
            <v-row>
            <LeaderboardUserRow v-for="user in users" :key="user.id" :user="user" />
            </v-row>
          </div>
          <div class="leaderboardUserList" v-else>
            <LeaderboardUserRow v-for="index in 10" :key="index" :user="placeholderUser"/>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import LeaderboardUserRow from '@/components/leaderboard/LeaderboardUserRow.vue';
import axios from 'axios';

export default {
  name: 'ProsperityLeaderboard',
  components: {
    LeaderboardUserRow,
  },
  data() {
    return {
      users: [],
      guild: null,
      placeholderUser: {
        user: { username: 'Loading', discriminator: '0000' }, xp: 0, level: 0, messageCount: 0,
      },
    };
  },
  methods: {
    getInitialUsers() {
      axios.get(`https://api.prosperitybot.net/v1/leaderboard/${this.$route.params.id}`).then((response) => {
        this.users = response.data.users;
        this.guild = response.data.guild;
      });
    },
  },
  mounted() {
    this.getInitialUsers();
  },
};
</script>
<style scoped>
.leaderboardUserListContainer {
  margin: auto;
  border-radius: 3px;
}
.leaderboardUserList {
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
}
</style>
