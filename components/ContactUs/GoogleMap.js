import styles from '../../styles/ContactUs/GoogleMap.module.css';

export default function GoogleMap(props) {
  return (
    <>
    <section className={styles.GoogleMap + ' default-pb default-pt position-relative'}>
        <div className="container" dangerouslySetInnerHTML={{ __html: props.mapCode }}>
        </div>
    </section>
    </>
  );
}