"use client"

import { ScrollArea, Stack, Text, TextInput } from '@mantine/core'
import { useInputState } from '@mantine/hooks'
import { FoodMenu } from '@modules/food-menu/presentation'
import { IconSearch } from '@tabler/icons-react'
import Image from 'next/image'

const IndexPage = () => {
    const [search, setSearch] = useInputState('')

    return (
        <>
            <Stack h={'100%'} >
                <Stack>
                    <Image
                        src="/images/logo.png"
                        alt="logo"
                        width={120}
                        height={50}
                        style={{ display: 'block', marginInline: "auto", objectFit: "cover", filter: "brightness(0) invert(1)" }} />
                    <Text
                        fz={20}
                        fw={800}
                        ta='right'
                        c="white">
                        ! صباح الخير
                    </Text>
                    <TextInput
                        styles={{
                            input: {
                                textAlign: "right"
                            }
                        }}
                        value={search}
                        onChange={setSearch}
                        icon={<IconSearch />}
                        placeholder='ماذا تود أن تأكل اليوم ؟' />
                </Stack>
                <div style={{ position: "relative", flex: 1 }}>
                    <ScrollArea style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, width: "100%" }} type='never'>
                        <FoodMenu search=''/>
                    </ScrollArea>
                </div>
            </Stack>
        </>
    )
}

export default IndexPage