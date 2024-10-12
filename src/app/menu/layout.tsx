"use client"

import { AppShell, MantineProvider } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { MenuFooter } from '@modules/food-menu/presentation'
import MenuNavbar from '@modules/food-menu/presentation/MenuNavbar'
import { usePathname } from 'next/navigation'
import { PropsWithChildren, useEffect } from 'react'
import classes from './layout.module.css'

const MenuLayout = ({ children }: PropsWithChildren) => {
    const [opened, { toggle, close }] = useDisclosure(false)
    const path = usePathname()

    useEffect(() => {
        if (["/menu" !== path]) {
            close()
        }
    }, [path])

    return (
        <MantineProvider
            theme={{
                primaryColor: "green",
                primaryShade: {
                    light: 9
                }
            }}
            withCSSVariables
            withGlobalStyles
            withNormalizeCSS
        >
            <AppShell
                className={classes.app}
                padding={path === "/menu" ? "md" : 0}
                navbar={path === "/menu" ? <MenuNavbar opened={opened} close={close} /> : undefined}
                footer={path === "/menu/welcome" ? undefined : <MenuFooter toggle={toggle} />}>
                {children}
            </AppShell >
        </MantineProvider >
    )
}

export default MenuLayout