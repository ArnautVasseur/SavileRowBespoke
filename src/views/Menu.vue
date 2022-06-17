<template>
  <main class="font-jost">
    <div class="flex w-full items-center border-b-8 border-gray-300">
      <router-link to="/">
        <img src="../assets/images/3502540.png" class="w-10 m-2">
      </router-link>
      <h1 class="ml-24 font-semibold text-2xl font-jost">MENU</h1>
    </div>
    <router-link to="/infos">
      <h2 class="text-center mt-10 mb-16 font-semibold text-2xl hover:underline border-b-4 pb-14 border-black mx-12">Mes Infos</h2>
    </router-link>
    <h2 class="text-center mt-12 font-semibold text-xl mr-10 underline">Mes Préférences</h2>
    
    <router-link to="/tissu">
      <h3 class="text-center font-semibold text-2xl hover:underline my-5">Mon tissu</h3>
    </router-link>

    <router-link to="/coupe">
      <h3 class="text-center font-semibold text-2xl hover:underline border-b-4 pb-14 border-black mx-12">Ma coupe</h3>
    </router-link>
    
    <h2 class="text-center mt-20 font-semibold text-2xl hover:underline">Mes Rendez-Vous</h2>
  </main>
</template>