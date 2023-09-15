import {
  NavigationGuardNext,
  RouteLocationNormalized,
  createRouter,
  createWebHistory,
} from "vue-router"

import { routes } from "./routes"

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(
  async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
  ) => {
    if (to.meta.unprotected) {
      return next()
    }

    return next()
  },
)

router.afterEach(() => {
  const hash = window.location.hash
  if (hash.includes("access_token")) window.location.hash = ""
})

export default router
