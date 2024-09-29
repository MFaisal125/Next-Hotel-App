import OutsideClick from "@/components/shared/outsideClick/OutsideClick";
import { addTravelAvailability } from "@/features/travelAvailability/travelAvailabilitySlice";
import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const TravelDate = () => {
  const travelAvailability = useSelector((state) => state?.travelAvailability);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(
    travelAvailability?.reservationPeriod?.checkIn || new Date()
  );
  const [endDate, setEndDate] = useState(
    travelAvailability?.reservationPeriod?.checkOut || startDate
  );

  useEffect(() => {
    dispatch(
      addTravelAvailability({
        reservationPeriod: { checkIn: startDate, checkOut: endDate },
      })
    );
  }, [dispatch, startDate, endDate]);

  const handleOutsideClick = () => {
    setIsOpen(!isOpen);
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    // Update both check-out and end date when changing the end date
    setEndDate(end);
    dispatch(
      addTravelAvailability({
        reservationPeriod: { checkIn: start, checkOut: end },
      })
    );
  };

  return (
    <section>
      <div className="relative">
        <button
          className="flex flex-row gap-x-2 items-center border border-primary px-2.5 py-1.5 rounded-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <MdDateRange className="text-xl" />
          <span className="flex flex-row gap-x-1 items-center text-sm">
            {travelAvailability?.reservationPeriod?.checkIn &&
            travelAvailability?.reservationPeriod?.checkOut ? (
              <>
                {startDate?.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })}{" "}
                -
                {endDate?.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })}
              </>
            ) : (
              <>
                Durational Date
                <BiChevronDown />
              </>
            )}
          </span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 z-50 w-40">
            <OutsideClick
              onOutsideClick={handleOutsideClick}
              className="flex flex-col gap-y-2 w-full bg-secondary px-2.5 py-2 rounded shadow"
            >
              <label
                htmlFor="startDate"
                className="flex-1 flex flex-col gap-y-1 text-xs"
              >
                Start Date
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  className="flex-1 rounded-secondary !py-0.5 text-xs"
                  value={startDate.toISOString().split("T")[0]}
                  onChange={(e) => setStartDate(new Date(e.target.value))}
                />
              </label>
              <label
                htmlFor="endDate"
                className="flex-1 flex flex-col gap-y-1 text-xs"
              >
                End Date
                <input
                  type="date"
                  name="endDate"
                  id="endDate"
                  className="flex-1 rounded-secondary !py-0.5 text-xs"
                  value={endDate.toISOString().split("T")[0]}
                  onChange={(e) => setEndDate(new Date(e.target.value))}
                />
              </label>
            </OutsideClick>
          </div>
        )}
      </div>
    </section>
  );
};

export default TravelDate;
