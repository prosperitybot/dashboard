<template>
  <v-col cols="12">
    <div class="leaderboardUser">
      <div class="leaderboardUserLeft">
        <div class="leaderboardUserUsername">
          {{ user.user.username }}#{{ user.user.discriminator }}
        </div>
      </div>
      <div class="leaderboardUserRight">
        <LeaderboardUserStatistic name="LEVEL" :value="user.level.toString()" />
        <LeaderboardUserStatistic
          v-if="!this.$isMobile()"
          name="EXPERIENCE"
          :value="formatNumber(user.xp)"
        />
        <LeaderboardUserStatistic
          v-if="!this.$isMobile()"
          name="MESSAGES"
          :value="formatNumber(user.messageCount)"
        />
      </div>
    </div>
  </v-col>
</template>

<script>
import LeaderboardUserStatistic from '@/components/leaderboard/LeaderboardUserStatistic.vue';
import { formatNumber } from '@/utils/helper';

export default {
  name: 'LeaderboardUserRow',
  components: {
    LeaderboardUserStatistic,
  },
  props: {
    user: Object,
  },
  methods: {
    formatNumber,
  },
};
</script>

<style scoped>
.leaderboardUser {
  background-color: #2f3040;
  display: flex;
  flex-direction: row;
  height: 40px;
  padding: 30px 10px;
  margin: 10px 5px;
  border-radius: 10px;
  align-items: center;
}
.leaderboardUserLeft {
  display: flex;
  max-width: 65%;
  flex: 0 1 65%;
  flex-direction: row;
  align-items: center;
}
.leaderboardUserRight {
  display: flex;
  flex: 0 0 20%;
  flex-direction: row;
  align-self: center;
  align-items: center;
}
.leaderboardUserUsername {
  font-weight: 600;
  font-size: 15px;
  margin-inline-start: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
