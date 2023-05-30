import { useContext } from "react";
import CheckIn from "./CheckIn";
import AdultsDropdown from "./AdultsDropdown";
import CheckOut from "./CheckOut";
import KidsDropdown from "./KidsDropdown";
import { RoomContext } from "../context/RoomContext";
import Button from "../components/Elements/Button"

const BookForm = () => {
    const { handleClick } = useContext(RoomContext);

    return (
        <form className="h-[300px] w-full lg:h-[70px]">
            <div className="flex flex-col w-full h-full lg:flex-row">
                <div className="flex-1 border-r">
                    <CheckIn />
                </div>
                <div className="flex-1 border-r">
                    <CheckOut />
                </div>
                <div className="flex-1 border-r">
                    <AdultsDropdown />
                </div>
                <div className="flex-1 border-r">
                    <KidsDropdown />
                </div>
                {/* button */}
                <Button onClick={(e) => handleClick(e)} type="submit" variant="bg-accent hover:bg-accent-hover">
                    Book Now
                </Button>
            </div>
        </form>
    );
};

export default BookForm;
