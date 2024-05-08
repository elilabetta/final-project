<script setup>
</script>

<template>
    <footer class="foot-style">
        <address>
            <p>IronHack </p>
            <p>C/ de Pamplona, 96 - 08018, Barcelona - Spain </p>
        </address>
        <ul>
            <li> <a href=https://www.youtube.com/c/ironhack-tech-school>YouTube</a> </li>
            <li> <a href=https://www.facebook.com/theironhack>Facebook</a> </li>
            <li> <a href=https://www.instagram.com/ironhack>Instagramm</a> </li>
        </ul>
    </footer>
</template>

<style scoped>
.foot-style{ 
    display: flex;
    margin-top: 95%;
    width: 100vw;
    height: 8vh;
    background-color:#FFFFCC ;
}
.foot-style address{
    padding-left: 20px;
    padding-right: 20px;
    font-style: normal;
    font-size: 0.8em;
}


ul{
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
}
ul a{
    text-decoration: none;
}
</style>
