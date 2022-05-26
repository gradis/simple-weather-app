import Header from './components/Header'
import GetIp from './components/GetIp'
import Image from './components/Image'
import CalendarView from './components/CalendarView';
import 'animate.css';

function App() {
  return (
    <div className="w-screen h-screen relative">
      <div className="absolute z-40 w-full h-full text-white" style={{ minWidth: "320px" }}>
        <Header />
        <div className="w-screen h-screen flex flex-col lg:flex-row items-center justify-around transition-all duration-300 py-8" style={{ minWidth: "320px" }} >
          <GetIp />
          <CalendarView />
        </div>
      </div>
      <Image className="-z-1" />
    </div>
  );
}

export default App;
