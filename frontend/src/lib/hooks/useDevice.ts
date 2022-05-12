import { useMediaQuery } from "react-responsive";

export function useDevice() {
  const isMobile = useMediaQuery({ maxWidth: 728 });
  const isDesktop = useMediaQuery({ minWidth: 728 });

  return { isMobile, isDesktop };
}
