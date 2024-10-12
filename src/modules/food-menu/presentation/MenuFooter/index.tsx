import { ActionIcon, Box, Button, Flex, Footer, Group, Text, ThemeIcon } from '@mantine/core'
import { IconMenu, IconMenu2, IconMenu3, IconShoppingCart, IconShoppingCartFilled } from '@tabler/icons-react'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'

interface MenuFooterProps {
    toggle: () => void
}
const MenuFooter = ({ toggle }: MenuFooterProps) => {
    const path = usePathname()
    const router = useRouter()

    function checkoutHandler() {
        router.push("/menu/checkout")
    }
    
    return (
        <Footer
            withBorder={false}
            height={62}
        >
            {path === "/menu" && <Group bg='green' h="100%" position='apart' align='center' pl="sm">
                <ActionIcon onClick={toggle} c='white'>
                    <IconMenu2 />
                </ActionIcon>
                <Button onClick={checkoutHandler} rightIcon={<ThemeIcon h={32} w={32} style={{ borderRadius: "50%" }} c="green.9" variant='filled' color='white'><IconShoppingCartFilled /></ThemeIcon>}>
                    الحساب
                </Button>
            </Group>}
            {path === "/menu/checkout" &&
                <Flex h="100%" bg="#F1EECC" justify="space-between" align="center" px="md">
                    <Box>
                        <Text c="green" fz="sm" fw={300}>المجموع</Text>
                        <Text c="green" fz="xl" fw={700}>80 &#8362;</Text>
                    </Box>
                    <Button size='lg' w={170} radius="lg">
                        تأكيد الطلب
                    </Button>
                </Flex>
            }
        </Footer >
    )
}

export default MenuFooter