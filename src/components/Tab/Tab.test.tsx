import React from "react";
import {
    render,
    RenderResult,
    fireEvent,
    cleanup,
} from "@testing-library/react";
import Tabs, { TabsProps } from "./Tab";
import TabsItem from "./TabItem";

const testProps: TabsProps = {
    defaultIdx: 0,
    className: "foo",
    onSelect: jest.fn(),
};

const testCardProps: TabsProps = {
    defaultIdx: 0,
    type: "card",
};

const generateTabs = (props: TabsProps) => {
    return (
        <Tabs {...props}>
            <TabsItem title="default">defaultContent</TabsItem>
            <TabsItem title="disableItem" disabled>
                disabledContent
            </TabsItem>
            <TabsItem title="third">thirdContent</TabsItem>
        </Tabs>
    );
};

describe("test Tabs and TabsItem component", () => {
    let wrapper: RenderResult,
        TabsEle: HTMLElement,
        activeEle: HTMLElement,
        disabledEle: HTMLElement;
    beforeEach(() => {
        wrapper = render(generateTabs(testProps));
        TabsEle = wrapper.getByTestId("test-tabs");
        activeEle = wrapper.getByText("default");
        disabledEle = wrapper.getByText("disableItem");
    });
    it("should render correct Tabs and TabsItem based default props", () => {
        expect(TabsEle).toBeInTheDocument();
        expect(TabsEle).toHaveClass("y-tabs foo");
        expect(TabsEle.querySelector(".tabs-nav")).toBeInTheDocument();
        expect(TabsEle.querySelector(".tabs-content")).toBeInTheDocument();

        expect(activeEle).toHaveClass("tabs-item is-active");
        expect(disabledEle).toHaveClass("tabs-item is-disabled");
    });
    it("click items should change active and call the right callback", () => {
        const thirdItem = wrapper.getByText("third");
        fireEvent.click(thirdItem);
        expect(thirdItem).toHaveClass("is-active");
        expect(activeEle).not.toHaveClass("is-active");
        const content = wrapper.getByText("thirdContent");
        expect(content).toBeInTheDocument();
        expect(testProps.onSelect).toHaveBeenCalledWith(2);
        fireEvent.click(disabledEle);
        expect(disabledEle).not.toHaveClass("is-active");
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
    });
    it("should render correct Tabs and TabsItem based card props", () => {
        cleanup();
        const wrapper = render(generateTabs(testCardProps));
        const TabsEle = wrapper.getByTestId("test-tabs");
        expect(TabsEle).toHaveClass("tabs-card");
    });
});
