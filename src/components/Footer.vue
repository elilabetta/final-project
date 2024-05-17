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
          ><img src= "../assets/img/youtube.png" alt=""
        /></a>
      </li>
      <li>
        <a href="https://www.facebook.com/theironhack"
          ><img src="../assets/img/fb.png" alt=""
        /></a>
      </li>
      <li>
        <a href="https://www.instagram.com/ironhack"
          ><img src= "../assets/img/instagram.png"alt=":YouTube:"
        /></a>
      </li>
    </ul>
  </footer>
</template>

<style scoped>
.foot-style {
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  background-color: #ffde82c8;
}
.foot-style address {
  width: 100%; 
  padding: 10px;
    max-width: none; 
    text-align: left; 
  }
 

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

}

ul a {
  text-decoration: none;
}

p {
  color:#7c7c7c;
}

img {
    height: 4vh;
    gap: 2%;
    padding-right: 20px;
    padding-left: 20px;
}
@media (max-width: 375px) {
  .foot-style address { display: none;
  }
  .foot-style{
    flex-wrap: wrap;
  }
}
</style>
