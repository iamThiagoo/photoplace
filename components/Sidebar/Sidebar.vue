<template>
    <aside class="flex shadow-sm fixed left-0 top-16 z-10 mt-1.5">
        <div class="flex flex-col items-center w-16 h-screen py-8 bg-white shadow-2xl dark:bg-gray-900 dark:border-gray-700">
            <nav class="flex flex-col items-center flex-1 space-y-8 ">
                <SidebarItem to="/home" title="Home" :svgIcon="homeIcon" />
                <SidebarItem to="/" title="Minhas Pastas" :svgIcon="folderIcon" />
                <SidebarItem to="/" title="Meus Favoritos" :svgIcon="starIcon" />
                <SidebarItem to="/" title="Minhas Estatísticas" :svgIcon="graphIcon" />
                <SidebarItem to="/" title="Lixeira" :svgIcon="trashIcon" />
            </nav>
        </div>
    </aside>
</template>

<script setup lang="ts">

import homeIcon   from 'public/svg/icons/home.svg?raw';
import folderIcon from 'public/svg/icons/folder.svg?raw';
import starIcon   from 'public/svg/icons/star.svg?raw';
import graphIcon  from 'public/svg/icons/graph.svg?raw';
import trashIcon  from 'public/svg/icons/trash.svg?raw'; 

</script>