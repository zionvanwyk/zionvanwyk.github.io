<template>
  <header class="navbar-wrapper">
    <Menubar :model="items" class="navbar-menubar">
      <template #end>
        <div class="nav-end">
          <InputText placeholder="Search" class="search-box" />
          <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
        </div>
      </template>
    </Menubar>
  </header>
</template>

<script>
import Menubar from 'primevue/menubar';
import InputText from 'primevue/inputtext';
import Avatar from 'primevue/avatar';

export default {
  components: {
    Menubar,
    InputText,
    Avatar,
  },
  data() {
    return {
      items: [
        { label: 'Home', icon: 'pi pi-home', to: '/' },
        { label: 'About', icon: 'pi pi-info-circle', to: '/about' },
        { label: 'Education', icon: 'pi pi-graduation-cap', to: '/education' },
        { label: 'Experience', icon: 'pi pi-briefcase', to: '/experience' },
        { label: 'Projects', icon: 'pi pi-desktop', to: '/projects' },
        { label: 'Achievements', icon: 'pi pi-sparkles', to: '/achievements' },
        { label: 'Contact', icon: 'pi pi-envelope', to: '/contact' }
      ]
    };
  }
}
</script>

<style scoped>
.navbar-wrapper {
  width: 100%;
  background-color: var(--dark);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-menubar {
  background-color: var(--dark);
  border: none;
  color: var(--text);
  padding: 0.5rem 2rem;
  width: 100%;
}

.navbar-menubar .p-menuitem-link {
  color: var(--text);
}

.navbar-menubar .p-menuitem-link:hover {
  background-color: var(--primary);
  color: #fff;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-end {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.search-box {
  background-color: var(--light);
  color: var(--dark);
  border-radius: 4px;
  padding: 0.3rem 0.6rem;
}
</style>
