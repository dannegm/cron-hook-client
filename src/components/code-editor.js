'use client';

import Editor from '@monaco-editor/react';

const options = {
    contextmenu: false,
    minimap: {
        enabled: false,
    },
};

export default function CodeEditor({ code, lang, onChange }) {
    return (
        <div className='border border-solid border-white/20 rounded overflow-hidden'>
            <Editor
                className='bg-red-400'
                height='240px'
                theme='vs-dark'
                defaultLanguage='json'
                language={lang}
                value={code}
                options={options}
                onChange={onChange}
            />
        </div>
    );
}
