import PadderDiv from '../UI/PadderDiv';
import Education from './Education';
import Home from './Home';
import Projects from './Projects';
import Skills from './Skills';

export default function Merged() {
  return (
    <div>
      <Home />
      <PadderDiv height={300} />
      <Education />
      <PadderDiv height={300} />
      <Projects />
      <PadderDiv height={300} />
      <Skills />
      <PadderDiv height={300} />
    </div>
  );
}
