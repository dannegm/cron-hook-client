'use client';

import Editor from '@monaco-editor/react';

const options = {
    readOnly: true,
    contextmenu: false,
    fontSize: 14,
    minimap: {
        enabled: false,
    },
};

const isValidJson = str => {
    if (typeof str !== 'string') return false;

    try {
        const json = JSON.parse(str);
        return typeof json === 'object' && json !== null;
    } catch (error) {
        return false;
    }
};

const prettyCode = code => {
    if (code === null || !isValidJson(code)) {
        return '// Not content provided';
    }

    const parsed = JSON.parse(code);
    return JSON.stringify(parsed, null, 4);
};

export default function CodeEditor({ type, code, lang }) {
    return (
        <div className='border border-solid border-white/20 rounded overflow-hidden'>
            <Editor
                className='bg-red-400'
                height='240px'
                theme='vs-dark'
                defaultLanguage='json'
                language={lang}
                value={prettyCode(code)}
                options={options}
            />
        </div>
    );
}
