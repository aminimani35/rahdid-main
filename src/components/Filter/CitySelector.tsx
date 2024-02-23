"use client"
import {useState, useRef, useEffect} from 'react';
import {Autocomplete, Loader} from '@mantine/core';
import {CategoryService} from "@/services/HTTP";

export function CitySelector() {
    const timeoutRef = useRef<number>(-1);
    const [value, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<string[]>([]);
    const [provinces, setList] = useState<any[]>([])
    const handleChange = (val: string) => {
        window.clearTimeout(timeoutRef.current);
        setValue(val);
        setData([]);

        if (val.trim().length === 0 || val.includes('@')) {
            setLoading(false);
        } else {
            setLoading(true);
            timeoutRef.current = window.setTimeout(() => {
                setLoading(false);
                setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
            }, 1000);
        }
    };
    console.log(provinces, "liiiiiiiiist")

    useEffect(() => {
        CategoryService.getCategories().then(response => {
            console.log(response, "aaaaaaaaa")
        })
        CategoryService.getRestaurants().then(response => {
            return response.data.data
        })
        CategoryService.getProvinces().then((response: any[]) => {
            const list = response.map(item => {
                return {...item, value: item.name}
            })
            setList(list)
        })

    }, [])


    return (
        <Autocomplete value={value}
                      data={provinces}
                      onChange={handleChange}
                      limit={5}
                      rightSection={loading ? <Loader size="1rem"/> : null}
            // label="Async Autocomplete data"
                      placeholder="شهر یا استان"
        />
    );
}
