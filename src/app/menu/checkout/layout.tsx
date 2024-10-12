"use client"

import { Box } from '@mantine/core'
import React, { PropsWithChildren } from 'react'

const layout = ({ children }: PropsWithChildren) => {
    return (
        <Box
            sx={() => ({
                height: "100%",
                backgroundColor: "#F7F6EB",
                padding: "var(--mantine-spacing-md)"
            })}
        >
            {children}
        </Box>
    )
}

export default layout