import React, { MouseEvent } from "react";
import Model, { ModelProps } from "./Model";
import { fireEvent, render } from "@testing-library/react";

const defaultProps: ModelProps = {
    visiable: true,
    onOk: jest.fn(),
    onCancel: jest.fn(),
    title: "Basic Model",
    content: "something happen",
};

describe("test Model component", () => {
    it("should render the default model", () => {
        const renderResult = render(<Model {...defaultProps}></Model>);
        const ele = renderResult.getByTestId("test-model") as HTMLDivElement;
        expect(ele).toBeInTheDocument();
        const bg = ele.parentNode as HTMLDivElement;
        expect(bg).toHaveClass("y-model y-model-visiable");
        const [ok, cancel] = [].slice.call(ele.getElementsByTagName("button"));
        fireEvent.click(ok);
        fireEvent.click(cancel);
        fireEvent.click(bg);
        expect(defaultProps.onOk).toHaveBeenCalled();
        expect(defaultProps.onCancel).toBeCalledTimes(2);
    });
});
