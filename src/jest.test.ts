export function callback(fn: () => void): void {
    fn();
}

let callbackFunc = jest.fn();

test("test callback", () => {
    callback(callbackFunc);
    expect(callbackFunc).toHaveBeenCalled();
});
