import { configure, addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);
import "../dist/index.css";
addDecorator(withInfo);
addParameters({ info: { inline: true, header: false } });
const loaderFn = () => {
    const allExports = [require("../src/Welcome.stories.tsx")];
    const req = require.context("../src/components", true, /\.stories\.tsx$/);
    req.keys().forEach((fname) => allExports.push(req(fname)));
    return allExports;
};

// automatically import all files ending in *.stories.js
configure(loaderFn, module);
