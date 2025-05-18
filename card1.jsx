const Card1 = ({ name, para }) => {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>{para}</p>
        </div>
    );
};

export default Card1;