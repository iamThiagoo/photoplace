<template>

    <div class="header">
        <Navbar />
        <Sidebar />
    </div>

    <div class="w-full relative mx-auto w-10/12">
        <slot name="content"></slot>
    </div>
    
</template>