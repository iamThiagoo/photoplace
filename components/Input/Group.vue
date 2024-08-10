<template>
    <div>
        <label :for="props.id" class="block mb-2 text-sm font-bold text-gray-900 dark:text-purple-500">{{ props.label }}</label>
        <Field
            :type="props.type" 
            :id="props.id"
            :name="props.name"
            class="bg-gray-50 border border-slate-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            :placeholder="props.placeholder" 
            :rules="props.rules"
            @keyup="onChangeValue">
        </Field>
    </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['change'])

const props = defineProps({
    id: {type: String},
    label: {type: String},
    name: {type: String},
    type: {type: String},
    placeholder: {type: String},
    rules: {
        type: String,
        default: 'required'
    }
});


const onChangeValue = (event : Event) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    emit('change', value);
}

</script>