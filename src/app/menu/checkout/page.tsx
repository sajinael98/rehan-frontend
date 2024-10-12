"use client"

import { ActionIcon, Box, Button, Flex, Group, Stack, Text } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconArrowLeft, IconMinus, IconPlus, IconX } from '@tabler/icons-react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { lazy } from 'react'

const CheckoutPage = () => {
  const [isTakeway, { open, close }] = useDisclosure(false)
  const router = useRouter()

  return (
    <>
      <Button onClick={router.back} leftIcon={<IconArrowLeft/>} mb="md" variant='subtle' size='sm'>
        الرجوع الى القائمة
      </Button>
      <Group mb="md" position='center' bg="#F1EECC" py="sm" sx={{ borderRadius: "var(--mantine-spacing-xl)" }}>
        <Button variant={isTakeway ? 'outline' : 'filled'} onClick={close} radius="xl" w={145}>توصيل</Button>
        <Button variant={!isTakeway ? 'outline' : 'filled'} onClick={open} radius="xl" w={145}>الطلب في المطعم</Button>
      </Group>

      {Array(6).fill(0).map((_, index) => <motion.div initial={{ translateX: "-100vh" }} animate={{ translateX: 0 }} transition={{delay: 0.2 * index}} key={index}>
        <Flex sx={{ minHeight: 95, backgroundColor: "#F1EECC", borderRadius: 28, padding: "var(--mantine-spacing-sm)", marginBottom: "var(--mantine-spacing-md)" }}>
          <Stack sx={{ flex: 1 }} justify='space-between' pr="sm">
            <Group position='apart'>
              <ActionIcon>
                <IconX />
              </ActionIcon>
              <Text>
                بيتزا الفصول الأربعة
              </Text>
            </Group>
            <Text ta="right" fz="sm" fw="lighter">بدون بصل ، بدون فلفل حار</Text>
            <Group position='apart'>
              <Group>
                <ActionIcon bg="#7F7735" c="white">
                  <IconPlus />
                </ActionIcon>
                <Text c="green">
                  4
                </Text>
                <ActionIcon bg="#7F7735" c="white">
                  <IconMinus />
                </ActionIcon>
                <Text fw={300} fz={"sm"}>:الكمية</Text>
              </Group>
              <Text sx={{ color: "white", backgroundColor: "#7F7735", width: 55, height: 24, textAlign: "center", borderRadius: 10 }}>
                80 &#8362;
              </Text>
            </Group>
          </Stack>
          <Box sx={{ width: 100, minHeight: 75, position: "relative", borderRadius: "var(--mantine-spacing-sm)", overflow: "hidden" }}>
            <Image fill alt='' objectFit='cover' src="/images/food/5.jpg" />
          </Box>
        </Flex>
      </motion.div>)}
    </>
  )
}

export default CheckoutPage