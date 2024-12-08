import { createSharedPathnamesNavigation } from "next-intl/navigation"
import * as config from "./config"

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation(config)
