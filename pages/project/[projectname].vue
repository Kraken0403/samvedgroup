<template>
    <div>
        <Header />
        <ProjectHero :data="projectData"/>
        <ProjectContent :data="projectData"/>
        <BookProject :data="projectData"/>
        <!-- <Testimonial /> -->
        <!-- <TestimonialCarousel /> -->
        <Footer />
    </div>
</template>

<script setup>
     const { client } = usePrismic();
    import { useAsyncData, useRoute } from 'nuxt/app';

    const route = useRoute();
    const projectUid = route.params.projectname;

    const { data: projectData } = await useAsyncData(`project-${projectUid}`, async () => {
    const document = await client.getByUID('project_page', projectUid);

    if (document) {
        console.log(document.data)
        return document.data;
    } else {
        throw createError({ statusCode: 404, message: 'Project Not Found' });
    }
    });
</script>
<style lang="scss" scoped>

</style>