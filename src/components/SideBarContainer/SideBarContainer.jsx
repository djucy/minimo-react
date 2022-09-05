import s from './SideBarContainer.module.css';
export default function SideBarContainer({ children }) {
  return <div className={s.container}>{children}</div>;
}
