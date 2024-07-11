import Header from './components/header/Header';
import NewsBanner from './components/newsBanner/NewsBanner';
import Main from './pages/Main/Main';

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <Main />
            </div>
        </>
    );
}

export default App;
