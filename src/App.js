import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./MainPage";
import Page from "./Page";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainPage
                            title="Boundless"
                            subtitle="Your personalized, intelligent OS"
                        />
                    }
                />

                <Route
                    path="/fortune"
                    element={
                        <Page
                            title="Fortune"
                            subtitle="AI autocomplete, anywhere"
                        />
                    }
                />

                <Route
                    path="/search"
                    element={
                        <Page
                            title="Boundless Search"
                            subtitle="All your knowledge, at your fingertips"
                        />
                    }
                />

                <Route
                    path="/iris"
                    element={<Page title="Iris" subtitle="AI with sight" />}
                />
            </Routes>
        </Router>
    );
}

export default App;
