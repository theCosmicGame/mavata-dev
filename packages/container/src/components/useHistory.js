export default function useHistory() {
  const navigate = useNavigate();
  const location = useLocation();

  const listen = (locationListener) => {
    console.log(locationListener.pathname)
  }

  return {
    push: navigate,
    go: navigate,
    goBack: () => navigate(-1),
    goForward: () => navigate(1),
    listen,
    location,
  };
}
