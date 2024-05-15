<script setup></script>

<template>
  <footer class="foot-style">
    <address>
      <p>IronHack</p>
      <p>C/ de Pamplona, 96 - 08018, Barcelona - Spain</p>
    </address>
    <ul>
      <li>
        <a href="https://www.youtube.com/c/ironhack-tech-school"
          ><img src="../assets/img/Insta.png" alt=""
        /></a>
      </li>
      <li>
        <a href="https://www.facebook.com/theironhack"
          ><img src="../assets/img/fb.png" alt=""
        /></a>
      </li>
      <li>
        <a href="https://www.instagram.com/ironhack"
          ><img src="../assets/img/youtube.png" alt=":YouTube:"
        /></a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
.foot-style {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 8vh;
  padding-top: 25px;
  padding-right: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #ffde82c8;
}
.foot-style address {
  padding-left: 20px;
  padding-right: 20px;
  font-style: normal;
  font-size: 0.8em;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}
ul a {
  text-decoration: none;
}

img {
    width: 40px;
    height: auto;
    background-color:#ffde82c8;
    border-radius: 10%;
}
</style>
