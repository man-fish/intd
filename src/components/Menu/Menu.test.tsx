import React from "react";
import {
    render,
    RenderResult,
    fireEvent,
    cleanup,
} from "@testing-library/react";
import Menu, { MenuProps } from "./Menu";
import MenuItem from "./MenuItem";

const testProps: MenuProps = {
    defaultIdx: "0",
    className: "foo",
    onSelect: jest.fn(),
};

const testVerProps: MenuProps = {
    defaultIdx: "0",
    mode: "vertical",
};

const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem index={"0"}>default</MenuItem>
            <MenuItem index={"1"} disabled>
                disabled
            </MenuItem>
            <MenuItem index={"2"}>common</MenuItem>
            <li>fuck</li>
        </Menu>
    );
};

describe("test Menu and MenuItem component", () => {
    let wrapper: RenderResult,
        menuEle: HTMLElement,
        activeEle: HTMLElement,
        disabledEle: HTMLElement;
    beforeEach(() => {
        wrapper = render(generateMenu(testProps));
        menuEle = wrapper.getByTestId("test-menu");
        activeEle = wrapper.getByText("default");
        disabledEle = wrapper.getByText("disabled");
    });
    it("should render correct Menu and MenuItem based default props", () => {
        expect(menuEle).toBeInTheDocument();
        expect(menuEle).toHaveClass("y-menu foo");
        expect(menuEle.getElementsByTagName("li").length).toEqual(3);
        expect(activeEle).toHaveClass("menu-item is-active");
        expect(disabledEle).toHaveClass("menu-item is-disabled");
    });
    it("click items should change active and call the right callback", () => {
        const thirdItem = wrapper.getByText("common");
        fireEvent.click(thirdItem);
        expect(thirdItem).toHaveClass("is-active");
        expect(activeEle).not.toHaveClass("is-active");
        expect(testProps.onSelect).toHaveBeenCalledWith(2);
        fireEvent.click(disabledEle);
        expect(disabledEle).not.toHaveClass("is-active");
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
    });
    it("should render correct Menu and MenuItem based default props", () => {
        cleanup();
        const wrapper = render(generateMenu(testVerProps));
        const menuEle = wrapper.getByTestId("test-menu");
        expect(menuEle).toHaveClass("menu-vertical");
    });
});
