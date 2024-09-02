<template>

    <div class="header">
        <Navbar />
        <Sidebar />
    </div>

    <section
        class="dark:bg-gray-800 w-full relative top-16 min-h-[calc(100vh-64px)]">
        <div class="relative mx-auto w-10/12">
            <slot name="content"></slot>
        </div>
    </section>
</template>

<script lang="ts">

function preventDefaults(event: Event) {
  event.preventDefault();
}

</script>