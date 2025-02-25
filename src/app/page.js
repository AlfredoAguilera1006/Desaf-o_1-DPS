import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PlanoRestaurante from '../components/PlanoRestaurante';

export default function Home() {
  return (
    <div>
      <PlanoRestaurante />
    </div>
  );
}