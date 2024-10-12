import { FOOD_MENU } from '@constent/data';
import { Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { Item } from '@modules/food-menu/types';
import Image from 'next/image';
import ItemCard from '../Item';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface FoodMenuProps {
    search: string;
}

interface CategoryProps {
    category: {
        name: string;
        icon: string;
    }
    items: Item[];
}

const variants = {
    initial: {
        translateX: "-100vh"
    },
    animate: {
        translateX: 0
    }
}
const Category = ({ category, items }: CategoryProps) => {
    const ref = useRef(null)
    const isCardRefInView = useInView(ref, { once: true })
    const animate = isCardRefInView ? 'animate' : 'initial'

    return <Stack mb='md' id={category.name} ref={ref}>
        <Group
            spacing="sm"

            position='right'>
            <Text
                c="white"
                fw={800}>
                {category.name}
            </Text>
            <ThemeIcon
                w={19}
                h={19}
                variant='light'>
                <Image src={category.icon} alt={category.name} width={17} height={17} />
            </ThemeIcon>
        </Group>
        {
            items.map((item, index) => <motion.div variants={variants} initial='initial' animate={animate} key={item.name} transition={{
                delay: 0.1 * index,
                duration: 0.5
            }}>
                <ItemCard item={item} />
            </motion.div>)
        }
    </Stack>
}

const FoodMenu = ({ search }: FoodMenuProps) => {
    const categories = Object.keys(FOOD_MENU).map((category, index) => {
        return <Category
            key={category}
            category={{ name: category, icon: `/images/icons/Vector${index + 1}.png` }}
            items={FOOD_MENU[category]} />
    })

    return (
        categories
    )
}

export default FoodMenu