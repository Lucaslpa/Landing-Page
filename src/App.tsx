import { Menu } from 'components/menu';
import { SectionOne } from 'sections/section 1';
import { SectionTwo } from 'sections/section 2';
import { SectionThree } from 'sections/section 3';
import { SectionFour } from 'sections/section 4';
import { SectionFive } from 'sections/section 5';
import { SectionSix } from 'sections/section 6';
import { Footer } from 'sections/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Menu fixed />
      </header>

      <main>
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
