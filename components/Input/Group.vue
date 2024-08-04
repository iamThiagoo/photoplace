<template>
    <div>
        <label :for="props.id" class="block mb-2 text-sm font-bold text-gray-900">{{ props.label }}</label>
        <Field
            :type="props.type" 
            :id="props.id"
            :name="props.name"
            class="bg-gray-50 border border-slate-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
            :placeholder="props.placeholder" 
            :rules="props.rules" >
        </Field>
    </div>
</template>

<script setup lang="ts">

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

</script>