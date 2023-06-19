import styles from '../../styles/About/SubHeader.module.css';

export default function AboutHeader() {
  return (
    <>
    <section className={styles.Header2}>
        <div className="container">
            <div className="row">
                <div className="col-sm-1 mt-3">
                    <p>We aim to meet the diverse needs of modern businesses</p>
                </div>
                <div className="col-6 offset-sm-1">
                    <h1 data-scroll data-scroll-direction="horizontal" data-scroll-speed="-6">Redefining Workspace Solutions</h1>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}