import {
  useNavigate,
  useLocation,
  NavigateOptions as ReactRouterDomNavOptions,
  Location as ReactRouterDomLocation,
} from "@/wrappers/navigation";

interface NavigateOptions extends ReactRouterDomNavOptions {
  useFrom?: boolean;
}

interface Location extends ReactRouterDomLocation {}

interface NavigationData {
  navigateTo: (to: string, options?: NavigateOptions) => void;
  location: Location;
}

export const useNavigation = (): NavigationData => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromState = (location.state as any)?.from?.pathname as string;

  const navigateTo = (to: string, options?: NavigateOptions) => {
    const targetRoute = options?.useFrom ? fromState ?? to : to;
    navigate(targetRoute, { state: options?.state, replace: options?.replace });
  };

  return { navigateTo, location };
};
