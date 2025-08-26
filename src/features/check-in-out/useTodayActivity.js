import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodayActivity() {
  const {
    data: activities,
    isLoading: isAcitivitesLoading,
    error: activitiesError,
  } = useQuery({
    queryKey: ["today-activities"],
    queryFn: getStaysTodayActivity,
  });

  return {
    activities,
    isAcitivitesLoading,
    activitiesError,
  };
}
