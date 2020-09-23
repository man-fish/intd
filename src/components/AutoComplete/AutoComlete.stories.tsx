import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { AutoComplete } from "../../index";

const SimpleComplete = () => {
    const handleFetch = (query: string) => {
        return fetch(`https://api.github.com/search/users?q=${query}`)
            .then((res) => res.json())
            .then(({ items }) => {
                console.log(items);
                return items
                    .slice(0, 10)
                    .map((item: any) => ({ value: item.login, ...item }));
            });
    };

    return (
        <AutoComplete
            fetchSuggestion={handleFetch}
            onSelect={action("selected")}
        />
    );
};

storiesOf("AutoComplete", module).add("AutoComplete", SimpleComplete);
