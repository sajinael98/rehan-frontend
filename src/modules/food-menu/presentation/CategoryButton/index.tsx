import { Button, ThemeIcon } from '@mantine/core';
import Image from 'next/image';
import React from 'react'

interface CategoryButtonProps {
    name: string;
    icon: string;
}

const CategoryButton = ({ icon, name }: CategoryButtonProps) => {
    return (
        <Button
            styles={{
                inner: {
                    justifyContent: 'flex-end'
                }
            }}
            variant='subtle'
            key={name}
            rightIcon={<ThemeIcon style={{ position: 'relative', background: "transparent" }}>
                <Image src={`/images/icons/${icon}`} alt={name} fill />
            </ThemeIcon>}
            fz={20}
            fw={500}
        >
            {name}
        </Button>
    )
}

export default CategoryButton