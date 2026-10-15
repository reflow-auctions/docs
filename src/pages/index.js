import { Redirect } from '@docusaurus/router';

// Mantle sends "/" to the Welcome page; keep that behavior.
export default function Home() {
  return <Redirect to="/quick-start/welcome" />;
}
