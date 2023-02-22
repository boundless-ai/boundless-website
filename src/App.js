import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Page from "./Page";

function App() {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Page
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
            </Routes>
        </Router>
    );
}

export default App;
