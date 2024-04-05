export default function DefaultViewer({ content }) {
    return (
        <div className="bg-white text-black p-4 rounded-md">
            <pre>{content}</pre>
        </div>
    );
}
