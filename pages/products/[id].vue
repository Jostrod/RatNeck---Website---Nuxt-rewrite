<template>
    <div>

        <p>Product details from {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Nam amet suscipit quas eos, sint eligendi distinctio aliquid necessitatibus
              aliquam ad inventore labore sunt eaque eveniet perspiciatis, laborum, ipsam maiores fuga?</p>

    </div>
</template>

<script setup>

    const { id } = useRoute().params

</script>

<style scoped>

</style>