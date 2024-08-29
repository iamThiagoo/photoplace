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

const active = ref(false);

function setActive() {
  active.value = true;
}

function setInactive() {
  active.value = false;
}

function onDrop(event: DragEvent) {
  active.value = false;
  const files = event.dataTransfer?.files;

  if (files && files.length > 0) {
    console.log('Dropped files:', files);
  }
}

function preventDefaults(event: Event) {
  event.preventDefault();
}

/* onMounted(() => {
  const events = ['dragenter', 'dragover', 'dragleave', 'drop'];
  events.forEach((eventName) => {
    document.body.addEventListener(eventName, preventDefaults);
  });
});

onUnmounted(() => {
  const events = ['dragenter', 'dragover', 'dragleave', 'drop'];
  events.forEach((eventName) => {
    document.body.removeEventListener(eventName, preventDefaults);
  });
}); */

</script>