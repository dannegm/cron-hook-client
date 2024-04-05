'use client';
import { encode64 } from '@/helpers/crypt';

export default function HtmlViewer({ content }) {
    const dataContent = encode64(content);
    const dataUrl = `data:text/html;base64,${dataContent}`;
    return <iframe className='bg-white rounded-md w-full' src={dataUrl} />;
}
