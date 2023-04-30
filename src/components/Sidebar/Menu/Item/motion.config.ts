export const MenuSubItensMotionConfigs = {
  open: {
    height: `auto`,
    transition: {
      stiffness: 200,
      restDelta: 1,
      damping: 20,
    },
  },
  closed: {
    height: 0,
    transition: {
      delay: 0.2,
      stiffness: 200,
      damping: 20,
    },
  },
}

export const SubItemListMotionConfigs = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
}
