'use client';
import ReactJson from '@microlink/react-json-view';

const REACT_JSON_THEME = 'ocean';
const REACT_JSON_STYLES = {
    backgroundColor: 'rgb(15, 23, 42)',
    fontSize: '0.778rem',
};

export default function JsonViewer({ data = {}, expanded }) {
    return (
        <div className='block max-w-full p-4 bg-slate-900 rounded-lg overflow-hidden'>
            <ReactJson
                src={data}
                name={false}
                theme={REACT_JSON_THEME}
                style={REACT_JSON_STYLES}
                collapsed={!expanded}
                quotesOnKeys={false}
                enableClipboard
                displayObjectSize
            />
        </div>
    );
}
