export default function TextArea ({heading, subheading, children}) {
    return (
        <div className="container">
            <h2 className="text-6xl font-bold mb-5">{heading}</h2>
            <h3 className="text-4xl mb-3">{subheading}</h3>
            <div className="text-xl space-y-4 mb-5">
            {children}
            </div>
        </div>
    )
}