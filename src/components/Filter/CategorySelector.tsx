"use client"
import {useState, useRef, useEffect} from 'react';
import {Autocomplete, Combobox, Input, InputBase, Loader, useCombobox} from '@mantine/core';
import {CategoryService} from "@/services/HTTP";

export function CategorySelector() {

    const [value, setValue] = useState('');

    const [categories, setList] = useState<any[]>([])
    // const handleChange = (val: string) => {
    //     window.clearTimeout(timeoutRef.current);
    //     setValue(val);
    //     setData([]);
    //
    //     if (val.trim().length === 0 || val.includes('@')) {
    //         setLoading(false);
    //     } else {
    //         setLoading(true);
    //         timeoutRef.current = window.setTimeout(() => {
    //             setLoading(false);
    //             setData(['gmail.com', 'outlook.com', 'yahoo.com'].map((provider) => `${val}@${provider}`));
    //         }, 1000);
    //     }
    // };

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    useEffect(() => {
        CategoryService.getCategories().then((response: any[]) => {
            console.log(response, "categories")
            // const list = response.map(cat => {
            //     return {group: cat.name, id: cat.id, items: cat.children.map(child=>child.name) , value:cat.name}
            // })
            setList(response)
        })
        // CategoryService.getRestaurants().then(response => {
        //     return response.data.data
        // })
        // CategoryService.getProvinces().then((response: any[]) => {
        //     const list = response.map(item => {
        //         return {...item, value: item.name}
        //     })
        //     setList(list)
        // })

    }, [])


    return (
        // <Autocomplete value={value}
        //               data={categories}
        //               onChange={handleChange}
        //               // limit={5}
        //               rightSection={loading ? <Loader size="1rem"/> : null}
        //     // label="Async Autocomplete data"
        //               placeholder="انتخاب دسته بندی"
        //
        // />
        <Combobox
            store={combobox}
            onOptionSubmit={(val) => {
                setValue(val);
                combobox.closeDropdown();
            }}
        >
            <Combobox.Target>
                <InputBase
                    component="button"
                    type="button"
                    pointer
                    rightSection={<Combobox.Chevron/>}
                    rightSectionPointerEvents="none"
                    onClick={() => combobox.toggleDropdown()}
                >
                    {value || <Input.Placeholder>انتخاب دسته بندی</Input.Placeholder>}
                </InputBase>
            </Combobox.Target>

            <Combobox.Dropdown>

                <Combobox.Options>
                    {categories.map(cat => {
                        if (cat?.children?.length){
                            return <Combobox.Group key={cat.id} label={cat.name}>
                                {cat.children.map((subCat:any)=>(
                                    <Combobox.Option key={subCat.id} value="🥦 Broccoli">{subCat.name}</Combobox.Option>
                                ))}
                            </Combobox.Group>
                        }else{
                            return  <Combobox.Option key={cat.id} value="🥦 Broccoli">{cat.name}</Combobox.Option>
                        }
                    })}
                    {/*<Combobox.Group label="Fruits">*/}
                    {/*    <Combobox.Option value="🍎 Apples">🍎 Apples</Combobox.Option>*/}
                    {/*    <Combobox.Option value="🍌 Bananas">🍌 Bananas</Combobox.Option>*/}
                    {/*    <Combobox.Option value="🍇 Grape">🍇 Grape</Combobox.Option>*/}
                    {/*</Combobox.Group>*/}

                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
}
