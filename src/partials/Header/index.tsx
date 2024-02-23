import react from "react"
import styles from "./Header.module.css"
import {CitySelector} from "@/components/Filter/CitySelector";
import {Flex} from "@mantine/core";
import {CategorySelector} from "@/components/Filter/CategorySelector";

export const Header = () => {
    return<>
    <header className={styles.header}>
        <Flex>

            <CitySelector/>
           <CategorySelector/>
        </Flex>


        <h1>Banner or Some thing</h1>

    </header>
    </>

}