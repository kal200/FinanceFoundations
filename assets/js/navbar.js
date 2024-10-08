const { createRoot } = ReactDOM;

class Navbar extends React.Component {
    render() {
      return (
        <header>
          <div className="container">
            <div className="logo">
              <a href="https://kal200.github.io/FinanceFoundations/index.html" target="_self">
                <img src="https://kal200.github.io/FinanceFoundations/assets/images/gradientfinancelogonobgresized.png" alt="logo" />
              </a>
            </div>
            <div className="links">
              <ul>
                <li><a href="https://kal200.github.io/FinanceFoundations/pages/definitions.html">Definitions</a></li>
                <li><a href="https://kal200.github.io/FinanceFoundations/pages/calculators.html">Calculators</a></li>
                <li><a href="https://kal200.github.io/FinanceFoundations/pages/quizzes.html">Quizzes</a></li>
                <li><a href="https://kal200.github.io/FinanceFoundations/pages/adtlresources.html">Additional Resources</a></li>
                <li><a href="https://kal200.github.io/FinanceFoundations/pages/references.html">Attributions</a></li>
              </ul>
            </div>
          </div>
        </header>
      );
    }
  }
  
// Find the container element
const domContainer = document.querySelector('.navbar-container');

// Ensure the container element exists before rendering
if (domContainer) {
  const root = createRoot(domContainer);
  root.render(<Navbar />);
} else {
  console.error('Target container is not a DOM element.');
}