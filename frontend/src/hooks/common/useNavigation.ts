import {
  useNavigate,
  useLocation,
  NavigateOptions as ReactRouterDomNavOptions,
  Location as ReactRouterDomLocation,
} from "react-router-dom";

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
    const { replace, state, useFrom = false } = options!;

    const targetRoute = useFrom ? fromState ?? to : to;
    navigate(targetRoute, { state, replace });
  };

  return { navigateTo, location };
};
