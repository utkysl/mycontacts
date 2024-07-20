<template>
  <div class="container">
    <h1>Welcome!</h1>
    <div class="resim"></div>
    <p>Hi! I'm Utku Yeşil. I've been interested in software development and coding since I was a little kid. Although I took a break from computers due to university exams, I'm back now :)</p>
    <div class="buttons">
      <button @click="goTo('https://github.com/utkysl')">Github</button>
      <button @click="goTo('mailto:utkuyesil189@gmail.com')">Gmail</button>
      <button @click="goTo('https://instagram.com/utkysll')">Instagram</button>
      <button @click="goTo('https://www.youtube.com/@Bilgisayarmuhendisi_26')">YouTube</button>
      <button @click="goToDiscord">Discord</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const goTo = (url) => {
  window.open(url, '_blank');
}

const goToDiscord = () => {
  const userID = '927629105183211571';
  const discordURL = `https://discord.com/users/${userID}`;
  goTo(discordURL);
}
</script>

<style scoped>
      
.container {
  padding: 20px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.resim {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-image: url('../assets/ss.jpeg');
  background-position: center center;
  background-size: cover;
  display: inline-block;
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
}

.buttons {
  margin-top: 20px;
}

.buttons button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  background-color: #6a6d70;
  color: rgb(0, 0, 0);
  border: none;
  border-radius: 30px;
  font-family: gotham;
}

.buttons button:hover {
  background-color: #d85a65;
}

p {
  font-size: 20px;
  font-family: gothamthin;
  color: white;
}
h1{
  color: white;
  font-size: 60px;
  font-family: gotham;
}
</style>