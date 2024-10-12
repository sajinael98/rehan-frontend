import { FOOD_MENU } from '@constent/data';
import { Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { Item } from '@modules/food-menu/types';
import Image from 'next/image';
import ItemCard from '../Item';

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

const Category = ({ category, items }: CategoryProps) => {

    return <Stack mb='md' id={category.name}>
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
            items.map(item => <ItemCard key={item.name} item={item} />)
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