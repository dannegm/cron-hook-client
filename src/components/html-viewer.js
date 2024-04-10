'use client';
import base64 from 'base-64';

export default function HtmlViewer({ content }) {
    const dataContent = base64.encode(content);
    const dataUrl = `data:text/html;base64,${dataContent}`;
    return <iframe className='bg-white rounded-md w-full' src={dataUrl} />;
}
