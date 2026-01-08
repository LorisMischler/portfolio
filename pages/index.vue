<template>
  <div class="app">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Education />
      <Services />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
useHead({
  title: 'Loris Mischler - Full-Stack Developer | Epitech Student',
  meta: [
    {
      name: 'description',
      content: 'Portfolio of Loris Mischler, Computer Science student at Epitech. Specialized in AI, Big Data, and full-stack development.'
    }
  ]
})
</script>

<style>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}
</style>