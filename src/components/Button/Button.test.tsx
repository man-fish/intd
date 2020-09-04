import React from "react";
import Button, { ButtonProps } from "./Button";
import { render, fireEvent } from "@testing-library/react";

const defaultProps = {
    onClick: jest.fn(),
};

const testType: ButtonProps = {
    btnType: "primary",
    size: "sm",
    className: "foo",
};

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn(),
};

describe("test Button component", () => {
    it("should render the correct default button", () => {
        const renderResult = render(<Button {...defaultProps}> Nice </Button>);
        const ele = renderResult.getByText("Nice") as HTMLButtonElement;
        expect(ele).toBeInTheDocument();
        expect(ele.tagName).toEqual("BUTTON");
        expect(ele).toHaveClass("btn btn-default");
        expect(ele.disabled).toBeFalsy();
        fireEvent.click(ele);
        expect(defaultProps.onClick).toHaveBeenCalled();
    });

    it("should render the correct button with different props", () => {
        const renderResult = render(<Button {...testType}> Nice </Button>);
        const ele = renderResult.getByText("Nice") as HTMLButtonElement;

        expect(ele).toBeInTheDocument();
        expect(ele).toHaveClass("btn-primary btn-sm foo");
    });

    it("should render a link when the btnType assigns to be primary and href prop is provided", () => {
        const renderResult = render(
            <Button btnType="link" href="http://baidu.com">
                Link
            </Button>
        );
        const ele = renderResult.getByText("Link") as HTMLLinkElement;

        expect(ele).toBeInTheDocument();
        expect(ele.tagName).toEqual("A");
        expect(ele).toHaveClass("btn btn-link");
    });

    it("should render a disabled button or link when the disabled prop on", () => {
        const renderResult = render(<Button {...disabledProps}>Nice</Button>);
        const ele = renderResult.getByText("Nice") as HTMLButtonElement;

        expect(ele).toBeInTheDocument();
        expect(ele.disabled).toBeTruthy();
        fireEvent.click(ele);
        expect(disabledProps.onClick).not.toHaveBeenCalled();
    });
});
