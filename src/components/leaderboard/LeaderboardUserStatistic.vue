<template>
  <div class="leaderboardUserStatistic">
    <div class="leaderboardUserStatisticName">{{ name }}</div>
    <div class="leaderboardUserStatisticValue">{{ value }}</div>
  </div>
</template>

<script>
export default {
  name: 'LeaderboardUserStatistic',
  props: {
    name: String,
    value: String,
  },
};
</script>

<style scoped>
.leaderboardUserStatistic {
  display: flex;
  height: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-inline-start: 15px;
}
.leaderboardUserStatisticName {
  font-size: 12px;
  font-weight: 300;
  line-height: 1;
  margin-bottom: 1px;
  white-space: nowrap;
}
.leaderboardUserStatisticValue {
  font-size: 18px;
  font-weight: 600;
  line-height: 1;
  margin-top: 5px;
}
</style>
