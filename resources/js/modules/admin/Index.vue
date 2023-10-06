<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useStisla } from '@/js/composable/useStisla'
import Navbar from '@/js/modules/admin/parts/Navbar.vue'
import Sidebar from '@/js/modules/admin/parts/Sidebar.vue'
import Footer from '@/js/modules/admin/parts/Footer.vue'

const { sidebarSticky, resizeHandler } = useStisla()

onMounted(() => {
  sidebarSticky()
  resizeHandler()

  window.addEventListener('resize', resizeHandler)
})

onBeforeUnmount(() => window.removeEventListener('resize', resizeHandler))
</script>

<template>
  <div class="main-wrapper main-wrapper-1">
    <Navbar />
    <Sidebar />

    <div class="main-content">
      <section class="section">
        <router-view :key="$route.fullPath"></router-view>
      </section>
    </div>

    <Footer />
  </div>
</template>

<style lang="scss">
body {
  background-color: #fafdfb !important;

  nav {
    &.navbar {
      ul {
        margin-bottom: 0;
        &.navbar-nav {
          margin-top: 0;
          li {
            a {
              &.nav-link {
                i, svg {
                  margin-left: 0 !important;
                  font-size: 18px;
                  line-height: 32px;
                }
              }
            }
          }
        }
      }
    }
  }

  &.sidebar-mini {
    .main-sidebar {
      .sidebar-menu {
        > li {
          &.dropdown {
            > ul {
              &.dropdown-menu {
                padding-bottom: 1.325rem;
              }
            }
          }
          > a {
            i, svg {
              margin: 0;
              font-size: 18px;
            }
          }
        }
      }
    }
  }

  .main-sidebar {
    .sidebar-menu {
      li {
        a {
          i, svg {
            width: 28px;
            margin-right: 20px;
            text-align: center;
          }
        }
      }
    }
  }

  .main-content {
    .section {
      &.section {
        .section-header {
          h1 {
            font-size: 1rem;
          }
        }
      }
    }
  }
}

</style>
