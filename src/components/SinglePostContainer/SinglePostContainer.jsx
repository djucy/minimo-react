import s from './SinglePostContainer.module.css';

export default function SinglePostContainer({ children }) {
  return <div className={s.singlepost_container}>{children}</div>;
}
