const Card = ({ title, subtitle, role }) => {
    return (
        <div className="border p-4 rounded shadow-lg w-64 h-64 mx-auto bg-dark text-white overflow-auto">
            <h1 className="text-2xl font-bold mb-2">{title}</h1>
            <h2 className="italic mb-2">{subtitle}</h2>
            <p className="text-base">{role}</p>
        </div>
    );
};

export default Card;