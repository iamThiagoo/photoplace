<template>
    <aside class="flex shadow-sm fixed left-0 top-16 z-10 mt-1.5">
        <div class="flex flex-col items-center w-16 h-screen py-8 bg-white shadow-2xl dark:bg-gray-900 dark:border-gray-700">
            <nav class="flex flex-col items-center flex-1 space-y-8 ">
                <SidebarItem to="/home" tooltip-label="Home" :svgIcon="homeIcon" />
                <SidebarItem to="/" tooltip-label="Minhas Pastas" :svgIcon="folderIcon" />
                <SidebarItem to="/" tooltip-label="Meus Favoritos" :svgIcon="starIcon" />
                <SidebarItem to="/" tooltip-label="Minhas Estatísticas" :svgIcon="graphIcon" />
                <SidebarItem to="/" tooltip-label="Lixeira" :svgIcon="trashIcon" />
            </nav>
        </div>
    </aside>
</template>

<script setup lang="ts">

import SidebarItem from './SidebarItem.vue';

import homeIcon   from '@/assets/svg/icons/home.svg?raw';
import folderIcon from '@/assets/svg/icons/folder.svg?raw';
import starIcon   from '@/assets/svg/icons/star.svg?raw';
import graphIcon  from '@/assets/svg/icons/graph.svg?raw';
import trashIcon  from '@/assets/svg/icons/trash.svg?raw';


</script>