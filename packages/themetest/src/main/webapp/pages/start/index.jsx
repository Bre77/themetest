import React from 'react';

import layout from '@splunk/react-page';
import ThemeTest from '@splunk/theme-test';
import { getUserTheme, getThemeOptions } from '@splunk/splunk-utils/themes';



getUserTheme()
    .then((theme) => {
        const splunkTheme = getThemeOptions(theme)
        console.log("LATEST TEST", theme, splunkTheme)
        layout(
            <ThemeTest name="from inside ThemeTest" />,
            { theme }
        );
    })
    .catch((e) => {
        const errorEl = document.createElement('span');
        errorEl.innerHTML = e;
        document.body.appendChild(errorEl);
    });
