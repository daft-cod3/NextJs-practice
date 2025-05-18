const Student = ({ name, age, isStudent }) => {
    return (
        <div className="student">
            <h3>Name: {name}</h3>
            <p>Age: {age}</p>
            <p>Status: {isStudent ? 'Student' : 'Not a student'}</p>
        </div>
    );
};

export default Student;