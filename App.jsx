import Card from './card.jsx'
import Student from './Student.jsx'
import Card1 from './card1.jsx'

function App() {
    return (
        <>
            <Card />
            <Card1 name="Daft W" para="This is the synopsis of the content displayed above" />
            <Student name="Daft" age={30} isStudent={true} />
            <Student name="Waikiki" age={42} isStudent={false} />
            <Student name="Bk" age={19} isStudent={true} />
            <Student name="Unknown" age={0} isStudent={false} /> {/* Added default props */}
        </>
    );
}

export default App;