<template>
  <div>
    <Narbar></Narbar>
    <div class="container-fluid">
      <Sidebar/>
      <div class="row">
        <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import Narbar from './Narbar';
import Sidebar from './Sidebar';
export default {
    components: {
        Narbar,
        Sidebar
    },
}
</script>
