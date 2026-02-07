// App.jsx
import React, { useState } from 'react';
import Surprise from './components/Surprise';
import ValentineDay from './components/ValentineDay';

function App() {
  const [showSurprise, setShowSurprise] = useState(true);

  const handleContinue = () => {
    setShowSurprise(false);
  };

  return (
    <div className="App">
      {/* Add Google Fonts link to your HTML head or use @import in CSS */}
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');
      </style>

      {showSurprise ? (
        <Surprise onContinue={handleContinue} />
      ) : (
        <ValentineDay />
      )}
    </div>
  );
}

export default App;