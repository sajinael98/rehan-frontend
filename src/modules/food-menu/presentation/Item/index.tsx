import { ActionIcon, Button, Card, Checkbox, Group, Radio, Stack, Text, Textarea, ThemeIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Item } from '@modules/food-menu/types';
import { IconMinus, IconPlus, IconStarFilled } from '@tabler/icons-react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import classes from './item.module.css';

interface ItemCardProps {
    item: Item;
}

interface ItemOptionsProps {
    sizes: { size: string; price: number; }[];
    modifiers: string[];
}

const ItemOptions = ({ modifiers, sizes }: ItemOptionsProps) => {
    const itemModifiers = modifiers.map((modifier) => <Checkbox key={modifier} size={"sm"} value={modifier} label={modifier} labelPosition='left' />)

    const itemSizes = sizes.map((size) => <Radio
        key={size.size}
        value={size.size}
        label={size.size}
        labelPosition="left"
        styles={{
            body: {
                justifyContent: "flex-end",
            }
        }}
    />)

    return <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        exit={{ opacity: 0 }}
        className={classes['item-options']}>

        <Checkbox.Group size='sm' spacing='xs' styles={{
            root: {
                "& > div": {
                    justifyContent: "flex-end",
                }
            }
        }}>
            {itemModifiers}
        </Checkbox.Group>

        <Group align='stretch' position='right'>
            <Stack
                px='sm'
                sx={(theme) => ({
                    width: 70,
                    alignItems: "flex-end",
                    border: "1px solid",
                    borderTop: "none",
                    borderColor: theme.colors.green,
                    borderRadius: theme.spacing.xs,
                    flex: 1
                })}>
                <Radio.Group orientation='vertical' size='xs' spacing='xs' pb={5}>
                    {itemSizes}
                </Radio.Group>
            </Stack>
            <Textarea

                style={{ flex: 2 }}
                label='ملاحظات'
                styles={(theme) => ({
                    label: {
                        display: 'none'
                    },
                    input: {
                        height: "100%",
                        border: "1px solid",
                        borderTop: "none",
                        borderColor: theme.colors.green,
                        borderRadius: theme.spacing.xs
                    },
                    wrapper: {
                        height: "100%",
                    },
                    root: {
                        height: '100%'
                    }
                })} />
        </Group>
        <Group align='flex-start'>
            <Button style={{ borderRadius: "var(--mantine-spacing-sm)" }}>
                أضف إلى الطلب
            </Button>
            <Group align='center' h={'100%'} sx={{ flex: 1 }} position='right' spacing='sm'>
                <ActionIcon size='sm' variant='filled' color='green'>
                    <IconPlus />
                </ActionIcon>
                <Text ta='center' sx={(theme) => ({ width: 30, height: 27, backgroundColor: "#F1EECC", borderRadius: theme.spacing.xs })}>
                    0
                </Text>
                <ActionIcon size='sm' variant='filled' color='green'>
                    <IconMinus />
                </ActionIcon>
                <Text>
                    :الكمية
                </Text>
            </Group>
        </Group>
    </motion.div>
}

const ItemCard = ({ item }: ItemCardProps) => {
    const { desc, image, name, price, rate, modifiers, sizes } = item;
    const [shown, { toggle, open }] = useDisclosure(false)

    return <Card
        shadow='sm'
        radius="md"
        pos="relative"
        onClick={() => open()}
        onMouseOver={toggle}
        onMouseOut={toggle}
        p={0}>

        <AnimatePresence>
            {shown && <ItemOptions sizes={sizes} modifiers={modifiers} />}
        </AnimatePresence>

        <Card.Section pos="relative" h={128} p={0} >
            <Image objectFit='cover' src={image} alt={name} fill />
        </Card.Section>
        <Group align='center' px="sm" my="sm" position='apart' >
            <Group fz="xs" spacing={5}>
                {rate}
                <ThemeIcon variant='light' c='#FFC531' size="xs">
                    <IconStarFilled />
                </ThemeIcon>
            </Group>
            <Text fz={14} fw={700} ta="right" c="green" style={{ flex: 1 }}>
                {name}
            </Text>
        </Group>
        <Group px="sm" my="sm">
            <Text px="sm" fz={14} fw={700} bg='green' c="white" style={{ borderRadius: 20 }} span>
                {price} &#8362;
            </Text>
            <Text fz={10} fw={400} lineClamp={2} style={{ flex: 1, textAlign: 'right' }}>
                {desc}
            </Text>
        </Group>
    </Card>
}

export default ItemCard;