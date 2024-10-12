import { CATEGORIES } from '@constent/data';
import { Button, Navbar, ThemeIcon } from '@mantine/core';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

interface MenuNavbarProps {
    opened: boolean;
    close: () => void;
}

const MenuNavbar = ({ opened, close }: MenuNavbarProps) => {
    
    return (
        <AnimatePresence>
            {opened && <motion.div style={{ zIndex: 1 }} initial={{ translateX: "-100vh" }} animate={{ translateX: 0 }} exit={{ translateX: "-100vh" }} transition={{ ease: "linear" }}>
                <Navbar
                    bg="#F8F7E6"
                    hidden={!opened}
                    height="100%"
                    w={270}
                    withBorder={false}
                >
                    <Button.Group mt={60} orientation='vertical'>

                        {Object.keys(CATEGORIES).map((category, index) => <Button
                            key={category}
                            uppercase={false}
                            radius={0}
                            variant='subtle'
                            mb="md"
                            component='a'
                            href={`#${CATEGORIES[category].name}`}
                            rightIcon={<ThemeIcon pos="relative" bg="transparent">
                                <Image src={`/images/icons/Vector${index + 1}.png`} alt={CATEGORIES[category].name} fill />
                            </ThemeIcon>}
                            styles={{
                                inner: {
                                    justifyContent: "flex-end",
                                    alignItems: "center"
                                }
                            }}
                            sx={{
                                "&": {
                                    fontSize: 20,
                                    fontWeight: 500,
                                    lineHeight: 24,
                                },
                                "&:hover": {
                                    background: "#CDD7B1"
                                }
                            }}
                        >
                            {CATEGORIES[category].name}
                        </Button>)}
                    </Button.Group>
                </Navbar>
            </motion.div>}
        </AnimatePresence>
    )
}

export default MenuNavbar