import Navbar from "@/components/Navbar";
import Container from "@/themes/Container";
import Calendar from "./components/Calendar";

const SchedulePage = () => {
  return (
    <Container  id="schedule-page" 
                style="px-6 py-10 rounded-lg shadow-lg mt-10 esm:mt-5 bg-custom-gradient flex items-center flex-col">
    <div className="rounded-lg rounded-md h-[500px] overflow-y-auto esm:h-[400px]">  
       <Calendar />
       </div>
    </Container>
  );
};

export default SchedulePage;
