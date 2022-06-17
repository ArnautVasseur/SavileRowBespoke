<template>
    <div class="font-jost">
        <div class="flex w-full items-center border-b-8 border-gray-300">
        <router-link to="/menu">
            <img src="../assets/images/3502540.png" class="w-10 m-2">
        </router-link>
        <h1 class="ml-7 font-semibold text-2xl">MES INFORMATIONS</h1>
        </div>
    </div>
    <div class="px-12 py-5 font-jost">
        <h2 class="font-semibold text-sm">PRÉNOM</h2>
        <input type="text" class="mb-3 border-b-2 border-black hover:border-black text-2xl">

        <h2 class="font-semibold text-sm">NOM DE FAMILLE</h2>
        <input type="text" class="mb-3 border-b-2 border-black hover:border-black text-2xl">

        <h2 class="font-semibold text-sm">ADRESSE E-MAIL</h2>
        <input type="text" class="mb-3 border-b-2 border-black hover:border-black text-2xl">

        <h2 class="font-semibold text-sm">DATE DE NAISSANCE</h2>
        <input type="date" format="dd/mm/yyyy" class="text-xl"/>
    </div>
    <img src="../assets/images/infos.jpg" class="w-full h-[300px] m-auto">
</template>