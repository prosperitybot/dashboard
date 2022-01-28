<template>
  <div class="leaderboardPage">
    <h1>Leaderboard for {{ guild?.name }}</h1>
    <div class="leaderboardUserListContainer">
      <div class="leaderboardUserList">
        <div class="user" v-for="user in users" :key="user.first">
          <div class="userLeft">
            <div class="userUsername">
              {{ user.user.username }}#{{ user.user.discriminator }}
            </div>
          </div>
          <div class="userRight">
            <div class="userRightStatistic">
              <div class="userRightStatisticName">LEVEL</div>
              <div class="userRightStatisticValue">{{ user.level }}</div>
            </div>
            <div class="userRightStatistic">
              <div class="userRightStatisticName">EXPERIENCE</div>
              <div class="userRightStatisticValue">{{ formatNumber(user.xp) }}</div>
            </div>
            <div class="userRightStatistic">
              <div class="userRightStatisticName">MESSAGES</div>
              <div class="userRightStatisticValue">{{ formatNumber(user.messageCount) }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
.leaderboardBody {
  margin: auto;
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: row;
  padding: 30px;
}
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
.user {
  background-color: #2f3040;
  display: flex;
  flex-direction: row;
  height: 40px;
  padding: 25px 0;
  margin: 10px 5px;
  border-radius: 10px;
  align-items: center;
}
.userLeft {
  display: flex;
  max-width: 65%;
  flex: 0 1 65%;
  flex-direction: row;
  align-items: center;
}
.userRight {
  display: flex;
  flex: 0 0 20%;
  flex-direction: row;
  align-self: center;
  align-items: center;
}
.userRightStatistic {
  display: flex;
  height: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-inline-start: 15px;
}
.userRightStatisticName {
  font-size: 12px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 1px;
  white-space: nowrap;
}
.userRightStatisticValue {
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  margin-top: 5px;
}
.userUsername {
  font-weight: 600;
  font-size: 15px;
  margin-inline-start: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
<script>
const axios = require('axios').default

export default {
  name: 'Leaderboard',
  data () {
    return {
      users: [],
      guild: null
    }
  },
  methods: {
    getInitialUsers () {
      axios.get(`https://api.prosperitybot.net/v1/leaderboard/${this.$route.params.id}`).then((response) => {
        this.users = response.data.users
        this.guild = response.data.guild
      })
    },
    formatNumber (num) {
      if (num > 999 && num < 1000000) {
        return (num / 1000).toFixed(1) + 'K'
      } else if (num > 1000000) {
        return (num / 1000000).toFixed(1) + 'M'
      } else if (num < 900) {
        return num
      }
    }
  },
  mounted () {
    this.getInitialUsers()
  }
}
</script>
